
(function() {
    'use strict';

    angular
        .module('library.module')
        .controller('LibraryContentController', LibraryContentController);

    LibraryContentController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'LibraryService', 'UtilService', '$sce'];

    function LibraryContentController($scope, $rootScope, ngDialog, $window, LibraryService, UtilService, $sce) {

        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        }
        $scope.init = function () {
            $scope.id = UtilService.getQueryString('id');
            LibraryService.getItemById($scope.id).then(function (response) {
                $scope.libItem = response.data;
                console.log($scope.libItem);
                LibraryService.getItemsByType($scope.libItem.ItemType, 5).then(function (response) {
                    $scope.items = response.data;
                });
            });
        };

        $scope.init();
    };

})();