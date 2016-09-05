
(function () {
    'use strict';

    angular
        .module('library.module')
        .controller('LibraryNewController', LibraryNewController);

    LibraryNewController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'LibraryService', 'UtilService'];

    function LibraryNewController($scope, $rootScope, ngDialog, $window, LibraryService, UtilService) {

        $scope.entity = {
            ItemType: 'LINKS'
        };

        $scope.init = function() {
            $scope.id = UtilService.getQueryString('id');

            if ($scope.id !== '') {
                LibraryService.getItemById($scope.id).then(function(response) {
                    $scope.entity = response.data;
                    console.log($scope.entity);
                });
            }
        };


        $scope.createItem = function () {
            LibraryService.newItem({
                Entity: $scope.entity
            }).then(function(response) {
                $window.location.href = '/library/list';
            });
        }

        $scope.init();

    };

})();
