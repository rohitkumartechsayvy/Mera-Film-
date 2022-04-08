module.exports = function($scope, $http,$rootScope, $location){

$scope.gotoAdmin=function(a,b) {
  $rootScope.adminName='Arun';
  $rootScope.eid='admin@mastmovie.com';
  $rootScope.pwd='admin@123';
  if (a===$rootScope.eid && b===$rootScope.pwd) {
    $location.path('/admin');
  }
  else {
    alert('invalid Login');
  }
};

$scope.addMovie =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/insertOMDB');
};

$scope.addTheater =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/Theater');
};

$scope.mapThaterMovie =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/MovieTheaterMap');
};
};
