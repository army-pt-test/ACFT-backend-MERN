const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const HRPSchema = new mongoose.Schema({

});

const HRP = mongoose.model('HRP', HRPSchema);

module.exports = HRP;