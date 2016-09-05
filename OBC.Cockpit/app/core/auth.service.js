
(function() {
    'use strict';

    angular
        .module('core.module')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$rootScope', '$http', '$q', 'localStorageService', 'Settings'];

    function AuthService($rootScope, $http, $q, localStorageService, Settings) {
        var srv = {};

        var authDataKey = 'authData';

        srv.auth = {
            isAuth: false,
            username: ''
        };

        srv.login = function(username, password) {
            var deferred = $q.defer();

            var config = {
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-what': 'nice one'
                }
            };

            var authRequest = 'grant_type=password&username=' + username + '&password=' + password;

            $.ajax({
                type: "POST",
                url: Settings.ApiUrl + '/auth/token',
                data: authRequest,
                success: function(response) {
                       
                }
            });

            $http({
                url: Settings.ApiUrl + '/auth/token',
                method: 'POST',
                data: authRequest,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (response) {
                localStorageService.set(authDataKey, { token: response.access_token, username: username });
                srv.auth.isAuth = true;
                srv.auth.username = username;
                deferred.resolve(response);
            }).error(function (error) {
                srv.logout();
                deferred.reject(error);
            });

            //$http.post(Settings.ApiUrl + '/auth/token', 
            //    authRequest, config).success(function(response) {

            //    localStorageService.set(authDataKey, { token: response.access_token, username: username });

            //    srv.auth.isAuth = true;
            //    srv.auth.username = username;
            //    deferred.resolve(response);

            //}).error(function(err, status) {
            //    srv.logout();
            //    deferred.reject(err);
            //});

            return deferred.promise;

        };

        srv.logout = function() {
            localStorageService.remove(authDataKey);
            localStorageService.remove('broker');
            srv.auth.isAuth = false;
            srv.auth.username = '';
        };

        srv.refresh = function() {
            var authData = localStorageService.get(authDataKey);
            if (authData) {
                srv.auth.isAuth = true;
                srv.auth.username = authData.username;
            }
        };

        return srv;

    };

})();