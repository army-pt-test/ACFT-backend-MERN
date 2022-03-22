const Test = require('../models/Test');
const Cadet = require('../models/Cadet');
const testSeeds = require('./seeds.json');

Test.deleteMany({})
	.then(() => {
		console.log('deleted all tests');
		Cadet.deleteMany({});
	})
	.then(() => {
		console.log('deleted all cadets');
		return Cadet.create({
			last_name: 'Moto',
			first_name: 'Yugi',
			middle_initial: 'P',
			gender: 'M',
			unit: '42',
			mos: '32',
			grade: '22',
			age: 15,
		});
	})
	.then((cadet) => {
		console.log('Cadet created', cadet);
		return testSeeds.map((test) => {
			return { ...test, owner: user._id };
		});
	})
	.then((tests) => {
		return Test.insertMany(tests);
	})
	.then((newTests) => {
		console.log('created new tests', newTests);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
