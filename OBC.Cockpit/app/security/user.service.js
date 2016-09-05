(function () {
    'use strict';

    angular
        .module('user.module')
        .factory('userService', userService);

    userService.$inject = ['$resource', '$http', 'Settings'];

    function userService($resource, $http, Settings) {
        var srv = {};

        srv.GetUserByLoginId = function (loginId) {
            return $http.get(Settings.ApiUrl + '/api/v1/users/' + loginId);
        };

        srv.AddOrUpdate = function (user) {
            return $http.post(Settings.ApiUrl + '/api/v1/users', user);
        };

        srv.GetLocationsByUserId = function (userId) {
            return $http.get(Settings.ApiUrl + '/api/v1/globalization/locations/' + userId);
        };

        srv.GetCountryGroups = function (applicationId) {
            return $http.get(Settings.ApiUrl + '/api/v1/groups/modules/' + applicationId);
        };

        srv.SearchUsers = function (userSearchParameters) {
            var user = $resource(Settings.ApiUrl + '/api/v1/users/SearchUsers');
            return user.query(userSearchParameters);
        };

        srv.GetAllGroupDataByCategory = function (groupCategory) {
            return $http.get(Settings.ALnetApiUrl + "common/GetAllGroupData/" + groupCategory);
        };


        return srv;
    };

})();

