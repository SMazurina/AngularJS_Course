(function () {
'use strict';

angular.module('RestaurantList')
.service('MenuListService', MenuListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuListService.$inject = ['$http', 'ApiBasePath'];
function MenuListService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
