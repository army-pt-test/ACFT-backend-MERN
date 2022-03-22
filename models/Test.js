const { mongo, model } = require('../db/connection');
const mongoose = require('../db/connection');

const TestSchema = new mongoose.Schema({
	date: Date,
	height: Number,
	weight: Number,
	weightpassing: Boolean,
	bodyfatpct: Number,
	bodyfatpctpassing: Boolean,
	mdl1: Number,
	mdl2: Number,
	mdlpts: Number,
	mdlgrader: String,
	spt1: Number,
	spt2: Number,
	sptpts: Number,
	sptgrader: String,
	hrp: Number,
	hrppts: Number,
	hrpgrader: String,
	sdctime: String,
	sdcpts: Number,
	sdcgrader: String,
	ltk: Number,
	ltkpts: Number,
	ltkgrader: String,
	plk: String,
	plkpts: Number,
	plkgrader: String,
	twomr: String,
	twomrpts: Number,
	twomrgrader: String,
	fivekrow: Boolean,
	onekswim: Boolean,
	twelvekbike: Boolean,
	choicetime: String,
	choicepass: Boolean,
	choicegrader: String,
	totalpts: Number,
	ncoic: String,
	nciocrank: String,
	pass: Boolean,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cadet',
	},
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
