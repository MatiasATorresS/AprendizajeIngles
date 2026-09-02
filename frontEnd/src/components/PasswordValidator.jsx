import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Alert from 'react-bootstrap/Alert';
import './PasswordValidator.css';

function PasswordValidator({ password }) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()\-_+=<>{}/[\]:;,.,\\^~#])[\w@$!%*?&()\-_+=<>{}/[\]:;,.,\\^~#]{8,}$/;

  const isValid = passwordRegex.test(password);

  return (
    <div className="password-validator">
      <OverlayTrigger
        placement="right"
        trigger={['hover', 'focus']}
        overlay={
          <Tooltip id="password-tooltip">
            La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1
            número y 1 carácter especial.
          </Tooltip>
        }>
        <button type="button" className="info-icon" aria-label="Ver requisitos de la contraseña">
          ?
        </button>
      </OverlayTrigger>
      {isValid ? (
        <Alert variant="success" role="status">
          La contraseña cumple con los requisitos.
        </Alert>
      ) : (
        <Alert variant="danger" role="alert">
          La contraseña no cumple con los requisitos.
        </Alert>
      )}
    </div>
  );
}

export default PasswordValidator;