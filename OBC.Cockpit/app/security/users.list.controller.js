(function () {
    "use strict";
    angular
       .module("user.module")
       .controller("userListController", userListController);

    userListController.$inject = ["$scope", "userService", "Settings"];

    function userListController($scope, userService, Settings) {

        $scope.Users =
        {
            LoginId: 0,
            UserId: '',
            UserName: '',
            ActiveStatus: '',
            Email: '',
            AgentNo: ''
        }

        $scope.userSearchParameters = {
            LoginId: 148
                 , AccountNo: ''
                 , UserId: ''
                 , UserType: '0'
                 , Email: ''
                 , SearchType: 'S04'            // AL Net it is hard coded as we are using CPs database.
                 , ActiveStatus: ''
                 , AgentNo: ''
                 , CultureId: 2
                 , CountryId: 12
                 , TotalPages: 10
                 , RecordCount: 0
                 , CurrentPage: 1
        }

        $scope.main = {
            page: 1,
            take: 15
        };

        var searchUsers = function () {
            userService.SearchUsers($scope.userSearchParameters)
                .$promise.then(function (response) {
                    $scope.Users = response;
                    $scope.main.page = $scope.Users.TotalPages;
                });
        };

        var pageInit = function () {
            searchUsers();
        }

        pageInit();

        $scope.searchUsersByParameters = function () {
            userService.SearchUsers($scope.userSearchParameters)
               .$promise.then(function (response) {
                   $scope.Users = response;
                   $scope.main.page = $scope.Users.TotalPages;
               },
                   function () {
                       //alert("An error occured. Operation failed !");
                   });
        };
      
        //$scope.nextPage = function () {
        //    if ($scope.main.page < $scope.main.pages) {
        //        $scope.main.page++;
        //        $scope.searchUsers();
        //    }
        //};

        //$scope.previousPage = function () {
        //    if ($scope.main.page > 1) {
        //        $scope.main.page--;
        //        $scope.searchUsers();
        //    }
        //};
    }
})();