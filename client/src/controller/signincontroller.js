angular.module('jamestownChicken')
  .controller('SigninController', ['$rootScope', '$http', '$window','$state','Auth', function($rootScope, $http, $window, $state, Auth) {
    this.user;
    this.password;
    this.submit = function() {
      Auth.signin(this.user, this.password);
      this.user = '';
      this.password='';
    }



  }]);