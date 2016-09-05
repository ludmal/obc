
(function () {
    'use strict';

    angular
        .module('core.module')
        .factory('HttpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$q', '$rootScope', '$window', '$injector', 'localStorageService'];

    function HttpInterceptor($q, $rootScope, $window, $injector, localStorageService) {
        return {
            // On reques
            request: function (config) {
                // Request timeout of 5s for all http requests
                //config.timeout = 30000;
                return config || $q.when(config);
            },

            // On request failure
            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                console.log('responseError', rejection);
                var notify = $injector.get('notify');

                if (rejection.status === 400) {

                    if (rejection.data.error_description !== null) {
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

                if (rejection.status === 406) {
                    var messageTemplate = '<span>' + rejection.data.ExceptionMessage + '</span>';
                    console.log('message', rejection.data.ExceptionMessage);
                    notify({
                        messageTemplate: messageTemplate,
                        classes: 'app-error'
                    });
                }

                if (rejection.status === 500) {
                    var msg = '<span>' + rejection.data.ExceptionMessage + '</span>';
                    notify({
                        messageTemplate: msg
                    });
                }

                if (rejection.status === 0) {
                    notify({ message: 'An error occured. Try refreshing the page. (Request timed out)' });
                    return $q.reject(rejection);
                }

                return $q.reject(rejection);
            }
        };
    };

})();
