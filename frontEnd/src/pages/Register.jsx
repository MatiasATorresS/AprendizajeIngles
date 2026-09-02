import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FieldsIncompleteMessage from '../components/FieldsIncompleteMessage';
import InvalidEmailMessage from '../components/InvalidEmailMessage';
import PasswordValidator from '../components/PasswordValidator';
import PasswordMismatch from '../components/PasswordMismatch';
import useDocumentMeta from '../hooks/useDocumentMeta';
import styles from '../styles/Register.module.css';

function Register() {
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [fieldsIncomplete, setFieldsIncomplete] = useState(false);
  const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  useDocumentMeta('Crear cuenta · Aprendizaje de Inglés');

  const validateForm = () => {
    if (!firstNameReg || !lastNameReg || !emailReg || !passwordReg) {
      setFieldsIncomplete(true);
      return false;
    }

    if (passwordReg !== confirmPasswordReg) {
      setPasswordMismatch(true);
      return false;
    }

    if (!emailReg.includes('@') || !emailReg.includes('.')) {
      return false;
    }

    return true;
  };

  const register = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      setFieldsIncomplete(false);
      setPasswordMismatch(false);

      try {
        await api.post('/register', {
          username: `${firstNameReg} ${lastNameReg}`,
          email: emailReg,
          password: passwordReg,
        });
        navigate('/login');
      } catch (error) {
        console.error(error);
        setSubmitError(
          'No se pudo crear la cuenta. Por favor, inténtalo de nuevo.'
        );
      }
    }
  };

  return (
    <main id="main">
      <Container className={`d-flex align-items-center justify-content-center ${styles.container}`}>
        <Form className={`text-justify ${styles.form}`} onSubmit={register} noValidate>
          <h2 className={`mb-4 ${styles.title}`}>Registro</h2>
          <Form.Group controlId="formGridFirstName">
            <Form.Label className={styles.label}>Primer Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Tu primer nombre"
              autoComplete="given-name"
              onChange={(e) => setFirstNameReg(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGridLastName">
            <Form.Label className={styles.label}>Primer Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Tu primer apellido"
              autoComplete="family-name"
              onChange={(e) => setLastNameReg(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.label}>Dirección Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Ingresar email"
              autoComplete="email"
              onChange={(e) => setEmailReg(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Ingresar contraseña"
              autoComplete="new-password"
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className={styles.label}>Confirmar Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
              onChange={(e) => setConfirmPasswordReg(e.target.value)}
            />
          </Form.Group>
          <PasswordValidator password={passwordReg} />
          <PasswordMismatch show={passwordMismatch} />
          <InvalidEmailMessage email={emailReg} />
          <FieldsIncompleteMessage show={fieldsIncomplete} />
          {submitError && (
            <p className="text-danger mt-2" role="alert">
              {submitError}
            </p>
          )}
          <Button variant="primary" type="submit" className={`mb-3 ${styles['register-button']}`}>
            Crear cuenta
          </Button>
          <div className={`text ${styles.text}`}>
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">
              <Button variant="secondary" type="button" className={`ml-2 ${styles['log-account-button']}`}>
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