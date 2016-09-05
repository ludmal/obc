(function() {
    "use strict";

    angular
        .module("group.module")
        .factory("groupService", groupService);

    groupService.$inject = ["$http", "Settings"];

    function groupService ($http, Settings)
    {
        var srv = [];

        srv.getGroupsByAppId = function(appModId) {
            return $http.get(Settings.ApiUrl + "api/v1/groups/modules/" + appModId);
        };

        srv.addGroup = function (group) {
            return $http.post(Settings.ApiUrl + "api/v1/groups/", group);
        };

        srv.getAvailableFunctionsByAppId = function (appModId) {
            return $http.get(Settings.ApiUrl + "api/v1/applications/modules/" + appModId + "/functions");
        };

        srv.getGroupDetailsByGroupId = function(groupId) {
            return $http.get(Settings.ApiUrl + "api/v1/groups/" + groupId);
        };

        srv.getGroupFunctionsByGroupId = function (groupId) {
            return $http.get(Settings.ApiUrl + "api/v1/groups/" + groupId + "/functions");
        };

        srv.searchGroupsByName = function (searchParam) {
            return $http.get(Settings.ApiUrl + "api/v1/groups/search/" + searchParam);
        };


        return srv;

    }

})();