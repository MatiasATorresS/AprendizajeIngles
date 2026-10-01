const authService = require('../services/auth.service');
const { validateRegistration } = require('../services/registration-validation.service');

function publicUser(user) {
  return { id: user.id, username: user.username, email: user.email, role: user.role };
}

function register(req, res) {
  const validation = validateRegistration(req.body);
  if (validation.error) return res.status(400).send({ message: validation.error });

  authService.register(validation.value, (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).send({ message: 'El correo ya está registrado.' });
      }
      console.error('Error registering user:', err);
      res.status(500).send({ message: 'Error registering user' });
      return;
    }
    console.log('User registered successfully');
    res.status(200).send({ message: 'User registered successfully' });
  });
}

function getLogin(req, res) {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user.map(publicUser) });
  } else {
    res.send({ loggedIn: false });
  }
}

function login(req, res) {
  const { email, password } = req.body || {};
  if (typeof email !== 'string' || typeof password !== 'string' ||
      email.length > 254 || password.length > 1024) {
    return res.status(400).send({ message: 'Datos de acceso inválidos.' });
  }

  authService.login(email.trim().toLowerCase(), password, (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send({ message: 'Error logging in' });
      return;
    }

    if (!result.user) {
      console.log('User does not exist');
      res.status(401).send({ message: 'User does not exist' });
      return;
    }

    if (!result.match) {
      console.log('Wrong email/password');
      res.status(401).send({ message: 'Wrong email/password' });
      return;
    }

    req.session.regenerate((sessionError) => {
      if (sessionError) return res.status(500).send({ message: 'Error logging in' });
      req.session.user = result.user.map(publicUser);
      res.status(200).send(req.session.user);
    });
    console.log('User logged in successfully');
  });
}

function logout(req, res) {
  res.clearCookie('userId');
  req.session.destroy();

  res.json({ message: 'Logout successful' });
  console.log('Logout successful');
}

module.exports = { register, getLogin, login, logout };
