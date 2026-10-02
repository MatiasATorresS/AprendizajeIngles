import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Container, ListGroup } from 'react-bootstrap';
import ContentNavbar from '../components/ContentNavbar';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Materials.module.css';
import { materialDescription, unitDescription } from '../utils/materialDescriptions';

export default function Materials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useDocumentMeta('Materiales de Inglés · Aprendizaje de Inglés');

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const [unidadesResponse, materiasResponse] = await Promise.all([
          api.get('/unidades_ingles'),
          api.get('/materias_ingles'),
        ]);

        const combinedData = unidadesResponse.data.unidades.map((unidad) => ({
          unidad,
          materias: materiasResponse.data.materias.filter(
            (materia) => materia.unidad_id === unidad.id
          ),
        }));

        if (!cancelled) {
          setData(combinedData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
        if (!cancelled) {
          setError('No se pudieron cargar los materiales. Inténtalo de nuevo.');
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={styles.userContainer}>
      <ContentNavbar
        brand="Aprende Inglés"
        studentNav
      />
      <main id="main">
        <Container className={styles.container}>
          <h1 className={styles.pageTitle}>Materiales de Inglés</h1>
          <p className={styles.pageSubtitle}>
            Explora las unidades y sus contenidos para mejorar tu nivel de inglés.
          </p>

          {loading ? (
            <p role="status">Cargando…</p>
          ) : error ? (
            <p className="text-danger" role="alert">
              {error}
            </p>
          ) : (
            <div>
              {data.map((item) => (
                <div key={item.unidad.id} className={styles.unitCard}>
                  <div className={styles.unitHeader}>
                    <div className={styles.unitIcon} aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.156 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.596 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                      </svg>
                    </div>
                    <h2 className={styles.unitTitle}>{item.unidad.nombre}</h2>
                  </div>
                  <p className={styles.unitDesc}>{unitDescription(item.unidad)}</p>

                  <p className={styles.materiasLabel}>Contenidos</p>
                  <ListGroup variant="flush">
                    {item.materias.map((materia) => (
                      <ListGroup.Item key={materia.id} className={styles.listItem}>
                        <div className={styles.materiaInfo}>
                          <p className={styles.materiaName}>{materia.nombre}</p>
                          <p className={styles.materiaDesc}>{materialDescription(materia)}</p>
                        </div>
                        <Link to={`/materials/${materia.id}`} className={styles.detailsButton}>
                          Ver detalles →
                        </Link>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ))}
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
