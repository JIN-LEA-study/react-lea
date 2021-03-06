import React, { useState, useEffect } from "react";
import { LoginDiv } from "../Style/UserCss";
import { useNavigate } from "react-router-dom";
import firebase from "../component/firebase";
import { useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const SingInFunc = async (e) => {
    e.preventDefault();
    if (!(email && pw)) {
      return alert("모든 값을 채워주세요.");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일입니다.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인이 실패하였습니다.");
      }
    }
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, []);

  // 에러 메세지가 나오고 5초의 시간이 흐르면 에러 메세지가 사라짐
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [errorMsg]);

  return (
    <LoginDiv>
      <form action="">
        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        {errorMsg !== "" && <p>{errorMsg}</p>}
        <button onClick={(e) => SingInFunc(e)}>LogIn</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Signup
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
