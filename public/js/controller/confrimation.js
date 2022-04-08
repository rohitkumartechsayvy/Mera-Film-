module.exports = function($scope, $http, $rootScope,$location){
  var confirmation=function(){
    $scope.mname=$rootScope.Moviename;
        $http.get('/api/showmovies').success(function (response) {
      $scope.moviedata=response;
              });
        };
    confirmation();
};
