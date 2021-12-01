const auctionDb = require("../db/Auction"),
countryDb = require("../db/country"),
sellerDb = require("../db/seller"),
category1Db = require("../db/category1"),
category2Db = require("../db/category2"),
category3Db = require("../db/category3");

// send all information about the auction for a detailed view

exports.browseWithId = async (req, res) => {
  var results = await auctionDb.getAuctionWithId(req.query.id);
  
  // if no auction is found, return empty array
  if (results.length == 0) {
    res.status(200).send(results);
  } else {
    var auction = results[0];

    // sqlite3 stores booleans true = 1, false = 0, this code formats the return values back to booleans
    auction.used = auction.used === 1;
    auction.mint = auction.mint === 1;
    auction.postalItem = auction.postalItem === 1;
    auction.certificate = auction.certificate === 1;

    // populate categories, seller and country
    auction.country = (await countryDb.getCountry(auction.country))[0] || null;
    auction.seller = (await sellerDb.getSeller(auction.seller))[0] || null;
    auction.category1 = (await category1Db.getCategory1(auction.category1))[0] || null;
    auction.category2 = (await category2Db.getCategory2(auction.category2))[0] || null;
    auction.category3 = (await category3Db.getCategory3(auction.category3))[0] || null;

    res.status(200).send([auction]);
  }
};

// send information for list view about the auctions

exports.browseListView = (req, res) => {
  res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

// send information for tile view about the auctions

exports.browseTileView = (req, res) => {
  res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

