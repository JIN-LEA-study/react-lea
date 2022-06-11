import React, { useState } from "react";
import { LoginDiv } from "../Style/UserCss";
import firebase from "../component/firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const RegisterFunc = async (e) => {
    e.preventDefault();
    if (!(name && email && pw && setPwConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (pw !== pwConfirm) {
      return alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다");
    }
    // firebase가 회원가입 하기 전까지 잠시 기다려주세요
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw);
    await createdUser.user.updateProfile({
      displayName: name,
    });

    console.log(createdUser.user);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
    };
    axios.post("/api/user/register", body).then((response) => {
      if (response.data.success) {
        //회원가입 성공시
        navigate("/login");
      } else {
        //회원가입 실패시
        return alert("회원가입이 실패하였습니다.");
      }
    });
  };

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
          value={pwConfirm}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button onClick={(e) => RegisterFunc(e)}>Signup</button>
      </form>
    </LoginDiv>
  );
}

export default Register;
