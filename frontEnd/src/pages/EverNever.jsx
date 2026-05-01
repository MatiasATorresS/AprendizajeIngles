import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function EverNever() {
  const regularVerbs = [
    { infinitive: 'work', pastParticiple: 'worked' },
    { infinitive: 'play', pastParticiple: 'played' },
    { infinitive: 'visit', pastParticiple: 'visited' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastParticiple: 'gone' },
    { infinitive: 'eat', pastParticiple: 'eaten' },
    { infinitive: 'buy', pastParticiple: 'bought' },
  ];

  const basicExamples = [
    <li key="1"><strong>Have you ever visited</strong> Berlin? (<strong>¿Alguna vez has visitado</strong> Berlín?)</li>,
    <li key="2"><strong>Haven't they ever been</strong> to Europe? (¿No han estado nunca en Europa?)</li>,
    <li key="3"><strong>Nothing like this has ever happened</strong> to us. (Nada como esto nos ha sucedido nunca).</li>,
  ];

  const intermediateExamples = [
    <li key="1">It's the first time that <strong>I've ever eaten</strong> snails. (Es la primera vez que <strong>como</strong> caracoles).</li>,
    <li key="2"><strong>This is the first time I've ever been</strong> to England. (Esta es la primera vez que <strong>he estado</strong> en Inglaterra).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>I have never been</strong> to Italy. (Nunca <strong>he estado</strong> en Italia).</li>,
    <li key="2"><strong>They have traveled</strong> to many countries <strong>ever since</strong>. (Han viajado a muchos países <strong>desde entonces</strong>).</li>,
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
          <span className={styles.subjectTag}>Present Perfect</span>
          <h1 className={styles.subjectTitle}>Present Perfect: Ever & Never</h1>
          <p className={styles.subjectIntro}>
            Los adverbios <strong>"ever"</strong> y <strong>"never"</strong> se refieren a un tiempo no identificado, anterior al presente.
            "Ever" se utiliza en preguntas y oraciones negativas. "Never" significa "nunca antes de ahora".
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso de "Ever"</h2>
          <p className={styles.sectionText}>
            Se utiliza en preguntas, preguntas negativas y oraciones negativas con "nothing + ever" o "nobody + ever".
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso de "Never"</h2>
          <p className={styles.sectionText}>
            Significa "nunca antes de ahora" y se coloca antes del verbo principal (en "past participle").
          </p>
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
          <p className={styles.practiceTipText}>
            Practica el uso de "ever" y "never" en el Present Perfect para expresar experiencias y situaciones en tu vida.
          </p>
        </div>
      </div>
    </div>
  );
}
