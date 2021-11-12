import React, { createContext, useState } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dummyUser = { username: "John", password: "Doe" };

  const loginCall = async (user, pass) => {
    // TODO:  better logic
    //        Change adress to backend
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const person = res.data;
      })
      .then(() => {
        return dummyUser.username === user || user === "."
          ? dummyUser.password === pass || pass === "."
            ? true
            : false
          : false;
      });
  };

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        loginCall,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
