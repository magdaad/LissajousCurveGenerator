'use strict';

angular.module('search')
  .component('search', {
    templateUrl: 'app/components/search/search.template.html',
    controller: function SearchController($rootScope, $scope, ngDialog, $log) {

      $scope.A1 = 5;
      $scope.A2 = 8;
      $scope.W1 = 5;
      $scope.W2 = 8;
      $scope.phase = 150;

      $scope.search = function () {

        if (!((isNaN($scope.A1) || isNaN($scope.A2) || isNaN($scope.W1) ||
          isNaN($scope.W2) || isNaN($scope.phase)))) {

          $scope.searchEntry = {
            A1: $scope.A1,
            A2: $scope.A2,
            W1: $scope.W1,
            W2: $scope.W2,
            phase: $scope.phase
          };

          $rootScope.$broadcast('search-start', $scope.searchEntry);
        }

        else {
          $scope.displayError($scope.A1);
        }
      };

      $scope.displayError = function (value) {
        $log.error(value + " is not a number");
        ngDialog.open({template: 'templateId'});
      };
    }
  });
