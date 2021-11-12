import { LoginProvider } from "./Contexts/LoginContext";
import { RouteProvider } from "./Contexts/RouterContext";
import React from "react";

const App = () => {
  return (
    <LoginProvider>
      <div className='container'>
        <RouteProvider />
      </div>
    </LoginProvider>
  );
};

export default App;