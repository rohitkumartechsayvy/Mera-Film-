var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mastmovie');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to DB');
});


var mappingSchema = mongoose.Schema({
  Title:String,
  City:String,
  Cinema:String,
  ShowDate:String ,
  TimeSlot:[],
     });


var mappingModel = mongoose.model('Mapping', mappingSchema);


router.post('/insertMappingData', function (req, res) {

    var mM = new mappingModel({

        Title: req.body.Title,
        City:req.body.City,
        Cinema:req.body.Cinema,
        ShowDate:req.body.ShowDate,
        TimeSlot:req.body.ar

    });
    mM.save(function(err,docs){
        console.log('Post Saved Successfully'+mM);
      });
  });


router.get('/getMappingData', function (req, res) {
    mappingModel.find({}, function (err, docs) {
    res.json(docs);
    });
});

router.delete('/deletetheatermovies/:id',function(req, res){
  mappingModel.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});


router.get('/selmoviename/:m',(function(req, res) {
mappingModel.find(
  {Title:req.params.m},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);
  });
}));


module.exports = router;
