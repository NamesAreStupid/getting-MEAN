var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var locationsController = require('../controllers/locationsController');
var othersController = require('../controllers/othersController');


/* Locations pages */
router.get('/', locationsController.homelist);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

/* Other pages */
router.get('/about', othersController.about);

module.exports = router;
