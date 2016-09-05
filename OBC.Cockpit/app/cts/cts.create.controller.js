
(function () {
    "use strict";
    angular
        .module("cts.module")
        .controller("ctsCreateController", ctsCreateController);

    ctsCreateController.$inject = ["$scope", "$rootScope", "ngDialog", "$window", "ctsService", "$http", "Settings", "$modal"];

    function ctsCreateController($scope, $rootScope, ngDialog, $window, ctsService, $http, Settings, modal) {

        $scope.IsEditPage = false;
        $scope.IsValidCts = true;
        $scope.ErrorMessage = "";

        $scope.isSuspectReason = false;
        $scope.isAgreeTearm = false;
        $scope.isSurrenderReason = false;
        $scope.isDeliverd = false;
        $scope.isReturned = false;
        $scope.Products = {};
        $scope.SelectedProductDescription = "";
        $scope.SelectedProductNumber = "";
        $scope.IndexValue = 0;

        var getParameterByName = function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var validationTransaction = function (trnasactonType) {
            switch (trnasactonType) {
                case "1":
                    setControlsforTransaction(true, false, true, false, false);
                    $scope.cts.SuspectReasonCode = "";
                    break;
                case "2":
                    setControlsforTransaction(false, true, false, true, false);
                    $scope.cts.SuspectReasonCode = "";
                    break;
                case "3":
                    setControlsforTransaction(true, true, false, false, false);
                    $scope.cts.SuspectReasonCode = "";
                    break;
                case "4":
                    setControlsforTransaction(true, true, false, false, false);
                    $scope.cts.SuspectReasonCode = "";
                    break;
                case "5":
                    setControlsforTransaction(true, true, false, false, true);
                    break;
                default:
            }
        };
        var setControlsforTransaction = function (a, b, c, d, e) {
            if (!$scope.IsEditPage) {
                $scope.cts.CtsProducts.length = 0;
            }
            $scope.isDeliverd = a;
            $scope.isReturned = b;
            $scope.isAgreeTearm = c;
            $scope.isSurrenderReason = d;
            $scope.isSuspectReason = e;
        };

        var ctsLineInitialization = function () {
            $scope.ctsLine =
               {
                   DocketNumber: ""
                   , ProductNumber: ""
                   , FullStock: 0
                   , AgreementId: ""
                   , SurrenderReasonCode: ""
                   , Delivered: ""
                   , Returned: ""
                   , DeckStock: ""
                   , DocketPrice: ""
                   , IsBatchNumberRequired: "N"
                   , CtsLineBatches: []
                   , CtsLineDeliveryBarcodes: []
                   , CtsLineReturnBarcodes: []
               }
        }

        var ctsBatchInitialization = function () {
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

        var ctsBarcodeDeliveredInitialization = function () {
            $scope.ctsDeliveryBarcode =
            {
                Barcode: "",
                DocketNumber: "",
                ProductNumber: "",
                DiscrepancyValue: 0,
                FillingStatus: "",
                LocationStatus: "",
                IsCustomerLocation: "",
                CreatedDateTime: new Date(),
                CreatedBy: ""
            }
        }

        var ctsBarcodeReturnedInitialization = function () {
            $scope.ctsReturnBarcode =
            {
                Barcode: "",
                DocketNumber: "",
                ProductNumber: "",
                DiscrepancyValue: 0,
                FillingStatus: "",
                LocationStatus: "",
                IsCustomerLocation: "",
                CreatedDateTime: new Date(),
                CreatedBy: ""
            }
        }

        var ctsInitialization = function () {

            // 04 AgreeTerms
            ctsService.GetAllGroupDataByCategory("04")
             .then(function (response) {
                 $scope.AgreeTerms = response.data;
             });

            // 02 Surrender Reason
            ctsService.GetAllGroupDataByCategory("02")
             .then(function (response) {
                 $scope.SurrenderReasons = response.data;
             });

            // 03 Transaction Type
            ctsService.GetAllGroupDataByCategory("03")
              .then(function (response) {
                  $scope.CtsTransactionTypes = response.data;
              });

            // 05 SuspectReasons
            ctsService.GetAllGroupDataByCategory("05")
             .then(function (response) {
                 $scope.SuspectReasons = response.data;
             });

            ctsService.GetAgentProducts("AEV009", "Z")  // A is just a default value to get data No need to change
               .then(function (response) {
                   $scope.Products = response.data;
               });

            ctsLineInitialization();
            ctsBarcodeDeliveredInitialization();
            ctsBarcodeReturnedInitialization();
            ctsBatchInitialization();

            $scope.cts = {
                DocketNumber: ""
                 , AgentLocationId: "3Y"
                 , CustomerNumber: ""
                 , CtsTypeId: ""
                 , AgentNumber: ""
                 , OrderDate: new Date()
                 , DeliveryDate: new Date()
                 , Comments: ""
                 , Status: "Y"
                 , UpdatedToServer: "N"
                 , SuspectReasonCode: ""
                 , Swap: ""
                 , OrderNumber: ""
                 , CustomerLocationId: "3Y"
                 , ReplishmentOrderFlag: ""
                 , ReplishmentOrderNo: ""
                 , UserId: "jitendra.kumar"
                 , ALDELCHGIndicator: ""
                 , SvxStatus: ""
                 , LastUpdatedBy: "jitendra.kumar"
                 , LastUpdatedDate: new Date()
                 , CtsProducts: []

            }
        }
        var pageInit = function () {
            ctsInitialization();
        }

        pageInit();

        var ctsModifiedInit = function () {
            var docketNumber = getParameterByName("docketNumber");
            if (docketNumber != null && docketNumber !== "") {
                $scope.cts.DocketNumber = docketNumber;
                ctsService.GetCts(docketNumber).then(function (response) {
                    $scope.cts = response.data;
                    $scope.cts.OrderDate = new Date($scope.cts.OrderDate);
                    $scope.cts.DeliveryDate = new Date($scope.cts.DeliveryDate);
                    $scope.IsEditPage = true;
                });

            } else {
                pageInit();
            }
        }

        ctsModifiedInit();

        var validationCheck = function () {
            $scope.IsValidCts = true;
            $scope.ErrorMessage = "";
            if ($scope.cts.DeliveryDate == null || $scope.cts.OrderDate == null) {
                $scope.IsValidCts = false;
                $scope.ErrorMessage = "Order/Delivery Date Required";
                return;
            }
            if ($scope.cts.CtsProducts == null || $scope.cts.CtsProducts.length <= 0) {
                $scope.IsValidCts = false;
                $scope.ErrorMessage = "At leastone product required to create CTS";
                return;
            }
            if ($scope.cts.DeliveryDate < $scope.cts.OrderDate) {
                $scope.IsValidCts = false;
                $scope.ErrorMessage = "Delivery date is less than Order date.";
            }
            if ($scope.cts.SuspectReasonCode === "9" && $scope.cts.Comments === "") {
                $scope.IsValidCts = false;
                if ($scope.ErrorMessage !== "")
                    $scope.ErrorMessage += "\n" + "For other suspect reason comment is required. ";
                else
                    $scope.ErrorMessage += "For other suspect reason comment is required. ";
            }
        }

        $scope.AddOrUpdateCts = function () {
            validationCheck();
            if ($scope.IsValidCts === true) {
                ctsService.AddOrUpdateCts($scope.cts)
                    .success(function (response) {
                        $scope.cts.DocketNumber = response.Data;
                        $scope.IsEditPage = true;
                        alert("Data save successfully.");
                    })
                    .error(function (response, status, headers, config) {
                        alert(response.ExceptionMessage);
                    });
            } else {
                alert($scope.ErrorMessage);
            }
        }

        $scope.ResetControls = function () {
            pageInit();
        };

        $scope.$watch("cts.CtsTypeId",
            function (v) {
                validationTransaction(v);
            });

        // This function has to to be Optimized with foreach loop and another way as well. // Jitendra 
        $scope.setFullStockValue = function (productNumber, item) {
            if (productNumber == "") {
                return;
            }
            var j = 0;
            var i = 0;
            for (; i < $scope.cts.CtsProducts.length;) {
                if ($scope.cts.CtsProducts[i].ProductNumber === productNumber) {
                    j = j + 1;
                }
                i++;
                if (j > 1) {
                    item.ProductNumber = "";
                    alert("Duplicate Product Entry.");
                    return;
                }
            }

            var slectedProduct = _.find($scope.Products, function (product) {
                return product.ProductNumber === productNumber;

            });
            item.FullStock = slectedProduct.FullStock;
            item.IsBatchNumberRequired = slectedProduct.IsBatchNumberRequired;
        }

        $scope.AddProducts = function () {
            ctsLineInitialization();
            $scope.cts.CtsProducts.push($scope.ctsLine);
        };

        $scope.RemvoeProduct = function (index) {
            $scope.cts.CtsProducts.splice(index, 1);
        };

        $scope.ShowHandHeldDocketPdf = function () {
            ctsService.ShowHandHeldDocketPdf($scope.cts.DocketNumber)
                   .success(function (response) {
                       var file = new Blob([response], { type: "application/pdf" });
                       var fileUrl = URL.createObjectURL(file);
                       window.open(fileUrl);
                   })
                   .error(function (response, status, headers, config) {
                       alert(response.ExceptionMessage);
                   });
        };

        $scope.UpdateCtsStatus = function () {
            ctsService.UpdateCtsStatus($scope.cts.DocketNumber, "Y")
                   .success(function (response) {
                       alert("CTS canceled successfully.");
                       pageInit();
                   })
                   .error(function (response, status, headers, config) {
                       alert(response.ExceptionMessage);
                   });
        };

        $scope.CylidnerBatch = function (index) {
            $scope.IndexValue = index;
            var slectedProduct = _.find($scope.Products, function (product) {
                return product.ProductNumber === $scope.cts.CtsProducts[index].ProductNumber;

            });
            $scope.SelectedProductDescription = slectedProduct.Description;
            $scope.SelectedProductNumber = slectedProduct.ProductNumber;
            ngDialog.open({ disableAnimation: true, template: Settings.ALnetApplicationUrl + "cts/CylinderBatch", closeByDocument: false, showClose: false, cache: false, scope: $scope });
            return;
        };

        $scope.AddBarcode = function (index) {
            $scope.IndexValue = index;
            var slectedProduct = _.find($scope.Products, function (product) {
                return product.ProductNumber === $scope.cts.CtsProducts[index].ProductNumber;

            });
            $scope.SelectedProductDescription = slectedProduct.Description;
            $scope.SelectedProductNumber = slectedProduct.ProductNumber;
            ngDialog.open({ disableAnimation: true, template: Settings.ALnetApplicationUrl + "cts/CylinderBarcode", closeByDocument: false, showClose: false, cache: false, scope: $scope });
            return;
        };

    };
})();
