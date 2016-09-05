
(function () {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminUserController', AdminUserController);

    AdminUserController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'AdminService'];

    function AdminUserController($scope, $rootScope, ngDialog, $window, AdminService, $http) {

        
        AdminService.GetCountryGroups().then(function (data) {
            $scope.Groups = data.data.Data;
        })

        AdminService.GetLocationsByUserId('jitendra.kumar').then(function (data) {
            $scope.Locations = data.data;
        })

        $scope.ActiveStatusData = [{ Id: 'A', Value: 'Active' }, { Id: 'N', Value: 'In Active' }, { Id: 'Y', Value: 'Dormant' }];

        $scope.UserTypes = [
            { Id: '1', Value: 'Admin' },
            { Id: '2', Value: 'Normal Admin' },
            { Id: '3', Value: 'External User' }

        ];

        $scope.user = {
            LoginId: 0
          , UserId: ''
          , UserName: ''
          , UserType: ''
          , AccessLevel: '9'
          , Password: ''
          , Email: ''
          , ExpiryDate: new Date()
          , ActiveStatus: ''
          , UserDomian: ''
          , RepId: ''
          , DefaultCountryId: 0
          , DefaultLocationId: ''
          , DefaultRegionId: 0
          , DefaultCultureId: 2
          , AuthorizationLimit: 0
          , FirstName: ''
          , LastName: ''
          , ContactNo: ''
          , MobileNo: ''
          , AreaCode: ''
          , JobDescr: ''
          , IsSubscribe: false
          , SecQuesId: 1
          , SecQusAnswer: ''
          , AccountNo: ''
          , DisplayPrice: false
          , LastLogIn: new Date()
          , LoginAttempts: 0
          , PasswordResetToken: ''
          , DemoFlag: false
          , DealerFlag: 0
          , Workstation: 'Jitendra Machine'
          , CreatedBy: 'Jitendra'
          , CreatedDate: new Date()
          , LastUpdatedBy: 'Jitendra'
          , LastUpdatedDate: new Date()
          , AgentNo: ''
          , ExpiryStatus: ''
          , MaximumLoginAttempts: 0
          , FirstFailedTime: new Date()
          , AgentLocationId: ''
          , TotalPages: 0
          , RecordCount: 0
          , CurrentPage: 0
          , ConfirmPassword: ''
          , UserGroups: []
          , UserLocations: []
          , Roles: []
        }

        $scope.result = {};
 

        $scope.AddOrUpdate = function () {
            AdminService.AddOrUpdate($scope.user)
                .then(function (data) {
                    $scope.result = data;
                });
        }

        $scope.submitForm = function () {
            return true;
        }

        $scope.$watch('user.LoginId', function (d) {
            console.log('watch', d);
            if (d != undefined && d != 0) {
                AdminService.GetUserByLoginId($scope.user.LoginId).then(function (data) {
                    $scope.user = data.data;
                    $scope.user.ExpiryDate = new Date($scope.user.ExpiryDate);
                    console.log(data);
                });
            }
        });


    };
})();
