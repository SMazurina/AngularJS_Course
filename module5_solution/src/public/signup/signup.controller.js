(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService'];
function SignupController(MenuService, SignupService) {
  var $ctrl = this;

  $ctrl.submit = function () {

    var promise = MenuService.getFavourite($ctrl.user.menunumber);

    promise.then(function (result) {
      SignupService.saveUser($ctrl.user, result.data);
      $ctrl.correct = true;
      $ctrl.resultMessage = 'Your information has been saved';
    }, function (error) {
      $ctrl.correct = false;
      $ctrl.resultMessage = 'No such menu number exists';
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };
}


})();
