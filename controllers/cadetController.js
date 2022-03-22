const express = require('express');

const router = express.Router();

const Cadet = require('../models/Cadet');

//routes
router.get('/', async (req, res, next) => {
	try {
		const cadets = await Cadet.find({});
		if (cadets) {
			res.json(cadets);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const cadet = await Cadet.findById(req.params.id);
		if (cadet) {
			res.json(cadet);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {}
});

router.post('/', async (req, res, next) => {
	try {
		const newCadet = Cadet.create(req.body);
		res.status(201).res.json(newCadet);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const cadetToUpdate = await Cadet.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				overwrite: true,
			}
		);
		res.json(cadetToUpdate);
	} catch (error) {
		next(error);
	}
});

router.patch('/:id', async (req, res, next) => {
	try {
		const cadetToUpdate = await Cadet.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body }, //set partially updates data
			{
				new: true,
			}
		);
		res.json(cadetToUpdate);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedCadet = await Cadet.findOneAndDelete({
			_id: req.params.id,
		});
		if (deletedCadet) {
			res.json(deletedCadet);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
