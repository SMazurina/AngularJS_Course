(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('narrowItDownList', NarrowItDownListDirective);


function NarrowItDownListDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      foundNot: '<',
      onRemove: '&'
    },

    controller: NarrowItDownListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function NarrowItDownListDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  var result = [];
  list.searchTerm = "";
  list.items = [];
  list.foundNot = false;

  list.menuSearch = function () {
    MenuSearchService.clearTheList();
    if(list.searchTerm != "") {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

      promise.then(function (foundItems) {
        list.items = foundItems;
        if(list.items.length == 0)  {
          list.foundNot = true;
        }
        else {
          list.foundNot = false;
        }
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    }
    else {
      list.foundNot = true;
    }

  };


  list.removeItem = function (itemIndex) {

    MenuSearchService.removeItem(itemIndex);

  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];


service.getMatchedMenuItems = function (searchTerm) {
  return $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json")
  }).then(function (response) {

    for (var i = 0, len = response.data.menu_items.length; i < len; i++) {
      if(response.data.menu_items[i].description.includes(searchTerm)){
        foundItems.push(response.data.menu_items[i]);
      };
    };

    // return processed items
    return foundItems;
});
};

service.clearTheList = function() {
  foundItems.length = 0;
}

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

}



})();
