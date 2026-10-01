import { useState, useEffect } from 'react';
import { Container, Accordion, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ContentNavbar from '../components/ContentNavbar';
import ExerciseResults from '../components/ExerciseResults';
import ProgressOverview from '../components/ProgressOverview';
import { parseExerciseResults } from '../utils/progress';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/UserStat.module.css';

export default function UserStat() {
  const [userExercises, setUserExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useDocumentMeta('Tus Estadísticas · Aprendizaje de Inglés');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUserExercises() {
      try {
        const response = await api.get('/user_exercises', {
          signal: controller.signal,
        });
        setUserExercises(response.data);
        setLoading(false);
      } catch (err) {
        if (err.name === 'CanceledError') return;
        console.error('Error al obtener ejercicios del usuario:', err);
        setError('No se pudieron cargar tus estadísticas.');
        setLoading(false);
      }
    }

    fetchUserExercises();
    return () => controller.abort();
  }, []);

  return (
    <div className={styles.userStatContainer}>
      <ContentNavbar
        brand="Materiales de Aprendizaje de Inglés"
        right={<Link to="/main">Inicio</Link>}
      />

      <main id="main">
        <Container>
          <h1 className={styles.title}>Estadísticas del Usuario</h1>
          {loading ? (
            <p className="text-muted">Cargando...</p>
          ) : error ? (
            <p className="text-muted">{error}</p>
          ) : (
            <div className={styles.tableContainer}>
              {userExercises.length === 0 ? (
                <p className="text-muted">No tienes ejercicios guardados aún.</p>
              ) : (
                <>
                  <ProgressOverview exercises={userExercises} />
                  <h2 className="h4">Detalle de ejercicios</h2>
                  <Accordion>
                  {userExercises.map((exercise, index) => {
                    const parsedResults = parseExerciseResults(exercise.results);

                    return (
                      <Accordion.Item
                        eventKey={String(index)}
                        key={exercise.id}>
                        <Accordion.Header>
                          <strong>{exercise.subject}</strong> &nbsp;(Nivel:{' '}
                          {exercise.difficulty}) &nbsp;
                          <Badge bg="primary" className="ms-3">
                            Puntuación: {exercise.score}
                          </Badge>
                        </Accordion.Header>
                        <Accordion.Body>
                          <ExerciseResults
                            results={parsedResults}
                            score={exercise.score}
                            emptyMessage="No hay detalles disponibles para este ejercicio."
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                  </Accordion>
                </>
              )}
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
