const express = require('express');

const router = express.Router();

const MileRun = require('../models/MileRun');

// routes
router.get('/', async (req, res, next) => {
	try {
		const milerun = await MileRun.find({});
		if (milerun) {
			res.json(milerun);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;