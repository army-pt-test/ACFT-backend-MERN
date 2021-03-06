const express = require('express');

const router = express.Router();

const SPT = require('../models/SPT');

router.get('/', async (req, res, next) => {
	try {
		const spt = await SPT.find({});
		if (spt) {
			res.json(spt);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;