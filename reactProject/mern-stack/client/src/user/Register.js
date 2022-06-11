import React, { useState } from "react";
import { LoginDiv } from "../Style/UserCss";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [psConfirm, setPwConfirm] = useState("");

  return (
    <LoginDiv>
      <form action="">
        <label>Name</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <label>Confirm password</label>
        <input
          type="password"
          value={psConfirm}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button>Signup</button>
      </form>
    </LoginDiv>
  );
}

export default Register;
