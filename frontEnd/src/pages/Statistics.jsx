import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import styles from '../styles/Statistics.module.css';

export default function Users_Admin({ username }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userExercises, setUserExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:3031/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);

  const handleViewStatistics = (user) => {
    setLoading(true);
    setSelectedUser(user);
    Axios.get(`http://localhost:3031/admin/user_exercises/${user.id}`)
      .then((response) => {
        setUserExercises(response.data);
        setShowModal(true);
      })
      .catch((error) =>
        console.error('Error al obtener ejercicios del usuario:', error)
      )
      .finally(() => setLoading(false));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setUserExercises([]);
  };

  return (
    <>
      {/* ─── Navbar — sin tocar la lógica ─── */}
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.titleText}>Estadísticas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              <Link to="/main">Inicio</Link>
              <Link to="/users">Usuarios</Link>
              <Link to="/statistics">Estadísticas</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ─── Contenido principal ─── */}
      <div className={styles.pageWrapper}>
        <h1 className={styles.pageTitle}>Panel de Estadísticas</h1>
        <p className={styles.pageSubtitle}>
          Selecciona un usuario para ver el detalle de sus ejercicios y resultados.
        </p>

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
                      <span className={styles.username}>{user.username}</span>
                    </div>
                  </td>
                  <td>
                    <Button
                      variant="info"
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
      </div>

      {/* ─── Modal de detalles ─── */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" fullscreen={true}>
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
                } catch (e) {
                  console.error('Error al parsear resultados', e);
                }

                return (
                  <Accordion.Item
                    eventKey={index.toString()}
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
                      {parsedResults.length > 0 ? (
                        parsedResults.map((result, rIndex) => (
                          <div key={rIndex} className={styles.resultRow}>
                            <p className={styles.resultQuestion}>
                              {rIndex + 1}. {result.question}
                            </p>
                            <div className={styles.resultMeta}>
                              <span>
                                <strong>Respuesta: </strong>
                                <span className={result.isCorrect ? styles.correctText : styles.incorrectText}>
                                  {result.userAnswer || 'Sin responder'}
                                </span>
                              </span>
                              {!result.isCorrect && (
                                <span>
                                  <strong>Correcta: </strong>
                                  <span className={styles.correctText}>
                                    {result.correctAnswer}
                                  </span>
                                </span>
                              )}
                              <span className={result.isCorrect ? styles.badgeCorrect : styles.badgeIncorrect}>
                                {result.isCorrect ? 'Correcta ✔' : 'Incorrecta ✘'}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted">No hay detalles disponibles.</p>
                      )}

                      <p className={styles.scoreDisplay}>
                        Puntaje total: {exercise.score} pts
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" style={{ borderRadius: '30px', padding: '8px 24px' }} onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
