(function() {
    angular.module('app')
        .config([
            'cfpLoadingBarProvider', '$httpProvider', '$provide', function (cfpLoadingBarProvider, $httpProvider, $provide) {
                cfpLoadingBarProvider.includeSpinner = false;
            }
        ])
        .run([
            'AuthService', '$rootScope', 'localStorageService', 'notify', function (AuthService, $rootScope, localStorageService, notify) {
            }
        ]);
})();