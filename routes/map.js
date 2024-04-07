const express = require('express');
const router = express.Router();
const mapController = require('../controllers/map.controller');

router.post('/saveLocation', mapController.saveLocation);
router.get('/getLocations', mapController.getLocations);

module.exports = router;