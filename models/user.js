// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
 
  username: String,
  password: String
  // Type:{type:String, default:'normal'}
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);