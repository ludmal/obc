
(function () {
    'use strict';

    angular
        .module('admin.module')
        .factory('AdminService', AdminService);

    AdminService.$inject = ['$resource', '$http', 'Settings'];

    function AdminService($resource, $http, Settings) {
        var srv = {};

        srv.GetUserByLoginId = function (loginId) {
            return $http.get(Settings.ApiUrl + '/api/v1/users/12');
        };

        srv.AddOrUpdate = function (user) {
            return $http.post(Settings.ApiUrl + '/api/v1/users', user);
        };

        srv.GetLocationsByUserId = function (userId) {
            return $http.get(Settings.ApiUrl + '/api/v1/globalization/locations/JITENDRA');
        };

        srv.GetCountryGroups = function () {
            return $http.get(Settings.ApiUrl + '/api/v1/groups/modules/12');
        };

        srv.getUserRoles = function () {
            return $http.get(Settings.ApiUrl + '/api/brokers/admin/roles');
        };

        srv.getUsersByRole = function (role) {
            return $http.get(Settings.ApiUrl + '/api/brokers/admin/users/' + role);
        };

        srv.brokers = function () {
            return $http.get(Settings.ApiUrl + '/api/brokers/brokerlist');
        };

        srv.companies = function () {
            return $http.get(Settings.ApiUrl + '/api/brokers/brokercompanylist');
        };

        srv.groups = function () {
            return $http.get(Settings.ApiUrl + '/api/brokers/brokergrouplist');
        };

        srv.createUser = function (user) {
            var config = {
                headers:
                {
                    'x-testing': 'testing',
                    'x-what': 'what is htis'
                }
            };

            return $http.post(Settings.ApiUrl + '/api/brokers/admin/user', user, config);
        };

        srv.changePassword = function (command) {
            return $http.post(Settings.ApiUrl + '/api/brokers/admin/changepassword', command);
        };

        srv.lockAccount = function (command) {
            return $http.post(Settings.ApiUrl + '/api/brokers/admin/lock', command);
        };


        return srv;
    };

})();
