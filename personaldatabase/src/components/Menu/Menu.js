import React from "react";
import PropTypes from "prop-types";

const Menu = ({ title }) => {
  return (
    <div className="header">
      <h1 id="rcorners1">{title}</h1>

      <button className="loginButton" onClick={() => console.log("Jee")}>
        LOGIN
      </button>
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
