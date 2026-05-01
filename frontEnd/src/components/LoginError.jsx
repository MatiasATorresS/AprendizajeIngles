import React from 'react';
import Alert from 'react-bootstrap/Alert';

function LoginError({ emailError, passwordError }) {
  return (
    <>
      {emailError && (
        <Alert variant="danger" className="mt-2">
          {emailError}
        </Alert>
      )}
      {passwordError && (
        <Alert variant="danger" className="mt-2">
          {passwordError}
        </Alert>
      )}
    </>
  );
}

export default LoginError;
