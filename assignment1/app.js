
(function (){
'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.name = "";
  $scope.color= "";
  $scope.CheckIfToMuch = function (){
    var result = check($scope.name);
    var total = result;
    if (total > 3){
		$scope.message = "Too much!";
		$scope.color="green";
    }
	else if (total <= 3 && total>0){
		$scope.message = "Enjoy!";
		$scope.color="green";
    }
	else{
        $scope.message = "Please enter data first";
		$scope.color= "red";
    }
    

  };

  function check(string){
	  if(!string)
	  {
		  return 0;
	  }
    var arr = string.split(",");
    var arrayLength = arr.length;

    var num_of_empty = 0;
    var total = 0;
    for (var i = 0; i < arrayLength; i++) {
      if (arr[i].trim() == "") {
        
        if (i != arrayLength-1) {
          num_of_empty += 1;
        }
      }else{
        total += 1;
      }
    }
    console.log(num_of_empty);
     
    return total;
  };

}


})();