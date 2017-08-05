(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  var user= {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    menuItem: null,
    registred: false
  };

  service.saveUser = function (regUser, menuItem) {
    user = {
      firstName: regUser.firstname,
      lastName: regUser.lastname,
      email: regUser.email,
      phone: regUser.phone,
      menuItem: menuItem,
      registred: true
    };
    
  };

  service.getUser = function () {
    return user;
  };

}

})();
