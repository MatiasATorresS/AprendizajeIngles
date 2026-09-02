import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import api from '../services/api';
import ContentNavbar from '../components/ContentNavbar';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Users_Admin.module.css';

export default function Users_Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useDocumentMeta('Usuarios Registrados · Aprendizaje de Inglés');

  useEffect(() => {
    const controller = new AbortController();
    api
      .get('/users', { signal: controller.signal })
      .then((response) => setUsers(response.data))
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          console.error('Error al obtener usuarios:', err);
          setError('No se pudo cargar la lista de usuarios.');
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <ContentNavbar brand="Lista de Usuarios">
            <Link to="/main">Inicio</Link>
            <Link to="/users" aria-current="page">
              Usuarios
            </Link>
            <Link to="/statistics">Estadísticas</Link>
          </ContentNavbar>

      <main id="main">
        <div className={styles.pageWrapper}>
          <h1 className={styles.pageTitle}>Usuarios Registrados</h1>
          <p className={styles.pageSubtitle}>
            {users.length} usuarios encontrados en el sistema.
          </p>

          {error && <p className={styles.emptyState}>{error}</p>}

          {users.length > 0 && (
            <div className={styles.tableCard}>
              <Table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Correo Electrónico</th>
                    <th>Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <span className={styles.idBadge}>#{user.id}</span>
                      </td>
                      <td>
                        <div className={styles.userCell}>
                          <div className={styles.avatar}>
                            {user.username?.charAt(0).toUpperCase()}
                          </div>
                          <span className={styles.username}>
                            {user.username}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={styles.emailText}>{user.email}</span>
                      </td>
                      <td>
                        <span
                          className={
                            user.role === 'admin'
                              ? styles.roleAdmin
                              : styles.roleUser
                          }>
                          {user.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}