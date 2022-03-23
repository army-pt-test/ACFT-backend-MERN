const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const PLKSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const PLK = mongoose.model('PLK', PLKSchema);

module.exports = PLK;