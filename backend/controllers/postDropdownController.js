const db = require("../db/Country.js");

// POST METHODS -------------

exports.postSeller = (req, res) => {
    res.send("new seller created");
};

exports.postCountry = async (req, res) => {
    const results = await db.createCountry(req.body);
    res.status(201).send();
};

exports.postCategory1 = (req, res) => {
    res.send("new cat1 created");
};

exports.postCategory2 = (req, res) => {
    res.send("new cat2 created");
};

exports.postCategory3 = (req, res) => {
    res.send("new cat3 created");
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