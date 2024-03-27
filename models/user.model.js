var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining Schema Book
var UserSchema = new Schema({
name: String,
mobile: Number,
gender: String,
locality: String

});

module.exports = mongoose.model('Users', UserSchema);