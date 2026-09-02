import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from './NotFound.module.css';

export default function NotFound() {
  useDocumentMeta('Página no encontrada · Aprendizaje de Inglés');
  return (
    <main className={styles.wrapper} id="main">
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 className={styles.title}>Página no encontrada</h1>
      <p className={styles.text}>
        La página que buscas no existe o fue movida. Revisa la dirección o
        vuelve al inicio.
      </p>
      <Link to="/" className={styles.homeLink}>
        Volver al inicio
      </Link>
    </main>
  );
}