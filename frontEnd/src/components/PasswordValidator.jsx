import React, { useState } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Alert from 'react-bootstrap/Alert'; // Agregada la importación de Alert
import './PasswordValidator.css';

function PasswordValidator({ password }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()\-_+=<>{}/[\]:;,.\|\\^~#])[\w@$!%*?&()\-_+=<>{}/[\]:;,.\|\\^~#]{8,}$/;
    return passwordRegex.test(password);
  };

  const isValid = validatePassword(password);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="password-validator">
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id="password-tooltip">
            La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1
            número y 1 carácter especial.
          </Tooltip>
        }>
        <span
          className="info-icon"
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}>
          ?
        </span>
      </OverlayTrigger>
      {isValid ? (
        <Alert variant="success">
          La contraseña cumple con los requisitos.
        </Alert>
      ) : (
        <Alert variant="danger">
          La contraseña no cumple con los requisitos.
        </Alert>
      )}
    </div>
  );
}

export default PasswordValidator;
