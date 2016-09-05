
(function () {
    'use strict';

    angular
        .module('core.module')
        .factory('AuditService', AuditService);

    AuditService.$inject = ['$rootScope', '$http', '$q', 'localStorageService', 'Settings'];

    function AuditService($rootScope, $http, $q, localStorageService, Settings) {
        var srv = {};

        srv.getAudits = function (type, id) {
            return $http.get(Settings.ApiUrl + '/api/brokers/audit/' + type + '/?id=' + id);
        };

        return srv;

    };

})();