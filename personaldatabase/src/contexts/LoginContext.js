import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dummyUser = { username: "John", password: "Doe" };

  const loginCall = (user, pass) => {
    /*fetch("https://www.google.com/")
      .then(console.log("TODO Caali backkiin"))
      .then((result) => {
        return dummyUser.username === user
          ? dummyUser.password === pass
            ? true
            : false
          : false;
      });*/
    return dummyUser.username === user
      ? dummyUser.password === pass
        ? true
        : false
      : false;
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
