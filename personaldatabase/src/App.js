import { LoginProvider } from "./Contexts/LoginContext";
import { RouteProvider } from "./Contexts/RouterContext";
import { PostProvider } from "./Contexts/PostContext";
import React from "react";

const App = () => {
  return (
    <LoginProvider>
      <div className='container'>
        <PostProvider>
          <RouteProvider />
        </PostProvider>
      </div>
    </LoginProvider>
  );
};

export default App;