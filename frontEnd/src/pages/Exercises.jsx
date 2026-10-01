import { useCallback, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import api from '../services/api';
import { Link } from 'react-router-dom';
import ContentNavbar from '../components/ContentNavbar';
import ExerciseResults from '../components/ExerciseResults';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Exercises.module.css';

const SUBJECTS = [
  'Simple Past',
  'Past Continuous',
  'Present Perfect',
  'Past Simple Passive',
  'Present Simple',
  'Present Simple Passive',
];

const DIFFICULTIES = [
  { value: 'easy', label: 'Fácil' },
  { value: 'medium', label: 'Medio' },
  { value: 'hard', label: 'Difícil' },
];

const Exercises = () => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [questionsGenerated, setQuestionsGenerated] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [score, setScore] = useState(0);

  useDocumentMeta('Generador de Ejercicios · Aprendizaje de Inglés');

  const canGenerate = subject && difficulty;

  const handleGenerateQuestions = useCallback(async () => {
    if (!canGenerate) return;
    setIsLoading(true);
    setQuestions([]);
    setUserAnswers({});
    setResults([]);
    setResultsShown(false);
    setError(null);

    try {
      const response = await api.post('/chat', {
        subject,
        difficulty,
      });

      let data = response.data;

      // El servidor puede devolver un stream de texto; lo convertimos en JSON
      if (typeof data === 'string') {
        const cleanText = data
          .replace(/```json/g, '')
          .replace(/```/g, '')
          .trim();
        data = JSON.parse(cleanText);
      }

      const generatedQuestions = data.exercises;
      if (Array.isArray(generatedQuestions) && generatedQuestions.length > 0) {
        setQuestions(generatedQuestions);
        setQuestionsGenerated(true);
      } else {
        setError(
          'No se encontraron preguntas válidas para esta materia y dificultad.'
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.status === 429
          ? err.response.data.message
          : 'Hubo un error al generar las preguntas. Por favor, inténtalo de nuevo.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [canGenerate, subject, difficulty]);

  const handleAnswerQuestion = useCallback(
    (index, answer) => {
      setUserAnswers((prev) => {
        const updated = { ...prev, [index]: answer };
        const answered =
          questions.length > 0 && questions.every((_, i) => updated[i]);
        setAllQuestionsAnswered(answered);
        return updated;
      });
    },
    [questions]
  );

  const handleCheckAnswers = useCallback(async () => {
    try {
      const response = await api.post('/guardar-resultados', { userAnswers });
      setScore(response.data.score);
      setResults(response.data.results);
      setResultsShown(true);
    } catch (err) {
      console.error(err);
      setError('No se pudieron guardar o calificar las respuestas. Inténtalo de nuevo.');
    }
  }, [userAnswers]);

  const restart = () => {
    window.location.reload();
  };

  const questionGroups = useMemo(() => {
    return questions.map((question, index) => {
      const groupId = `question-${index}`;
      return {
        groupId,
        question,
        index,
      };
    });
  }, [questions]);

  return (
    <div>
      <ContentNavbar
        brand="Ejercicios de Aprendizaje de Inglés"
        right={<Link to="/main">Inicio</Link>}
      />

      <main id="main">
        <div className={styles.pageWrapper}>
          <h1 className={`gradient-title ${styles.title}`}>Generador de Preguntas</h1>
          <p className={styles.subtitle}>
            Selecciona una materia y nivel de dificultad para generar ejercicios personalizados.
          </p>

          <div className={styles.formCard}>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group controlId="subject">
                <Form.Label className={styles.formLabel}>Materia</Form.Label>
                <Form.Control
                  as="select"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={styles.formControl}>
                  <option value="">Selecciona la materia</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
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
                  {DIFFICULTIES.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={handleGenerateQuestions}
                disabled={isLoading || questionsGenerated || !canGenerate}
                className={styles.generateButton}>
                {isLoading ? 'Generando...' : 'Generar Preguntas'}
              </Button>
            </Form>
          </div>

          {error && (
            <Alert variant="danger" role="alert">
              {error}
            </Alert>
          )}

          {questions.length > 0 && !resultsShown && (
            <div className={styles.generatedQuestions}>
              <h2 className={styles.questionsHeader}>
                Preguntas — <span>{subject}</span> ({difficulty})
              </h2>

              {questionGroups.map(({ groupId, question, index }) => (
                <fieldset key={groupId} className={styles.question}>
                  <legend className={styles.questionText}>
                    <span className={styles.questionNumber}>{index + 1}.</span>{' '}
                    {question.question}
                  </legend>
                  <div className={styles.alternatives}>
                    {question.alternatives.map((alternative) => (
                      <label key={alternative} className={styles.alternativeLabel}>
                        <input
                          type="radio"
                          name={groupId}
                          value={alternative}
                          checked={userAnswers[index] === alternative}
                          onChange={() => handleAnswerQuestion(index, alternative)}
                        />
                        <span>{alternative}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}

              <Button
                variant="primary"
                type="button"
                onClick={handleCheckAnswers}
                disabled={!allQuestionsAnswered || resultsShown}
                className={styles.checkAnswersButton}>
                Comprobar Respuestas
              </Button>
            </div>
          )}

          {resultsShown && (
            <div className={styles.resultsContainer}>
              <ExerciseResults results={results} score={score} />
              <Button
                variant="primary"
                type="button"
                onClick={restart}
                className={styles.restartButton}>
                Iniciar Nuevo Ejercicio
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Exercises;
