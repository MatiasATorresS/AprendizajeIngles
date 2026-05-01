import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function NecessityProbability() {
  const basicExamples = [
    <li key="1"><strong>You must wear</strong> a seatbelt in the car. (<strong>Debes llevar</strong> puesto el cinturón de seguridad en el auto).</li>,
    <li key="2"><strong>It can get</strong> very cold in the winter. (<strong>Puede ponerse</strong> muy frío en el invierno).</li>,
    <li key="3"><strong>We have to be</strong> at the airport by 7 AM. (<strong>Tenemos que estar</strong> en el aeropuerto a las 7 de la mañana).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>They might have left</strong> already. (<strong>Podrían haberse ido</strong> ya).</li>,
    <li key="2"><strong>You should call</strong> the doctor if you don't feel well. (<strong>Deberías llamar</strong> al médico si no te sientes bien).</li>,
    <li key="3"><strong>It's likely that they will come</strong> to the party. (<strong>Es probable que vengan</strong> a la fiesta).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>There's a possibility that the meeting has been canceled</strong>. (<strong>Existe la posibilidad de que la reunión haya sido cancelada</strong>).</li>,
    <li key="2"><strong>It's essential that you arrive on time</strong>. (<strong>Es esencial que llegues a tiempo</strong>).</li>,
    <li key="3"><strong>They couldn't have finished the project without your help</strong>. (<strong>No podrían haber terminado el proyecto sin tu ayuda</strong>).</li>,
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
          <span className={styles.subjectTag}>Verbos Modales</span>
          <h1 className={styles.subjectTitle}>Expresando Necesidad y Probabilidad</h1>
          <p className={styles.subjectIntro}>
            En inglés, existen varias formas de expresar la necesidad y la probabilidad mediante verbos modales y expresiones que indican cuán cierta o necesaria es una acción.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Expresión de la Necesidad</h2>
          <p className={styles.sectionText}>
            La necesidad se expresa mediante verbos modales como <strong>must</strong> (deber), <strong>have to</strong> (tener que) y <strong>should</strong> (debería). Indican que algo es necesario o requerido.
          </p>
          <ul className={styles.sectionList}>
            <li>You <strong>must</strong> finish your homework. (Debes terminar tu tarea)</li>
            <li>She <strong>has to</strong> call the doctor. (Ella tiene que llamar al médico)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Expresión de la Probabilidad</h2>
          <p className={styles.sectionText}>
            La probabilidad se expresa con verbos como <strong>can</strong>, <strong>might</strong>, <strong>may</strong>, y expresiones como "it's likely" o "there's a possibility".
          </p>
          <ul className={styles.sectionList}>
            <li>It <strong>might</strong> rain tomorrow. (Podría llover mañana)</li>
            <li>She <strong>may</strong> be at home. (Ella puede que esté en casa)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Alta Probabilidad</h2>
          <p className={styles.sectionText}>
            Para expresar alta probabilidad se usan <strong>must</strong> (debe ser), <strong>can't</strong> (no puede ser), y <strong>couldn't</strong>.
          </p>
          <ul className={styles.sectionList}>
            <li>He <strong>must</strong> be tired. (Debe estar cansado)</li>
            <li>She <strong>can't</strong> be home — I saw her leave. (No puede estar en casa)</li>
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
          <p className={styles.practiceTipText}>
            Practica el uso de estas expresiones para comunicar efectivamente la necesidad y la probabilidad en inglés.
          </p>
        </div>
      </div>
    </div>
  );
}
