var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var BookingSchema = mongoose.Schema({
    Title : String,
    City : String,
    Theatre : String,
    Show : String,
    SeatNo : [],
    Quantity : String,
    Amount : String,
    Email : String,
    Phone : String,
    BookDate:Date
});

var Booking = mongoose.model('Booking',BookingSchema, 'Booking');

router.post('/newTicket/:t/:c/:t1/:s/:sn/:sq/:a/:e/:p/:dt', function (req, res) {
  var booking = new Booking({
    Title: req.params.t,
    City: req.params.c,
    Theatre: req.params.t1,
    Show: req.params.s,
    SeatNo: JSON.parse(req.params.sn),
    Quantity: req.params.sq,
    Amount: req.params.a,
    Email: req.params.e,
    Phone: req.params.p,
    BookDate:req.params.dt
  });
  booking.save(function(err,docs){
    console.log('Booking Saved Successfully'+docs);
  });
});

router.get('/bookedseats/:t/:th/:s', function (req, res) {
  Booking.find({Title:req.params.t,Theatre:req.params.th,Show:req.params.s}, function (err, docs) {
    res.json(docs);
    });
});

module.exports = router;
