const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 8000);

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.get('/', (req, res) => {
	res.redirect('/api/cadets');
});

//controllers
const cadetController = require('./controllers/cadetController');
app.use('/api/cadets', cadetController);
const testController = require('./controllers/testController');
app.use('/api/tests', testController);

app.listen((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});
//start server
app.listen(app.get('port'), () => {
	console.log(`port connected: ${app.get('port')}`);
});
