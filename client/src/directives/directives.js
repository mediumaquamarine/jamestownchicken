angular.module('jamestownChicken')
  .directive('formValidator', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctl) {
        scope.$watch(attrs['formValidator'], function (errorMsg) {
          console.log('helloy');
          elm[0].setCustomValidity(errorMsg);
          console.log(scope);
          ctl.$setValidity('formValidator', errorMsg ? false: true);
        });
      }
    }
  })