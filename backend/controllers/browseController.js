// send all information about the auction for a detailed view

exports.browseWithId = (req, res) => {
    res.send("all information about the auction " + req.params.id + " in detailed view");
};

// send information for list view about the auctions (thumbnail image, catalog number, description, starting and selling prices, year, company)

exports.browseListView = (req, res) => {
    res.send("page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

// send information for tile view about the auctions (thumbnail image, starting and selling prices, year, company)

exports.browseTileView = (req, res) => {
    res.send("page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

