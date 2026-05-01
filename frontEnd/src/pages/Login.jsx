import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import LoginError from '../components/LoginError';
import styles from '../styles/Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    try {
      const response = await Axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/login`, {
        email,
        password,
      });

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        localStorage.setItem('loggedIn', 'true'); // Establecemos el indicador de inicio de sesión
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
    Axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/login`).then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        navigate('/main');
      }
    });
  }, []);

  return (
    <div>
      <Container
        className={`d-flex align-items-center justify-content-center ${styles.container}`}
        style={{ minHeight: '100vh' }}>
        <Form
          className={`custom-form text-justify ${styles.form}`}
          style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            padding: '40px',
          }}
          onSubmit={handleLogin}>
          <h2 className={styles.title}>Ingresar</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.label}>Dirección Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingresar email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className={`mb-3 ${styles.button}`}>
            Iniciar sesión
          </Button>
          <LoginError emailError={emailError} passwordError={passwordError} />{' '}
          {/* Usa el componente LoginError */}
          <div className={`text-center ${styles.text}`}>
            <span>¿No tienes una cuenta?</span>
            <Link to="/register">
              <Button
                variant="secondary"
                className={`ml-2 custom-create-account-button ${styles.button}`}>
                Registrarse
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
