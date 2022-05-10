import React from "react";
import SignInSignUp from "../../../components/SignInSignUp/SignInSignUp.js";
import { useNavigate } from "react-router";

function SignInPage(props) {
  const navigate = useNavigate();

  return (
    <SignInSignUp
      btnText={'Войти'}
      link={{
        label: 'Зарегистрироваться',
        to: '/sign-up'
      }}
      onSign={(login, password) => {
        navigate('/main');
      }}
    />
  );
}

export default SignInPage;