import Alert from 'react-bootstrap/Alert';

function LoginError({ emailError, passwordError }) {
  return (
    <>
      {emailError && (
        <Alert variant="danger" className="mt-2" role="alert">
          {emailError}
        </Alert>
      )}
      {passwordError && (
        <Alert variant="danger" className="mt-2" role="alert">
          {passwordError}
        </Alert>
      )}
    </>
  );
}

export default LoginError;