(function () {
'use strict';

angular.module('RestaurantList')
.component('categoryList', {
  templateUrl: 'src/restaurantList/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
