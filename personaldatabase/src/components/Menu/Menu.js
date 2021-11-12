import React from "react";
import PropTypes from "prop-types";

const Menu = ({ title }) => {
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
