
(function() {
    "use strict";

    angular
        .module("core.module")
        .controller("RootController", RootController);

    RootController.$inject = ["$scope", "$rootScope", "$window", "AuthService", "$http", "Settings", "localStorageService", "$location", "UtilService"];

    function RootController($scope, $rootScope, $window, AuthService, $http, Settings, localStorageService, $location, UtilService) {
        $scope.footer = "Air Liquide";

        var icon = Settings.ApiUrl + "/images/object_cylinder.png";

        $scope.products = [
            "050903-NI-ALIGAL DRINK 1 LIQUID",
            "048002-OX-LASAL 2003  LIQUID",
            "092706-CB-ALIGAL FREEZE 2 LIQUID",
            "050906-NI-ALPHAGAZ 1000 NITROGEN LIQUID",
            "091008-CB-CO2 MINI",
            "092808-CB-CO2 SNOWFLOW LIQUID",
            "048013-NI-LASAL 2001 LIQUID",
            "092710-CB-ALIGAL DRINK 2  (CO2 CCA)",
            "030420-AR-LIQUID ARCAL",
            "050908-NI-NITROGEN LIQUID",
            "810100-NI-FLOXAL N2 BACKUP LIN - m3",
            "010808-OX-OXYGEN LIQUID",
            "050905-NI-ALIGAL 1 LIQUID",
            "011138-OX-OXYGEN MEDICAL LIQUID",
            "010810-OX-ALIGAL 3 LIQUID",
            "092707-CB-ALIGAL DRINK 2 LIQUID",
            "030408-AR-ARGON  LIQUID",
            "052012-TN-NITROGEN HISMELT TONNAGE",
            "030409-AR-ALPHAGAZ 1000 ARGON LIQUID",
            "092708-CB-CO2 LIQUID",
            "050904-NI-ALIGAL FREEZE 1 LIQUID",
            "092705-CB-ALIGAL 2 LIQUID"
        ];

        $scope.sources = [
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999944",
                address: "631 KOROROIT CREEK ROAD, ALTONA",
                longi: 144.7927,
                lati: -37.8453,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (S01)",
                customerNo: "99999944",
                address: "5570 SOUTH GIPPSLAND HWY, LANG LANG",
                longi: 145.61476,
                lati: -38.334134,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            }
        ];

        $scope.dps = [
            {
                customerName: "TEDRA AUSTRALIA PTY LTD (BULK C02)",
                customerNo: "99999944",
                address: "CNR WERRIBEE MAIN RD & WILLIAM, THWAITES DR",
                longi: 144.6585,
                lati: -37.9029,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - SCI - SCHOOL OF BIOLOGICAL SCIENCES",
                customerNo: "99999944",
                address: "BUILDING 17, 18 INNOVATION WALK, (CHANCELLORS WALK)",
                longi: 145.1337,
                lati: -37.9084,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            }
        ];

        $scope.depots = [
            {
                customerName: "ALA VIC SUNSHINE 50TN V1 DI PLANT",
                customerNo: "99999944",
                address: "40 BUNNETT STREET, NORTH SUNSHINE",
                longi: 144.8408,
                lati: -37.7627,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            },
            {
                customerName: "FULL LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999944",
                address: "CHANGEOVER, TARCUTTA",
                longi: 147.304554,
                lati: -35.737367,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            }
        ];

        $scope.map = {
            center: { latitude: $scope.sources[0].lati, longitude: $scope.sources[0].longi },
            zoom: 8
        };

        $scope.createMarker = function (lati, longi, data, icon) {
            var iconUrl = '';

            switch(icon) {
                case 1:
                    iconUrl = Settings.ApiUrl + "/images/source.png";
                    break;
                case 2:
                    iconUrl = Settings.ApiUrl + "/images/depot.png";
                    break;
                case 3:
                    iconUrl = Settings.ApiUrl + "/images/dp.png";
                    break;
            }

            var marker = {
                id: "0",
                coords: {
                    latitude: String(lati),
                    longitude: String(longi)
                },
                options: {
                    draggable: false,
                    icon: iconUrl
                },
                icon: iconUrl,
                data: data
            };

            return marker;
        };

        $scope.markers = [];

        $scope.init = function() {
            angular.forEach($scope.sources, function(value, key) {
                console.log(value);
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 1);
                $scope.markers.push(marker);
            });

            angular.forEach($scope.depots, function (value, key) {
                console.log(value);
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 2);
                $scope.markers.push(marker);
            });

            angular.forEach($scope.dps, function (value, key) {
                console.log(value);
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 3);
                $scope.markers.push(marker);
            });
        };

        $scope.init();

        var validateLocationData = function(lati, longi) {

            if (lati === 0 || longi === 0
                    || lati < -90
                    || lati > 90
                    || longi < -180
                    || longi > 180
            ) {
                return false;
            }

            return true;

        };
    };

})();