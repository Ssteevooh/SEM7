const express = require('express'),
  router = express.Router(),
  getDropdownController = require('../controllers/getDropdownController'),
  postDropdownController = require("../controllers/postDropdownController");

// GET METHODS ------------------------

// get sellers
router.get('/seller', getDropdownController.getSellers);

// get countries
router.get('/country', getDropdownController.getCountries);

// get cat1's under a specific country
router.get('/category1', getDropdownController.getCategories1);

// get cat2's under a specific cat1
router.get('/category2', getDropdownController.getCategories2);

// get cat3's under a specific cat2
router.get('/category3', getDropdownController.getCategories3);

// POST METHODS ---------------

// post new seller, name given in body
router.post("/seller", postDropdownController.postSeller);

// post new country, name given in body
router.post("/country", postDropdownController.postCountry);

// post categories, category name and parents id given in body

router.post("/category1", postDropdownController.postCategory1);

router.post("/category2", postDropdownController.postCategory2);

router.post("/category3", postDropdownController.postCategory3);

// PATCH METHODS --------------

// new name and id given in body

router.patch("/seller", postDropdownController.editSeller);

router.patch("/country", postDropdownController.editCountry);

router.patch("/category1", postDropdownController.editCategory1);

router.patch("/category2", postDropdownController.editCategory2);

router.patch("/category3", postDropdownController.editCategory3);


module.exports.router = router;