import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Accordion, Badge, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/UserStat.module.css';

export default function UserStat() {
  const [userExercises, setUserExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserExercises() {
      try {
        const response = await Axios.get(
          'http://localhost:3031/user_exercises'
        );
        setUserExercises(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener ejercicios del usuario:', error);
      }
    }

    fetchUserExercises();
  }, []);

  return (
    <div className={styles.userStatContainer}>
      <Navbar expand="lg" className={styles.customNavbar}>
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>
            Materiales de Aprendizaje de Inglés
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLink}`}>
              <Link to="/main" className={styles.link}>
                Inicio
              </Link>
              {/* Agregar más elementos de menú aquí */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className={styles.title}>Estadísticas del Usuario</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className={styles.tableContainer}>
            {userExercises.length === 0 ? (
              <p>No tienes ejercicios guardados aún.</p>
            ) : (
              <Accordion>
                {userExercises.map((exercise, index) => {
                  let parsedResults = [];
                  try {
                    // El campo 'results' ya contiene la combinación de pregunta, respuesta y si es correcta
                    parsedResults = JSON.parse(exercise.results);
                  } catch (e) {
                    console.error("Error al parsear resultados", e);
                  }

                  return (
                    <Accordion.Item eventKey={index.toString()} key={exercise.id}>
                      <Accordion.Header>
                        <strong>{exercise.subject}</strong> &nbsp;(Nivel: {exercise.difficulty}) &nbsp;
                        <Badge bg="primary" className="ms-3">Puntuación: {exercise.score}</Badge>
                      </Accordion.Header>
                      <Accordion.Body>
                        {parsedResults.length > 0 ? (
                          parsedResults.map((result, rIndex) => (
                            <div key={rIndex} style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '15px', marginBottom: '15px' }}>
                              <p style={{ margin: '0 0 8px 0' }}><strong>Pregunta {rIndex + 1}:</strong> {result.question}</p>
                              
                              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <p style={{ margin: 0 }}>
                                  <strong>Tu respuesta:</strong>{' '}
                                  <span style={{ color: result.isCorrect ? '#198754' : '#dc3545', fontWeight: 'bold' }}>
                                    {result.userAnswer || 'Sin responder'}
                                  </span>
                                </p>
                                
                                {!result.isCorrect && (
                                  <p style={{ margin: 0 }}>
                                    <strong>Estaba buscando:</strong>{' '}
                                    <span style={{ color: '#198754', fontWeight: 'bold' }}>
                                      {result.correctAnswer}
                                    </span>
                                  </p>
                                )}
                                
                                <Badge bg={result.isCorrect ? 'success' : 'danger'}>
                                  {result.isCorrect ? 'Correcta ✔' : 'Incorrecta ✘'}
                                </Badge>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-muted text-center pt-3">No hay detalles disponibles para este ejercicio.</p>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
