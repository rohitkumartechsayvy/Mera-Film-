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



var omdbSchema = mongoose.Schema({
  Title:String,
  Year:String,
Runtime:String,
Genre:String,
  Director:String,
  Actors:String,
  Language:String,
  Poster:String,
  Status:String
   });


var omdbModel = mongoose.model('Movies', omdbSchema,'Movies');


router.post('/insertOMDBMovie', function (req, res) {
    var om = new omdbModel({

        Title: req.body.Title,
         Year: req.body.Year,
         Runtime: req.body.Runtime,
         Genre: req.body.Genre,
         Director: req.body.Director,
         Actors: req.body.Actors,
         Language: req.body.Language,
         Poster: req.body.Poster,
         Status:'false'

    });
    om.save(function(err,docs){
        console.log('Post Saved Successfully'+om);
      });
  });


  router.get('/showmovies', function (req, res) {
      omdbModel.find({}, function (err, docs) {
      res.json(docs);
      });
  });



  router.delete('/deletemovies/:id',function(req, res){
    omdbModel.remove({_id:req.params.id},function(err, docs){
      console.log('Movie Removed Successfully');
    });
  });

// it'll update the
  router.put('/updatemoviestatus/:Title/:val',function(req,res){
  omdbModel.findOneAndUpdate({ Title: req.params.Title },
    {$set:{Status: req.params.val }
  },function (err, data){
    res.json(data);
  });
  });

module.exports = router;
