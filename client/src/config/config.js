angular.module('jamestownChicken')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/home/index.html',
        css: '../../content/css.css'
      })
  }])