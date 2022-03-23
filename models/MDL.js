const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const MDLSchema = new mongoose.Schema({

});

const MDL = mongoose.model('MDL', MDLSchema);

module.exports = MDL;