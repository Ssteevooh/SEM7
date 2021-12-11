import React, { useContext, useEffect, useLayoutEffect, useState, useRef } from "react";
import { RouteContext } from "../../Contexts/RouterContext";
import { PostContext } from "../../Contexts/PostContext";
import { constants } from "../../Constants";
import { Row, Col, Select, Input, Checkbox } from "antd";
import axios from "axios";
import { ArrowLeftOutlined, SaveOutlined  } from "@ant-design/icons";
import logo from "../../public/images/StampLogo.png";
import "antd/dist/antd.css";
import "./Post.css";

const Post = () => {

  const { setRoute } = useContext(RouteContext);
  const { postItem, setPostContent, emptyAuction, setPostItem, saveAuction } = useContext(PostContext);

  const { Option } = Select;

  const { TextArea } = Input;
  
  const categoryNames = ["Category 1", "Category 2", "Category 3"];
  const categoryAttributeNames = ["category1", "category2", "category3"];


  const additionalImages = ["image1", "image2", "image3"];

  const checkBoxTitles = ["Used", "Mint", "Postal item", "Certificate"];
  const checkBoxAttributeNames = ["used", "mint", "postalItem", "certificate"];

  const [countryOptions, setCountryOptions] = useState([]);

  const [countryValue, setCountryValue] = useState("Esimerkki");

  const changeCountry = (element)=> {
    setPostItem("country", element);
    setCountryValue(element);
  };

  useLayoutEffect(() => {
    axios
      .get(`${constants.URL}/dropdown/country`)
      .then((res) => {
        setCountryOptions(res.data);
      });
  },[]);

  useEffect(() => { // TODO : Preserve some details.
    setPostContent({});
  },[]);

  useEffect(() => {
    setCountryValue(countryValue);
  },[countryValue]);

  const categorys = categoryNames.map((category, index) =>
    <Select
      key={category}
      className="categoryMenu"
      showSearch
      placeholder={`${category} ...`}
      optionFilterProp="children"
      onChange={(e) => setPostItem(categoryAttributeNames[index], e)}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  );

  const imagesColumns = additionalImages.map((image) =>
    <Col
      key={image}
      id={image}
      align="middle"
      justify="space-around"
      className="columnThumbnailAdditional"
      style={{width: "10vw"}}>
      <p> Other image </p>
    </Col>
  );
  
  const Checkboxes = checkBoxTitles.map((title, index) =>
    <Checkbox
      key={title}
      id={title}
      onChange={(e) => setPostItem(checkBoxAttributeNames[index], e.target.checked)}>
      <i className="checkBoxText">{title}</i>
    </Checkbox>
  );

  const countryOptionsComponent = countryOptions.map((country) =>
    <Option
      key={country.id}
      id={country.id}
      value={country.id}>
      {country.name}
    </Option>
  );

  return (
    <div>
      <div id="PostHeader">
        <button id="back" onClick={() => setRoute("Menu")} style={{float: "left"}}>
          <ArrowLeftOutlined style={{fontSize: "2.3vh", paddingRight: "6px" }}/>
          Back
        </button>
        <div id="postView">
          <p id="postText"> Post view </p>
        </div>
        <button id="save" onClick={() => saveAuction()} style={{float: "right"}}>
          Save
          <SaveOutlined style={{fontSize: "2.3vh", paddingLeft: "6px" }}/>
        </button>
      </div>
      <div id="postWrapper">
        <Row justify="space-around" align="middle" className="firstRow">
          <Col className="columnFirstRow" style={{width: "calc(33% - 5px)"}}>
            <div>
              <Select
                className="categoryMenu"
                showSearch
                placeholder="Country ..."
                optionFilterProp="children"
                onChange={(e) => changeCountry(e)}
                filterOption={(input, option) => 
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {countryOptionsComponent}
              </Select>
              {categorys}
            </div>
          </Col>
          <Col className="columnFirstRow" style={{width: "calc(66% - 5px)"}}>
            <TextArea
              placeholder="Description"
              rows={2}
              id="descriptionField"
              onChange={(e) => setPostItem("description", e.target.value)}
            />
          </Col>
        </Row>
        <Row justify="space-around" align="middle" className="secondRow">
          <Col className="columnThumbnail" style={{width: "calc(40% - 5px)"}}>
            <Row justify="space-around" align="middle" className="thumbnailFirstRow"> 
              <img src={logo} alt="Logo"></img>
            </Row>
            <Row justify="space-around" align="middle" className="thumbnailSecondRow"> 
              {imagesColumns}
            </Row>
          </Col>



          <Col className="columnInfo" style={{width: "calc(59% - 5px)"}}>
            <Row justify="space-around" align="middle" className="stampInfoRow">
              <Col className="stampInfoColumn" style={{width: "calc(100% - 5px)"}}>
                <Row justify="space-around" align="middle" className="stampInfoRowTop">
                  {Checkboxes}
                  <Input id="infoInput" placeholder="Catalogue number" onChange={(e) => setPostItem("catalogueNumber", e.target.value)}/>
                </Row>
                <Row justify="space-around" align="middle" className="stampInfoRowTop">

                  <Input id="infoInputStartingPrice" placeholder="Starting price" onChange={(e) => setPostItem("startingPrice", e.target.value)}/>
                  <Input id="infoInputSellingPrice" placeholder="Selling price" onChange={(e) => setPostItem("sellingPrice", e.target.value)}/>
                  <Input id="infoInputCurrency" placeholder="Selling price" value={"€"} disabled={true}/>

                </Row>
              </Col>
            </Row>
            <Row justify="space-around" align="middle" className="stampSellerRow">
              <Col className="stampSellerColumn" style={{width: "calc(100% - 5px)"}}>
                <Row justify="space-around" align="middle" className="stampInfoRowBottom">
                  <Input className="infoInputBottom" placeholder="Selling year" onChange={(e) => setPostItem("sellingYear", e.target.value)}/>
                  <Input className="infoInputBottom" placeholder="Auction number" onChange={(e) => setPostItem("auctionNumber", e.target.value)}/>
                </Row>
                <Row justify="space-around" align="middle" className="stampInfoRowBottom">
                  <Input className="infoInputBottom" placeholder="Seller" onChange={(e) => setPostItem("seller", e.target.value)}/>
                  <Input className="infoInputBottom" placeholder="Lot number" onChange={(e) => setPostItem("lotNumber", e.target.value)}/>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Post;
