const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const MileRunSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const MileRun = mongoose.model('MileRun', MileRunSchema);

module.exports= MileRun;