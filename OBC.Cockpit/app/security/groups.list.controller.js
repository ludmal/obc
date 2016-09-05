(function() {
    "use strict";
    angular
       .module("group.module")
       .controller("groupListController", groupListController);

    groupListController.$inject = ["$scope", "groupService", "Settings"];

    function groupListController($scope, groupService, Settings) {

        $scope.Group = {
            Id: 0,
            ApplicationId: "2",
            CountryGroupType: "4",
            CountryId: "12",
            Name: "",
            ApplicationModuleId: "2",
            GroupEditLink: "aaa",
            Functions: []
        }

        $scope.Groups = [];

        $scope.AppModId = 11;
        $scope.ApplicationId = 2;
        $scope.CountryId = 12;

        var getGroupsByAppId = function () {
            groupService.getGroupsByAppId($scope.AppModId)
                .then(function (response) {
                    $scope.Groups = response.data.Data;
                },
                    function () {
                        alert("An error occured. Operation failed !");
                    });
        };

        $scope.searchGroupsByName = function (searchString) {
           
            if (searchString != null && searchString != "") {

                //alert(searchString);
                var searchQuery = "?groupName=" +
                    searchString +
                    "&applicationId=" +
                    $scope.ApplicationId +
                    "&countryId=" +
                    $scope.CountryId;

                //alert(searchQuery);

                groupService.searchGroupsByName(searchQuery)
                    .then(function(response) {
                        $scope.Groups = response.data.Groups;
                        for (var i = 0; i < $scope.Groups.length; i++) {
                            console.info($scope.Groups[i].Name);
                        }
                        },
                        function() {
                            alert("An error occured. Operation failed !");
                        });
            } else {
                getGroupsByAppId();
            }
        };

        //$scope.searchGroupsByName = function () {
        //    var searchString = "sample Text";
        //    alert("Search String : " + searchString);
        //};

        var initMetaData = function () {
            //getGroupsByAppId();
            $scope.searchGroupsByName("");
        }

        initMetaData();
    }
})();