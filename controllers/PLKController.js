const express = require('express');

const router = express.Router();

const PLK = require('../models/PLK');

// routes
router.get('/', async (res, req, next) => {
	try {
		const plk = await PLK.find({});
		if (plk) {
			res.json(plk);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;