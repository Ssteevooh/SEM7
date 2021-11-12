const countryDb = require("../db/Country.js");
const sellerDb = require("../db/Seller.js");

// get all sellers for dropdown menu

exports.getSellers = async (req, res) => {
    const results = await sellerDb.getAllSellers();
    res.status(201).json(results);
};

// get all countries for dropdown menu

exports.getCountries = async (req, res) => {
    const results = await countryDb.getAllCountries();
    res.status(201).json(results);
};

// get all categories under a country specified on the body

exports.getCategories1 = (req, res) => {
    res.send("all categories under " + req.body.country);
};

// get all category 2's under a category1 specified on the body

exports.getCategories2 = (req, res) => {
    res.send("all category 2's under " + req.body.category1);
};

// get all category 3's under a category2 specified on the body

exports.getCategories3 = (req, res) => {
    res.send("all category 3's under " + req.body.category2);
};