(function () {
'use strict';

angular.module('RestaurantList')
.controller('MainCategoryListController', MainCategoryListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MainCategoryListController.$inject = ['items'];
function MainCategoryListController(items) {
  var mainList = this;
  mainList.items = items.data;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
