const express = require('express'),
    router = express.Router(),
    postController = require('../controllers/postController');

//post new auction
router.post('/', postController.postNewAuction);

// update existing auction based on id
router.patch('/:id', postController.editAuction);

module.exports.router = router;