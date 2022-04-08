var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));



var userSchema = mongoose.Schema({
  First_Name:String,
  Last_Name:String,
  User_Email:{ type: String, unique: true },
  User_DOB:String,
  User_Password:String,
  Gender:String,
 });


var userSchemaObj = mongoose.model('users', userSchema);


router.post('/insert', function (req, res) {
    var post = new userSchemaObj({
      First_Name:req.body.fname,
      Last_Name:req.body.lname,
      User_Email:req.body.email,
      User_DOB:req.body.dob,
      User_Password:req.body.passwordConfirm,
      Gender:req.body.gender,
    });
    post.save(function(err,docs){
        console.log('User details Saved Successfully'+post);
      });
  });



module.exports = router;
