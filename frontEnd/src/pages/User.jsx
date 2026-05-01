import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import styles from '../styles/User.module.css';

export default function User({ username }) {
  const handleLogout = async () => {
    try {
      await Axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/logout`);
      // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  };

  return (
    <div className={styles.userContainer}>
      <Navbar  expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.brand}>
            Centro de Aprendizaje de Inglés
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.userNav}>
              <Navbar.Text className={`me-3 ${styles.welcomeText}`}>
                ¡Bienvenido, {username}!
              </Navbar.Text>
              <Link
                to="/login"
                onClick={handleLogout}
                className={styles.logoutLink}>
                <Button variant="outline-danger">Cerrar Sesión</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className={`mt-4 ${styles.contentContainer}`}>
        <h1 className={styles.heading}>
          ¡Comienza tu Viaje de Aprendizaje del Inglés, {username}!
        </h1>
        <p className={styles.paragraph}>
          Explora nuestros materiales de aprendizaje de inglés y practica
          ejercicios para mejorar tus habilidades en el idioma.
        </p>
      </Container>

      <Container className={`mb-3 ${styles.cardContainer}`}>
        {/* Tarjeta "Ver Materiales" */}
        <Card className={`${styles.card} ${styles.cardMaterials}`}>
          <div className={styles.cardBody}>
            <div className={`${styles.cardIcon} ${styles.iconMaterials}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.156 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.596 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Ver Materiales</h3>
            <p className={styles.cardText}>
              Explora nuestra colección de materiales de aprendizaje de inglés para estudiar.
            </p>
            <Link to="/materials" className={styles.link}>
              <Button variant="primary" className={styles.cardButton}>Ir a Materiales</Button>
            </Link>
          </div>
        </Card>

        {/* Tarjeta "Hacer Ejercicios" */}
        <Card className={`${styles.card} ${styles.cardExercises}`}>
          <div className={styles.cardBody}>
            <div className={`${styles.cardIcon} ${styles.iconExercises}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Hacer Ejercicios</h3>
            <p className={styles.cardText}>
              Practica tus habilidades respondiendo a nuestros ejercicios interactivos de inglés.
            </p>
            <Link to="/exercises" className={styles.link}>
              <Button variant="success" className={styles.cardButton}>Ir a Ejercicios</Button>
            </Link>
          </div>
        </Card>

        {/* Tarjeta "Ver tus estadísticas" */}
        <Card className={`${styles.card} ${styles.cardStats}`}>
          <div className={styles.cardBody}>
            <div className={`${styles.cardIcon} ${styles.iconStats}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Tus Estadísticas</h3>
            <p className={styles.cardText}>
              Consulta tus resultados y mira cómo ha sido tu progreso en tu aprendizaje.
            </p>
            <Link to="/user-statistics" className={styles.link}>
              <Button variant="info" className={styles.cardButton}>Ver Estadísticas</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
