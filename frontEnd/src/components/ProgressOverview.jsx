import { useMemo } from 'react';
import { summarizeProgress } from '../utils/progress';
import styles from './ProgressOverview.module.css';

function formatDate(value) {
  if (!value) return 'Sin fecha';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Sin fecha' :
    new Intl.DateTimeFormat('es-CL', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

export default function ProgressOverview({ exercises }) {
  const progress = useMemo(() => summarizeProgress(exercises), [exercises]);
  if (!exercises.length) return null;

  return (
    <section className={styles.overview} aria-labelledby="progress-heading">
      <h2 id="progress-heading">Progreso de práctica</h2>
      <p className={styles.intro}>
        {progress.exercises} ejercicios · {progress.correct} de {progress.answers} respuestas correctas
        {progress.percent !== null ? ` · ${progress.percent}% de aciertos` : ''}
      </p>
      <div className={styles.grid}>
        {progress.subjects.map((subject) => (
          <article className={styles.card} key={subject.subject}>
            <h3>{subject.subject}</h3>
            <p className={styles.metric}>
              {subject.exercises} ejercicios · {subject.percent === null ? 'Sin respuestas válidas' : `${subject.percent}% de aciertos`}
            </p>
            {subject.percent !== null && (
              <div className={styles.track} role="progressbar" aria-label={`Aciertos en ${subject.subject}`}
                aria-valuenow={subject.percent} aria-valuemin="0" aria-valuemax="100">
                <span style={{ width: `${subject.percent}%` }} />
              </div>
            )}
            <h4>Evolución por intento</h4>
            {subject.attempts.length ? (
              <ol className={styles.attempts}>
                {subject.attempts.slice(-6).map((attempt, index) => (
                  <li key={attempt.id ?? index}>
                    <time dateTime={attempt.date || undefined}>{formatDate(attempt.date)}</time>
                    <span className={styles.attemptTrack} aria-hidden="true">
                      <span style={{ width: `${attempt.percent}%` }} />
                    </span>
                    <strong>{attempt.percent}%</strong>
                  </li>
                ))}
              </ol>
            ) : <p className={styles.empty}>No hay respuestas válidas para mostrar.</p>}
            <h4>Errores frecuentes</h4>
            {subject.commonErrors.length ? (
              <ul className={styles.errors}>
                {subject.commonErrors.slice(0, 3).map(({ category, label, count }) => (
                  <li key={category}>{label}: {count}</li>
                ))}
              </ul>
            ) : <p className={styles.empty}>Aún no hay errores con categoría.</p>}
          </article>
        ))}
      </div>
      <p className={styles.note}>
        Las categorías de los ejercicios nuevos son sugeridas por IA. Los ejercicios antiguos cuentan en los porcentajes, aunque sus errores pueden no tener categoría. Estas cifras describen práctica y no sustituyen las pruebas de la tesis.
      </p>
    </section>
  );
}
