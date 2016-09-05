(function () {
    "use strict";
    angular
       .module("cts.module")
       .controller("ctscylinderBatch", ctscylinderBatch);

    ctscylinderBatch.$inject = ["$scope", "ctsService", "Settings", "ngDialog"];

    function ctscylinderBatch($scope, ctsService, Settings, ngDialog) {

        $scope.Batches = {};
        $scope.childCtsBatches = [];
        $scope.isModifiedPage = false;
        $scope.isInitialization = true;

        // REGION Cylinder Batch start

        var childtCtsBatchInitialization = function () {
            $scope.ctsBatch =
               {
                   DocketNumber: ""
                   , ProductNumber: ""
                   , BatchIndex: 0
                   , BatchNumber: 0
                   , BatchTag: ""
                   , Qty: 0
               }
        }

        var batchInitialization = function () {
            ctsService.GetBatchResulsts("INX", 50, 1)
             .then(function (response) {
                 $scope.Batches = response.data;
             });
        };

        batchInitialization();

        $scope.setBatchNumber = function (batchTag, item) {
            var slectedBatch = _.find($scope.Batches, function (batch) {
                return batch.BatchTag === batchTag;
            });
            item.BatchNumber = slectedBatch.BatchNumber;
            item.ProductNumber = $scope.cts.CtsProducts[$scope.IndexValue].ProductNumber;
            item.DocketNumber = $scope.cts.DocketNumber;
        };

        $scope.AddBatch = function () {
            childtCtsBatchInitialization();
            $scope.cts.CtsProducts[$scope.IndexValue].CtsLineBatches.push($scope.ctsBatch);
        };

        $scope.RemoveBatch = function (index) {
            $scope.childCtsBatches.splice(index, 1);
            $scope.cts.CtsProducts[$scope.IndexValue].CtsLineBatches.splice(index, 1);
        };

        var validateBarcodes = function () {
            var qty = 0;
            angular.forEach($scope.cts.CtsProducts[$scope.IndexValue].CtsLineBatches, function (value, key) {
                qty = qty + value.Qty;
            });

            if ($scope.cts.CtsProducts[$scope.IndexValue].Delivered !== qty) {
                alert("Qty should be equal to Delivery Qty.");
            } else {
                ngDialog.close();
            }
        };

        $scope.Close = function () {
            validateBarcodes();
        };
    }
})();