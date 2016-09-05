(function () {
    "use strict";
    angular
       .module("cts.module")
       .controller("ctscylinderBarcode", ctscylinderBarcode);

    ctscylinderBarcode.$inject = ["$scope", "ctsService", "Settings", "ngDialog"];

    function ctscylinderBarcode($scope, ctsService, Settings, ngDialog) {

        $scope.Barcodes = {};
        $scope.CtsAllBarcodes = [];
        $scope.isModifiedPage = false;
        $scope.isInitialization = true;
        $scope.barcodesTobeValidate = "";
        $scope.ValidatedBarcodes = [];
        $scope.isValid = false;
        $scope.InValidBarcodes = "";
        $scope.isDuplicated = false;

        $scope.childDeliverBarcodes = "";
        $scope.childReturnBarcodes = "";

        // REGION Cylinder Batch start

        function hasDuplicates(array) {
            var valuesSoFar = Object.create(null);
            for (var i = 0; i < array.length; ++i) {
                var value = array[i];
                if (value in valuesSoFar) {
                    return true;
                }
                valuesSoFar[value] = true;
            }
            return false;
        }

        var childtCtsBarcodeDelivredInitialization = function () {
            $scope.ctsDelvierBarcode =
               {
                   Barcode: "",
                   DocketNumber: $scope.cts.DocketNumber,
                   ProductNumber: $scope.cts.CtsProducts[$scope.IndexValue].ProductNumber,
                   DiscrepancyValue: 0,
                   FillingStatus: "",
                   LocationStatus: "",
                   IsCustomerLocation: "",
                   CreatedDateTime: new Date(),
                   CreatedBy: ""
               }
        }


        var childtCtsBarcodeRetrunInitialization = function () {
            $scope.ctsReturnBarcode =
               {
                   Barcode: "",
                   DocketNumber: $scope.cts.DocketNumber,
                   ProductNumber: $scope.cts.CtsProducts[$scope.IndexValue].ProductNumber,
                   DiscrepancyValue: 0,
                   FillingStatus: "",
                   LocationStatus: "",
                   IsCustomerLocation: "",
                   CreatedDateTime: new Date(),
                   CreatedBy: ""
               }
        }

        var barcodeInitialization = function () {
            if ($scope.cts.CtsProducts[$scope.IndexValue].CtsLineDeliveryBarcodes.length <= 0) {
                childtCtsBarcodeDelivredInitialization();
                $scope.cts.CtsProducts[$scope.IndexValue].CtsLineDeliveryBarcodes.push($scope.ctsDelvierBarcode);

            }
            if ($scope.cts.CtsProducts[$scope.IndexValue].CtsLineReturnBarcodes.length <= 0) {
                childtCtsBarcodeRetrunInitialization();
                $scope.cts.CtsProducts[$scope.IndexValue].CtsLineReturnBarcodes.push($scope.ctsReturnBarcode);

            }
        };

        barcodeInitialization();

        var duplciateCheck = function () {
            if ($scope.barcodesTobeValidate.length > 0) {
                try {
                    var arryBarocdes = $scope.barcodesTobeValidate.split(";");
                    $scope.isDuplicated = hasDuplicates(arryBarocdes);
                } catch (e) {
                    alert("Barcode not correct so please pelase refresh Page and enter correct value.");
                }
            }
        };

        var validateBarcodes = function () {
            angular.forEach($scope.cts.CtsProducts[$scope.IndexValue].CtsLineDeliveryBarcodes,
                function (value, key) {
                    $scope.barcodesTobeValidate = $scope.barcodesTobeValidate + value.Barcode;
                    $scope.childDeliverBarcodes = $scope.childDeliverBarcodes + value.Barcode;


                });
            $scope.barcodesTobeValidate = $scope.barcodesTobeValidate + ";";
            angular.forEach($scope.cts.CtsProducts[$scope.IndexValue].CtsLineReturnBarcodes,
                function (value, key) {
                    $scope.barcodesTobeValidate = $scope.barcodesTobeValidate + value.Barcode;
                    $scope.childReturnBarcodes = $scope.childReturnBarcodes + value.Barcode;
                });
            duplciateCheck();

            if ($scope.isDuplicated) {
                alert("Duplicate Barcodes.");
                $scope.barcodesTobeValidate = "";
                $scope.childDeliverBarcodes = "";
                $scope.childReturnBarcodes = "";
                return;
            } else {

                ctsService.ValidateBarcodes($scope.barcodesTobeValidate)
                    .then(function (response) {
                        $scope.ValidatedBarcodes = response.data;
                        return checkBacodes();
                    })
                    .then(function () {
                        closeDialoge();
                    });
            }
        };

        function checkBacodes() {
            angular.forEach($scope.ValidatedBarcodes, function (value, key) {
                if (value === false) {
                    $scope.InValidBarcodes = $scope.InValidBarcodes + key + ";";
                    $scope.isValid = false;
                } else {
                    if ($scope.InValidBarcodes.length <= 0)
                    { $scope.isValid = true; }
                }
            });
        };

        function closeDialoge() {
            if ($scope.isValid) {
                if ($scope.childDeliverBarcodes.length > 0) {
                    $scope.cts.CtsProducts[$scope.IndexValue].Delivered = $scope.childDeliverBarcodes.split(";").length;
                }
                if ($scope.childReturnBarcodes.length > 0) {
                    $scope.cts.CtsProducts[$scope.IndexValue].Returned = $scope.childReturnBarcodes.split(";").length;
                }
                ngDialog.close();
            } else {
                if ($scope.InValidBarcodes.length > 0) {
                    alert("Inavlid Barcodes:" + $scope.InValidBarcodes.substring(0, $scope.InValidBarcodes.length - 1));
                    $scope.InValidBarcodes = "";
                    $scope.ValidatedBarcodes = [];
                    $scope.barcodesTobeValidate = "";
                    $scope.childDeliverBarcodes = "";
                    $scope.childReturnBarcodes = "";
                }
            }
        };

        $scope.Close = function () {
            validateBarcodes();
            //ngDialog.close();
        };
    }
})();