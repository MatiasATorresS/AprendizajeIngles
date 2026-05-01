import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PresentPerfect() {
  const regularVerbs = [
    { infinitive: 'work', pastParticiple: 'worked' },
    { infinitive: 'play', pastParticiple: 'played' },
    { infinitive: 'visit', pastParticiple: 'visited' },
    { infinitive: 'help', pastParticiple: 'helped' },
    { infinitive: 'live', pastParticiple: 'lived' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastParticiple: 'gone' },
    { infinitive: 'eat', pastParticiple: 'eaten' },
    { infinitive: 'buy', pastParticiple: 'bought' },
    { infinitive: 'have', pastParticiple: 'had' },
    { infinitive: 'do', pastParticiple: 'done' },
  ];

  const basicExamples = [
    <li key="1"><strong>I have worked</strong> for five years. (He trabajado durante cinco años)</li>,
    <li key="2"><strong>She has visited</strong> London. (Ella ha visitado Londres)</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>He has never eaten</strong> sushi. (Él nunca ha comido sushi)</li>,
    <li key="2"><strong>They have traveled</strong> to many countries. (Ellos han viajado a muchos países)</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>By the time we arrived, they had already finished</strong> the project. (Para cuando llegamos, ya habían terminado el proyecto)</li>,
    <li key="2"><strong>She had never seen</strong> such a beautiful sunset before. (Ella nunca había visto una puesta de sol tan hermosa)</li>,
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
          <h1 className={styles.subjectTitle}>Present Perfect</h1>
          <p className={styles.subjectIntro}>
            El <strong>Present Perfect</strong> se utiliza para expresar acciones que tienen relevancia en el presente, pero que ocurrieron en un tiempo no especificado en el pasado. Se forma con <strong>have/has + participio pasado</strong>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Positiva</h2>
          <p className={styles.sectionText}>Se utiliza <strong>have</strong> (I/You/We/They) o <strong>has</strong> (He/She/It) + participio pasado.</p>
          <ul className={styles.sectionList}>
            <li>I <strong>have worked</strong> (He trabajado)</li>
            <li>She <strong>has visited</strong> (Ella ha visitado)</li>
            <li>They <strong>have played</strong> (Ellos han jugado)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Negativa</h2>
          <p className={styles.sectionText}>Se añade <strong>not</strong> después de "have" o "has": <strong>haven't / hasn't</strong>.</p>
          <ul className={styles.sectionList}>
            <li>I <strong>have not worked</strong> (No he trabajado)</li>
            <li>She <strong>has not visited</strong> (Ella no ha visitado)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Interrogativa</h2>
          <p className={styles.sectionText}>Se invierte el orden: <strong>Have/Has + sujeto + participio pasado</strong>.</p>
          <ul className={styles.sectionList}>
            <li><strong>Have I worked?</strong> (¿He trabajado?)</li>
            <li><strong>Has she visited?</strong> (¿Ella ha visitado?)</li>
          </ul>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Regulares en el Present Perfect</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Participio Pasado</th></tr></thead>
            <tbody>{regularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.pastParticiple}</td></tr>
            ))}</tbody>
          </table>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Irregulares en el Present Perfect</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Participio Pasado</th></tr></thead>
            <tbody>{irregularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.pastParticiple}</td></tr>
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
          <p className={styles.practiceTipText}>Practica el Present Perfect en diversas situaciones para fortalecer tu comprensión y habilidades en inglés.</p>
        </div>
      </div>
    </div>
  );
}
