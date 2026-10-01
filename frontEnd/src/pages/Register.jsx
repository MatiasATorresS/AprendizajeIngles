import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import PasswordValidator from '../components/PasswordValidator';
import { isPasswordValid } from '../utils/password';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Register.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({});
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  useDocumentMeta('Crear cuenta · Aprendizaje de Inglés');

  const emailValid = EMAIL_REGEX.test(email.trim());
  const passwordValid = isPasswordValid(password);
  const confirmMatches = confirmPassword === password;

  const fieldErrors = {
    firstName: !firstName.trim() ? 'Ingresa tu nombre.' : '',
    lastName: !lastName.trim() ? 'Ingresa tu apellido.' : '',
    email: !email.trim()
      ? 'Ingresa tu correo electrónico.'
      : emailValid
        ? ''
        : 'Ingresa un correo electrónico válido.',
    password: password
      ? passwordValid
        ? ''
        : 'La contraseña debe cumplir con los requisitos.'
      : 'Ingresa una contraseña.',
    confirmPassword: confirmPassword
      ? confirmMatches
        ? ''
        : 'Las contraseñas no coinciden.'
      : 'Confirma tu contraseña.',
  };

  const shouldShow = (field) => attempted || touched[field];

  const markTouched = (field) => setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);
    setSubmitError('');

    if (Object.values(fieldErrors).some(Boolean)) return;

    setSubmitting(true);
    try {
      await api.post('/register', {
        username: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        password,
      });
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error);
      setSubmitError(error.response?.data?.message || 'No se pudo crear la cuenta. Inténtalo de nuevo más tarde.');
      setSubmitting(false);
    }
  };

  return (
    <main id="main">
      <Container className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <Form noValidate onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Crear tu cuenta</h2>
          <p className={styles.subtitle}>Empieza a practicar inglés en minutos.</p>

          <Form.Group controlId="registerFirstName">
            <Form.Label className={styles.label}>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Tu nombre"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => markTouched('firstName')}
              isInvalid={shouldShow('firstName') && !!fieldErrors.firstName}
            />
            <Form.Control.Feedback type="invalid">{fieldErrors.firstName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="registerLastName">
            <Form.Label className={styles.label}>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Tu apellido"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => markTouched('lastName')}
              isInvalid={shouldShow('lastName') && !!fieldErrors.lastName}
            />
            <Form.Control.Feedback type="invalid">{fieldErrors.lastName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="registerEmail">
            <Form.Label className={styles.label}>Correo electrónico</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => markTouched('email')}
              isValid={touched.email && emailValid}
              isInvalid={shouldShow('email') && !!fieldErrors.email}
            />
            <Form.Control.Feedback type="invalid">{fieldErrors.email}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Correo válido.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="registerPassword">
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Crea una contraseña"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => {
                markTouched('password');
                setPasswordFocused(false);
              }}
              isValid={touched.password && passwordValid}
              isInvalid={shouldShow('password') && !!fieldErrors.password}
            />
            <Form.Control.Feedback type="invalid">{fieldErrors.password}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">La contraseña cumple con los requisitos.</Form.Control.Feedback>
            <PasswordValidator
              password={password}
              show={passwordFocused || password.length > 0 || shouldShow('password')}
            />
          </Form.Group>

          <Form.Group controlId="registerConfirmPassword">
            <Form.Label className={styles.label}>Confirmar contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              placeholder="Repite la contraseña"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => markTouched('confirmPassword')}
              isValid={confirmPassword.length > 0 && confirmMatches}
              isInvalid={shouldShow('confirmPassword') && !!fieldErrors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">{fieldErrors.confirmPassword}</Form.Control.Feedback>
          </Form.Group>

          {submitError && (
            <div className={styles.submitError} role="alert">
              {submitError}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            className={styles['register-button']}
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? 'Creando cuenta…' : 'Crear cuenta'}
          </Button>

          <div className={styles.text}>
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">
              <Button variant="secondary" type="button" className={styles['log-account-button']}>
                Ingresar
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </main>
  );
}

export default Register;
