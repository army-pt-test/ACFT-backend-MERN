const express = require('express');

const router = express.Router();

const MDL = require('../models/MDL');

// routes
router.get('/', async (req, res, next) => {
	try {
		const mdl = await MDL.find({});
		if (mdl) {
			res.json(mdl);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newMDL = MDL.create(req.body);
		res.status(201).res.json(newMDL);
	} catch (error) {
		next(error);
	}
});


module.exports = router; 