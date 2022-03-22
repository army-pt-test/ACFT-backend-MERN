const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const CadetSchema = new mongoose.Schema({
	last_name: String,
	first_name: String,
	middle_initial: String,
	gender: String,
	unit: String,
	mos: String,
	grade: String,
	age: Number,
});

const Cadet = mongoose.model('Cadet', CadetSchema);

module.exports = Cadet;
