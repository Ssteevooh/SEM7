const auctionDb = require("../db/Auction");
const Auction = require("../models/auction");
const countryDb = require("../db/country");

exports.postNewAuction = async (req, res) => {

    // create new auction object based on model
    var auction = new Auction.Auction(req.body);

    // this function checks if the auction somehow got country, seller or category id's
    // that dont exist at the moment
    if (await auction.invalidCategories()) {
        res.status(400).send();
    } else {
    var result = await auctionDb.createAuction(auction);
    res.status(201).send(result);
    }
};

exports.editAuction = (req, res) => {
    res.send("auction " + req.body.id + " updated");
};