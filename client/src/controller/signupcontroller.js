angular.module('jamestownChicken')
  .controller('SignupController',['$rootScope', '$http', '$window', function($rootScope, $http, $window) {
    this.user;
    this.password;
    this.email;
    this.test = 'test';
    this.submit = function() {
      $http.post('api/signup', {username: this.user, password: this.password, email: this.email})
        .then(function(res) {
          if(res.data.duplicateUser){
            alert('username already taken, please choose a new one');
            $state.go('signup');
          }
          if(res.data.duplicateEmail){
            alert('email already in use, please choose a new one');
            $state.go('signup');
          }

          this.user = '';
          this.password='';
          this.email='';
          $window.localStorage.accessToken = res.data.token;
          $state.go('home');
        })
    };

  }]);