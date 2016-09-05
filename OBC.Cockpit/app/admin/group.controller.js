//(function () {
//    "use strict";

//    angular
//        .module("group.module")
//        .controller("adminGroupController", adminGroupController);

//    adminGroupController.$inject = ["$scope","$http","Settings"];

//    $scope.Group = {
//        ApplicationId: "2",
//        CountryGroupType: "4",
//        CountryId: "12",
//        Name: "",
//        ApplicationModuleId: "2"
//    }

//    function adminGroupController($scope, $http, Settings) {

//        var intializeGroupData= function() {
//            $scope.Group.Name = "";
//        }

//        var getGroupsByAppId = function () {
//            $http.get(Settings.ApiUrl + "api/v1/groups/modules/2")
//                .then(function (response) {
//                    $scope.Groups = response.data.Data;
//                }, function (response) {
//                    alert("An error occured. Operation failed !");
//                });
//        }

//        $scope.AddGroup = function() {
//            $http.post(Settings.ApiUrl + "api/v1/groups/", $scope.Group)
//                .then(function(response) {
//                    alert("Group saved successfully");
//                        intializeGroupData();
//                    getGroupsByAppId();
//                    },
//                    function(response) {
//                        alert("An error occured saving group details");
//                    });
//        }



//        var init = function() {
//            getGroupsByAppId();
//        }

//        init();
//    };


//})();

///*
//(function () {
//    'use strict';

//    angular
//        .module('admin.module')
//        .controller('AdminGroupController', AdminGroupController);

//    AdminGroupController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'AdminService'];

//    function AdminGroupController($scope, $rootScope, ngDialog, $window, AdminService) {

//        $scope.Applicationfunctions = ['Create User', 'Create Group', 'Modify User', 'Modify Group', 'Product Price Listing', 'Customer Price Listing'];

//        $scope.Groups = [
//            {
//                ID: 'GP01', GroupName: 'Administrator', Country: 'Australia', CreatedBy: 'Jitendra Kumar', CreatedDate: '24-May-2016'
//            },
//            {
//                ID: 'GP02', GroupName: 'User Manager', Country: 'Australia', CreatedBy: 'Ludmal Desilva', CreatedDate: '20-May-2016'
//            },
//            {
//                ID: 'GP03', GroupName: 'CTS Manager', Country: 'New Zealand', CreatedBy: 'Ludmal Desilva', CreatedDate: '20-May-2016'
//            },
//            {
//                ID: 'GP04', GroupName: 'Group Manager', Country: 'Australia', CreatedBy: 'Kesav ThermaPalan', CreatedDate: '22-May-2016'
//            },
//            {
//                ID: 'GP05', GroupName: 'RO Manager', Country: 'Australia', CreatedBy: 'Kesav ThermaPalan', CreatedDate: '22-May-2016'
//            }
//        ]

//        $scope.Group =
//        [
//         { ID: 'GP01', GroupName: 'Administrator', Country: 'Australia', CreatedBy: 'Jitendra Kumar', CreatedDate: '24-May-2016' }
//        ]
//    };

//})();
//*/