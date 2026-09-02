import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Home.module.css';

const FEATURES = [
  'Lecciones por unidades',
  'Ejercicios con IA',
  'Seguimiento de progreso',
];

function Home() {
  useDocumentMeta('Aprendizaje de Inglés | Lecciones, Ejercicios y Progreso');

  useEffect(() => {
    api.get('/login').then((response) => {
      if (response.data.loggedIn === true) {
        window.location.replace('/main');
      }
    });
  }, []);

  return (
    <main id="main">
      <section className={styles.banner}>
        <span className={styles.bannerBadge}>Estudiantes de secundaria · Chile</span>
        <h1>
          Aprende inglés <em>con confianza</em>
        </h1>
        <p>
          Lecciones organizadas por unidades, ejercicios personalizados con IA y
          estadísticas para seguir tu progreso, todo en un solo lugar.
        </p>
        <div className={styles['banner-buttons']}>
          <Link to="/register" className={`text-decoration-none ${styles.btn}`}>
            <span className={`btn btn-light ${styles.btn}`}>Comienza Ahora</span>
          </Link>
          <Link to="/login" className={`text-decoration-none ${styles.btn}`}>
            <span className={`btn btn-outline-light ${styles.btn}`}>Tengo una cuenta</span>
          </Link>
        </div>
        <div className={styles.bannerFeatures}>
          {FEATURES.map((feature) => (
            <span key={feature} className={styles.featurePill}>
              {feature}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;