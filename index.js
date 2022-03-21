const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
	res.redirect('/api/cadets');
});

//controllers
const cadetController = require('./controllers/cadetController');
app.use('/api/cadets', cadetController);
//start server
app.listen(app.get('port'), () => {
	console.log(`port connected: ${app.get('port')}`);
});
