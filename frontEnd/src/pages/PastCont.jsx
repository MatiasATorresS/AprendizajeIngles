import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PastCont() {
  const regularVerbs = [
    { infinitive: 'work', pastCont: 'was/were working' },
    { infinitive: 'play', pastCont: 'was/were playing' },
    { infinitive: 'visit', pastCont: 'was/were visiting' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastCont: 'was/were going' },
    { infinitive: 'eat', pastCont: 'was/were eating' },
    { infinitive: 'buy', pastCont: 'was/were buying' },
  ];

  const basicExamples = [
    <li key="1"><strong>I was working</strong> at the office yesterday. (Yo <strong>estaba trabajando</strong> en la oficina ayer).</li>,
    <li key="2"><strong>She was playing</strong> with her friends last evening. (Ella <strong>estaba jugando</strong> con sus amigos anoche).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>They were studying</strong> when I called. (Ellos <strong>estaban estudiando</strong> cuando llamé).</li>,
    <li key="2"><strong>He was watching</strong> TV while it rained. (Él <strong>estaba viendo</strong> la televisión mientras llovía).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>She was taking a nap</strong> in the afternoon. (Ella <strong>estaba tomando una siesta</strong> por la tarde).</li>,
    <li key="2"><strong>We were discussing</strong> the project's details. (Nosotros <strong>estábamos discutiendo</strong> los detalles del proyecto).</li>,
  ];

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
          <span className={styles.subjectTag}>Tiempo Verbal</span>
          <h1 className={styles.subjectTitle}>Past Continuous</h1>
          <p className={styles.subjectIntro}>
            El <strong>Past Continuous</strong> se utiliza para expresar acciones que estaban ocurriendo en un momento específico en el pasado.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Positiva</h2>
          <p className={styles.sectionText}>Se utiliza el verbo "to be" en pasado (was/were) + verbo con -ing.</p>
          <ul className={styles.sectionList}>
            <li>I <strong>was working</strong> (Yo estaba trabajando)</li>
            <li>She <strong>was playing</strong> (Ella estaba jugando)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Negativa</h2>
          <p className={styles.sectionText}>Se añade "not" después de "was" o "were".</p>
          <ul className={styles.sectionList}>
            <li>I <strong>wasn't working</strong> (Yo no estaba trabajando)</li>
            <li>She <strong>wasn't playing</strong> (Ella no estaba jugando)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Interrogativa</h2>
          <p className={styles.sectionText}>Se invierte el orden de "was/were" y el sujeto.</p>
          <ul className={styles.sectionList}>
            <li><strong>Was I working?</strong> (¿Estaba yo trabajando?)</li>
            <li><strong>Was she playing?</strong> (¿Estaba ella jugando?)</li>
          </ul>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Regulares en el Past Continuous</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Past Continuous</th></tr></thead>
            <tbody>{regularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.pastCont}</td></tr>
            ))}</tbody>
          </table>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Irregulares en el Past Continuous</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Past Continuous</th></tr></thead>
            <tbody>{irregularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.pastCont}</td></tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className={styles.sectionTitle} style={{marginBottom:'16px'}}>Ejemplos en Diferentes Niveles</h2>
        <div className={styles.levelsWrapper}>
          <div className={styles.levelCard}>
            <div className={`${styles.levelHeader} ${styles.levelHeaderBasic}`}>🟢 Nivel Básico</div>
            <div className={styles.levelBody}><ul className={styles.levelList}>{basicExamples}</ul></div>
          </div>
          <div className={styles.levelCard}>
            <div className={`${styles.levelHeader} ${styles.levelHeaderMedium}`}>🟡 Nivel Medio</div>
            <div className={styles.levelBody}><ul className={styles.levelList}>{intermediateExamples}</ul></div>
          </div>
          <div className={styles.levelCard}>
            <div className={`${styles.levelHeader} ${styles.levelHeaderAdvanced}`}>🔴 Nivel Avanzado</div>
            <div className={styles.levelBody}><ul className={styles.levelList}>{advancedExamples}</ul></div>
          </div>
        </div>

        <div className={styles.practiceTip}>
          <span className={styles.practiceTipIcon}>💡</span>
          <p className={styles.practiceTipText}>
            Practica utilizando el Past Continuous en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.
          </p>
        </div>
      </div>
    </div>
  );
}
