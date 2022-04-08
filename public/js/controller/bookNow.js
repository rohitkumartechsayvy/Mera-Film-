module.exports = function($scope, $http, $rootScope,$location ){
  var bookingShow=function(){
  var data=$rootScope.Moviename;
  $http.get('/mt_map/selmoviename/'+data).success(function(response){
    $scope.booking=response;

  });
  $http.get('/theater/showtheater').success(function (response) {
    $scope.theaterShow=response;
    console.log($scope.theaterShow);
  });

  $http.get('/mt_map/getMappingData').success(function (response) {
    $scope.mappingData=response;
  });
};
bookingShow();

$scope.showTimings=function (a,x) {
  $rootScope.showTime=a;
  $rootScope.CinemaName=x.Cinema;
  $rootScope.city=x.City;
  $rootScope.rootDate=x.ShowDate;
  console.log($rootScope.city);
  $location.path('/seatSelect');
};
$scope.movDates=[];
var showDates=function() {
for(i=0;i<6;i++)
{
  var date=new Date();
  date.setDate(date.getDate()+i);
  $scope.movDates[i]=date;

}
};
showDates();


};
