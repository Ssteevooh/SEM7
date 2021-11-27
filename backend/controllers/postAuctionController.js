const auctionDb = require("../db/Auction");
const Auction = require("../models/auction");

exports.postNewAuction = async (req, res) => {
    var auction = new Auction.Auction(req.body);
    console.log(auction); // testing
    var result = await auctionDb.createAuction(auction);
    res.status(201).send(result);
};

exports.editAuction = (req, res) => {
    res.send("auction " + req.body.id + " updated");
};