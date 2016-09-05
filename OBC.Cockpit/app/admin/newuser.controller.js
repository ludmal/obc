
(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminNewUserController', AdminNewUserController);

    AdminNewUserController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'AdminService', 'notify', 'UtilService', 'AuditService'];

    function AdminNewUserController($scope, $rootScope, ngDialog, $window, AdminService, notify, UtilService, AuditService) {

        $scope.userId = '';
        $scope.isNew = true;

        $scope.username = '';
        $scope.confirmPassword = '';
        $scope.id = 0;
        $scope.type = '';

        $scope.setBroker = function(id) {
            $scope.id = id;
        };

        $scope.init = function() {
            $scope.userId = UtilService.getQueryString('id');
            var role = UtilService.getQueryString('type');
            $scope.type = role;

            if (role !== '') {
                $scope.user.Roles = [role];
            }

            $scope.isNew = $scope.userId === '';
            AdminService.getUserRoles().then(function(response) {
                $scope.roles = response.data;
            });

            if ($scope.type === 'Broker') {
                AdminService.brokers().then(function(response) {
                    $scope.list = response.data;
                });
            }

            if ($scope.type === 'Aggregator') {
                AdminService.companies().then(function(response) {
                    $scope.list = response.data;
                });
            }

            if ($scope.type === 'Brokerage') {
                AdminService.groups().then(function(response) {
                    $scope.list = response.data;
                });
            }

            if (!$scope.isNew) {
                $scope.getUserByUserId();
                $scope.getAudit();
            }
        };

        $scope.getAudit = function() {
            AuditService.getAudits('User', $scope.userId).then(function(response) {
                $scope.audits = response.data;
            });
        };

        $scope.tab = 'ACT';

        console.log(UtilService.getQueryString('id'));


        $scope.user = {};

        $scope.getUserByUserId = function() {
            AdminService.getUserByUserId($scope.userId).then(function(response) {
                $scope.user = response.data;
                $scope.username = response.data.Username;
            });
        };

        $scope.lock = function(isLock) {
            AdminService.lockAccount({
                UserId: $scope.userId,
                Lock: isLock
            }).then(function() {
                $scope.user.LockedEnabled = isLock;
                notify({ message: isLock ? 'User account locked!' : 'User account unlocked!', classes: 'msg' });
                $scope.getAudit();
            });
        };

        $scope.createUser = function() {
            if ($scope.user.Password !== $scope.confirmPassword) {
                notify({ message: 'Password does not match', classes: 'err' });
                return;
            }
            $scope.user.RoleType = $scope.type;
            $scope.user.Id = $scope.id;

            AdminService.createUser($scope.user).then(function() {
                $scope.user = {};
                notify({ message: 'User successfully created', classes: 'msg' });
                //$window.location.href = '/admin';

            });
        };

        $scope.init();
    };

})();