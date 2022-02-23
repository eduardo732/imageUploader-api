'use stric'
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/upload', imageController.getImage);




module.exports = router;