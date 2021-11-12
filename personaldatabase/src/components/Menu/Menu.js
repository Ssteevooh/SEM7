import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RouteContext } from "../../Contexts/RouterContext";
import "./Menu.css";

const Menu = ({ title }) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <div>
      <h1 className="stampAuctionDatabase">{title}</h1>
    </div>
  );
};

Menu.defaultProps = {
  title: "Stamp auction database",
};

Menu.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Menu;
