'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('mastMovieApp',['ngRoute','angular.filter']);

require('./controller');
require('./service');

app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/home.html',
    controller: 'OMDBController'
  })
  .when('/MovieTheaterMap',{
    templateUrl: 'views/MovieTheaterMap.html',
    controller: 'MapController',
    access: {restricted: true}
})
.when('/Theater',{
  templateUrl: 'views/main.html',
  controller: 'MainController',
  access: {restricted: true}
})
.when('/bookingTimeTable',{
  templateUrl: 'views/selectShowBooking.html',
  controller: 'BookNowController'
})
.when('/seatSelect',{
  templateUrl: 'views/seatSelect.html',
 controller: 'SelectSeatController'
})
.when('/insertOMDB',{
  templateUrl: 'views/omdbfetching.html',
  controller: 'OMDBController',
  access: {restricted: true}
})
.when('/makePayment',{
  templateUrl: 'views/payment.html',
  controller: 'PaymentController'
})
.when('/confirmationPage',{
  templateUrl: 'views/confirmation.html',
  controller: 'ConfirmationController'
})
.when('/admin',{
  templateUrl: 'views/admin.html',
  controller: 'AdminController',
    access: {restricted: true}
})
.when('/comingsoon',{
  templateUrl: 'views/come_soon.html',
  // controller: 'AdminController'
})
.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'LogoutController',
      access: {restricted: true}
    })
.when('/rateMovie',{
  templateUrl: 'views/RateReview.html',
  controller: 'ReviewController'
});

});


app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});
