
(function() {
    "use strict";

    angular
        .module("core.module")
        .controller("RootController", RootController);

    RootController.$inject = ["$scope", "$rootScope", "$window", "$http", "Settings", "$location", "UtilService"];

    function RootController($scope, $rootScope, $window, $http, Settings, $location, UtilService) {
        $scope.footer = "Air Liquide";

        var icon = Settings.ApiUrl + "/images/object_cylinder.png";
        $scope.markers = [];
        $scope.gMap = {};
        $scope.showNearbyPanel = false;
        var directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });

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
                id: 1,
                customerName: "SUPAGAS PTY LTD (PICK CO2 ONLY)",
                customerNo: "SU114504",
                address: "14 COMMERCIAL DRIVE,DANDENONG SOUTH",
                longi: 145.228685,
                lati: -38.026143,
                tel: "                     ",
                email: "info@airliquide.com",
                type: "source"
            }
        ];

        $scope.customers = [];
        $scope.depots = [];
        $scope.sources = [
    {
        "id": "",
        "customerName": "ALA VIC SUNSHINE 50TN V1 DI PLANT",
        "customerNo": "00001308",
        "address": "40 BUNNETT STREET,NORTH SUNSHINE",
        "longi": 144.840800,
        "lati": -37.762700,
        "tel": "9290 1100",
        "email": "info@airliquide.com",
        "lastPickupdate": "",
        "nofPickups": 0,
        "totalVolume": 0,
        "capacity": 0,
        "dailyQuota": 0,
        "costPerUnit": 0,
        "isAlSource": true,
        "hourlyProduction": 0,
        "loa": 0
    }
        ]
        ;
        $scope.comp = [];
        $scope.comp_cust = [];

        $scope.slider_ticks = {
            value: 1,
            options: {
                ceil: 50,
                floor: 10,
                step: 10,
                showTicks: true,
                enforceStep: false
            }
        };

        $scope.showPanel = false;
        $scope.map = {
            center: { latitude: $scope.sources[0].lati, longitude: $scope.sources[0].longi },
            zoom: 8,
            events: {
                tilesloaded: function(map, eventName, originalEventArgs) {
                    //map is trueley ready then this callback is hit
                },
                click: function(mapModel, eventName, originalEventArgs) {

                    var e = originalEventArgs[0];
                    var lat = e.latLng.lat(), lon = e.latLng.lng();
                    $scope.circle.center.latitude = lat;
                    $scope.circle.center.longitude = lon;
                    console.log("circle valies", $scope.circle);
                    $scope.circle.visible = true;
                    $scope.$apply();
                }
            }
        };

        $scope.mapOptions = {
            //styles: [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }],
            //styles: [{ "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "hue": "#f49935" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "hue": "#fad959" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "hue": "#a1cdfc" }, { "saturation": 30 }, { "lightness": 49 }] }],
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER,
                fullscreenControl: false
            },
            fullscreenControl: false,
            streetView: {

            },
            //fullscreenControlOptions: {
            //    position: google.maps.ControlPosition.RIGHT_CENTER
            //},
            mapTypeControl: false,
        };
        $scope.find = {
            depot: false,
            source: false,
            customer: false,
            com: false,
            com_cust: false
        };


        $scope.bindFindMarkers = function(list) {
            var _kCord = new google.maps.LatLng($scope.circle.center.latitude, $scope.circle.center.longitude);
            angular.forEach(list, function (value) {
                var _pCord = new google.maps.LatLng(value.lati, value.longi);
                var distance = google.maps.geometry.spherical.computeDistanceBetween(_kCord, _pCord) / 1000;
                if (distance < $scope.circle.radius) {
                    $scope.markers.push($scope.createMarker(value.lati, value.longi, value));
                }
            });
        }

        $scope.nearestCustomer = {
            id:'',
            distance: 0,
            obj: null
        };

        $scope.nearestCustomers = [];

        $scope.hideNearbyInfo = function() {
            $scope.showNearbyPanel = false;
            directionsRenderer.set('directions', null);

        };

        $scope.findNearestCompCust = function(lat,lon) {
            var _kCord = new google.maps.LatLng(lat, lon);
            $scope.nearestCustomers = [];

            angular.forEach($scope.comp_cust, function (value) {
                var _pCord = new google.maps.LatLng(value.lati, value.longi);
                var distance = google.maps.geometry.spherical.computeDistanceBetween(_kCord, _pCord) / 1000;

                $scope.nearestCustomer.id = value.id;
                $scope.nearestCustomer.distance = distance;
                $scope.nearestCustomer.obj = value;

                $scope.nearestCustomers.push($scope.nearestCustomer);

                var closest = $scope.nearestCustomers[0];

                var marker = $scope.createMarker(closest.obj.lati, closest.obj.longi, closest.obj, 3);
                //marker.options.animation = google.maps.Animation.BOUNCE;
                $scope.markers.push(marker);

                $scope.setDirections({
                    lati: lat,
                    longi:lon
                }, {
                    lati: closest.obj.lati,
                    longi: closest.obj.longi
                });

                $scope.showNearbyPanel = true;

                console.log('nearest customers', $scope.nearestCustomers);
            });
        };

        $scope.findMarkers = function () {
            if (!$scope.find.depot &&
                    !$scope.find.customer &&
                    !$scope.find.source &&
                    !$scope.find.com &&
                    !$scope.find.com_cust
            ) {
                alert('Please select to find nearby.');
                return;
            }
            $scope.markers = [];

            if ($scope.find.customer) {
                $scope.bindFindMarkers($scope.customers);
            }

            if ($scope.find.depot) {
                $scope.bindFindMarkers($scope.depots);
            }

            if ($scope.find.source) {
                $scope.bindFindMarkers($scope.sources);
            }

            if ($scope.find.com) {
                $scope.bindFindMarkers($scope.comp);
            }
            if ($scope.find.com_cust) {
                $scope.bindFindMarkers($scope.comp_cust);
            }
        };

        $scope.circle = {
            id: 1,
            center: { latitude: $scope.sources[0].lati, longitude: $scope.sources[0].longi },
            radius: 20,
            stroke: {
                color: "#E74C3C",
                weight: 3,
                opacity: 1
            },
            fill: {
                color: "#000000",
                opacity: 0.2
            },
            geodesic: true,
            draggable: false,
            clickable: false,
            editable: false,
            visible: false,
            control: {}
        };

        $scope.initChart = function() {
            $("#chart1").highcharts({
                chart: {
                    type: "line"
                },
                title: {
                    text: ""
                },
                colors: ["#E74C3C"],
                xAxis: {
                    lineColor: "#f7f7f7",
                    gridLineColor: "#f7f7f7",
                    categories: [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ],
                    title: {
                        text: ""
                    }
                },
                series: [
                    {
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }
                ]
            });
        };



        $scope.setDirections = function(origin, dest, marker) {

            var directionsService = new google.maps.DirectionsService();

            //directionsRenderer.setDirections({ routes: {} });
            //directionsRenderer.setDirections(null);
            directionsRenderer.set("directions", null);
            console.log("coming lat", origin.lat);

            directionsService.route({
                origin: new google.maps.LatLng({ lat: origin.lati, lng: origin.longi }),
                destination: new google.maps.LatLng({ lat: dest.lati, lng: dest.longi }),
                travelMode: google.maps.TravelMode.DRIVING
            }, function(response, status) {

                if (status === google.maps.DirectionsStatus.OK) {

                    var totalDistance = 0;
                    var legs = response.routes[0].legs;
                    for (var i = 0; i < legs.length; ++i) {
                        totalDistance += legs[i].distance.value;
                    }

                    //marker.data.distance = (totalDistance / 1000);
                    //marker.data.distanceLabel = " | Distance: Approx." + Math.ceil(totalDistance / 1000) + " km";

                    directionsRenderer.setMap($scope.gMap.getGMap());
                    directionsRenderer.setDirections(response);

                } else {
                    console.log("Directions request failed due to " + status);
                }

            });

        };
        $scope.removeMark = function(type) {
            var markers = $scope.markers.filter(function(x) { return x.data.type !== type });
            $scope.markers = [];
            console.log("pending", markers);
            angular.forEach(markers, function(value, key) {
                var marker = $scope.createMarker(value.coords.latitude, value.coords.longitude, value.data, 3);
                $scope.markers.push(marker);
            });
        };

        $scope.filterProducts = function (product) {
            var markers = $scope.markers.filter(function (x) { return x.data.product !== type });
            $scope.markers = [];
            console.log("pending", markers);
            angular.forEach(markers, function (value, key) {
                var marker = $scope.createMarker(value.coords.latitude, value.coords.longitude, value.data, 3);
                $scope.markers.push(marker);
            });
        };

        $scope.$watch("filter.customer", function(newValue, oldValue) {
            console.log('filter.customer', $scope.customers);
            if (newValue) {
                angular.forEach($scope.customers, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("customer");
            }
        });

        $scope.$watch("filter.depot", function(newValue, oldValue) {
            console.log("filter.depot", newValue);
            if (newValue) {
                angular.forEach($scope.depots, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("depot");
            }
        });

        $scope.$watch("filter.source", function(newValue, oldValue) {
            console.log("filter.source", newValue);
            if (newValue) {
                angular.forEach($scope.sources, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("source");
            }
        });

        $scope.$watch("filter.comp", function (newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("comp");
            }
        });

        $scope.$watch("filter.comp_cust", function (newValue, oldValue) {
            if (newValue) {
                angular.forEach($scope.comp_cust, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("comp_cust");
            }
        });

        $scope.$watch("filter.lin", function (newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp_cust, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
            }
        });

        $scope.$watch("filter.lox", function (newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp_cust, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
            }
        });

        $scope.$watch("filter.lar", function (newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp_cust, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
            }
        });

        $scope.$watch("filter.co2", function (newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp_cust, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
            }
        });

        $scope.initChart();

        $scope.filter = {
            lin: false,
            lox: false,
            lar: false,
            co2: false,
            source: false,
            customer: false,
            depot: false,
            comp: false,
            comp_cust: false
        };

        $scope.hideMarkers = [];

        $scope.parameter = {};

        $scope.createMarker = function(lati, longi, data, icon) {
            var iconUrl = "";

            switch (icon) {
            case 1:
                iconUrl = Settings.ApiUrl + "/images/source--2-.png";
                break;
            case 2:
                iconUrl = Settings.ApiUrl + "/images/depot.png";
                break;
            case 3:
                iconUrl = Settings.ApiUrl + "/images/dp.png";
                break;
            }

            var icon = {
                url: "/images/icon-" + data.type + ".png", // url
                scaledSize: new google.maps.Size(30, 36), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            var marker = {
                id: data.id,
                coords: {
                    latitude: lati,
                    longitude: longi
                },
                options: {
                    draggable: false,
                    icon: icon,
                    animation: google.maps.Animation.DROP
                },
                icon: iconUrl,
                data: data,
                events: {
                    mouseover: function(marker, eventName, model, args) {

                    },
                    mouseout: function(marker, eventName, model, args) {
                    },
                    click: function(marker, eventName, model, args) {
                        $scope.showPanel = true;
                        $scope.circle.visible = false;
                        $scope.parameter.data = data;
                        $scope.$apply();
                        marker.close();
                    }
                }
            };

            return marker;
        };


        $scope.clear = function() {
            angular.forEach($scope.hideMarkers, function(data) {
                console.log(data);
                data.show = false;
            });
        };

        $scope.loadCustomers = function () {
            console.log("customer data");
            $http.get("data/customers.json").then(function(response) {
                $scope.customers = response.data;
            });
        };

        $scope.loadDepot = function () {
            $http.get("data/depot.json").then(function (response) {
                $scope.depots = response.data;
            });
        };

        $scope.loadSources = function () {
            $http.get("data/source.json").then(function (response) {
                $scope.sources = response.data;
            });
        };

        $scope.loadComp = function () {
            $http.get("data/comp.json").then(function (response) {
                $scope.comp = response.data;
            });
        };

        $scope.loadCompCust = function () {
            $http.get("data/comp_cust.json").then(function (response) {
                $scope.comp_cust = response.data;
                console.log($scope.comp_cust);
            });
        };

        $scope.init = function() {
            //angular.forEach($scope.sources, function(value, key) {
            //    var marker = $scope.createMarker(value.lati, value.longi, value, 1);
            //    console.log(marker.show);
            //    $scope.markers.push(marker);
            //});

            //angular.forEach($scope.depots, function(value, key) {
            //    var marker = $scope.createMarker(value.lati, value.longi, value, 2);
            //    $scope.markers.push(marker);
            //});

            //angular.forEach($scope.dps, function(value, key) {
            //    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
            //    $scope.markers.push(marker);
            //});
            //console.log('lat', $scope.markers[0].coords.latitude);

            //$scope.setDirections($scope.markers[0], $scope.markers[1], $scope.markers[1]);

            $scope.loadCustomers();
            $scope.loadDepot();
            $scope.loadSources();
            $scope.loadComp();
            $scope.loadCompCust();
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