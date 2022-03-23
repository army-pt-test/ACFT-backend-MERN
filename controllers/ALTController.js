const express = require('express');

const router = express.Router();

const ALT = require('../models/ALT');

// routes
router.get('/', async (req, res, next) => {
	try {
		const alt = await ALT.find({});
		if (alt) {
			res.json(alt);
		} else {
			res.sendStatus;
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
