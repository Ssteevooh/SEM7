const auctionDb = require("../db/Auction");

exports.postNewAuction = async (req, res) => {
    var auction = {
        startingPrice: req.body.startingPrice,
        sellingPrice: req.body.sellingPrice,
        currency: req.body.currency,
        seller: req.body.seller,
        sellingYear: req.body.sellingYear,
        description: req.body.description,
        catalogueNumber: req.body.catalogueNumber,
        country: req.body.country,
        category1: req.body.category1,
        category2: req.body.category2,
        category3: req.body.category3,
        used: req.body.used,
        mint: req.body.mint,
        postalItem: req.body.postalItem,
        certificate: req.body.certificate,
        auctionNumber: req.body.auctionNumber,
        lotNumber: req.body.lotNumber,
        user: req.body.user
    };
    var result = await auctionDb.createAuction(auction);
    res.status(201).send();
};

exports.editAuction = (req, res) => {
    res.send("auction " + req.body.id + " updated");
};