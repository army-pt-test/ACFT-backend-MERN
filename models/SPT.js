const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');


const SPTSchema = new mongoose.Schema({
	age: Number,
	gender: String,
	points: Number,
});

const SPT = mongoose.model('SPT', SPTSchema);

module.exports = SPT;