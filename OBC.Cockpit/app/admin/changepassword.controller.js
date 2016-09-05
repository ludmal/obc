
(function () {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminChangePasswordController', AdminChangePasswordController);

    AdminChangePasswordController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'AdminService', 'notify', 'UtilService'];

    function AdminChangePasswordController($scope, $rootScope, ngDialog, $window, AdminService, notify, UtilService) {

        $scope.userId = UtilService.getQueryString('id');

        $scope.user = {
            OldPassword: '',
            NewPassword: '',
            UserId: $scope.userId
        };

        $scope.changePassword = function() {
            AdminService.changePassword($scope.user).then(function(response) {
                notify({ message: 'Password successfully changed', classes: 'msg' });
            });
        };
    };

})();
