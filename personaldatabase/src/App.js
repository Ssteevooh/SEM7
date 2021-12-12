import { LoginProvider } from "./Contexts/LoginContext";
import { RouteProvider } from "./Contexts/RouterContext";
import { PostProvider } from "./Contexts/PostContext";
import { BrowseProvider } from "./Contexts/BrowseContext";
import React from "react";

const App = () => {
  return (
    <LoginProvider>
      <div className='container'>
        <BrowseProvider>
          <PostProvider>
            <RouteProvider />
          </PostProvider>
        </BrowseProvider>
      </div>
    </LoginProvider>
  );
};

export default App;