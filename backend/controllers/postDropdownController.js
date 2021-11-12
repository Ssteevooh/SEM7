const countryDb = require("../db/Country.js");
const sellerDb = require("../db/Seller.js");
const category1Db = require("../db/Category1.js");
const category2Db = require("../db/Category2.js");
const category3Db = require("../db/Category3.js");

// POST METHODS -------------

// TODO, create objects to avoid wrong attributes being thrown to the
// db handler (request body validation)

// post a new seller, takes {"name": "example"} as a request body

exports.postSeller = async (req, res) => {
    const results = await sellerDb.createSeller(req.body);
    res.status(201).send();
};

// post a new country, takes {"name": "example"} as a request body

exports.postCountry = async (req, res) => {
    const results = await countryDb.createCountry(req.body);
    res.status(201).send();
};

// post a new category1, takes {"country": id, "category1": "example"}
// as a request body

exports.postCategory1 = async (req, res) => {
    const results = await category1Db.createCategory1(req.body);
    res.status(201).send();
};

// post a new category2, takes {"category1": id, "category2": "example"}
// as a request body

exports.postCategory2 = async (req, res) => {
    const results = await category2Db.createCategory2(req.body);
    res.status(201).send();
};

// post a new category3, takes {"category2": id, "category3": "example"}
// as a request body

exports.postCategory3 = async (req, res) => {
    const results = await category3Db.createCategory3(req.body);
    res.status(201).send();
};


// PATCH MEHTODS -------------

exports.editSeller = (req, res) => {
    res.send("seller id " + req.body.id + " edited");
};

exports.editCountry = (req, res) => {
    res.send("country id " + req.body.id + " edited");
};

exports.editCategory1 = (req, res) => {
    res.send("cat1 id " + req.body.id + " edited");
};

exports.editCategory2 = (req, res) => {
    res.send("cat2 id " + req.body.id + " edited");
};

exports.editCategory3 = (req, res) => {
    res.send("cat3 id " + req.body.id + " edited");
};