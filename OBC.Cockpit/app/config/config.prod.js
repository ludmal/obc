(function () {
    angular.module('app')
        .config([
            'cfpLoadingBarProvider', '$httpProvider', '$provide', function (cfpLoadingBarProvider, $httpProvider, $provide) {
                cfpLoadingBarProvider.includeSpinner = false;
                $httpProvider.defaults.cache = true;
                $httpProvider.interceptors.push('HttpInterceptor');
                $httpProvider.interceptors.push('AuthInterceptor');
            }
        ])
        .run([
            'AuthService', '$rootScope', 'localStorageService', 'notify', function (AuthService, $rootScope, localStorageService, notify) {
                AuthService.refresh();
                $rootScope.brokerList = localStorageService.get('brokerList');
                $rootScope.broker = localStorageService.get('broker');
            }
        ]);
})();