import React from "react";
import SignInSignUp from "../../../components/SignInSignUp/SignInSignUp";

function SignInPage(props) {
  return (
    <div>
      <SignInSignUp textBtn={'text'} onSubmit={() => console.log('yes')} />
    </div>
  );
}

export default SignInPage;
