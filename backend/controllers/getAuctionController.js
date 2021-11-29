const auctionDb = require("../db/Auction");

// send all information about the auction for a detailed view

exports.browseWithId = async (req, res) => {
    var results = await auctionDb.getAuctionWithId(req.query.id);
    
    // sqlite3 stores booleans true = 1, false = 0, this code formats the return values back to booleans
    if (results.length > 0) {
        results[0].used = results[0].used === 1;
        results[0].mint = results[0].mint === 1;
        results[0].postalItem = results[0].postalItem === 1;
        results[0].certificate = results[0].certificate === 1;
    }

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

