const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendar.controller');

router.get('/', calendarController.getListDates);
router.get('/:id', calendarController.getDate);
router.delete('/:id', calendarController.deleteDate);
router.post('/', calendarController.postDate);

module.exports = router;