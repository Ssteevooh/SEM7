import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { constants } from "../Constants";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    
  const emptyAuction = {};

  const setPostItem = (target, value) => {
    postContent[target] = value;
  };

  const saveAuction = () => {
    axios
      .post(`${constants.URL}/auctions`, {body: postContent})
      .then((res) => {
        console.log(res);
      });
  };


  const [postContent, setPostContent] = useState(emptyAuction);

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
