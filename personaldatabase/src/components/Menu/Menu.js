import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { RouteContext } from "../../Contexts/RouterContext";
import "antd/dist/antd.css";
import { Layout, Menu as antdMenu, Drawer } from "antd";
import {
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./Menu.css";

const Menu = ({ title }) => {
  const { setRoute } = useContext(RouteContext);
  const [visible, setVisible] = useState(false);

  const showDrawer = (value) => {
    setVisible(value);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <h1 className="stampAuctionDatabase">{title}</h1>
      <button className="browseButton">
        Browse
      </button>
      <button className="postButton" onClick={() => setRoute("Post")}>
        Post
      </button>
      <UnorderedListOutlined id="sideMenuButton" onClick={() => showDrawer(true)}/>
      <Drawer title="John Doe" placement="right" onClose={onClose} visible={visible}>
      </Drawer>
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
