angular.module('jamestownChicken')
  .controller('SignupController',['$rootScope', '$http', '$window','$state','Auth', function($rootScope, $http, $window, $state, Auth) {
    this.user;
    this.password;
    this.retype;
    this.email;
    this.submit = function() {
      Auth.signup(this.user, this.password, this.email);
      this.user = '';
      this.password='';
      this.email='';
    }



  }]);

