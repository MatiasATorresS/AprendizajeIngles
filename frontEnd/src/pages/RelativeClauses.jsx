import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function RelativeClauses() {
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
          <h1 className={styles.subjectTitle}>Relative Clauses</h1>
          <p className={styles.subjectIntro}>
            Las <strong>Relative Clauses</strong> (Oraciones relativas) son estructuras que dan información adicional sobre un sustantivo. Se dividen en dos tipos principales: <strong>Defining</strong> y <strong>Non-Defining</strong>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Defining Relative Clauses</h2>
          <p className={styles.sectionText}>
            Aportan información <strong>esencial</strong> para identificar el sustantivo. No se separan con comas y son necesarias para comprender la oración. Se usan los pronombres <strong>who, that, which, whose, where, when</strong>.
          </p>
          <ul className={styles.sectionList}>
            <li>The book <strong>that I bought yesterday</strong> is really interesting. (El libro que compré ayer es muy interesante)</li>
            <li>The woman <strong>who lives next door</strong> is a doctor. (La mujer que vive al lado es médica)</li>
            <li>The city <strong>where I was born</strong> is very beautiful. (La ciudad donde nací es muy hermosa)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Non-Defining Relative Clauses</h2>
          <p className={styles.sectionText}>
            Aportan información <strong>adicional pero no esencial</strong>. Se escriben siempre entre comas y si se eliminan, la oración principal sigue siendo comprensible. <strong>No se usa "that"</strong> en este tipo.
          </p>
          <ul className={styles.sectionList}>
            <li>My sister, <strong>who lives in London</strong>, is coming to visit. (Mi hermana, que vive en Londres, vendrá de visita)</li>
            <li>My dog, <strong>which is very friendly</strong>, loves to play. (Mi perro, que es muy amistoso, adora jugar)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pronombres Relativos Principales</h2>
          <ul className={styles.sectionList}>
            <li><strong>who</strong> — para personas (quien/que)</li>
            <li><strong>which</strong> — para cosas o animales (que/cual)</li>
            <li><strong>that</strong> — para personas o cosas (solo en Defining)</li>
            <li><strong>whose</strong> — posesivo (cuyo/a)</li>
            <li><strong>where</strong> — para lugares (donde)</li>
            <li><strong>when</strong> — para tiempo (cuando)</li>
          </ul>
        </div>

        <div className={styles.practiceTip}>
          <span className={styles.practiceTipIcon}>💡</span>
          <p className={styles.practiceTipText}>
            Practica construyendo oraciones con Relative Clauses. Recuerda: si la información es esencial → sin comas. Si es extra → con comas.
          </p>
        </div>
      </div>
    </div>
  );
}
