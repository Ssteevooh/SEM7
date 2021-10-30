// -----Auction browsing --------

// send all information about the auction for a detailed view

exports.browseWithId = (req, res) => {
    res.send("all information about the auction " + req.params.id + " in detailed view");
};

// send information for list view about the auctions (thumbnail image, catalog number, description, starting and selling prices, year, company)

exports.browseListView = (req, res) => {
    res.send("page " + (req.query.page || 1) + " of auctions ordered by " + (req.query.orderby || "date"));
};

// send information for tile view about the auctions (thumbnail image, starting and selling prices, year, company)

exports.browseTileView = (req, res) => {
    res.send("page " + (req.query.page || 1) + " of auctions ordered by " + (req.query.orderby || "date"));
};

// -------- Dropdown items --------

// get all sellers for dropdown menu

exports.getSellers = (req, res) => {
    res.send("all sellers");
};

// get all countries for dropdown menu

exports.getCountries = (req, res) => {
    res.send("all countries");
};

// get all categories under a country specified on the query

exports.getCategories1 = (req, res) => {
    res.send("all categories under " + req.params.country);
};

// get all category 2's under a category1 specified on the query

exports.getCategories2 = (req, res) => {
    res.send("all category 2's under " + req.params.category1);
};

// get all category 3's under a category2 specified on the query

exports.getCategories3 = (req, res) => {
    res.send("all category 3's under " + req.params.category2);
};