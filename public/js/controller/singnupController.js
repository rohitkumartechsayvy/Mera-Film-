module.exports = function($scope, $http, $rootScope,$location){


$scope.createUser=function(){

$scope.user.dob=$scope.user.day+'-'+$scope.user.month+'-'+$scope.user.year;

if ($scope.user.fname && $scope.user.lname && $scope.user.email && $scope.user.password && $scope.user.passwordConfirm) {

  if($scope.user.password!==$scope.user.passwordConfirm)
  {
  alert('Password Mismatch');
  }
  else{
      $http.post('/user/insert',$scope.user).success(function (response){

    });
    alert('Login Done Successfully');
    $location.path('/signup');
  }

}
else {
  alert('fields Can\'t be Blank');
}



};

};
