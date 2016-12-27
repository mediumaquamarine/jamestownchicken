angular.module('jamestownChicken')
  .directive('formValidator', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctl) {
        scope.$watch(attrs['formValidator'], function (errorMsg) {
          elm[0].setCustomValidity(errorMsg);
          ctl.$setValidity('formValidator', errorMsg ? false: true);
        });
      }
    }
  })