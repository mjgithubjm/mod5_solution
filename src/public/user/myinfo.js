(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];

function MyInfoController(MenuService) {
  var info = this;
  info.signedUp = false;
  info.menuService = MenuService;
  console.log(info.menuService.firstname);
  console.log(info.signedUp);
  if (info.menuService.firstname != undefined){
    info.signedUp = true;
    console.log(info.signedUp);
    info.firstname = info.menuService.firstname;
    info.lastname = info.menuService.lastname;
    info.email = info.menuService.email;
    info.phone = info.menuService.phone;
    info.menuService.getMenuItem(info.menuService.menuItem).then(function (response) {
      console.log(response);
      if (response.short_name){
        console.log('true');
        info.item = response.name;
        info.description = response.description;
        info.category_short_name = response.category_short_name;
      }          
    })
  }
}

})();
