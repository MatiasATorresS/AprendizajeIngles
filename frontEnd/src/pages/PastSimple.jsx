import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/SubjectPage.module.css';

export default function PastSimple() {
  const regularVerbs = [
    { infinitive: 'work', pastSimple: 'worked' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'visit', pastSimple: 'visited' },
    { infinitive: 'help', pastSimple: 'helped' },
    { infinitive: 'live', pastSimple: 'lived' },
    { infinitive: 'clean', pastSimple: 'cleaned' },
    { infinitive: 'jump', pastSimple: 'jumped' },
    { infinitive: 'talk', pastSimple: 'talked' },
    { infinitive: 'watch', pastSimple: 'watched' },
    { infinitive: 'call', pastSimple: 'called' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'learn', pastSimple: 'learned' },
    { infinitive: 'open', pastSimple: 'opened' },
    { infinitive: 'close', pastSimple: 'closed' },
    { infinitive: 'move', pastSimple: 'moved' },
    { infinitive: 'listen', pastSimple: 'listened' },
    { infinitive: 'cook', pastSimple: 'cooked' },
    { infinitive: 'smile', pastSimple: 'smiled' },
    { infinitive: 'like', pastSimple: 'liked' },
    { infinitive: 'visit', pastSimple: 'visited' },
    { infinitive: 'watch', pastSimple: 'watched' },
    { infinitive: 'play', pastSimple: 'played' },
    { infinitive: 'learn', pastSimple: 'learned' },
    { infinitive: 'open', pastSimple: 'opened' },
    { infinitive: 'close', pastSimple: 'closed' },
    { infinitive: 'move', pastSimple: 'moved' },
    { infinitive: 'listen', pastSimple: 'listened' },
    { infinitive: 'cook', pastSimple: 'cooked' },
    { infinitive: 'smile', pastSimple: 'smiled' },
    { infinitive: 'like', pastSimple: 'liked' },
    { infinitive: 'visit', pastSimple: 'visited' },
  ];

  const irregularVerbs = [
    { infinitive: 'go', pastSimple: 'went' },
    { infinitive: 'eat', pastSimple: 'ate' },
    { infinitive: 'buy', pastSimple: 'bought' },
    { infinitive: 'have', pastSimple: 'had' },
    { infinitive: 'do', pastSimple: 'did' },
    { infinitive: 'be', pastSimple: 'was/were' },
    { infinitive: 'begin', pastSimple: 'began' },
    { infinitive: 'break', pastSimple: 'broke' },
    { infinitive: 'choose', pastSimple: 'chose' },
    { infinitive: 'come', pastSimple: 'came' },
    { infinitive: 'drive', pastSimple: 'drove' },
    { infinitive: 'find', pastSimple: 'found' },
    { infinitive: 'give', pastSimple: 'gave' },
    { infinitive: 'have', pastSimple: 'had' },
    { infinitive: 'know', pastSimple: 'knew' },
    { infinitive: 'leave', pastSimple: 'left' },
    { infinitive: 'make', pastSimple: 'made' },
    { infinitive: 'put', pastSimple: 'put' },
    { infinitive: 'say', pastSimple: 'said' },
    { infinitive: 'take', pastSimple: 'took' },
    { infinitive: 'begin', pastSimple: 'began' },
    { infinitive: 'break', pastSimple: 'broke' },
    { infinitive: 'choose', pastSimple: 'chose' },
    { infinitive: 'come', pastSimple: 'came' },
    { infinitive: 'drive', pastSimple: 'drove' },
    { infinitive: 'find', pastSimple: 'found' },
    { infinitive: 'give', pastSimple: 'gave' },
    { infinitive: 'know', pastSimple: 'knew' },
    { infinitive: 'leave', pastSimple: 'left' },
    { infinitive: 'make', pastSimple: 'made' },
    { infinitive: 'put', pastSimple: 'put' },
    { infinitive: 'say', pastSimple: 'said' },
    { infinitive: 'take', pastSimple: 'took' },
  ];

  const basicExamples = [
    <li key="1">
      <strong>I watched</strong> a movie yesterday. (<strong>Vi</strong> una
      película ayer)
    </li>,
    <li key="2">
      <strong>She cooked</strong> dinner last night. (Ella{' '}
      <strong>cocinó</strong> la cena anoche)
    </li>,
    <li key="3">
      We <strong>played</strong> soccer in the park. (Jugamos fútbol en el
      parque)
    </li>,
    <li key="4">
      He <strong>worked</strong> late at the office. (Él trabajó tarde en la
      oficina)
    </li>,
    <li key="5">
      They <strong>visited</strong> their grandparents. (Ellos visitaron a sus
      abuelos)
    </li>,
    // Agregar más ejemplos aquí
  ];

  const intermediateExamples = [
    <li key="1">
      <strong>He read</strong> an interesting book last week. (Él{' '}
      <strong>leyó</strong> un libro interesante la semana pasada)
    </li>,
    <li key="2">
      <strong>They went</strong> to the beach on Sunday. (Ellos{' '}
      <strong>fueron</strong> a la playa el domingo)
    </li>,
    <li key="3">
      She <strong>found</strong> a hidden treasure. (Ella{' '}
      <strong>encontró</strong> un tesoro oculto)
    </li>,
    <li key="4">
      We <strong>drove</strong> to the mountains. (Nosotros{' '}
      <strong>conducimos</strong> a las montañas)
    </li>,
    <li key="5">
      I <strong>chose</strong> the blue shirt. (Elegí la camisa azul)
    </li>,
    // Agregar más ejemplos aquí
  ];

  const advancedExamples = [
    <li key="1">
      <strong>She had never visited</strong> that museum before. (Ella nunca{' '}
      <strong>había visitado</strong> ese museo antes)
    </li>,
    <li key="2">
      <strong>We had already finished</strong> the project by the time they
      arrived. (Ya <strong>habíamos terminado</strong> el proyecto cuando
      llegaron)
    </li>,
    <li key="3">
      He <strong>was</strong> very tired after the long journey. (Él{' '}
      <strong>estaba</strong> muy cansado después del largo viaje)
    </li>,
    <li key="4">
      They <strong>began</strong> a new chapter in their lives. (Ellos{' '}
      <strong>empezaron</strong> un nuevo capítulo en sus vidas)
    </li>,
    <li key="5">
      She <strong>made</strong> a significant contribution to the project. (Ella
      <strong>realizó</strong> una contribución significativa al proyecto)
    </li>,
    // Agregar más ejemplos aquí
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
        {/* Encabezado */}
        <div className={styles.subjectHeader}>
          <span className={styles.subjectTag}>Tiempo Verbal</span>
          <h1 className={styles.subjectTitle}>Past Simple</h1>
          <p className={styles.subjectIntro}>
            El <strong>Past Simple</strong> es un tiempo verbal en inglés que se
            utiliza principalmente para expresar acciones que ocurrieron en el
            pasado y ya han sido completadas.
          </p>
        </div>

        {/* Forma Positiva */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Positiva</h2>
          <p className={styles.sectionText}>
            En la forma positiva, se utiliza el verbo en su forma pasada. Para la
            mayoría de los verbos, esto implica agregar "-ed" al final del verbo.
          </p>
          <ul className={styles.sectionList}>
            <li>I <strong>worked</strong> (Trabajé)</li>
            <li>She <strong>visited</strong> (Ella visitó)</li>
            <li>They <strong>played</strong> (Jugaron)</li>
          </ul>
        </div>

        {/* Forma Negativa */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Negativa</h2>
          <p className={styles.sectionText}>
            En la forma negativa, se utiliza el verbo auxiliar "did not" (didn't)
            seguido del verbo en su forma base.
          </p>
          <ul className={styles.sectionList}>
            <li>I <strong>didn't work</strong> (No trabajé)</li>
            <li>She <strong>didn't visit</strong> (Ella no visitó)</li>
            <li>They <strong>didn't play</strong> (No jugaron)</li>
          </ul>
        </div>

        {/* Forma Interrogativa */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Forma Interrogativa</h2>
          <p className={styles.sectionText}>
            En la forma interrogativa, se utiliza el verbo auxiliar "did" seguido
            del sujeto y el verbo en su forma base.
          </p>
          <ul className={styles.sectionList}>
            <li><strong>Did I work?</strong> (¿Trabajé?)</li>
            <li><strong>Did she visit?</strong> (¿Ella visitó?)</li>
            <li><strong>Did they play?</strong> (¿Jugaron?)</li>
          </ul>
        </div>

        {/* Tabla Verbos Regulares */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Regulares en el Past Simple</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Pasado Simple</th></tr></thead>
            <tbody>
              {regularVerbs.map((verb, index) => (
                <tr key={index}>
                  <td className={styles.verbBase}>{verb.infinitive}</td>
                  <td className={styles.verbForm}>{verb.pastSimple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla Verbos Irregulares */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Verbos Irregulares en el Past Simple</h3>
          <table className={styles.table} style={{width:'100%'}}>
            <thead><tr><th>Verbo Infinitivo</th><th>Pasado Simple</th></tr></thead>
            <tbody>
              {irregularVerbs.map((verb, index) => (
                <tr key={index}>
                  <td className={styles.verbBase}>{verb.infinitive}</td>
                  <td className={styles.verbForm}>{verb.pastSimple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ejemplos por nivel */}
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

        {/* Consejo de práctica */}
        <div className={styles.practiceTip}>
          <span className={styles.practiceTipIcon}>💡</span>
          <p className={styles.practiceTipText}>
            Practica utilizando el Past Simple en diferentes situaciones para mejorar tu comprensión y fluidez en inglés.
          </p>
        </div>
      </div>
    </div>
  );
}
