import Alert from 'react-bootstrap/Alert';

function InvalidEmailMessage({ email }) {
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  if (!email) return null;

  return (
    <Alert variant={isValidEmail(email) ? 'success' : 'danger'} role={isValidEmail(email) ? 'status' : 'alert'}>
      {isValidEmail(email)
        ? 'El correo electrónico ingresado es válido.'
        : 'Por favor, ingrese un correo electrónico válido.'}
    </Alert>
  );
}

export default InvalidEmailMessage;