import React, {useState} from "react";
import styles from './SignInSignUp.module.scss';
import { NavLink } from "react-router-dom";


function SignInSignUp( {btnText, link, onSign = {} } ) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.signInForm}>
      <div className={styles.signForm}>
        <input type="text"
          className={styles.input}
          onChange={(e) => setLogin(e.target.value)}
          placeholder={'Логин'}
        />
        <input type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'Пароль'}
        />

        <button type="button" onClick={() => onSign({ login, password })}>
          {btnText}
        </button>
      </div>

      <div className={styles.signUpLink}>
        <NavLink
          className={styles.NavLink}
          to={link.to}
        >
          {link.label}
        </NavLink>
      </div>
    </div>
  );
}

export default SignInSignUp;