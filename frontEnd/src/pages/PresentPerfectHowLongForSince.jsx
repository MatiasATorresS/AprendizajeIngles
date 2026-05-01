import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PresentPerfectHowLongForSince() {
  const basicExamples = [
    <li key="1"><strong>How long have you worked</strong> in this company? (<strong>¿Cuánto tiempo has trabajado</strong> en esta empresa?).</li>,
    <li key="2">She <strong>has played</strong> the piano <strong>since she was a child</strong>. (Ella ha tocado el piano <strong>desde que era niña</strong>).</li>,
    <li key="3">They <strong>have visited</strong> many countries <strong>for the last five years</strong>. (Han visitado muchos países <strong>durante los últimos cinco años</strong>).</li>,
  ];

  const intermediateExamples = [
    <li key="1">I <strong>have been studying</strong> English <strong>since I started college</strong>. (He estado estudiando inglés <strong>desde que empecé la universidad</strong>).</li>,
    <li key="2"><strong>How long have you known</strong> her? (<strong>¿Cuánto tiempo hace que la conoces</strong>?).</li>,
    <li key="3">They <strong>have lived</strong> in different countries <strong>for the last decade</strong>. (Han vivido en diferentes países <strong>durante la última década</strong>).</li>,
  ];

  const advancedExamples = [
    <li key="1">He <strong>has worked</strong> for various companies <strong>since 2005</strong>. (Ha trabajado para varias empresas <strong>desde 2005</strong>).</li>,
    <li key="2"><strong>How long have you been learning</strong> to play the guitar? (<strong>¿Cuánto tiempo llevas aprendiendo</strong> a tocar la guitarra?).</li>,
    <li key="3">They <strong>have known each other</strong> <strong>for over 20 years</strong>. (Se han conocido <strong>durante más de 20 años</strong>).</li>,
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
          <h1 className={styles.subjectTitle}>How Long, For & Since</h1>
          <p className={styles.subjectIntro}>
            El Present Perfect con <strong>"how long," "for"</strong> y <strong>"since"</strong> se usa para describir acciones que comenzaron en el pasado y continúan en el presente, enfocándose en la duración.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso de "How Long"</h2>
          <p className={styles.sectionText}>Se usa para preguntar sobre la duración de una acción que comenzó en el pasado y continúa en el presente. Se coloca al inicio de la pregunta.</p>
          <ul className={styles.sectionList}>
            <li><strong>How long</strong> have you been studying? (¿Cuánto tiempo llevas estudiando?)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso de "For"</h2>
          <p className={styles.sectionText}>Se usa para indicar la duración total de una acción. Va seguido de un período de tiempo específico.</p>
          <ul className={styles.sectionList}>
            <li>I have lived here <strong>for 10 years</strong>. (He vivido aquí por 10 años)</li>
            <li>She has worked there <strong>for a long time</strong>. (Ha trabajado allí por mucho tiempo)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Uso de "Since"</h2>
          <p className={styles.sectionText}>Se usa para indicar el punto de inicio de la acción. Va seguido de un momento específico en el tiempo.</p>
          <ul className={styles.sectionList}>
            <li>He has worked here <strong>since 2018</strong>. (Ha trabajado aquí desde 2018)</li>
            <li>I have known her <strong>since childhood</strong>. (La he conocido desde la infancia)</li>
          </ul>
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
          <p className={styles.practiceTipText}>Practica el uso de "how long," "for," y "since" en el Present Perfect para hablar sobre la duración de acciones pasadas con relevancia en el presente.</p>
        </div>
      </div>
    </div>
  );
}
