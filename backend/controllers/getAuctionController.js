// send all information about the auction for a detailed view

exports.browseWithId = (req, res) => {
    res.send("All information about the auction " + req.body.id + " in detailed view");
};

// send information for list view about the auctions

exports.browseListView = (req, res) => {
    res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

// send information for tile view about the auctions

exports.browseTileView = (req, res) => {
    res.send("Page " + (req.body.page || 1) + " of auctions ordered by " + (req.body.orderby || "date"));
};

