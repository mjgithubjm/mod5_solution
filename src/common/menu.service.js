(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
 
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

   service.getMenuItem = function (category) {
    console.log('in menu service');
    var config = {};  
    console.log('https://mjjm-course5.herokuapp.com/menu_items/' +  category +'.json');
    return $http.get('https://mjjm-course5.herokuapp.com/menu_items/' +  category +'.json').then(function (response) {
      return response.data;
    });
  };

}



})();
