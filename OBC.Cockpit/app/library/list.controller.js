
(function() {
    'use strict';

    angular
        .module('library.module')
        .controller('LibraryListController', LibraryListController);

    LibraryListController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'LibraryService'];

    function LibraryListController($scope, $rootScope, ngDialog, $window, LibraryService) {

        var count = 1000;
        $scope.tab = 'All';

        $scope.init = function() {
            LibraryService.getItemsByType($scope.tab, count).then(function(response) {
                $scope.items = response.data;
                console.log($scope.items);
            });
        };

        $scope.new = function() {
            $window.location.href = '/library/new';
        }

        $scope.init();
    };

})();