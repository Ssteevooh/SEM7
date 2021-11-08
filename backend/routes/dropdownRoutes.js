const express = require('express'),
    router = express.Router(),
    dropdownController = require('../controllers/dropdownController');

// get sellers
router.get('/sellers', dropdownController.getSellers);

// get countries
router.get('/countries', dropdownController.getCountries);

// get cat1's under a specific country
router.get('/category1/:country', dropdownController.getCategories1);

// get cat2's under a specific cat1
router.get('/category2/:category1', dropdownController.getCategories2);

// get cat3's under a specific cat2
router.get('/category3/:category2', dropdownController.getCategories3);

module.exports.router = router;