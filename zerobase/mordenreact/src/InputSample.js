import React from "react";

const InputSample = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} />
      <button>초기화</button>
      <div>
        <b>값: </b>
        어쩌고 저쩌고
      </div>
    </div>
  );
};

export default InputSample;
