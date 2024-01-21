const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');
router.post('/psychiatrists-and-patients', hospitalController.getPsychiatristsAndPatients);

module.exports = router;
