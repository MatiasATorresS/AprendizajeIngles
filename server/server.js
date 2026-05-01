require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // Permite todas las peticiones (Ideal para Vercel)
      callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: 'userId',
    secret: 'userSecret',
    resave: false,
    saveUninitialized: true, // Guardar incluso si no se ha modificado
    cookie: { httpOnly: true }, // Cookie no caduca al cerrar el navegador
  })
);

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: true
  }
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error registering user' });
    } else {
      db.query(
        'INSERT INTO login (username, email, password) VALUES (?, ?, ?)',
        [username, email, hash],
        (err, result) => {
          if (err) {
            console.error('Error registering user:', err);
            res.status(500).send({ message: 'Error registering user' });
          } else {
            console.log('User registered successfully');
            res.status(200).send({ message: 'User registered successfully' });
          }
        }
      );
    }
  });
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM login WHERE email = ?', [email], (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send({ message: 'Error logging in' });
    } else if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          console.log('User logged in successfully');
          res.status(200).send(result);
        } else {
          console.log('Wrong email/password');
          res.status(401).send({ message: 'Wrong email/password' });
        }
      });
    } else {
      console.log('User does not exist');
      res.status(401).send({ message: 'User does not exist' });
    }
  });
});

app.get('/logout', (req, res) => {
  // Eliminar la cookie de sesión
  res.clearCookie('userId'); // 'userId' es el nombre de la cookie
  req.session.destroy(); //  destruir la sesión si estás usando express-session

  res.json({ message: 'Logout successful' });
  console.log('Logout successful');
});

app.get('/users', (req, res) => {
  // Realiza una consulta a la base de datos para obtener la lista de usuarios
  db.query('SELECT * FROM login', (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send({ message: 'Error fetching users' });
    } else {
      res.status(200).json(result);
    }
  });
});

const port = 3031;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Materia -Contenido
// Ruta para obtener todas las unidades de inglés
app.get('/unidades_ingles', (req, res) => {
  db.query('SELECT * FROM unidades_ingles', (err, unidadesResult) => {
    if (err) {
      console.error('Error fetching English units:', err);
      res.status(500).send({ message: 'Error fetching English units' });
    } else {
      //  unidades de inglés
      res.status(200).json({ unidades: unidadesResult });
    }
  });
});

// Ruta para obtener todas las materias de inglés junto con sus unidades correspondientes
app.get('/materias_ingles', (req, res) => {
  // Realiza una consulta SQL JOIN para obtener materias junto con sus unidades
  db.query(
    'SELECT materias.*, unidades.nombre AS unidad_nombre FROM materias_ingles materias JOIN unidades_ingles unidades ON materias.unidad_id = unidades.id',
    (err, materiasResult) => {
      if (err) {
        console.error('Error fetching English materials:', err);
        res.status(500).send({ message: 'Error fetching English materials' });
      } else {
        // materias de inglés con sus unidades correspondientes
        res.status(200).json({ materias: materiasResult });
      }
    }
  );
});

// Ruta para obtener una materia de inglés por su ID
app.get('/materias_ingles/:id', (req, res) => {
  const materiaId = req.params.id; // Obtiene el ID de la materia desde los parámetros de la URL

  //consulta SQL para obtener la materia por su ID
  db.query(
    'SELECT * FROM materias_ingles WHERE id = ?',
    [materiaId],
    (err, materiaResult) => {
      if (err) {
        console.error('Error fetching English material:', err);
        res.status(500).send({ message: 'Error fetching English material' });
      } else if (materiaResult.length === 0) {
        // Si no se encuentra ninguna materia con el ID proporcionado, envía una respuesta de error
        res.status(404).send({ message: 'Material not found' });
      } else {
        // Si se encuentra la materia, envía la información de la misma como respuesta
        res.status(200).json({ materia: materiaResult[0] });
      }
    }
  );
});

//Ruta para guardar los resultados
app.post('/guardar-resultados', (req, res) => {
  const userId = req.session.user[0].id;
  const { subject, difficulty, questions, userAnswers, results, newScore } =
    req.body;
  console.log('User ID:', userId);

  const userAnswersJSON = JSON.stringify(userAnswers);
  const resultsJSON = JSON.stringify(results);
  const questionsJSON = JSON.stringify(questions);

  db.query(
    'INSERT INTO user_exercises (user_id, subject, difficulty, questions, user_answers, results, score) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      userId,
      subject,
      difficulty,
      questionsJSON,
      userAnswersJSON,
      resultsJSON,
      newScore,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al guardar los resultados:', err);
        res.status(500).send({ message: 'Error al guardar los resultados' });
      } else {
        console.log('Resultados guardados exitosamente');
        res.status(200).send({ message: 'Resultados guardados exitosamente' });
      }
    }
  );
});

// Ruta para obtener los ejercicios del usuario
app.get('/user_exercises', (req, res) => {
  if (req.session.user) {
    const userId = req.session.user[0].id;

    db.query(
      'SELECT * FROM user_exercises WHERE user_id = ?',
      [userId],
      (err, result) => {
        if (err) {
          console.error('Error fetching user exercises:', err);
          res.status(500).send({ message: 'Error fetching user exercises' });
        } else {
          res.status(200).json(result);
        }
      }
    );
  } else {
    res.status(401).send({ message: 'Not logged in' });
  }
});

// Ruta para obtener los ejercicios del usuario por ID
app.get('/admin/user_exercises/:userId', (req, res) => {
  const userId = req.params.userId;

  db.query(
    'SELECT * FROM user_exercises WHERE user_id = ?',
    [userId],
    (err, result) => {
      if (err) {
        console.error('Error fetching user exercises:', err);
        res.status(500).send({ message: 'Error fetching user exercises' });
      } else {
        res.status(200).json(result);
      }
    }
  );
});

/*
//ChatGPT
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Clave de API removida por seguridad
});

//Version funcional con gpt
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    //  mensajes del cliente desde la solicitud
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'assistant',
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(response.choices[0].message.content);
  } catch (err) {
    res.status(500).send(err);
  }
});
*/

// Version funcional con OpenRouter
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    // Ya que server.js usa 'require', utilizamos 'import()' dinámico para cargar el SDK
    const { OpenRouter } = await import("@openrouter/sdk");

    const openrouter = new OpenRouter({
      // ¡Asegúrate de NO poner los símbolos < y > en tu clave!
      apiKey: process.env.OPENROUTER_API_KEY
    });

    const stream = await openrouter.chat.send({
      chatRequest: {
        model: "openai/gpt-3.5-turbo", // Ajuste al modelo original que usabas, también válido en OpenRouter
        messages: [
          {
            "role": "user",
            "content": prompt
          }
        ],
        stream: true
      }
    });

    // Configuramos los headers para enviar las partes a la vez
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(content);
      }
    }
    
    res.end(); // Finalizamos la respuesta al cliente
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

/*
Version con davinci
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    // Obtén los mensajes del cliente desde la solicitud
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(response.choices[0].text);
  } catch (err) {
    res.status(500).send(err);
  }
});*/
