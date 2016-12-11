angular.module('jamestownChicken', ['ui.router'])
  .run(['Auth', '$window','$rootScope', '$location', function(Auth, $window, $rootScope, location) {
    $rootScope.loggedIn = Auth.isAuthLite();
  //   $rootScope.$on('$stateChange', function (evt, next, current) {
  //   if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
  //     $location.path('/signin');
  //   }
  // });
  }])
