module.exports = function($scope, $http, $rootScope,$location){
  var disrate=0;
  var user=0;
  var overallrating=0;
//display reviews
  var displayReviews = function(){
    var m=$rootScope.Moviename;
    $http.get('/reviewapi/showreview/'+m).success(function (response) {
      $scope.displayReviewData=response;
      // var x=0;
      for (var i = 0; i < $scope.displayReviewData.length; i++) {
            disrate=disrate+$scope.displayReviewData[i].rating;
            user++;
          }
          overallrating=disrate/user;
// alert(overallrating);

if (Math.round(overallrating)==1) {
document.getElementById('star-1').checked = true;
} else if (Math.round(overallrating)==2) {
document.getElementById('star-2').checked = true;
}else if (Math.round(overallrating)==3) {
document.getElementById('star-3').checked = true;
} else if (Math.round(overallrating)==4) {
document.getElementById('star-4').checked = true;
} else if (Math.round(overallrating)==5) {
document.getElementById('star-5').checked = true;
}
});
  };
  displayReviews();



//insert review and Rate
$scope.insertReview=function(){
$scope.reviewData.rmoviename=$rootScope.Moviename;
$scope.reviewData.rposter=$rootScope.MyPoster;
if ($scope.reviewData.rrate>0 && $scope.reviewData.rreview!=null && $scope.reviewData.rusername!=null) {
  $http.post('/reviewapi/insertReview',$scope.reviewData).success(function (response){
  });
}
else {
  if($scope.reviewData.rrate==null)
  alert('please provide the Rating');
  else {
    alert('provide Name and review');
  }
}
document.getElementById('unm').value='';
document.getElementById('tarea').value='';
  displayReviews();
};

};
