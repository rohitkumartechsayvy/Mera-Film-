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



var theater = mongoose.Schema({
  T_Name:String,
  T_City:String,
  T_Area:String
 });


var Post = mongoose.model('Theater', theater);

router.get('/showtheater', function (req, res) {
    Post.find({}, function (err, docs) {
    res.json(docs);
    });
});


router.post('/insert', function (req, res) {
    var post = new Post({
      T_Name: req.body.T_Name,
      T_City:req.body.T_City,
      T_Area:req.body.T_Area
    });
    post.save(function(err,docs){
        console.log('Post Saved Successfully'+post);
      });
  });




router.delete('/deleteMovies/:id',function(req, res){
  Post.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

module.exports = router;
