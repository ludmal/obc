
(function () {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminIndexController', AdminIndexController);

    AdminIndexController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'AdminService'];

    function AdminIndexController($scope, $rootScope, ngDialog, $window, AdminService) {
        $scope.tab = 'Group';

        $scope.init = function() {
            AdminService.getUsersByRole($scope.tab).then(function(response) {
                $scope.users = response.data;
            });
        };

        $scope.newUser = function() {
            $window.location.href = '/admin/newuser';
        }

        $scope.init();

    };

})();
