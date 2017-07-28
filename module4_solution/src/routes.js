(function () {
'use strict';

angular.module('RestaurantList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  // Category list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/restaurantlist/templates/main-categorylist.template.html',
    controller: 'MainCategoryListController as categoryList',
    resolve: {
      items: ['MenuListService', function (MenuListService) {
        return MenuListService.getMenuCategories();
      }]
    }
  })

  .state('menuItems', {
    url: '/item-detail/{name}',
    templateUrl: 'src/restaurantlist/templates/menu-itemdetail.template.html',
    controller: 'MenuItemsDetailController as menuItemsDetail',
    resolve: {
      menulist: ['$stateParams', 'MenuListService',
            function ($stateParams, MenuListService) {
              return MenuListService.getMenuForCategory($stateParams.name);

            }]
    }
  });
}

})();
