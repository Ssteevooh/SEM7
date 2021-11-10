exports.postNewAuction = (req, res) => {
    res.send("new auction posted");
};

exports.editAuction = (req, res) => {
    res.send("auction " + req.body.id + " updated");
};