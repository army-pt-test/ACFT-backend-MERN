const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const ALTSchema = new mongoose.Schema({

});

const ALT = mongoose.model('ALT', ALTSchema);

module.exports = ALT;