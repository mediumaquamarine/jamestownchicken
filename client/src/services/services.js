angular.module('jamestownChicken')

  .factory('Auth', ['$http', '$location', '$window', '$state','$rootScope', function($http, $location, $window, $state, $rootScope) {
    var signup = function(user, password, email) {
      $http.post('api/signup', {username: user, password: password, email: email})
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
      //setting loggedIn to true makes the my account and signout buttons appear on the navbar
      $rootScope.loggedIn = true;
      $state.go('home');

    };

    var signin = function(user, password) {
      $http.post('api/signin', {username: user, password: password})
        .then(function(res) {
          if(res.data.usernone){
            alert('user not found');
            $state.go('signin');
          }

        $window.localStorage.accessToken = res.data.token;
      })
      //setting loggedIn to true makes the my account and signout buttons appear on the navbar
      $rootScope.loggedIn = true;
      $state.go('home');

    };
    return {
      signup : signup,
      signin: signin
    };
  }])