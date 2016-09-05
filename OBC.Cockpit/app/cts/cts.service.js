(function () {
    "use strict";

    angular
        .module("cts.module")
        .factory("ctsService", ctsService);

    ctsService.$inject = ["$resource", "$http", "Settings"];

    function ctsService($resource, $http, Settings) {
        var srv = {};

        srv.AddOrUpdateCts = function (cts) {
            return $http.post(Settings.ALnetApiUrl + "Cts", cts);
        };

        srv.GetCts = function (docketNumber) {
            return $http.get(Settings.ALnetApiUrl + "Cts/" + docketNumber);
        };

        srv.GetCtsSearchResults = function (docketNumber) {
            return $http.get(Settings.ALnetApiUrl + "Cts/GetCtsSearchResults/" + docketNumber);
        };

        srv.GetAllGroupDataByCategory = function (groupCategory) {
            return $http.get(Settings.ALnetApiUrl + "common/GetAllGroupData/" + groupCategory);
        };

        srv.GetAgentProducts = function (agentNumber, transactionType) {
            return $http.get(Settings.ALnetApiUrl + "common/GetAgentProducts/" + agentNumber + "/" + transactionType);
        };

        srv.ShowHandHeldDocketPdf = function (docketNumber) {
            return $http.get(Settings.ALnetApiUrl + "Cts/RetreiveDocketPdf/" + docketNumber);
        };

        srv.UpdateCtsStatus = function (docketNumber, status) {
            return $http.post(Settings.ALnetApiUrl + "Cts/UpdateCtsStatus/" + docketNumber + "/" + status);
        };

        srv.GetBatchResulsts = function (batchTag, pageSize, pageNumber) {
            return $http.get(Settings.ALnetApiUrl + "Cts/GetBatchResulsts/" + batchTag + "/" + pageSize + "/" + pageNumber);
        };
        
        srv.ValidateBarcodes = function (arrayOfbarocdes) {
            return $http.get(Settings.ALnetApiUrl + "Cts/ValidateBarcodes/" + arrayOfbarocdes);
        };
  
        return srv;
    };

})();
