import React from "react";
import PropTypes from "prop-types";
import { RouteContext } from "../../Contexts/RouterContext";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./Post.css";

const Post = ({ title }) => {
  return (
    <div id="postWrapper">
      <Row justify="space-around" align="middle">
        <Col span={12} className="column">
          test
        </Col>
        <Col span={11} className="column">
          test
        </Col>
      </Row>
    </div>
  );
};

Post.defaultProps = {
  title: "Stamp auction database",
};

Post.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
