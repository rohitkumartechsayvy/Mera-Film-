module.exports = function($scope, $http, $rootScope,$location){

  $scope.searchOMDB = function(){
    $http.get('http://www.omdbapi.com/?t='+$scope.M_Name+'&y='+$scope.M_Year+'&plot=short&r=json').success(function (response) {
      $scope.omdbData=response;
      if (!$scope.omdbData.Title) {
        alert('Movie is not available');
      }
    });
  };

  $scope.insertOMDBMovie=function(){
    $http.post('/api/insertOMDBMovie',$scope.omdbData).success(function (response){
  });
displaymovies();
  };
  var disrate=0;
  var user=0;
  $scope.overallrating=[];

// displaymovies();
  var displaymovies = function(){
  $http.get('/api/showmovies').success(function (response) {
    $scope.movieShow=response;
    for (var i = 0; i < $scope.movieShow.length; i++) {
      if($scope.movieShow[i].Status=='true')
{
      var m=$scope.movieShow[i].Title;
      $http.get('/reviewapi/showreview/'+m).success(function (response) {
        $scope.displayReviewData=response;
        // var x=0;
        for (var i = 0; i < $scope.displayReviewData.length; i++) {
              disrate=disrate+$scope.displayReviewData[i].rating;
              user++;
            }
            $scope.overallrating[i]=0;
            $scope.overallrating[i]=disrate/user;
// alert($scope.overallrating);
    });
}

    }
  });
  $scope.omdbData='';
};
displaymovies();

$scope.deletemovies = function(movieShow){
      var x=confirm("Are you sure you want to delete ?");
      if(x){
        $http.delete('/api/deletemovies/'+movieShow._id).success(function (response) {
      });
    }
displaymovies();
    };

// we are defining the $rootScope that's mean gloable variable in first line we
// have to add to more parameters
    $scope.timeTable=function(m,x){
    $rootScope.Moviename=m;
    $rootScope.MyPoster=x;
    $location.path('/bookingTimeTable');
    };

    $scope.reviewDataMove=function(m,x){
    $rootScope.Moviename=m;
    $rootScope.MyPoster=x;
    $location.path('/rateMovie');
    };
$scope.count=0;
$scope.increment=function(){
  $scope.count++;
  return $scope.count;
};




};
