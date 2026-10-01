const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateRegistration(body) {
  if (!body || typeof body.username !== 'string' ||
      typeof body.email !== 'string' || typeof body.password !== 'string') {
    return { error: 'Completa todos los campos.' };
  }
  const username = body.username.trim().replace(/\s+/g, ' ');
  const email = body.email.trim().toLowerCase();
  const password = body.password;

  if (username.length < 2 || username.length > 100 || /[\x00-\x1f\x7f]/.test(username)) {
    return { error: 'El nombre debe tener entre 2 y 100 caracteres válidos.' };
  }
  if (email.length > 254 || !EMAIL_REGEX.test(email)) {
    return { error: 'Ingresa un correo electrónico válido.' };
  }
  if (password.length < 8 || Buffer.byteLength(password, 'utf8') > 72 ||
      !/[A-Z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9\s]/.test(password)) {
    return { error: 'La contraseña debe tener 8 a 72 bytes, mayúscula, número y carácter especial.' };
  }
  return { value: { username, email, password } };
}

module.exports = { validateRegistration };
