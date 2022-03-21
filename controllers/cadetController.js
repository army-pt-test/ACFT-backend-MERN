const express = require('express');

const router = express.Router();

const Cadet = require('../models/Cadet');

//routes
router.get('/', async (req, res, next) => {
	try {
		const cadets = await Cadet.find({});
		res.json(cadets);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
