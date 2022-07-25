import React, { useState } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });
  const { name, nickname } = inputs; //비구조할당
  const onChange = (e) => {
    const { name, value } = e.target;
    //리액트에서 객체를 다루를 때는 복사를 해야한다.
    setInputs({
      ...inputs, //기존의 상태 복사
      [name]: value, //불변성을 지켜줘야 리액트가 업데이트 상태를 인지한다.
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} {nickname}
      </div>
    </div>
  );
};

export default InputSample;
