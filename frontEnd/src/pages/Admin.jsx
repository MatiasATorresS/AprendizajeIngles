import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styles from '../styles/Admin.module.css';

export default function Admin({ username }) {
  Axios.defaults.withCredentials = true; // Configura withCredentials

  const handleLogout = async () => {
    try {
      await Axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/logout`);
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      window.location.replace('/login');
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  };

  return (
    <>
      {/* ─── Navbar — sin tocar la lógica ─── */}
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>
            Panel de Administración
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              <Link to="/main" className={styles.navLink}>
                Inicio
              </Link>
            </Nav>
            <Nav>
              <div className={`navbar-text ${styles.adminText} ${styles.logoutContainer}`}>
                Administrador: {username}
              </div>
              <Nav.Link onClick={handleLogout} className={styles.logoutLink}>
                Cerrar sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ─── Contenido principal ─── */}
      <div className={styles.pageWrapper}>
        <h1 className={styles.welcomeText}>Bienvenido, {username}</h1>
        <p className={styles.welcomeSubtitle}>
          Gestiona los usuarios y consulta las estadísticas generales del sistema.
        </p>

        <Container className={styles.cardContainer}>
          {/* Tarjeta Ver Usuarios */}
          <Card className={styles.navCard}>
            <div className={styles.cardBody}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002A.274.274 0 0 1 15 13H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Ver Usuarios</h3>
              <p className={styles.cardDescription}>
                Visualiza y gestiona los usuarios registrados en la plataforma.
              </p>
              <Link to="/users" className={styles.cardLink}>
                Ir a Usuarios →
              </Link>
            </div>
          </Card>

          {/* Tarjeta Ver Estadísticas */}
          <Card className={`${styles.navCard} ${styles.navCardStats}`}>
            <div className={styles.cardBody}>
              <div className={`${styles.cardIcon} ${styles.cardIconStats}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Ver Estadísticas</h3>
              <p className={styles.cardDescription}>
                Consulta datos estadísticos de los ejercicios realizados por los usuarios.
              </p>
              <Link to="/statistics" className={`${styles.cardLink} ${styles.cardLinkStats}`}>
                Ir a Estadísticas →
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}
