import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FieldsIncompleteMessage from '../components/FieldsIncompleteMessage';
import InvalidEmailMessage from '../components/InvalidEmailMessage';
import PasswordValidator from '../components/PasswordValidator';
import PasswordMismatch from '../components/PasswordMismatch';
import styles from '../styles/Register.module.css';

function Register() {
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [fieldsIncomplete, setFieldsIncomplete] = useState(false);
  const [emailIncomplete, setEmailIncomplete] = useState(false);
  const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

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
      setEmailIncomplete(true);
      return false;
    }

    return true;
  };

  const register = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFieldsIncomplete(false);
      setEmailIncomplete(false);
      setPasswordMismatch(false);

      Axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/register`, {
        username: `${firstNameReg} ${lastNameReg}`,
        email: emailReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
      navigate('/login');
    }
  };

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
          }}>
          <h2 className={`mb-4 ${styles.title}`}>Registro</h2>
          <Form.Group controlId="formGridFirstName">
            <Form.Label className={styles.label}>Primer Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Tu primer nombre"
              onChange={(e) => {
                setFirstNameReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formGridLastName">
            <Form.Label className={styles.label}>Primer Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Tu primer apellido"
              onChange={(e) => {
                setLastNameReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.label}>Dirección Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Ingresar email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={styles.label}>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Ingresar contraseña"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className={styles.label}>
              Confirmar Contraseña
            </Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              onChange={(e) => {
                setConfirmPasswordReg(e.target.value);
              }}
            />
          </Form.Group>
          <PasswordValidator password={passwordReg} />{' '}
          <PasswordMismatch show={passwordMismatch} />
          <InvalidEmailMessage email={emailReg} />
          <FieldsIncompleteMessage show={fieldsIncomplete} />
          <Button
            variant="primary"
            type="submit"
            className={`mb-3 register-button ${styles.button}`}
            onClick={register}>
            Crear cuenta
          </Button>
          <div className={`text ${styles.text}`}>
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">
              <Button
                variant="secondary"
                className={`ml-2 log-account-button ${styles.button}`}>
                Ingresar
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
