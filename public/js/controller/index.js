'use strict';

var app = require('angular').module('mastMovieApp');
app.controller('OMDBController', require('./omdbcontroller'));
app.controller('MainController', require('./mycontroller'));
app.controller('MapController', require('./movieMapping'));
app.controller('BookNowController',require('./bookNow'));
app.controller('SelectSeatController',require('./seatSelectController'));
// app.controller('BookNowController',require('./bookNow'));
app.controller('PaymentController',require('./paymentController'));
app.controller('AdminController',require('./adminController'));
app.controller('ConfirmationController',require('./confrimation'));
app.controller('SignupController',require('./singnupController'));
app.controller('ReviewController',require('./reviewRateController'));

app.controller('LoginController', require('./loginController'));
app.controller('LogoutController', require('./logoutController'));
app.controller('RegisterController', require('./registerController'));


// app.controller('SelectShowBooking',require('./selectShowBookingController'));
//  app.service('AuthService',  require('../service/auth-service'));
