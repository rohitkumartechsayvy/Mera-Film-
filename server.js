var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var routes = require('./routes/omdbroute');
var bodyParser = require('body-parser');

var routes1 = require('./routes/myroute');
var routes2 = require('./routes/bookingDetailsRoute');
var movieMapRoute=require('./routes/movieMappingroute');
var reviewandRate = require('./routes/reviewRate');
var auth =  require('./routes/auth');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// user schema/model
var User = require('./models/user.js');
app.use('/user/', auth);
app.use('/api', routes); //using routes
app.use('/theater', routes1);
app.use('/mt_map', movieMapRoute);
app.use('/pay', routes2);
//app.use('/user', userData);
app.use('/reviewapi',reviewandRate);

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');
  var config = require('./webpack.config');
  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",
    headers: { "X-Custom-Webpack-Header": "yes" },
    stats: {
      colors: true
    }
  }));
}

app.listen(8000,function(){
  console.log('Server is running on port 8000');
});
