
(function () {
    'use strict';

    angular
        .module('home.module')
        .factory('HomeService', HomeService);

    HomeService.$inject = ['$resource', '$http', 'Settings'];

    function HomeService($resource, $http, Settings) {
        var srv = {};
        srv.getPromotedLibraryItems = function (count) {
            return $http.get(Settings.ApiUrl + '/api/brokers/library/promoted?count=' + count);
        };

        srv.getLibraryItemsByType = function (type, count) {
            return $http.get(Settings.ApiUrl + '/api/brokers/library/type/' + type + '/?count=' + count);
        };


        return srv;
    };

})();

