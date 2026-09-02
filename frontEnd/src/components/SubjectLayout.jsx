import { Link } from 'react-router-dom';
import ContentNavbar from './ContentNavbar';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from './SubjectLayout.module.css';

/**
 * Diseño común de las páginas de materia (skeleton + cabecera).
 * Composición vía children: cada página aporta secciones, tablas, niveles y tips.
 */
export default function SubjectLayout({ tag, title, intro, children }) {
  useDocumentMeta(`${title} · Aprendizaje de Inglés`);
  return (
    <>
      <ContentNavbar
        brand="English Learning Hub"
        right={
          <>
            <Link to="/main">Inicio</Link>
            <Link to="/materials">Materiales</Link>
          </>
        }
      />
      <main id="main">
        <div className={styles.pageWrapper}>
          <header className={styles.subjectHeader}>
            <span className={styles.subjectTag}>{tag}</span>
            <h1 className={styles.subjectTitle}>{title}</h1>
            <p className={styles.subjectIntro}>{intro}</p>
          </header>
          {children}
        </div>
      </main>
    </>
  );
}

/* ─── Bloque de sección genérica ─── */
export function SubjectSection({ title, children, as: Heading = 'h2' }) {
  return (
    <section className={styles.section}>
      <Heading className={styles.sectionTitle}>{title}</Heading>
      {children}
    </section>
  );
}

/* ─── Lista de definiciones/elementos ─── */
function RichText({ text }) {
  if (typeof text !== 'string' || !text.includes('<')) {
    return text;
  }
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export function SubjectList({ items }) {
  return (
    <ul className={styles.sectionList}>
      {items.map((item, i) => (
        <li key={i}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

/* ─── Tabla de verbos / estructuras ─── */
export function VerbTable({ title, baseLabel, formLabel, rows }) {
  return (
    <div className={styles.tableWrapper}>
      <h3 className={styles.tableTitle}>{title}</h3>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">{baseLabel}</th>
              <th scope="col">{formLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className={styles.verbBase}>{row.base}</td>
                <td>{row.form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Tarjeta de nivel de ejemplo ─── */
export function LevelCard({ level, title, children }) {
  const tone = level === 'basic' ? styles.basic : level === 'advanced' ? styles.advanced : styles.medium;
  return (
    <div className={`${styles.levelCard} ${tone}`}>
      <h4 className={styles.levelHeader}>{title}</h4>
      <div className={styles.levelBody}>
        <ul className={styles.levelList}>{children}</ul>
      </div>
    </div>
  );
}

/* ─── Fila de los tres niveles ─── */
export function LevelsRow({ children }) {
  return <div className={styles.levelsWrapper}>{children}</div>;
}

/* ─── Consejo de práctica ─── */
export function PracticeTip({ children }) {
  return (
    <aside className={styles.practiceTip}>
      <span className={styles.practiceTipIcon} aria-hidden="true">
        💡
      </span>
      <p className={styles.practiceTipText}>{children}</p>
    </aside>
  );
}