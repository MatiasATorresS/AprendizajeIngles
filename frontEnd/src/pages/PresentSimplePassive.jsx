import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PresentSimplePassive() {
  const basicExamples = [
    <li key="1"><strong>The documents are prepared</strong> every morning. (Los documentos <strong>son preparados</strong> cada mañana).</li>,
    <li key="2"><strong>English lessons are taught</strong> at this school. (Lecciones de inglés <strong>son enseñadas</strong> en esta escuela).</li>,
    <li key="3"><strong>These cookies are baked</strong> by my mom. (Estas galletas <strong>son horneadas</strong> por mi mamá).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>The news is broadcasted</strong> on television daily. (Las noticias <strong>son transmitidas</strong> en la televisión a diario).</li>,
    <li key="2"><strong>New software updates are released</strong> regularly. (Nuevas actualizaciones <strong>son lanzadas</strong> regularmente).</li>,
    <li key="3"><strong>Important decisions are made</strong> by the board of directors. (Decisiones importantes <strong>son tomadas</strong> por la junta directiva).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>The house has been painted</strong> by professionals. (La casa <strong>ha sido pintada</strong> por profesionales).</li>,
    <li key="2"><strong>New policies are being implemented</strong> by the government. (Nuevas políticas <strong>están siendo implementadas</strong> por el gobierno).</li>,
    <li key="3"><strong>Advanced technology is used</strong> in this research project. (Tecnología avanzada <strong>es utilizada</strong> en este proyecto de investigación).</li>,
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
          <span className={styles.subjectTag}>Voz Pasiva</span>
          <h1 className={styles.subjectTitle}>Present Simple Passive</h1>
          <p className={styles.subjectIntro}>
            El <strong>Presente Simple Pasivo</strong> se utiliza para hablar de acciones realizadas por alguien o algo, sin enfocarse en quién las realiza. Se forma con <strong>am/is/are + participio pasado</strong>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Estructura</h2>
          <p className={styles.sectionText}>Se utiliza el verbo <strong>to be</strong> (am/is/are) en presente + participio pasado del verbo principal.</p>
          <ul className={styles.sectionList}>
            <li>The mail <strong>is delivered</strong> every morning. (El correo es entregado cada mañana)</li>
            <li>Cars <strong>are made</strong> in factories. (Los autos son fabricados en fábricas)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Negativa</h2>
          <p className={styles.sectionText}>Se añade <strong>not</strong> después de am/is/are: <strong>is not (isn't), are not (aren't)</strong>.</p>
          <ul className={styles.sectionList}>
            <li>The report <strong>isn't finished</strong> yet. (El informe aún no está terminado)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Interrogativa</h2>
          <p className={styles.sectionText}>Se invierte: <strong>Is/Are + sujeto + participio pasado?</strong></p>
          <ul className={styles.sectionList}>
            <li><strong>Is the homework done?</strong> (¿Está hecha la tarea?)</li>
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
          <p className={styles.practiceTipText}>Practica la construcción de oraciones en Presente Simple Pasivo para describir acciones realizadas por terceros en diferentes contextos.</p>
        </div>
      </div>
    </div>
  );
}
