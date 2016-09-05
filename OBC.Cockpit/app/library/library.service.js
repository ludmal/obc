
(function () {
    'use strict';

    angular
        .module('library.module')
        .factory('LibraryService', LibraryService);

    LibraryService.$inject = ['$resource', '$http', 'Settings'];

    function LibraryService($resource, $http, Settings) {
        var srv = {};

        srv.getItems = function () {
            return $http.get(Settings.ApiUrl + '/api/brokers/library');
        };

        srv.getItemsByType = function (type, count) {
            return $http.get(Settings.ApiUrl + '/api/brokers/library/type/' + type + '/?count=' + count);
        };

        
        srv.getItemById = function (id) {
            return $http.get(Settings.ApiUrl + '/api/brokers/library/' + id);
        };

        srv.newItem = function (item) {
            return $http.post(Settings.ApiUrl + '/api/brokers/library',item);
        };

        return srv;
    };

})();

