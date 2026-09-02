import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import LoginError from '../components/LoginError';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  useDocumentMeta('Iniciar sesión · Aprendizaje de Inglés');

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        // Guardamos los datos del usuario en el navegador para que funcione en móviles
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response.data[0]));

        setLoginStatus(response.data[0].username);
        navigate('/main');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'User does not exist') {
          setEmailError('Email incorrecto o no existe');
        } else if (error.response.data.message === 'Wrong email/password') {
          setPasswordError('Contraseña incorrecta');
        }
      } else {
        setLoginStatus('An error occurred while logging in');
      }
    }
  };

  useEffect(() => {
    api.get('/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
        navigate('/main');
      }
    });
  }, [navigate]);

  return (
    <main id="main">
      <Container className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <Form className={`text-justify ${styles.form}`} onSubmit={handleLogin} noValidate>
          <h2 className={styles.title}>Ingresar</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.label}>Dirección Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresar email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              isInvalid={!!emailError}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              isInvalid={!!passwordError}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className={`mb-3 ${styles.button}`}>
            Iniciar sesión
          </Button>
          <LoginError emailError={emailError} passwordError={passwordError} />
          {loginStatus && !emailError && !passwordError && (
            <p className="text-danger mt-2" role="alert">
              {loginStatus}
            </p>
          )}
          <div className={`text-center ${styles.text}`}>
            <span>¿No tienes una cuenta?</span>
            <Link to="/register">
              <Button variant="secondary" type="button" className={`ml-2 ${styles.button}`}>
                Registrarse
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </main>
  );
}

export default Login;