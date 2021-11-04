// send all information about the auction for a detailed view

exports.browseWithId = (req, res) => {
    res.send("All information about the auction " + req.params.id + " in detailed view");
};

// send information for list view about the auctions (thumbnail image, catalog number, description, starting and selling prices, year, company)

exports.browseListView = (req, res) => {
    res.send("Page " + (req.query.page || 1) + " of auctions ordered by " + (req.query.orderby || "date"));
};

// send information for tile view about the auctions (thumbnail image, starting and selling prices, year, company)

exports.browseTileView = (req, res) => {
    res.send("Page " + (req.query.page || 1) + " of auctions ordered by " + (req.query.orderby || "date"));
};

