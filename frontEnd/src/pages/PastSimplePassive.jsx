import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PastSimplePassive() {
  const basicExamples = [
    <li key="1">The letter <strong>was sent</strong> yesterday. (La carta <strong>fue enviada</strong> ayer).</li>,
    <li key="2">The cake <strong>was eaten</strong> by the kids. (El pastel <strong>fue comido</strong> por los niños).</li>,
    <li key="3"><strong>Was the book read</strong> by you? (<strong>¿Fue leído el libro</strong> por ti?).</li>,
  ];

  const intermediateExamples = [
    <li key="1">The old building <strong>was demolished</strong> last week. (El antiguo edificio <strong>fue demolido</strong> la semana pasada).</li>,
    <li key="2">The story <strong>was written</strong> by a famous author. (La historia <strong>fue escrita</strong> por un autor famoso).</li>,
    <li key="3"><strong>Were the documents signed</strong> by the manager? (<strong>¿Fueron firmados los documentos</strong> por el gerente?).</li>,
  ];

  const advancedExamples = [
    <li key="1">The research project <strong>was conducted</strong> by a team of experts. (El proyecto <strong>fue llevado a cabo</strong> por un equipo de expertos).</li>,
    <li key="2">The film <strong>was directed</strong> by an award-winning director. (La película <strong>fue dirigida</strong> por un director galardonado).</li>,
    <li key="3"><strong>Were the paintings stolen</strong> from the museum? (<strong>¿Fueron robados los cuadros</strong> del museo?).</li>,
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
          <h1 className={styles.subjectTitle}>Past Simple Passive</h1>
          <p className={styles.subjectIntro}>
            El <strong>Pasado Simple Pasivo</strong> se utiliza para describir una acción que fue realizada en el pasado. El foco está en la acción, no en quién la realizó. Se forma con <strong>was/were + participio pasado</strong>.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Estructura</h2>
          <p className={styles.sectionText}>Las expresiones en Pasado Simple Pasivo se forman con el verbo auxiliar <strong>was</strong> o <strong>were</strong> seguido del participio pasado del verbo principal.</p>
          <ul className={styles.sectionList}>
            <li>The book <strong>was written</strong> in 1990. (El libro fue escrito en 1990)</li>
            <li>The houses <strong>were built</strong> last year. (Las casas fueron construidas el año pasado)</li>
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
          <p className={styles.practiceTipText}>Practica la construcción y el uso del Pasado Simple Pasivo para mejorar tus habilidades en inglés.</p>
        </div>
      </div>
    </div>
  );
}
