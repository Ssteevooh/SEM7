const express = require('express'),
    router = express.Router(),
    browseController = require('../controllers/browseController');

// used to get detailed information from one auction using its id
router.get('/detailed/:id', browseController.browseWithId);

// used to get information for list based view, search options as query
router.get('/listView', browseController.browseListView);

// used to get information for tile based view, search options as query
router.get('/tileView', browseController.browseTileView);

module.exports.router = router;