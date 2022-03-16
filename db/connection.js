require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(mongoURI);

//connection succes/error

db.on('error', (err) => console.log(err.message + 'is monogdb not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

//open connection
db.on('open', () => {
	console.log('mongo connection made');
});

module.exports = mongoose;
