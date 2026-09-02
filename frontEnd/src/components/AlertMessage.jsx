import Alert from 'react-bootstrap/Alert';

function AlertMessage({ message, variant = 'danger' }) {
  if (!message) return null;
  return (
    <Alert variant={variant} role="alert">
      {message}
    </Alert>
  );
}

export default AlertMessage;