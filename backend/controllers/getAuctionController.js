const auctionDb = require("../db/Auction");

// send all information about the auction for a detailed view

exports.browseWithId = async (req, res) => {
    var results = await auctionDb.getAuctionWithId(req.query.id);
    res.status(200).send(results);
};

// send information for list view about the auctions

exports.browseListView = (req, res) => {
    res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

// send information for tile view about the auctions

exports.browseTileView = (req, res) => {
    res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

