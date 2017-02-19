(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$http', 'ApiPath', 'MenuService'];

function RegistrationController($http, ApiPath, MenuService) {
  var reg = this;
  reg.menuService = MenuService;
  reg.noSuchItem = false;

  reg.submit = function () {  	
  	reg.menuService.getMenuItem(reg.user.shortname).then(function (response) {
  		console.log(response);
  		if (response.short_name){
  			console.log('true');
  			reg.noSuchItem = false;
  			reg.completed = true;
  			reg.menuService.firstname = reg.user.firstname;
  			reg.menuService.lastname = reg.user.lastname;
  			reg.menuService.email = reg.user.email;
  			reg.menuService.phone = reg.user.phone;
  			reg.menuService.menuItem = reg.user.shortname;
  			reg.saved = true;
  		}  		     
    })
    .catch(function (error) {    	
    	reg.noSuchItem = true;
    	console.log(reg.noSuchItem);
      	reg.completed = false;
    })    
  };
}

})();
