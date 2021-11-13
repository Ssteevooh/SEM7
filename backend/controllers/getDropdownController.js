// database handlers
const countryDb = require("../db/Country.js");
const sellerDb = require("../db/Seller.js");
const category1Db = require("../db/Category1.js");
const category2Db = require("../db/Category2.js");
const category3Db = require("../db/Category3.js");


// get all sellers for dropdown menu as an
// array of {"id": id, "name": "example"} objects

exports.getSellers = async (req, res) => {
  const results = await sellerDb.getAllSellers();
  res.status(200).json(results);
};

// get all countries for dropdown menu as an
// array of {"id": id, "name": "example"} objects

exports.getCountries = async (req, res) => {
  const results = await countryDb.getAllCountries();
  res.status(200).json(results);
};

// get all categories under a country ( id specified on the body )
// as an array of {"id": id, "category1": "example"} objects

exports.getCategories1 = async (req, res) => {
  if (!req.body.country) {
    res.status(400).send();
    return;
  }
  
  const results = await category1Db.getCategory1(req.body.country);
  res.status(200).json(results);
};

// get all category 2's under a category1 ( id specified on the body )
// as an array of {"id": id, "category2": "example"} objects

exports.getCategories2 = async (req, res) => {
  if (!req.body.category1) {
    res.status(400).send();
    return;
  }

  const results = await category2Db.getCategory2(req.body.category1);
  res.status(200).json(results);
};

// get all category 3's under a category2 ( id specified on the body )
// as an array of {"id": id, "category3": "example"} objects

exports.getCategories3 = async (req, res) => {
  if (!req.body.category2) {
    res.status(400).send();
    return;
  }

  const results = await category3Db.getCategory3(req.body.category2);
  res.status(200).json(results);
};