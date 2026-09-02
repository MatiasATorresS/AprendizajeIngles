import { Badge } from 'react-bootstrap';
import styles from './ExerciseResults.module.css';

/**
 * Lista reutilizable de resultados de ejercicios.
 * shape de cada resultado: { question, userAnswer, correctAnswer, isCorrect }
 */
export default function ExerciseResults({ title = 'Resultados', results = [], score = 0, showScore = true, emptyMessage = 'No hay detalles disponibles.' }) {
  if (!results.length) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {results.map((result, index) => (
        <article key={index} className={styles.row}>
          <p className={styles.question}>
            <span className={styles.questionNumber}>{index + 1}.</span> {result.question}
          </p>
          <div className={styles.meta}>
            <p className={styles.answer}>
              <span className={styles.label}>Tu respuesta:</span>{' '}
              <span className={result.isCorrect ? styles.correctText : styles.incorrectText}>
                {result.userAnswer || 'Sin responder'}
              </span>
            </p>
            {!result.isCorrect && result.correctAnswer && (
              <p className={styles.answer}>
                <span className={styles.label}>Respuesta correcta:</span>{' '}
                <span className={styles.correctText}>{result.correctAnswer}</span>
              </p>
            )}
            <Badge bg={result.isCorrect ? 'success' : 'danger'} className={styles.badge}>
              {result.isCorrect ? 'Correcta ✔' : 'Incorrecta ✘'}
            </Badge>
          </div>
        </article>
      ))}
      {showScore && (
        <p className={styles.score} aria-live="polite">
          Puntaje total: <strong>{score} pts</strong>
        </p>
      )}
    </div>
  );
}