angular.module('jamestownChicken')
  .controller('MainController',['$rootScope', 'Auth', function($rootScope, Auth) {
    //is rootScope.bg only a test?
    $rootScope.bg = true;
    this.out = function() {
      Auth.signout();
    }
  }]);