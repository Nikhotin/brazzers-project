import React from "react";
import SignInSignUp from "../../../components/SignInSignUp/SignInSignUp";

function SignInPage(props) {
  return (
      <SignInSignUp
        btnText={'Войти'}
        onSign={(login, password) => {
          console.log(login, password)
        }}
      />
  );
}

export default SignInPage;
