var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/collections', function (req, res) {
	res.render('collections');
});

app.get('/collection', function (req, res) {
	res.render('collection');
});

app.get('/contact', function (req, res) {
	res.render('contact');
});

app.get('/image', function (req, res) {
	res.render('image');
});

app.get('/prices', function (req, res) {
	res.render('prices');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.listen(3000, function () {
	console.log('It works!');
});
