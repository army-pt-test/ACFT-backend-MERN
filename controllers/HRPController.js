const express = require('express');

const router = express.Router();

const HRP = require('../models/HRP');

// routes

router.get('/', async (req, res, next) => {
	try {
		const hrp = await HRP.find({});
		if (hrp) {
			res.json(hrp);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
