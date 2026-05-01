import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../styles/Users_Admin.module.css'; // Importa los estilos CSS modulares

export default function Users_Admin({ username }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la lista de usuarios
    Axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);

  return (
    <>
      {/* ─── Navbar — sin tocar la lógica ─── */}
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.titleText}>
            Lista de Usuarios
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navLinks}`}>
              <Link to="/main">Inicio</Link>
              <Link to="/users">Usuarios</Link>
              <Link to="/statistics">Estadísticas</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ─── Contenido ─── */}
      <div className={styles.pageWrapper}>
        <h1 className={styles.pageTitle}>Usuarios Registrados</h1>
        <p className={styles.pageSubtitle}>
          {users.length} usuarios encontrados en el sistema.
        </p>

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
                  {/* ID */}
                  <td>
                    <span className={styles.idBadge}>#{user.id}</span>
                  </td>

                  {/* Usuario con avatar de iniciales */}
                  <td>
                    <div className={styles.userCell}>
                      <div className={styles.avatar}>
                        {user.username?.charAt(0).toUpperCase()}
                      </div>
                      <span className={styles.username}>{user.username}</span>
                    </div>
                  </td>

                  {/* Email */}
                  <td>
                    <span className={styles.emailText}>{user.email}</span>
                  </td>

                  {/* Rol con badge de color */}
                  <td>
                    <span className={user.role === 'admin' ? styles.roleAdmin : styles.roleUser}>
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
