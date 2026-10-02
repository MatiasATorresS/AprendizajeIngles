import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import api from '../services/api';
import ContentNavbar from '../components/ContentNavbar';
import styles from '../styles/User.module.css';

const CARDS = [
  {
    to: '/materials',
    title: 'Ver Materiales',
    text: 'Explora nuestra colección de materiales de aprendizaje de inglés para estudiar.',
    buttonLabel: 'Ir a Materiales',
    tone: 'materials',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.156 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.596 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg>
    ),
  },
  {
    to: '/exercises',
    title: 'Hacer Ejercicios',
    text: 'Practica tus habilidades respondiendo a nuestros ejercicios interactivos de inglés.',
    buttonLabel: 'Ir a Ejercicios',
    tone: 'exercises',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
      </svg>
    ),
  },
  {
    to: '/user-statistics',
    title: 'Tus Estadísticas',
    text: 'Consulta tus resultados y mira cómo ha sido tu progreso en tu aprendizaje.',
    buttonLabel: 'Ver Estadísticas',
    tone: 'stats',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
      </svg>
    ),
  },
];

export default function User({ username }) {
  const handleLogout = async () => {
    try {
      await api.get('/logout');
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      window.location.replace('/login');
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
      window.location.replace('/login');
    }
  };

  return (
    <div className={styles.userContainer}>
      <ContentNavbar
        brand="Aprende Inglés"
        studentNav
        right={
          <>
            <span className={styles.welcomeText}>¡Bienvenido, {username}!</span>
            <Button
              variant="outline-light"
              type="button"
              className={styles.logoutButton}
              onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </>
        }
      />
      <main id="main">
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
          {CARDS.map((card) => (
            <Card key={card.to} className={`${styles.card} ${styles[`card${card.tone === 'materials' ? 'Materials' : card.tone === 'exercises' ? 'Exercises' : 'Stats'}`]}`}>
              <div className={styles.cardBody}>
                <div className={`${styles.cardIcon} ${styles[`icon${card.tone === 'materials' ? 'Materials' : card.tone === 'exercises' ? 'Exercises' : 'Stats'}`]}`}>
                  {card.icon}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
                <Link to={card.to} className={styles.link}>
                  <Button variant="primary" className={styles.cardButton}>
                    {card.buttonLabel}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </Container>
      </main>
    </div>
  );
}
