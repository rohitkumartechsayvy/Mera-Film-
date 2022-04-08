module.exports = function($scope, $http){

  var displaytheater = function(){
    $http.get('/theater/showtheater').success(function (response) {
      $scope.postData=response;
    });
  };
displaytheater();


  $scope.insertTheater = function(){
      $http.post('/theater/insert', $scope.post).success(function (response) {
      });
      //$scope.post='';
displaytheater();
    };



  $scope.deletetheater = function(post){
      var x=confirm("Are you sure you want to delete ?");
      if(x){
        $http.delete('/theater/deleteMovies/'+post._id).success(function (response) {
      });
    }
    displaytheater();

    };


};
