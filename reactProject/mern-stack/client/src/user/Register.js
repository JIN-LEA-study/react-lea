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
  const [flag, setFlag] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("");

  const RegisterFunc = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(name && email && pw && setPwConfirm)) {
      return alert("모든 값을 채워주세요!");
    }
    if (pw !== pwConfirm) {
      return alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다");
    }
    if (!nameCheck) {
      return alert("닉네임 중복검사를 진행해 주세요");
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
      setFlag(false);
      if (response.data.success) {
        //회원가입 성공시
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } else {
        //회원가입 실패시
        return alert("회원가입이 실패하였습니다.");
      }
    });
  };

  const nameCheckFunc = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("닉네임을 입력해주세요");
    }
    let body = {
      displayName: name,
    };
    axios.post("/api/user/namecheck", body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo("사용 가능한 닉네임입니다");
        } else {
          setNameInfo("사용 불가능한 닉네임입니다");
        }
      }
    });
  };
  return (
    <LoginDiv>
      <form action="">
        <label>Nickname</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          disabled={nameCheck} //name이 true이면 수정 안됨
        />
        {nameInfo}
        <button onClick={(e) => nameCheckFunc(e)}>nickname check</button>
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
          minLength={8}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <label>Confirm password</label>
        <input
          type="password"
          value={pwConfirm}
          minLength={8}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button
          // 여러번 클릭방지
          disabled={flag}
          onClick={(e) => RegisterFunc(e)}
        >
          Signup
        </button>
      </form>
    </LoginDiv>
  );
}

export default Register;
