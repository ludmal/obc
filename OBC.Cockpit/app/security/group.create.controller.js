(function() {
    "use strict";

    angular
        .module("group.module")
        .controller("groupCreateController", groupCreateController);

    groupCreateController.$inject = ["$scope", "groupService", "Settings"];

    function groupCreateController($scope, groupService, Settings) {

        //alert("initializing..");

        $scope.saveFailure = 0;
        $scope.AppModId = 11;
        $scope.GroupEditLink = "GroupLink";

        $scope.Group = {
        };

        $scope.Function = {
        };

        $scope.GroupFunctions = {
        
        };

        var setClietnMessage = function(type, message) {
            var label = document.getElementById("messageLabel");
            var cssClass = "";

            if (label != null) {
                switch (type) {
                    case 0:
                        cssClass = "alert-info";
                        break;
                    case 1:
                        cssClass = "alert-success";
                        break;

                    case 2:
                        cssClass = "alert-warning";
                        break;

                    case 3:
                        cssClass = "alert-danger";
                        break;
                    
                    default:
                        cssClass = "alert-info";
                        break;
                }

                label.setAttribute("class", cssClass);
                label.innerHTML = message;
            }
        };

        var initMetaDataGroup = function() {
            $scope.Group = {
                Id: 0,
                ApplicationId: "2",
                CountryGroupType: "4",
                CountryId: "12",
                Name: "",
                ApplicationModuleId: "2",
                GroupEditLink: "",
                Functions: [{}]
            }
        };


        var initMetaDataFunction = function () {
            $scope.Function = {
                ApplicationModuleFunctionId: 0,
                ApplicationModuleId: 0,
                FunctionCode: "",
                FunctionType: 0,
                ParentApplicationModuleId: 0,
                Description: "",
                SortOrder: 0.00,
                LinkControlModuleFunctionId: 0
            }
        };

        var getParameterByName = function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var verifyPageType = function() {
            var groupId = getParameterByName("Id");
            if (groupId != null && !isNaN(groupId) && groupId > 0) {
                //alert("Group :" + groupId);
                $scope.Group.Id = groupId;
                $scope.PageType = "M";
            } else {
                $scope.Group.Id = 0;
                $scope.PageType = "C";
            }
        }

        

        //var getGroupsByAppId = function () {
        //    groupService.getGroupsByAppId($scope.AppModId)
        //        .then(function(response) {
        //                $scope.Groups = response.data.Data;
        //            },
        //            function() {
        //                alert("An error occured. Operation failed !");
        //            });
        //};

        var markSelectedFunctions = function () {
            if ($scope.GroupFunctions != null) {
                $scope.Group.Functions = [];
                for (var i = 0; i < $scope.GroupFunctions.length; i++) {
                    
                    //console.info($scope.GroupFunctions[i].ApplicationModuleFunctionId);
                    $scope.Group.Functions.push($scope.GroupFunctions[i].ApplicationModuleFunctionId);
                }
            }
        };


        var getGroupFunctionsByGroupId = function () {
            groupService.getGroupFunctionsByGroupId($scope.Group.Id)
                .then(function (response) {
                    $scope.GroupFunctions = response.data.Data;

                    //alert("Group function details for Id : " + $scope.Group.Id + " loaded successfully. Count : " + $scope.GroupFunctions.length);
                    //setClietnMessage(0, "Group function details for Id : " + $scope.Group.Id + " loaded successfully. Count : " + $scope.GroupFunctions.length);
                        markSelectedFunctions();
                    },
                    function () {
                        setClietnMessage(3, "An error occured while loading group function details");
                    });
        };

        var getGroupDetailsByGroupId = function () {
            groupService.getGroupDetailsByGroupId($scope.Group.Id)
                .then(function (response) {
                        if (response.data.Data != null) {
                            $scope.Group = response.data.Data;
                            getGroupFunctionsByGroupId();
                        } else {
                            initMetaDataGroup();
                        }

                        //alert("Group details for Id : " + $scope.Group.Id + "loaded successfully");
                    },
                    function() {
                        setClietnMessage(3, "An error occured while loading group details");
                    });
        };

       

        
       


        var getAvailableFunctionsByAppId = function (response) {
            //$scope.Functions = groupService.getAvailableFunctionsByAppId($scope.AppModId).Data;
            groupService.getAvailableFunctionsByAppId($scope.AppModId)
                .then(function(response) {
                    $scope.Functions = response.data.Data;
                        //markSelectedFunctions();
                        //alert("Function Details Loadad Successfully !");
                    },
                    function() {
                        
                        setClietnMessage(3, "An error occured while fetching function detilas !");
                    });
        };

       

        var intializeGroupData = function () {
            if ($scope.PageType === "C") {
                $scope.Group.Name = "";
                $scope.Group.Functions = [];
            } else {
                getGroupDetailsByGroupId();

            }
        };

        $scope.addGroup = function () {
            $scope.Group.ApplicationModuleId = $scope.AppModId;
            groupService.addGroup($scope.Group)
                .then(function (response) {
                    //alert("Group details saved successfully");
                    setClietnMessage(1, "Details saved successfully !");
                    
                    if ($scope.PageType === "C") {
                        $scope.Group.Name = "";
                        $scope.Group.Functions = [];
                    }
                },
                    function (response) {
                        //alert("An error occured saving group details");
                        setClietnMessage(3, "An error occured saving group details !");
                    });

        };

        //$scope.checkAll = function(checkStatus) {
        //    if ($scope.GroupFunctions != null) {
        //        $scope.Group.Functions = [];
        //        if (checkStatus) {
        //            for (var i = 0; i < $scope.GroupFunctions.length; i++) {
        //                $scope.Group.Functions = [];
        //                $scope.Group.Functions.push($scope.GroupFunctions[i].ApplicationModuleFunctionId);
        //            }
        //        }
                
        //    }
        //};


        var init = function () {
            initMetaDataGroup();
            initMetaDataFunction();
            verifyPageType();

            intializeGroupData();
            getAvailableFunctionsByAppId();

        }

        init();
    }
})();