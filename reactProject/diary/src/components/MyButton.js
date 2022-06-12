import React from "react";

const MyButton = ({ text, type, onClick }) => {
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
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
