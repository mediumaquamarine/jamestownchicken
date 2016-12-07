angular.module('jamestownChicken')
  .controller('SignupController',['$rootScope', '$http', '$window','$state', function($rootScope, $http, $window, $state) {
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
          $window.localStorage.accessToken = res.data.token;
      })
          this.user = '';
          this.password='';
          this.email='';
          $state.go('home');

    };

  }]);