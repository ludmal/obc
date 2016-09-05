(function() {
    angular.module('app')
        .config([
            'cfpLoadingBarProvider', '$httpProvider', '$provide', function (cfpLoadingBarProvider, $httpProvider, $provide) {
                cfpLoadingBarProvider.includeSpinner = false;
                $httpProvider.defaults.cache = false;
                //$httpProvider.interceptors.push('HttpInterceptor');
                $httpProvider.interceptors.push('AuthInterceptor');
            }
        ])
        .run([
            'AuthService', '$rootScope', 'localStorageService', 'notify', function (AuthService, $rootScope, localStorageService, notify) {
            }
        ]);
})();