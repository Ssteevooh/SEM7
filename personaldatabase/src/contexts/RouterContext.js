import React, { createContext, useState, useEffect } from "react";
import Index from "../Components/Login/Index";
import Menu from "../Components/Menu/Menu";

export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState("Index");

  const Route = () => {
    switch (route) {
      case "Index":
        return <Index />;
      case "Menu":
        return <Menu />;
      default:
        return <Index />;
    }
  };
  return (
    <RouteContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      <Route />
      {children}
    </RouteContext.Provider>
  );
};
