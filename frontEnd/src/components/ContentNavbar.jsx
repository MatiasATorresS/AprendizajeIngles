import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './ContentNavbar.module.css';

/**
 * Navbar compartida por todas las páginas autenticadas.
 * Composición vía children: pasa <Link> o <Nav.Link> como items.
 */
export default function ContentNavbar({ brand, children, right, studentNav = false }) {
  return (
    <Navbar variant="dark" expand="lg" className={styles.navbar}>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Container>
        <Navbar.Brand className={styles.brand}>{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {studentNav ? (
            <Nav as="nav" aria-label="Navegación del estudiante" className={`me-auto ${styles.navLinks}`}>
              <NavLink to="/main" end>Inicio</NavLink>
              <NavLink to="/materials">Materiales</NavLink>
              <NavLink to="/exercises">Practicar</NavLink>
              <NavLink to="/user-statistics">Mi progreso</NavLink>
            </Nav>
          ) : children && <Nav className={`me-auto ${styles.navLinks}`}>{children}</Nav>}
          {right && <Nav className={styles.navRight}>{right}</Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
