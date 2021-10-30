const express = require('express'),
    router = express.Router(),
    browseController = require('../controllers/browseController');

// -----Auction browsing-------

// used to get detailed information from one auction using its id
router.get('/detailed/:id', browseController.browseWithId);

// used to get information for list based view, search options as query
router.get('/listView', browseController.browseListView);

// used to get information for tile based view, search options as query
router.get('/tileView', browseController.browseTileView);

// -------Dropdown items -----------

// get sellers
router.get('/sellers', browseController.getSellers);

// get countries
router.get('/countries', browseController.getCountries);

// get cat1's under a specific country
router.get('/category1/:country', browseController.getCategories1);

// get cat2's under a specific cat1
router.get('/category2/:category1', browseController.getCategories2);

// get cat3's under a specific cat2
router.get('/category3/:category2', browseController.getCategories3);

module.exports.router = router;