(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunchItems = "";
  $scope.resultMessage = "";

  $scope.sayResultMessage = function () {
    var numberOfLunchItems = calculateNumberOfItems($scope.lunchItems);
    $scope.resultMessage = estimateLunchSize(numberOfLunchItems);
  };

  //Function to generate result message based on number of lunch items
  function estimateLunchSize(lunchSize) {
    if(lunchSize == 0) {
      return "Please enter data first";
    }
    else if (lunchSize <= 3){
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  }
  //Function to calculate number of words in comma delimited string
  function calculateNumberOfItems(str) {
    if(str.length == 0) {
      return 0;
    }
    else {
      var partsOfStrArray = str.split(',');
      return partsOfStrArray.length;
    }
  }
}

})();
