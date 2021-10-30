import React, { useState } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import "./Login.css";

const Header = ({ title }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submit = (err) => {
    if (username && password) {
      console.log(username.target.value);
      console.log(password.target.value);
    } else {
      console.log("Error");
    }
  };

  return (
    <body className="header">
      <h1 id="rcorners1">{title}</h1>

      <Input
        id="username"
        placeholder={"Username..."}
        onChange={(value) => setUsername(value)}
      />
      <Input
        id="password"
        placeholder={"Password..."}
        onChange={(value) => setPassword(value)}
      />

      <button className="loginButton" onClick={() => submit()}>
        LOGIN
      </button>
    </body>
  );
};

Header.defaultProps = {
  title: "Stamp auction database",
};

Header.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
