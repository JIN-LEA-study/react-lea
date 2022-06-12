import React from "react";

const MyButton = ({ text, type, onClick }) => {
  // 이 안에 typ이 있다면 타입 그대로 반환, 없다면 default
  const btnType = ["positive", "negative"].includes(type) ? type : "dafault";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defalutProps = {
  type: "default",
};

export default MyButton;
