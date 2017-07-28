(function () {
'use strict';

angular.module('RestaurantList')
.controller('MenuItemsDetailController', MenuItemsDetailController);

// 'item' is injected through state's resolve
MenuItemsDetailController.$inject = ['$stateParams','menulist']
function MenuItemsDetailController($stateParams, menulist) {
  var menuItems = this;
  menuItems.items = menulist.data.menu_items;
  menuItems.categoryShortName = $stateParams.name;
}

})();
