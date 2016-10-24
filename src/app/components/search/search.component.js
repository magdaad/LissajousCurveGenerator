'use strict';

angular.module('search')
        .component('search', {
            templateUrl: 'app/components/search/search.template.html',
            controller: function SearchController($rootScope, $scope, $log) {

                $scope.search = function () {
                    $log.debug($scope.A1);
                    $log.debug($scope.A2);

                  $scope.searchEntry = {
                    A1:$scope.A1,
                    A2:$scope.A2,
                    W1:$scope.W1,
                    W2:$scope.W2,
                    phase:$scope.phase
                  };

                    $rootScope.$broadcast('search-start', $scope.searchEntry);
                //  $rootScope.$broadcast('search-A2', $scope.query2);
                };
            }
        });
