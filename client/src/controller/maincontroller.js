angular.module('jamestownChicken')
  .controller('MainController',['$rootScope', 'Auth', function($rootScope, Auth) {
    $rootScope.bg = true;
    this.out = function() {
      Auth.signout();
    }
  }]);