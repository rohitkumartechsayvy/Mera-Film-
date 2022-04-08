var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mastmovie');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


//schema for Review Start

var reviewSchema =mongoose.Schema({
    UserName :String,
		MovieName:String,
    Poster   :String,
    Review	 :String,
		rating	 :Number
});
var reviewModel = mongoose.model('ReviewRate', reviewSchema,'ReviewRate');

router.post('/insertReview', function (req, res) {

    var om = new reviewModel({
      UserName :req.body.rusername,
  		MovieName:req.body.rmoviename,
      Poster   :req.body.rposter,
  		Review	 :req.body.rreview,
  		rating	 :req.body.rrate

    });
    om.save(function(err,docs){
        console.log('Post Saved Successfully'+om);

      });
  });

//insertion Over

//fetching start
router.get('/showreview/:m',function(req,res){
reviewModel.find({ MovieName: req.params.m},
  function (err, data){
    console.log('Data Found :'+data);
  res.json(data);
  console.log(data);
});
});



//-------------------Review Over-----------------

module.exports = router;
