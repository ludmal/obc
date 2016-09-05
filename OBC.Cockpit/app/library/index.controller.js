
(function() {
    'use strict';

    angular
        .module('library.module')
        .controller('LibraryIndexController', LibraryIndexController);

    LibraryIndexController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'LibraryService'];

    function LibraryIndexController($scope, $rootScope, ngDialog, $window, LibraryService) {

        var count = 10;
        $scope.init = function() {
            LibraryService.getItemsByType('CONTENT', count).then(function (response) {
                $scope.contentList = response.data;
            });

            LibraryService.getItemsByType('VIDEO', count).then(function (response) {
                $scope.videoList = response.data;
            });

            LibraryService.getItemsByType('LINKS', count).then(function (response) {
                $scope.docList = response.data;
            });

            LibraryService.getItemsByType('FAQ', count).then(function (response) {
                $scope.faqList = response.data;
            });
        };

        $scope.init();
    };

})();