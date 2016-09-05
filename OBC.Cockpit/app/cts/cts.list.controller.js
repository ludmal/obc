(function () {
    "use strict";
    angular
       .module("cts.module")
       .controller("ctsListController", ctsListController);

    ctsListController.$inject = ["$scope", "ctsService", "Settings"];

    function ctsListController($scope, ctsService, Settings) {

        $scope.CtsSearchResults =
        {
            DocketNumber: ""                   // CTS Number 
            , CustomerNumber: ""
            , CustomerLocationId: ""
            , AgentNumber: ""
            , AgentLocationId: ""
            , CustomerName: ""
            , DeliveryDate: new Date()
            , OrderDate: new Date()
            , CtsType: ""
            , Status: "Y"
            , Swap: ""
        }

        var ctsSearchResultBind = function () {
            ctsService.GetCtsSearchResults("A")
                .then(function (response) {
                    $scope.CtsSearchResults = response.data;
                });
        };

        ctsSearchResultBind();

    }
})();