const express = require('express');

const router = express.Router();

const Test = require('../models/Test');

//routes
router.get('/', async (req, res, next) => {
	try {
		const test = await Test.find({}).populate('owner');
		if (test) {
			res.json(test);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const test = await Test.findById(req.params.id);
		if (test) {
			res.json(test);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newTest = Test.create(req.body);
		res.status(201).res.json(newTest);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const testToUpdate = await Test.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			overwrite: true,
		});
		res.json(testToUpdate);
	} catch (error) {
		next(error);
	}
});

router.patch('/:id', async (req, res, next) => {
	try {
		const testToUpdate = await Test.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body }, //set partially updates data
			{
				new: true,
			}
		);
		res.json(testToUpdate);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedTest = await Test.findOneAndDelete({
			_id: req.params.id,
		});
		if (deletedTest) {
			res.json(deletedTest);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
