import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function QuestionTags() {
  return (
    <div>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navBrand}>English Learning Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navLinks}>
              <Link to="/main">Inicio</Link>
              <Link to="/materials">Materiales</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.pageWrapper}>
        <div className={styles.subjectHeader}>
          <span className={styles.subjectTag}>Estructura Gramatical</span>
          <h1 className={styles.subjectTitle}>Question Tags</h1>
          <p className={styles.subjectIntro}>
            Las <strong>Question Tags</strong> (etiquetas interrogativas) son estructuras cortas al final de una afirmación que se usan para confirmar información o buscar la aprobación del oyente.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Reglas de Formación</h2>
          <p className={styles.sectionText}>Para formar una Question Tag, sigue estas reglas:</p>
          <ul className={styles.sectionList}>
            <li>Si la afirmación es <strong>positiva</strong>, la Question Tag será <strong>negativa</strong>.</li>
            <li>Si la afirmación es <strong>negativa</strong>, la Question Tag será <strong>positiva</strong>.</li>
            <li>Utiliza el mismo verbo auxiliar de la afirmación principal.</li>
            <li>Agrega el pronombre correcto en la Question Tag.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Ejemplos con Afirmación Positiva</h2>
          <p className={styles.sectionText}>La afirmación es positiva → la tag es negativa:</p>
          <ul className={styles.sectionList}>
            <li>You are a student, <strong>aren't you</strong>? (Eres estudiante, ¿verdad?)</li>
            <li>She works here, <strong>doesn't she</strong>? (Ella trabaja aquí, ¿verdad?)</li>
            <li>We have met before, <strong>haven't we</strong>? (Nos hemos visto antes, ¿verdad?)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Ejemplos con Afirmación Negativa</h2>
          <p className={styles.sectionText}>La afirmación es negativa → la tag es positiva:</p>
          <ul className={styles.sectionList}>
            <li>He doesn't like coffee, <strong>does he</strong>? (Él no le gusta el café, ¿o sí?)</li>
            <li>You aren't ready, <strong>are you</strong>? (No estás listo, ¿o sí?)</li>
            <li>They haven't called, <strong>have they</strong>? (No han llamado, ¿verdad?)</li>
          </ul>
        </div>

        <div className={styles.practiceTip}>
          <span className={styles.practiceTipIcon}>💡</span>
          <p className={styles.practiceTipText}>
            Practica las Question Tags en conversaciones cotidianas. Son muy comunes en el inglés hablado, especialmente en el inglés británico.
          </p>
        </div>
      </div>
    </div>
  );
}
