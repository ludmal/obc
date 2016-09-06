
(function() {
    'use strict';

    angular
        .module('core.module')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$q', '$injector', '$window', 'localStorageService'];

    function AuthInterceptor($q, $injector, $window, localStorageService) {
        var srv = {};

        srv.request = function(config) {

            config.headers = config.headers || {};
            var authData = localStorageService.get('authData');

            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }
            return config;
        }

        srv.responseError = function (rejection) {
            var notify = $injector.get('notify');

            if (rejection.status === 401) {
                var authService = $injector.get('AuthService');
                authService.logout();
                $window.location.href = '/unauthorized';
            }

            if (rejection.status === 400) {

                if (!angular.isUndefined(rejection.data.error_description)) {
                    console.log('inside');
                    notify({
                        message: rejection.data.error_description,
                        classes: 'model-error'
                    });
                    return $q.reject(rejection);
                }

                var html = '<span>';

                angular.forEach(rejection.data.ModelState, function (value, key) {
                    angular.forEach(rejection.data.ModelState[key], function (item) {
                        html += item + '<br/>';
                    });
                });

                html = html + '</span>';

                notify({
                    messageTemplate: html,
                    classes: 'model-error'
                });
            }

            if (rejection.status === 406 || rejection.status === 500) {
                var messageTemplate = '<span>' + rejection.data.ExceptionMessage + '</span>';
                console.log('message', rejection.data.ExceptionMessage);
                notify({
                    messageTemplate: messageTemplate,
                    classes: 'err'
                });
            }

            return $q.reject(rejection);
        }

        return srv;
    };

})();