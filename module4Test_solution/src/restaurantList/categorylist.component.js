(function () {
'use strict';

angular.module('RestaurantList')
.component('categoryList', {
  templateUrl: 'categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
