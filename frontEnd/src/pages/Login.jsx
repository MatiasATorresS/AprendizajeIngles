import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Login.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [serverErrors, setServerErrors] = useState({ email: '', password: '' });
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  useDocumentMeta('Iniciar sesión · Aprendizaje de Inglés');

  useEffect(() => {
    let active = true;

    api
      .get('/login')
      .then((response) => {
        if (!active || response.data.loggedIn !== true) return;
        const user = response.data.user?.[0];
        if (user) {
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user));
        }
        navigate('/main');
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [navigate]);

  const emailValid = EMAIL_REGEX.test(email.trim());

  const fieldErrors = {
    email: !email.trim()
      ? 'Ingresa tu correo electrónico.'
      : emailValid
        ? ''
        : 'Ingresa un correo electrónico válido.',
    password: password ? '' : 'Ingresa tu contraseña.',
  };

  const emailError = fieldErrors.email || serverErrors.email;
  const passwordError = fieldErrors.password || serverErrors.password;

  const showEmailError = (attempted || touched.email || serverErrors.email) && !!emailError;
  const showPasswordError = (attempted || touched.password || serverErrors.password) && !!passwordError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);
    setFormError('');

    if (Object.values(fieldErrors).some(Boolean)) return;

    setSubmitting(true);
    try {
      const response = await api.post('/login', {
        email: email.trim(),
        password,
      });

      if (response.data.message) {
        setFormError(response.data.message);
        setSubmitting(false);
        return;
      }

      const user = response.data[0];
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/main');
    } catch (error) {
      setSubmitting(false);
      if (error.response && error.response.status === 401) {
        const message = error.response.data?.message;
        if (message === 'User does not exist') {
          setServerErrors((prev) => ({ ...prev, email: 'El correo no está registrado.' }));
        } else if (message === 'Wrong email/password') {
          setServerErrors((prev) => ({ ...prev, password: 'Contraseña incorrecta.' }));
        } else {
          setFormError('Correo o contraseña incorrectos.');
        }
      } else {
        setFormError('No se pudo iniciar sesión. Inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <main id="main">
      <Container className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <Form noValidate onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Bienvenido de nuevo</h2>
          <p className={styles.subtitle}>Inicia sesión para continuar practicando.</p>

          <Form.Group controlId="loginEmail">
            <Form.Label className={styles.label}>Correo electrónico</Form.Label>
            <Form.Control
              required
              autoFocus
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (serverErrors.email) {
                  setServerErrors((prev) => ({ ...prev, email: '' }));
                }
              }}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              isValid={touched.email && emailValid}
              isInvalid={showEmailError}
            />
            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Correo válido.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="loginPassword">
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Tu contraseña"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (serverErrors.password) {
                    setServerErrors((prev) => ({ ...prev, password: '' }));
                  }
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                isValid={touched.password && password.length > 0}
                isInvalid={showPasswordError}
              />
              <Button
                type="button"
                variant="outline-secondary"
                className={styles.passwordToggle}
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                aria-pressed={showPassword}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </Button>
            </InputGroup>
            <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
          </Form.Group>

          {formError && (
            <div className={styles.formError} role="alert">
              {formError}
            </div>
          )}

          <Button
            type="submit"
            className={styles.button}
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? 'Iniciando sesión…' : 'Iniciar sesión'}
          </Button>

          <div className={styles.text}>
            <span>¿No tienes una cuenta?</span>
            <Link to="/register">
              <Button type="button" className={styles.secondaryButton}>
                Crear cuenta
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </main>
  );
}

export default Login;