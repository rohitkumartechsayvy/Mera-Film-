'use strict';

module.exports = function ($scope, $q, $location, AuthService) {

    $scope.logout = function () {

      // call logout from service
      AuthService.logout($q)
        .then(function () {
          $location.path('/login');
        });

    };

}