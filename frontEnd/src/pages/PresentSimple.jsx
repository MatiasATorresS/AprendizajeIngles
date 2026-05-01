import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PresentSimple() {
  const regularVerbs = [
    { infinitive: 'work', presentSimple: 'works' },
    { infinitive: 'play', presentSimple: 'plays' },
    { infinitive: 'visit', presentSimple: 'visits' },
    { infinitive: 'help', presentSimple: 'helps' },
    { infinitive: 'live', presentSimple: 'lives' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', presentSimple: 'goes' },
    { infinitive: 'eat', presentSimple: 'eats' },
    { infinitive: 'buy', presentSimple: 'buys' },
    { infinitive: 'have', presentSimple: 'has' },
    { infinitive: 'do', presentSimple: 'does' },
  ];

  const basicExamples = [
    <li key="1">He <strong>works</strong> at a software company. (Él <strong>trabaja</strong> en una empresa de software).</li>,
    <li key="2">She <strong>plays</strong> the piano. (Ella <strong>toca</strong> el piano).</li>,
    <li key="3">They <strong>visit</strong> their grandparents every weekend. (Ellos <strong>visitan</strong> a sus abuelos cada fin de semana).</li>,
  ];

  const intermediateExamples = [
    <li key="1">I <strong>do</strong> my best in every project. (Hago lo mejor en cada proyecto).</li>,
    <li key="2">The company <strong>sells</strong> high-quality products. (La empresa <strong>vende</strong> productos de alta calidad).</li>,
    <li key="3">She always <strong>goes</strong> to the gym. (Ella siempre <strong>va</strong> al gimnasio).</li>,
  ];

  const advancedExamples = [
    <li key="1">The scientists <strong>conduct</strong> experiments to gather data. (Los científicos <strong>realizan</strong> experimentos para recopilar datos).</li>,
    <li key="2">The artist <strong>creates</strong> beautiful paintings. (El artista <strong>crea</strong> hermosas pinturas).</li>,
    <li key="3">The company <strong>invests</strong> in innovative technologies. (La empresa <strong>invierte</strong> en tecnologías innovadoras).</li>,
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
          <h1 className={styles.subjectTitle}>Present Simple</h1>
          <p className={styles.subjectIntro}>
            El <strong>Present Simple</strong> se utiliza para describir acciones habituales, verdades generales y rutinas. Es uno de los tiempos más importantes del inglés.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Positiva</h2>
          <p className={styles.sectionText}>Se utiliza el verbo en su forma base (infinitivo). En tercera persona singular (He/She/It), se añade <strong>-s</strong> o <strong>-es</strong>.</p>
          <ul className={styles.sectionList}>
            <li>He <strong>works</strong> at a software company. (Él trabaja en una empresa de software)</li>
            <li>She <strong>plays</strong> the piano. (Ella toca el piano)</li>
            <li>They <strong>visit</strong> their grandparents. (Ellos visitan a sus abuelos)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Negativa</h2>
          <p className={styles.sectionText}>Se usa <strong>do not (don't)</strong> o <strong>does not (doesn't)</strong> antes del verbo en forma base.</p>
          <ul className={styles.sectionList}>
            <li>I <strong>don't work</strong> on weekends. (No trabajo los fines de semana)</li>
            <li>She <strong>doesn't play</strong> soccer. (Ella no juega al fútbol)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Interrogativa</h2>
          <p className={styles.sectionText}>Se usa <strong>Do</strong> o <strong>Does</strong> al inicio de la pregunta, seguido del sujeto y el verbo en forma base.</p>
          <ul className={styles.sectionList}>
            <li><strong>Do I work?</strong> (¿Trabajo?)</li>
            <li><strong>Does she play?</strong> (¿Ella juega?)</li>
          </ul>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Regulares en el Present Simple</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Present Simple (He/She/It)</th></tr></thead>
            <tbody>{regularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.presentSimple}</td></tr>
            ))}</tbody>
          </table>
        </div>

        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Irregulares en el Present Simple</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Present Simple (He/She/It)</th></tr></thead>
            <tbody>{irregularVerbs.map((verb, i) => (
              <tr key={i}><td className={styles.verbBase}>{verb.infinitive}</td><td className={styles.verbForm}>{verb.presentSimple}</td></tr>
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
          <p className={styles.practiceTipText}>Practica el uso del Present Simple en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.</p>
        </div>
      </div>
    </div>
  );
}
