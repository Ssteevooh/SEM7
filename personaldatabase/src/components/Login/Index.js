import React, { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import { RouteContext } from "../../Contexts/RouterContext";
import { Input } from "antd";
import PropTypes from "prop-types";
import "./Login.css";

const Index = ({ title }) => {
  const { password, username, setUsername, setPassword, loginCall } =
    useContext(LoginContext);

  const { setRoute } = useContext(RouteContext);

  const submit = (err) => {
    if (username && password) {
      const validator = loginCall(username, password);
      console.log(validator + "Validator");
      if (validator) {
        setRoute("Menu");
      } else {
        alert("Username or Password incorrect");
        setPassword("");
        setUsername("");
      }
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

Index.defaultProps = {
  title: "Stamp auction database",
};

Index.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Index;
