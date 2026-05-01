import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../styles/Exercises.module.css';

const Exercises = () => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [score, setScore] = useState(0);

  Axios.defaults.withCredentials = true;

  const handleGenerateQuestions = async () => {
    if (subject && difficulty) {
      setIsLoading(true);
      resetQuestions();
      //const prompt = `Generate a JSON in an Array called exercises with 2 exercises/questions/conceptual questions from the ${subject} with the following difficulty: ${difficulty} , with 4 alternatives and their correct answer. Questions must be in the question field. Alternatives must be in the alternatives field. The correct answer is specified with the "correctAnswer" field in each question. Always include the difficulty field. These exercises vary depending on the difficulty mentioned so that people can improve their use of English. If the difficulty is easy, the question asked must have some clue.`;

      //const prompt = `Create an Array named "exercises" containing 2 well-formulated exercises or conceptual questions related to ${subject}. These questions should be of ${difficulty} difficulty, each having 4 alternatives, where 3 must be incorrect and 1 should be the correct answer. Please structure the questions in the "question" field and the answer options in the "alternatives" field. Ensure to specify the correct answer using the "correctAnswer" field for each question. Additionally, always include the "difficulty" field. If the difficulty is set to "easy", make sure to provide a helpful clue in the question. If the difficulty is set to "medium", ensure that the questions are moderately challenging, requiring reasonable thought but not necessarily a clue. If the difficulty is set to "hard", make the questions challenging, possibly requiring deeper thought or creative problem-solving. Avoid providing clues for these questions.`;
      const prompt = `Create a valid JSON format object containing an Array, for a web, called exercises that contains 8 well-formulated exercises or conceptual questions based on the topic of ${subject} for students who are studying English in the first year of secondary education in Chile with a difficulty level ${difficulty}. If the difficulty is easy, the questions should be simpler to understand and also have some help on it. If the difficulty is difficult, the questions should be longer/more complex/challenging for the user. With 4 different alternatives, where 3 of 4 alternatives are incorrect, that is, they are not related to the topic and 1 of them is the correct answer, it is important that the alternatives always be of ${difficulty} difficulty. Questions must be in the question field. Alternatives must be in the alternatives field where 3 are incorrect and 1 is correct. The correct answer always must be 1 of the 4 alternatives presented in the alternatives field, written in words, is specified with the "correctAnswer" field in each question. The difficulty must go in the difficulty field like this: {difficulty: '${difficulty}'}.
      Here you have the JSON format of the exercises:
      {
    "exercises": [
        {
            "question": "",
            "alternatives": [
                "",
                "",
                "",
                ""
            ],
            "correctAnswer": "",
            "difficulty": ""
        },
    ]
}      
      `;

      console.log('Prompt:', prompt); // Agrega este mensaje de registro

      try {
        const response = await Axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/chat`, {
          prompt,
        });

        let data = response.data;

        // Como ahora mandamos un stream de texto, aseguramos que se convierta a un objeto JSON
        // y eliminamos las posibles comillas invertidas de markdown (```json ... ```)
        if (typeof data === 'string') {
          const cleanText = data.replace(/```json/g, '').replace(/```/g, '').trim();
          data = JSON.parse(cleanText);
        }

        console.log('Response from server:', data);

        const generatedQuestions = data.exercises;
        if (
          Array.isArray(generatedQuestions) &&
          generatedQuestions.length > 0
        ) {
          setQuestions(generatedQuestions);

          const initialUserAnswers = new Array(generatedQuestions.length).fill(
            ''
          );
          setUserAnswers(initialUserAnswers);
          setQuestionsGenerated(true);
        } else {
          setError(
            'No se encontraron preguntas válidas para esta materia y dificultad.'
          );
        }
      } catch (error) {
        console.error(error);
        setError(
          'Hubo un error al generar las preguntas. Por favor, inténtalo de nuevo.'
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAnswerQuestion = (index, answer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[index] = answer;
    setUserAnswers(updatedUserAnswers);
    console.log('User Answers:', updatedUserAnswers);
    const answered = updatedUserAnswers.every((ans) => ans !== '');
    setAllQuestionsAnswered(answered);
  };

  const handleCheckAnswers = async () => {
    console.log('Check Answers Clicked');
    let newScore = 0;
    const results = questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = question.correctAnswer;
      const isCorrect = userAnswer === correctAnswer;

      console.log('Question:', question.question);
      console.log('User Answer:', userAnswer);
      console.log('Correct Answer:', correctAnswer);
      console.log('Is Correct:', isCorrect);

      let questionScore = 0;
      if (question.difficulty === 'easy') {
        questionScore = isCorrect ? 1 : 0;
      } else if (question.difficulty === 'medium') {
        questionScore = isCorrect ? 2 : 0;
      } else if (question.difficulty === 'hard') {
        questionScore = isCorrect ? 3 : 0;
      }

      newScore += questionScore;

      return {
        question: question.question,
        userAnswer,
        correctAnswer,
        isCorrect,
      };
    });
    setScore(newScore);
    console.log('Results:', results);
    console.log('Puntaje: ', newScore);
    setResults(results);

    //resultados
    try {
      // Envía los resultados al servidor
      const response = await Axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/guardar-resultados`,
        {
          // Agrega el ID del usuario aquí
          subject,
          difficulty,
          questions,
          userAnswers,
          results,
          newScore,
        }
      );

      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error(error);
    }

    setResultsShown(true);
  };

  const resetQuestions = () => {
    setQuestions([]);
    setUserAnswers([]);
    setResults([]);
    setError(null);
  };

  const handleRestartExercise = () => {
    window.location.reload();
  };

  const renderGeneratedQuestions = () => {
    return (
      <div className={styles.generatedQuestions}>
        <h2 className={styles.questionsHeader}>
          Preguntas — <span>{subject}</span> ({difficulty})
        </h2>
        <ul>
          {questions.map((question, index) => (
            <div key={index} className={styles.question}>
              <p className={styles.questionText}>
                {index + 1}. {question.question}
              </p>
              {question.alternatives.map((alternative, alternativeIndex) => (
                <div key={alternativeIndex}>
                  <label className={styles.alternativeLabel}>
                    <input
                      type="radio"
                      value={alternative}
                      checked={userAnswers[index] === alternative}
                      onChange={() => handleAnswerQuestion(index, alternative)}
                    />
                    {alternative}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </ul>
        <Button
          variant="primary"
          type="button"
          onClick={handleCheckAnswers}
          disabled={!allQuestionsAnswered || resultsShown}
          className={styles.checkAnswersButton}>
          Comprobar Respuestas
        </Button>
        {results.length > 0 && renderResults()}
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div className={styles.resultsContainer}>
        <h2 className={styles.resultsHeader}>Resultados</h2>
        {results.map((result, index) => (
          <div key={index} className={styles.result}>
            <p><strong>Pregunta:</strong> {result.question}</p>
            <p>
              <strong>Tu respuesta: </strong>
              <span className={result.isCorrect ? styles.correctAnswer : styles.incorrectAnswer}>
                {result.userAnswer}
              </span>
            </p>
            {!result.isCorrect && (
              <p><strong>Respuesta correcta: </strong>
                <span className={styles.correctAnswer}>{result.correctAnswer}</span>
              </p>
            )}
          </div>
        ))}
        <p className={styles.scoreDisplay}>Puntaje total: {score} pts</p>
        <Button
          variant="primary"
          type="button"
          onClick={handleRestartExercise}
          className={styles.restartButton}>
          Iniciar Nuevo Ejercicio
        </Button>
      </div>
    );
  };

  return (
    <div>
      {/* ─── Navbar — sin tocar ─── */}
      <Navbar expand="lg" className={styles.customNavbar}>
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>
            Ejercicios de Aprendizaje de Inglés
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLink}`}>
              <Link to="/main">Inicio</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ─── Contenido principal ─── */}
      <div className={styles.pageWrapper}>
        <h1 className={styles.title}>Generador de Preguntas</h1>
        <p className={styles.subtitle}>
          Selecciona una materia y nivel de dificultad para generar ejercicios personalizados.
        </p>

        {/* Tarjeta del formulario */}
        <div className={styles.formCard}>
          <Form>
            <Form.Group controlId="subject">
              <Form.Label className={styles.formLabel}>Materia</Form.Label>
              <Form.Control
                as="select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={styles.formControl}>
                <option value="">Selecciona la materia</option>
                <option value="Simple Past">Simple Past</option>
                <option value="Past Continuous">Past Continuous</option>
                <option value="Present Perfect">Present Perfect</option>
                <option value="Past Simple Passive">Past Simple Passive</option>
                <option value="Present Simple">Present Simple</option>
                <option value="Present Simple Passive">Present Simple Passive</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="difficulty">
              <Form.Label className={styles.formLabel}>Dificultad</Form.Label>
              <Form.Control
                as="select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className={styles.formControl}>
                <option value="">Selecciona la dificultad</option>
                <option value="easy">Fácil</option>
                <option value="medium">Medio</option>
                <option value="hard">Difícil</option>
              </Form.Control>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={handleGenerateQuestions}
              disabled={isLoading || questionsGenerated}
              className={styles.generateButton}>
              {isLoading ? 'Generando...' : 'Generar Preguntas'}
            </Button>
          </Form>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        {/* Preguntas generadas */}
        {questions.length > 0 && renderGeneratedQuestions()}
      </div>
    </div>
  );
};

export default Exercises;
