const SPECIAL_CHARS = "@$!%*?&()\\-_+=<>{}[\\]/:;.,\\^~#\\\\";
const SPECIAL_REGEX = new RegExp(`[${SPECIAL_CHARS}]`);
const PASSWORD_REGEX = new RegExp(
  `^(?=.*[A-Z])(?=.*\\d)(?=.*[${SPECIAL_CHARS}])[\\w${SPECIAL_CHARS}]{8,}$`
);

export const passwordRequirements = [
  { label: 'Al menos 8 caracteres', test: (pwd) => pwd.length >= 8 },
  { label: 'Una letra mayúscula', test: (pwd) => /[A-Z]/.test(pwd) },
  { label: 'Un número', test: (pwd) => /\d/.test(pwd) },
  { label: 'Un carácter especial', test: (pwd) => SPECIAL_REGEX.test(pwd) },
];

export const isPasswordValid = (password) => PASSWORD_REGEX.test(password);