angular.module('jamestownChicken')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../../templates/home/index.html',
        controller: 'MainController as main',
        css: '../../content/css.css'
      })
  }])