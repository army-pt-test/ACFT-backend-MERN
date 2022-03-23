const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const ALTSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const ALT = mongoose.model('ALT', ALTSchema);

module.exports = ALT;