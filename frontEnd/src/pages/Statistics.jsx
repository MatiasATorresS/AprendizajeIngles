import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ContentNavbar from '../components/ContentNavbar';
import ExerciseResults from '../components/ExerciseResults';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Statistics.module.css';

export default function Statistics() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userExercises, setUserExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useDocumentMeta('Estadísticas · Aprendizaje de Inglés');

  useEffect(() => {
    const controller = new AbortController();
    api
      .get('/users', { signal: controller.signal })
      .then((response) => setUsers(response.data))
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          console.error('Error al obtener usuarios:', err);
          setError('No se pudo cargar la lista de usuarios.');
        }
      });
    return () => controller.abort();
  }, []);

  const handleViewStatistics = async (user) => {
    setLoading(true);
    setSelectedUser(user);
    setUserExercises([]);
    setLoadError(null);
    try {
      const response = await api.get(`/admin/user_exercises/${user.id}`);
      setUserExercises(response.data);
      setShowModal(true);
    } catch (err) {
      console.error('Error al obtener ejercicios del usuario:', err);
      setLoadError('No se pudieron cargar los ejercicios del usuario.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setUserExercises([]);
    setLoadError(null);
  };

  return (
    <>
      <ContentNavbar brand="Panel de Estadísticas">
            <Link to="/main">Inicio</Link>
            <Link to="/users">Usuarios</Link>
            <Link to="/statistics" aria-current="page">
              Estadísticas
            </Link>
          </ContentNavbar>

      <main id="main">
        <div className={styles.pageWrapper}>
          <h1 className={styles.pageTitle}>Panel de Estadísticas</h1>
          <p className={styles.pageSubtitle}>
            Selecciona un usuario para ver el detalle de sus ejercicios y
            resultados.
          </p>

          {error && <p className={styles.emptyState}>{error}</p>}

          {users.length > 0 && (
            <div className={styles.tableCard}>
              <Table className={styles.table}>
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className={styles.userCell}>
                          <div className={styles.avatar}>
                            {user.username?.charAt(0).toUpperCase()}
                          </div>
                          <span className={styles.username}>
                            {user.username}
                          </span>
                        </div>
                      </td>
                      <td>
                        <Button
                          variant="info"
                          type="button"
                          className={styles.statsButton}
                          onClick={() => handleViewStatistics(user)}>
                          Ver Estadísticas →
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </main>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="xl"
        fullscreen={true}>
        <Modal.Header closeButton>
          <div>
            <p className={styles.modalTitle}>
              Estadísticas de {selectedUser?.username}
            </p>
            <p className={styles.modalSubtitle}>
              {userExercises.length} ejercicio(s) realizados
            </p>
          </div>
        </Modal.Header>

        <Modal.Body>
          {loading ? (
            <div className={styles.emptyState}>
              <p>Cargando ejercicios...</p>
            </div>
          ) : loadError ? (
            <div className={styles.emptyState}>
              <p>{loadError}</p>
            </div>
          ) : userExercises.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Este usuario no ha realizado ejercicios aún.</p>
            </div>
          ) : (
            <Accordion>
              {userExercises.map((exercise, index) => {
                let parsedResults = [];
                try {
                  parsedResults = JSON.parse(exercise.results);
                } catch (err) {
                  console.error('Error al parsear resultados', err);
                }

                return (
                  <Accordion.Item
                    eventKey={String(index)}
                    key={exercise.id}
                    className={styles.exerciseItem}>
                    <Accordion.Header>
                      <strong>{exercise.subject}</strong>&nbsp;
                      (Nivel: {exercise.difficulty})&nbsp;
                      <Badge bg="info" className="ms-3">
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
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="outline-secondary"
            type="button"
            className="rounded-pill px-4 py-2"
            onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}