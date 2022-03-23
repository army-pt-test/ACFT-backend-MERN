const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const SDCSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const SDC = mongoose.model('SDC', SDCSchema);

module.exports = SDC;