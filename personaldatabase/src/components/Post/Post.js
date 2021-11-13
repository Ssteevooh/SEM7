import React, { useContext } from "react";
import { RouteContext } from "../../Contexts/RouterContext";
import { Row, Col } from "antd";
import { ArrowLeftOutlined, SaveOutlined  } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Post.css";

const Post = ({ title }) => {

  const { setRoute } = useContext(RouteContext);

  return (
    <div>
      <div id="PostHeader">
        <button id="back" onClick={() => setRoute("Menu")} style={{float: "left"}}>
          <ArrowLeftOutlined style={{fontSize: "2.3vh", "padding-right": "6px" }}/>
          Back
        </button>
        <div id="postView">
          <p id="postText"> Post view </p>
        </div>
        <button id="save" onClick={() => console.log("Save")} style={{float: "right"}}>
          Save
          <SaveOutlined style={{fontSize: "2.3vh", "padding-left": "6px" }}/>
        </button>
      </div>
      <div id="postWrapper">
        <Row justify="space-around" align="middle" className="firstRow">
          <Col className="columnFirstRow" style={{width: "calc(33% - 5px)"}}>
            categorys
          </Col>
          <Col className="columnFirstRow" style={{width: "calc(66% - 5px)"}}>
            desc
          </Col>
        </Row>
        <Row justify="space-around" align="middle" className="secondRow">
          <Col className="columnThumbnail" style={{width: "calc(40% - 5px)"}}>
            thumbnail
          </Col>
          <Col className="columnInfo" style={{width: "calc(59% - 5px)"}}>
            <Row justify="space-around" align="middle" className="stampInfoRow">
              <Col className="stampInfoColumn" style={{width: "calc(100% - 5px)"}}>
                INFo
              </Col>
            </Row>
            <Row justify="space-around" align="middle" className="stampSellerRow">
              <Col className="stampSellerColumn" style={{width: "calc(100% - 5px)"}}>
                INFo
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Post;
