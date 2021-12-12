import React, { createContext, useState } from "react";
import axios from "axios";
import { constants } from "../Constants";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  
  const [postContent, setPostContent] = useState({});

  const emptyAuction = {};

  const setPostItem = (target, value) => {
    postContent[target] = value;
  };

  const saveAuction = () => {
    postContent.currency = "€";
    axios
      .post(`${constants.URL}/auctions`, postContent)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <PostContext.Provider
      value={{
        postContent,
        setPostContent,
        emptyAuction,
        setPostItem,
        saveAuction
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
