var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes')
var app = express();

// Database Connection
//h6Cj10pGSgkxxXc3

const uri = 'mongodb+srv://shashwatkumar783:h6Cj10pGSgkxxXc3@cluster0.pnpyq.mongodb.net/saloon';

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Error connecting to MongoDB Atlas:', error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Redirect
app.use('/', routes);



//create server
var port = 8081;
app.listen(port, function(){

	console.log('app listening on port' + port);
});