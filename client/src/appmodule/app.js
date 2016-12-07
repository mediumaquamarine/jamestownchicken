angular.module('jamestownChicken', ['ui.router'])
.run(['$rootScope', function($rootScope) {
  $rootScope.loggedIn = false;
}])