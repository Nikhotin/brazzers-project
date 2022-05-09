import React, {useState} from "react";

function SignInSignUp({btnText, onSign}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container with img">
        <div className="signIn">
          <input type="text" className="login" onChange={(e) => setLogin(e.target.value)} />
          <input type="text" className="password" onChange={(e) => setPassword(e.target.value)} />

          <button type="button" onClick={() => onSign({ login, password })}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
