'use strict';

angular.module('search')
        .component('search', {
            templateUrl: 'app/components/search/search.template.html',
            controller: function SearchController($rootScope, $scope, $log) {

                $scope.search = function () {

                  if (angular.isNumber($scope.A1) && angular.isNumber($scope.A2) && angular.isNumber($scope.W1) &&
                    angular.isNumber($scope.W2) &&angular.isNumber($scope.phase)){

                    $scope.searchEntry = {
                      A1:$scope.A1,
                      A2:$scope.A2,
                      W1:$scope.W1,
                      W2:$scope.W2,
                      phase:$scope.phase
                    };

                    $rootScope.$broadcast('search-start', $scope.searchEntry);
                  }

                  else {
                   $scope.displayError($scope.A1);
                  }
                };

                $scope.displayError = function (value) {
                  console.log(value + " is not a number");
                }


            }
        });
