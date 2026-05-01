// PasswordMismatch.jsx
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function PasswordMismatch({ show }) {
  if (!show) {
    return null; // No mostrar el mensaje si show es falso
  }

  return (
    <Alert variant="danger">
      Las contraseñas no coinciden. Por favor, inténtalo de nuevo.
    </Alert>
  );
}

export default PasswordMismatch;
