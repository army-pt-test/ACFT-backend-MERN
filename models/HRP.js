const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const HRPSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const HRP = mongoose.model('HRP', HRPSchema);

module.exports = HRP;