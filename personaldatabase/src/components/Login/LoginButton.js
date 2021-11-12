import React from "react";

const LoginButton = ({color, text}) => {
  return (
    <button style={{backgroundColor: color}}
      className="btn">
      {text}
    </button>
  );
};

export default LoginButton;