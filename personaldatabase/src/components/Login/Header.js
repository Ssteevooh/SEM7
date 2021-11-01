import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { Input } from "antd";
import PropTypes from "prop-types";
import "./Login.css";

const Header = ({ title }) => {
  const { password, username, setUsername, setPassword, loginCall } =
    useContext(LoginContext);

  const submit = (err) => {
    if (username && password) {
      const validator = loginCall(username, password);
      if (validator) {
        console.log("Render new view");
      } else {
        alert("Username or Password incorrect");
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="header">
      <h1 id="rcorners1">{title}</h1>

      <Input
        id="username"
        placeholder={"Username..."}
        value={username}
        onChange={(value) => setUsername(value.target.value)}
      />
      <Input
        id="password"
        placeholder={"Password..."}
        value={password}
        onChange={(value) => setPassword(value.target.value)}
      />

      <button className="loginButton" onClick={() => submit()}>
        LOGIN
      </button>
    </div>
  );
};

Header.defaultProps = {
  title: "Stamp auction database",
};

Header.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
