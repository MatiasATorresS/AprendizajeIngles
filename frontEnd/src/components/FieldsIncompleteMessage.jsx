// FieldsIncompleteMessage.jsx
import Alert from 'react-bootstrap/Alert';

function FieldsIncompleteMessage({ show }) {
  if (!show) {
    return null; // No mostrar el mensaje si show es falso
  }

  return (
    <Alert variant="danger" role="alert">
      Por favor, complete todos los campos.
    </Alert>
  );
}

export default FieldsIncompleteMessage;