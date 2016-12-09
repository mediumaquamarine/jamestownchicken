angular.module('jamestownChicken', ['ui.router'])
  .run(['Auth', '$window','$rootScope', function(Auth, $window, $rootScope) {
    $rootScope.loggedIn = Auth.isAuthLite();
  }])
