(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('BuyListController', BuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

BuyListController.$inject = ['ShoppingListService'];
function BuyListController(ShoppingListService) {
  var buyList = this;

  buyList.items = ShoppingListService.getItemsToBuy();

  buyList.boughtItem = function (itemIndex) {
    ShoppingListService.boughtItem(itemIndex);
  }
}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
  var boughtList = this;

  boughtList.items = ShoppingListService.getBoughtItems();

}

function ShoppingListService() {
  var service = this;

  var shoppingList = [
    { name: "cookies", quantity: 10 },
    { name: "oranges", quantity: 4 },
    { name: "apples", quantity: 8 },
    { name: "potatoes", quantity: 20 },
    { name: "carrots", quantity: 10 }
  ];

  var resultList = [];

  service.boughtItem = function (itemIndex) {
    var item = {
      name: shoppingList[itemIndex].name,
      quantity: shoppingList[itemIndex].quantity
    };
    resultList.push(item);
    shoppingList.splice(itemIndex, 1);

  };

  service.getItemsToBuy = function () {
    return shoppingList;
  };

  service.getBoughtItems = function () {
    return resultList;
  };
}

})();
