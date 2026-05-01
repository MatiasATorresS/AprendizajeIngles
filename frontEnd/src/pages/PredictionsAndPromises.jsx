import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PredictionsAndPromises() {
  const basicExamples = [
    <li key="1"><strong>I think it will rain</strong> later. (<strong>Creo que lloverá</strong> más tarde).</li>,
    <li key="2"><strong>She'll probably arrive</strong> in the evening. (<strong>Probablemente llegará</strong> por la tarde).</li>,
    <li key="3"><strong>Don't worry, I promise I'll call</strong> you. (<strong>No te preocupes, prometo que te llamaré</strong>).</li>,
  ];

  const intermediateExamples = [
    <li key="1"><strong>Based on the weather forecast, it's likely that it'll be sunny</strong>. (<strong>Según el pronóstico, es probable que haga sol</strong>).</li>,
    <li key="2"><strong>By this time next year, they will have finished</strong> the construction. (<strong>Para esta época el próximo año, habrán terminado</strong> la construcción).</li>,
    <li key="3"><strong>I assure you, I won't let you down</strong>. (<strong>Te aseguro que no te decepcionaré</strong>).</li>,
  ];

  const advancedExamples = [
    <li key="1"><strong>It's almost certain that the team will win</strong> the championship. (<strong>Es casi seguro que el equipo ganará</strong> el campeonato).</li>,
    <li key="2"><strong>Once I give my word, I will undoubtedly keep it</strong>. (<strong>Una vez que doy mi palabra, sin duda la cumpliré</strong>).</li>,
    <li key="3"><strong>By the end of the year, they will have accomplished</strong> all their goals. (<strong>Para fin de año, habrán logrado</strong> todos sus objetivos).</li>,
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
          <span className={styles.subjectTag}>Will / Futuro</span>
          <h1 className={styles.subjectTitle}>Predicciones y Promesas</h1>
          <p className={styles.subjectIntro}>
            En inglés es importante saber expresar predicciones sobre el futuro y compromisos personales. Usamos <strong>will</strong> para predicciones espontáneas y promesas directas.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Expresión de Predicciones</h2>
          <p className={styles.sectionText}>Las predicciones se expresan con frases como <strong>I think</strong>, <strong>probably</strong>, <strong>it's likely</strong>, indicando lo que creemos que sucederá.</p>
          <ul className={styles.sectionList}>
            <li>I think <strong>it will rain</strong> tomorrow. (Creo que lloverá mañana)</li>
            <li>She'll <strong>probably be</strong> late. (Probablemente llegará tarde)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Expresión de Promesas</h2>
          <p className={styles.sectionText}>Las promesas se hacen con <strong>I promise</strong>, <strong>I assure you</strong>, <strong>I won't let you down</strong> para comprometernos con una acción.</p>
          <ul className={styles.sectionList}>
            <li>I <strong>promise I'll call</strong> you. (Prometo que te llamaré)</li>
            <li>I <strong>won't let</strong> you down. (No te decepcionaré)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Alta Certidumbre</h2>
          <p className={styles.sectionText}>Para alta certidumbre usamos <strong>it's almost certain</strong>, <strong>undoubtedly</strong>, <strong>it's inevitable</strong>.</p>
          <ul className={styles.sectionList}>
            <li><strong>It's almost certain</strong> that they'll win. (Es casi seguro que ganarán)</li>
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
          <p className={styles.practiceTipText}>Practica el uso de estas expresiones para comunicar predicciones y promesas de manera efectiva en inglés.</p>
        </div>
      </div>
    </div>
  );
}
