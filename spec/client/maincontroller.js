'use strict';

describe('Controller: MainController', function () {
  var  $scope, $rootScope, createController;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('jamestownChicken'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
        $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');


    createController = function () {
      return $controller('MainController', {
      });
    };

  }));


  it('bg should equal true', function () {
    createController(this);
    expect(this.out).to.equal('function');
  });


});