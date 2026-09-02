import { useId } from 'react';
import { passwordRequirements } from '../utils/password';
import './PasswordValidator.css';

function PasswordValidator({ password, show }) {
  const headingId = useId();

  if (!show) return null;

  return (
    <div className="password-validator" role="group" aria-labelledby={headingId}>
      <p id={headingId} className="password-validator__title">
        La contraseña debe contener:
      </p>
      <ul className="password-validator__list">
        {passwordRequirements.map(({ label, test }) => {
          const met = test(password);
          return (
            <li key={label} className={met ? 'is-met' : ''}>
              <span className="password-validator__mark" aria-hidden="true">
                {met ? '✓' : '•'}
              </span>
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PasswordValidator;