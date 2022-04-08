module.exports = function($scope, $http){

var displaymovies = function(){
$http.get('/api/showmovies').success(function (response) {
  $scope.movieShow=response;
});

};
displaymovies();

var displaytheater = function(){
$http.get('/theater/showtheater').success(function (response) {
  $scope.theaterShow=response;
});
};
displaytheater();
$scope.Hour='';
$scope.Minute='';
$scope.Am_Pm='';
 $scope.timeAr = [];

$scope.insertArray=function(){
  $scope.timing=$scope.Hour+':'+$scope.Minute+''+$scope.Am_Pm;

  		$scope.timeAr.push($scope.timing);
  		$scope.timing = '';
}

$scope.removeArray = function(index) {
    	$scope.timeAr.splice(index, 1);
      console.log(index);
    };

$scope.hourshowSelectValue = function(Hour) {
$scope.Hour=Hour;
    console.log(Hour);
};

$scope.minuteshowSelectValue = function(Minute) {
  $scope.Minute=Minute;
    console.log(Minute);
};


$scope.ampmhowSelectValue = function(Am_Pm) {
  $scope.Am_Pm=Am_Pm;
    console.log(Am_Pm);
};


$scope.insertMapping=function(){
  $scope.post.ar=$scope.timeAr;
  $scope.post.ShowDate=$('#datepicker').val();

  $http.post('/mt_map/insertMappingData',$scope.post).success(function (response){

});
     var val='true';
     $http.put('/api/updatemoviestatus/' + $scope.post.Title+'/'+val).success(function (response) {
          console.log(response);
          
        });
displayTheaterMovies();        
};


var displayTheaterMovies = function(){
$http.get('/mt_map/getMappingData').success(function (response) {
  $scope.mapData=response;
});

};
displayTheaterMovies();

$scope.deleteTheaterMovies = function(mapData){
      var x=confirm("Are you sure you want to delete ?");
      if(x){
        $http.delete('/mt_map/deletetheatermovies/'+mapData._id).success(function (response) {
      });

$http.get('/mt_map/selmoviename/'+mapData.Title).success(function (response) {
            len=response.length;
            alert("len "+len);
            if(len==0)
            {
              var val='false';
         $http.put('/api/updatemoviestatus/'+mapData.Title+'/'+val).success(function (response) {
                 });
            }
          });

    }
displayTheaterMovies();
  };

  $(document).ready(function(){
      $("#datepicker").datepicker({ dateFormat: 'dd, M yy' });
  });

};
