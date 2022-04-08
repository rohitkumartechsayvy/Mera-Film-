module.exports = function($scope, $http,$rootScope, $location){

$scope.confirmPage =function(){

  t=$rootScope.Moviename,
  c=$rootScope.city,
  t1=$rootScope.CinemaName,
  s=$rootScope.showTime,
  sn=$rootScope.TotalSeat,
  sq=$rootScope.coutSeat,
  a=$rootScope.Amount,
  e=$scope.pmt.email,
  p=$scope.pmt.contact,
  dt=$rootScope.rootDate,
  $http.post('/pay/newTicket/'+t+'/'+c+'/'+t1+'/'+s+'/'+sn+'/'+sq+'/'+a+'/'+e+'/'+p+'/'+dt).success(function (response){});
$location.path('/confirmationPage');

};
};
