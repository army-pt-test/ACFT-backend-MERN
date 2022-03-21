const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const TestSchema = new mongoose.Schema({
	date: Date,
	height: Integer,
	weight: Double,
	weightpassing: Boolean,
	bodyfatpct: Double,
	bodyfatpctpassing: Boolean,
	mdl1: Integer,
	mdl2: Integer,
	mdlpts: Integer,
	mdlgrader: String,
	spt1: Double,
	spt2: Double,
	sptpts: Integer,
	sptgrader: String,
	hrp: Integer,
	hrppts: Integer,
	hrpgrader: String,
	sdctime: String,
	sdcpts: Integer,
	sdcgrader: String,
	ltk: Integer,
	ltkpts: Integer,
	ltkgrader: String,
	plk: String,
	plkpts: Integer,
	plkgrader: String,
	twomr: String,
	twomrpts: Integer,
	twomrgrader: String,
	fivekrow: Boolean,
	onekswim: Boolean,
	twelvekbike: Boolean,
	choicetime: String,
	choicepass: Boolean,
	choicegrader: String,
	totalpts: Integer,
	ncoic: String,
	nciocrank: String,
	pass: Boolean,
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
