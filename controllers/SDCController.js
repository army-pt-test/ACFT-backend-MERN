const express = require('express');

const router = express.Router();

const SDC = require('../models/SDC');

// routes
router.get('/', async (req, res, next) => {
	try {
		const sdc = await SDC.find({});
		if (sdc) {
			res.json(sdc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;