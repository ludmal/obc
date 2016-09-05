
(function () {
    'use strict';

    angular
        .module('user.module')
        .controller('userCreateController', userCreateController);

    userCreateController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'userService', '$http'];

    function userCreateController($scope, $rootScope, ngDialog, $window, userService, $http) {


        $scope.isValidPage = true;

        var getParameterByName = function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var userInitialization = function () {
            $scope.user = {
                LoginId: 0
                 , UserId: ''
                 , UserName: ''
                 , UserType: ''
                 , AccessLevel: '9'
                 , Password: ''
                 , Email: ''
                 , ExpiryDate: new Date(1000, 0, 1)
                 , ActiveStatus: ''
                 , UserDomian: ''
                 , RepId: ''
                 , DefaultCountryId: 12
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
                 , ExpiryStatus: 'N'
                 , MaximumLoginAttempts: 0
                 , FirstFailedTime: new Date()
                 , AgentLocationId: ''
                 , TotalPages: 0
                 , RecordCount: 0
                 , CurrentPage: 0
                 , ConfirmPassword: ''
                 , UserGroups: []
                 , UserLocations: []
            }
        }

        var pageInit = function () {

            userService.GetCountryGroups(11)
                .then(function (response) {
                    $scope.Groups = response.data.Data;
                });

            // user Type
            userService.GetAllGroupDataByCategory("06")
             .then(function (response) {
                 $scope.UserTypes = response.data;
                    console.log($scope.UserTypes);
                });

            userService.GetAllGroupDataByCategory("07")
            .then(function (response) {
                $scope.ActiveStatusData = response.data;
                console.log($scope.ActiveStatusData);
            });

            userService.GetLocationsByUserId("jitendra")
                .then(function (response) {
                    $scope.Locations = response.data;
                });

            userInitialization();
        }

        pageInit();

        var controlInit = function () {
            var loginId = getParameterByName("loginId");
            if (loginId != null && !isNaN(loginId) && loginId > 0) {
                $scope.user.LoginId = loginId;
                userService.GetUserByLoginId($scope.user.LoginId).then(function (response) {
                    $scope.user = response.data;
                    $scope.user.ExpiryDate = new Date($scope.user.ExpiryDate);
                });

            } else {
                //$scope.user.LoginId = 0;
                userInitialization();
            }
        }

        controlInit();

        var pageValidation = function () {
            $scope.isValidPage = true;
            if ($scope.user.ExpiryDate == null) {
                if ($scope.user.ExpiryStatus === "A") {
                    $scope.isValidPage = false;
                    alert("Date is not correct");
                } else {
                    $scope.user.ExpiryDate = new Date(1000, 0, 1);
                }
            }
        };

        $scope.AddOrUpdate = function () {
            pageValidation();
            if ($scope.isValidPage === true) {
                userService.AddOrUpdate($scope.user)
                    .success(function (response) {
                        alert("Data save successfully.");
                    })
                    .error(function (response, status, headers, config) {
                        alert(response.ExceptionMessage);
                    });
            } else {
                return;
            }
        }

        $scope.submitForm = function () {
            return true;
        }

        $scope.ResetControls = function () {
            pageInit();
        }

    };
})();
