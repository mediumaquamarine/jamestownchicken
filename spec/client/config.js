'use strict';

describe('MainController', function () {
  var $scope, $rootScope, createController, Links, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('jamestownChicken.main'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');


    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('MainController', {
      });
    };

  }));

  it('should set $rootScope.bg to true', function () {
    createController();
    expect($rootScope.bg).to.equal(true);
  });


});