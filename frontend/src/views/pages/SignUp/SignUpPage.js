import React from "react";
import SignInSignUp from "../../../components/SignInSignUp/SignInSignUp.js";
import { useNavigate } from "react-router";

function SignUpPage(props) {
  const navigate = useNavigate();

  return (
    <SignInSignUp
      btnText={'Зарегистрироваться'}
      link={{
        label: 'Вход',
        to: '/sign-in'
      }}
      onSign={(login, password) => {
        navigate('/main')
      }}
    />
  );
}

export default SignUpPage;