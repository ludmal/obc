
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
                "id": "S36",
                "customerName": "AIR LIQUIDE AUSTRALIA - ALTONA",
                "customerNo": "99999944",
                "address": "631 KORORIT CREEK ROAD,ALTONA",
                "longi": 144.792687,
                "lati": -37.845276,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(M3)",
                "totalPickups": 461,
                "totalVolumePickedUp": 6165687.00,
                "lastPickupDate": "08 Sep 2016 06:20AM",
                "product": "LOX",
                "type": "source"
            },
            {
                "id": "S46",
                "customerName": "ALA VIC SUNSHINE 50TN V2 DI PLANT",
                "customerNo": "00001309",
                "address": "40 BUNNETT STREET,NORTH SUNSHINE",
                "longi": 144.840800,
                "lati": -37.762700,
                "tel": "9290 1100",
                "email": "info@airliquide.com",
                "capacity": "99999.00(KG)",
                "totalPickups": 231,
                "totalVolumePickedUp": 1118675.00,
                "lastPickupDate": "07 Sep 2016 18:36AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S48",
                "customerName": "AIR LIQUIDE AUSTRALIA - ALTONA",
                "customerNo": "99999943",
                "address": "631 KOROROIT CREEK ROAD,ALTONA",
                "longi": 144.792700,
                "lati": -37.845300,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(M3)",
                "totalPickups": 92,
                "totalVolumePickedUp": 726699.00,
                "lastPickupDate": "07 Sep 2016 18:43AM",
                "product": "LAR",
                "type": "source"
            },
            {
                "id": "S55",
                "customerName": "ALA VIC SUNSHINE 50TN V1 DI PLANT",
                "customerNo": "00001308",
                "address": "40 BUNNETT STREET,NORTH SUNSHINE",
                "longi": 144.840800,
                "lati": -37.762700,
                "tel": "9290 1100",
                "email": "info@airliquide.com",
                "capacity": "99999.00(KG)",
                "totalPickups": 2,
                "totalVolumePickedUp": 24193.00,
                "lastPickupDate": "24 Aug 2016 04:21AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S57",
                "customerName": "FULL LCO2 - HOLBROOK/TARCUTTA",
                "customerNo": "99999941",
                "address": "CHANGEOVER,TARCUTTA",
                "longi": 147.304554,
                "lati": -35.737367,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(KG)",
                "totalPickups": 4,
                "totalVolumePickedUp": 84060.00,
                "lastPickupDate": "11 Mar 2016 11:00AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S58",
                "customerName": "ALA VIC ALTONA ASU",
                "customerNo": "99999945",
                "address": "631 KOROROIT CREEK ROAD,ALTONA",
                "longi": 144.792700,
                "lati": -37.845300,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(M3)",
                "totalPickups": 824,
                "totalVolumePickedUp": 13257614.00,
                "lastPickupDate": "08 Sep 2016 03:25AM",
                "product": "LIN",
                "type": "source"
            },
            {
                "id": "S59",
                "customerName": "AIR LIQUIDE AUSTRALIA - LANG LANG (S01)",
                "customerNo": "99999953",
                "address": "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                "longi": 145.614760,
                "lati": -38.334134,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(KG)",
                "totalPickups": 542,
                "totalVolumePickedUp": 10249117.00,
                "lastPickupDate": "08 Sep 2016 10:20AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S198",
                "customerName": "FULL LCO2 - HOLBROOK/TARCUTTA",
                "customerNo": "99999941",
                "address": "CHANGEOVER,TARCUTTA",
                "longi": 147.304554,
                "lati": -35.737367,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99999.00(KG)",
                "totalPickups": 4,
                "totalVolumePickedUp": 84060.00,
                "lastPickupDate": "11 Mar 2016 11:00AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S169",
                "customerName": "EMPTY LCO2 - HOLBROOK/TARCUTTA",
                "customerNo": "99999967",
                "address": "CHANGEOVER,TARCUTTA",
                "longi": 147.715300,
                "lati": -35.288500,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "99990.00(KG)",
                "totalPickups": 15,
                "totalVolumePickedUp": 15.00,
                "lastPickupDate": "18 Apr 2016 10:29AM",
                "product": "LCO2",
                "type": "source"
            },
            {
                "id": "S194",
                "customerName": "ALWA - LAR EX WA",
                "customerNo": "99999977",
                "address": "LAR PICK UP,WA",
                "longi": 147.735000,
                "lati": -35.278400,
                "tel": "",
                "email": "info@airliquide.com",
                "capacity": "100000.00(M3)",
                "totalPickups": 1,
                "totalVolumePickedUp": 1.00,
                "lastPickupDate": "02 May 2016 09:45AM",
                "product": "LIN",
                "type": "source"
            },
            {
                "id": "S197",
                "customerName": "ALWA - LAR PICK UP",
                "customerNo": "99999978",
                "address": "WA,PERTH",
                "longi": 0.000000,
                "lati": 0.000000,
                "tel": "255 2288",
                "email": "info@airliquide.com",
                "capacity": "10000.00(M3)",
                "totalPickups": 7,
                "totalVolumePickedUp": 51182.00,
                "lastPickupDate": "30 Aug 2016 17:50AM",
                "product": "LAR",
                "type": "source"
            }
        ];

        $scope.customers = [
            {
                "id": "D3026",
                "customerName": "YMCA - NOBLE PARK AQUATIC CENTRE (C02 MINIBULK)",
                "customerNo": "YNV00802",
                "address": "9 MEMORIAL DRIVE,NOBLE PARK",
                "longi": 145.170200,
                "lati": -37.958100,
                "tel": "+61395467955",
                "email": "npac@ymca.org.au",
                "lastDeliveryDate": "02 Sep 2016 20:07AM",
                "nextDeliveryDate": "09 Sep 2016 20:07AM",
                "loa": "14.815000",
                "vdeReorder": "1.151666",
                "nod": "12",
                "tvd": "3680",
                "capacity": "360.00(KG)",
                "reOrderLevel": 26,
                "safetyLevel": 20,
                "criticalLevel": 10,
                "usageRate": 0.7255,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2926",
                "customerName": "SUN PHARMACEUTICAL INDUSTRIES ( AUSTRALIA) PTY LTD (LIN)",
                "customerNo": "SVV02301",
                "address": "199 PRINCESS HIGHWAY,PORT FAIRY",
                "longi": 142.236100,
                "lati": -38.366100,
                "tel": "",
                "email": "alexander.harrison@airliquide.com",
                "lastDeliveryDate": "06 Sep 2016 11:20AM",
                "nextDeliveryDate": "13 Sep 2016 11:20AM",
                "loa": "41.835714",
                "vdeReorder": "1.036571",
                "nod": "35",
                "tvd": "587896",
                "capacity": "32395.00(M3)",
                "reOrderLevel": 50,
                "safetyLevel": 40,
                "criticalLevel": 3,
                "usageRate": 131.1028,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D626",
                "customerName": "AUSTRALIAN PRESSURE VESSEL HEADS P/L (BULK) LOX VESSEL",
                "customerNo": "AUV83801",
                "address": "73 - 95 BUNNETT STREET,SUNSHINE",
                "longi": 144.840930,
                "lati": -37.761115,
                "tel": "9311 7722",
                "email": "",
                "lastDeliveryDate": "09 Aug 2016 17:30:20:000",
                "nextDeliveryDate": "16 Aug 2016 17:30:20:000",
                "loa": "26.120000",
                "vdeReorder": "1.055000",
                "nod": "4",
                "tvd": "2837",
                "capacity": "960.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 13.6453,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D775",
                "customerName": "DOMAINE CHANDON AUST P/L  (BULK)",
                "customerNo": "DO637601",
                "address": "GREEN POINTMAROONDAH HIGHWAY(CO2 MINIBULK),COLDSTREAM",
                "longi": 145.430059,
                "lati": -37.679745,
                "tel": "97389238",
                "email": "",
                "lastDeliveryDate": "05 Aug 2016 12:10AM",
                "nextDeliveryDate": "12 Aug 2016 12:10AM",
                "loa": "23.787142",
                "vdeReorder": "0.875714",
                "nod": "7",
                "tvd": "27387",
                "capacity": "6120.00(KG)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 22.7454,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D840",
                "customerName": "GLYDE METAL INDUSTRIES PTY LTD(BULK)",
                "customerNo": "GLV13501",
                "address": "65 ZENITH ROADENTER VIA LANYON STREET(BULK OXY),DANDENONG SOUTH",
                "longi": 145.221300,
                "lati": -38.017800,
                "tel": "9791 3402",
                "email": "",
                "lastDeliveryDate": "17 Aug 2016 20:11AM",
                "nextDeliveryDate": "24 Aug 2016 20:11AM",
                "loa": "34.682857",
                "vdeReorder": "0.871428",
                "nod": "7",
                "tvd": "12299",
                "capacity": "2690.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 12.6076,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D875",
                "customerName": "HERCULES CHEMICALS AUSTRALIA",
                "customerNo": "HE934601",
                "address": "1612 - 1638 CENTRE ROAD(BULK NITROGEN),SPRINGVALE",
                "longi": 145.147612,
                "lati": -37.932081,
                "tel": "9550 5600",
                "email": "",
                "lastDeliveryDate": "19 Aug 2016 11:39AM",
                "nextDeliveryDate": "26 Aug 2016 11:39AM",
                "loa": "45.274666",
                "vdeReorder": "0.912000",
                "nod": "15",
                "tvd": "6608",
                "capacity": "805.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 25,
                "usageRate": 3.3361,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2297",
                "customerName": "DEAKIN UNIVERSITY - IFM BUILDING NJ",
                "customerNo": "DFV04001",
                "address": "NICOL DRIVE NORTH (BLDG NJ)OFF PIGDONS RD  (VIV50000),WAURN PONDS",
                "longi": 144.299100,
                "lati": -38.196300,
                "tel": "5227 1303",
                "email": "",
                "lastDeliveryDate": "02 Sep 2016 09:29AM",
                "nextDeliveryDate": "09 Sep 2016 09:29AM",
                "loa": "39.431250",
                "vdeReorder": "0.852500",
                "nod": "8",
                "tvd": "112709",
                "capacity": "30092.00(M3)",
                "reOrderLevel": 45,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 28.8343,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2747",
                "customerName": "YMCA - DANDENONG OASIS (MINIBULK)",
                "customerNo": "YNV00701",
                "address": "CNR HEATHERTON RD & CLEELAND STDANDENONG,DANDENONG",
                "longi": 145.217200,
                "lati": -37.970300,
                "tel": "03 9767 3100",
                "email": "oasis@ymca.org.au",
                "lastDeliveryDate": "18 Aug 2016 11:40AM",
                "nextDeliveryDate": "25 Aug 2016 11:40AM",
                "loa": "44.828571",
                "vdeReorder": "0.861428",
                "nod": "7",
                "tvd": "5909",
                "capacity": "1530.00(KG)",
                "reOrderLevel": 36,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 1.3792,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D643",
                "customerName": "BALLARAT PRESSINGS PTY LTD (BULK LASAL)",
                "customerNo": "BAV00401",
                "address": "3181 OLD MELBOURNE ROAD(BULK LASAL 2003),WARRENHEIP",
                "longi": 143.934400,
                "lati": -37.568100,
                "tel": "5334 7040",
                "email": "rwilson@balpress.com.au",
                "lastDeliveryDate": "02 Sep 2016 19:15AM",
                "nextDeliveryDate": "09 Sep 2016 19:15AM",
                "loa": "31.752857",
                "vdeReorder": "0.975714",
                "nod": "7",
                "tvd": "10061",
                "capacity": "2106.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 3.4641,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D708",
                "customerName": "COCA COLA BOTTLERS MELBOURNE",
                "customerNo": "CC254901",
                "address": "LEVANSWELL ROADCHAD STEEDMAN,MOORABBIN",
                "longi": 145.037300,
                "lati": -37.934300,
                "tel": "9556 2654",
                "email": "",
                "lastDeliveryDate": "08 Sep 2016 22:30AM",
                "nextDeliveryDate": "15 Sep 2016 22:30AM",
                "loa": "39.472553",
                "vdeReorder": "0.950212",
                "nod": "47",
                "tvd": "889846",
                "capacity": "51000.00(KG)",
                "reOrderLevel": 60,
                "safetyLevel": 40,
                "criticalLevel": 20,
                "usageRate": 362.1357,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D857",
                "customerName": "GWM WATER - POMONAL (STAWELL)",
                "customerNo": "GRV26600",
                "address": "TUNNEL ROAD(BULK C02),POMONAL",
                "longi": 142.611000,
                "lati": -37.160700,
                "tel": "5382 4611",
                "email": "",
                "lastDeliveryDate": "08 Apr 2016 10:00AM",
                "nextDeliveryDate": "15 Apr 2016 10:00AM",
                "loa": "0.820000",
                "vdeReorder": "0.980000",
                "nod": "1",
                "tvd": "3010",
                "capacity": "6120.00(KG)",
                "reOrderLevel": 50,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 1.8206,
                "vmi": "FALSE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D894",
                "customerName": "HUNTINGTOWER SCHOOL (MBK176 * 2)",
                "customerNo": "HUV96201",
                "address": "77 WAIMARIE DRIVE,MOUNT WAVERLEY",
                "longi": 145.137100,
                "lati": -37.876600,
                "tel": "9807 8888",
                "email": "",
                "lastDeliveryDate": "02 Sep 2016 10:30AM",
                "nextDeliveryDate": "09 Sep 2016 10:30AM",
                "loa": "16.585714",
                "vdeReorder": "1.388571",
                "nod": "7",
                "tvd": "2102",
                "capacity": "360.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.6552,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1194",
                "customerName": "TYCAB AUSTRALIA",
                "customerNo": "TY070101",
                "address": "269 DANDENONG-FRANKSTON ROAD(BULK NITROGEN),DANDENONG",
                "longi": 145.213302,
                "lati": -38.026226,
                "tel": "8791 0300",
                "email": "",
                "lastDeliveryDate": "25 Aug 2016 01:03AM",
                "nextDeliveryDate": "01 Sep 2016 01:03AM",
                "loa": "33.771428",
                "vdeReorder": "0.884285",
                "nod": "7",
                "tvd": "29971",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 12.4704,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D1208",
                "customerName": "VITAN NOMINEES T/AS PUOPOLO S/GOODS (BULK)",
                "customerNo": "VI103802",
                "address": "118 -124 FITZGERALD ROAD(BULK - 1300C),LAVERTON NORTH",
                "longi": 144.787016,
                "lati": -37.824930,
                "tel": "9369 3977",
                "email": "psmallgoods@bigpond.com",
                "lastDeliveryDate": "02 Sep 2016 02:25AM",
                "nextDeliveryDate": "09 Sep 2016 02:25AM",
                "loa": "38.484615",
                "vdeReorder": "0.876923",
                "nod": "13",
                "tvd": "7957",
                "capacity": "995.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 2.6970,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1243",
                "customerName": "YERING STATION  (BULK)",
                "customerNo": "YEV90701",
                "address": "368 MELBA HIGHWAY(CO2 MINIBULK),YARRA GLEN",
                "longi": 145.425000,
                "lati": -37.705800,
                "tel": "9730 0107",
                "email": "",
                "lastDeliveryDate": "09 Sep 2016 11:15AM",
                "nextDeliveryDate": "16 Sep 2016 11:15AM",
                "loa": "25.444000",
                "vdeReorder": "1.022000",
                "nod": "5",
                "tvd": "11407",
                "capacity": "3060.00(KG)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 30.6336,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2815",
                "customerName": "STANTON & KILLEEN WINES PTY LTD (CO2 MINIBULK)",
                "customerNo": "SUV18501",
                "address": "440 JACKS ROADRUTHERGLEN,RUTHERGLEN",
                "longi": 146.424700,
                "lati": -36.054100,
                "tel": "+61 2 60329457",
                "email": "wine@stantonandkilleenwines.com",
                "lastDeliveryDate": "03 May 2016 23:44AM",
                "nextDeliveryDate": "10 May 2016 23:44AM",
                "loa": "15.165000",
                "vdeReorder": "1.030000",
                "nod": "2",
                "tvd": "632",
                "capacity": "480.00(KG)",
                "reOrderLevel": 36,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.5106,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2866",
                "customerName": "DAIRY - PAC AUSTRALIA (BULK LIN)",
                "customerNo": "DAV91603",
                "address": "UNIT 1B, 60 KEON PARADE(VIV 6500),THOMASTOWN",
                "longi": 145.019700,
                "lati": -37.695700,
                "tel": "9460 9888",
                "email": "",
                "lastDeliveryDate": "08 Sep 2016 11:10AM",
                "nextDeliveryDate": "15 Sep 2016 11:10AM",
                "loa": "23.222000",
                "vdeReorder": "1.036000",
                "nod": "5",
                "tvd": "13820",
                "capacity": "3600.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 26.2504,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D3066",
                "customerName": "INTERVET AUST PTY LTD (BULK) (VESSEL #1)",
                "customerNo": "IOV01301",
                "address": "91 - 105 HARPIN STREET(BULK NITROGEN) VIV10000,BENDIGO EAST",
                "longi": 144.305200,
                "lati": -36.748600,
                "tel": "+61354409944",
                "email": "",
                "lastDeliveryDate": "01 Jul 2016 10:15AM",
                "nextDeliveryDate": "08 Jul 2016 10:15AM",
                "loa": "23.260000",
                "vdeReorder": "1.045000",
                "nod": "2",
                "tvd": "9470",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 20,
                "criticalLevel": 5,
                "usageRate": 2.7217,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D614",
                "customerName": "ARROW LASER AUSTRALIA PTY LTD (LOX)",
                "customerNo": "AR967403",
                "address": "24 NORTHGATE DRIVE(BULK OXY),THOMASTOWN",
                "longi": 145.040463,
                "lati": -37.690621,
                "tel": "9464 4099",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 04:27AM",
                "nextDeliveryDate": "07 Sep 2016 04:27AM",
                "loa": "28.995000",
                "vdeReorder": "1.015000",
                "nod": "8",
                "tvd": "5652",
                "capacity": "995.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 1.2217,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D637",
                "customerName": "BALLARAT AQUATIC CENTRE (CO2 MBK)",
                "customerNo": "BA180901",
                "address": "PRINCE OF WALES PARKGILLES STREET NORTH(CO2 - 300 X 2 & 240 X 1),BALLARAT",
                "longi": 143.818500,
                "lati": -37.550500,
                "tel": "03 5334 2499",
                "email": "",
                "lastDeliveryDate": "29 Apr 2016 20:00AM",
                "nextDeliveryDate": "06 May 2016 20:00AM",
                "loa": "34.413333",
                "vdeReorder": "1.091111",
                "nod": "9",
                "tvd": "4250",
                "capacity": "720.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 2.6179,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D644",
                "customerName": "BARREE STUD  (BULK)",
                "customerNo": "BAV01401",
                "address": "469 FORBES - MORANDING ROAD(BULK OXYGEN),KILMORE",
                "longi": 144.867954,
                "lati": -37.265037,
                "tel": "5781 1165",
                "email": "",
                "lastDeliveryDate": "19 Apr 2016 22:25AM",
                "nextDeliveryDate": "26 Apr 2016 22:25AM",
                "loa": "11.330000",
                "vdeReorder": "1.180000",
                "nod": "1",
                "tvd": "4971",
                "capacity": "5606.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 3.0148,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D714",
                "customerName": "THE ALFRED HEALTHCARE GROUP - CAULFIELD",
                "customerNo": "CF255602",
                "address": "CAULFIELD HOSPITAL294 KOOYONG ROAD(CO2 - 300),CAULFIELD",
                "longi": 145.022800,
                "lati": -37.882900,
                "tel": "9276 6000",
                "email": "",
                "lastDeliveryDate": "23 Aug 2016 08:30AM",
                "nextDeliveryDate": "30 Aug 2016 08:30AM",
                "loa": "40.000000",
                "vdeReorder": "1.000000",
                "nod": "3",
                "tvd": "540",
                "capacity": "300.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 0.0942,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D937",
                "customerName": "LASER 3D (BULK NITR)",
                "customerNo": "LAV84304",
                "address": "2 / 1368 HEATHERTON ROAD(BULK NITROGEN),DANDENONG",
                "longi": 145.199800,
                "lati": -37.968500,
                "tel": "8710 4100",
                "email": "",
                "lastDeliveryDate": "25 Aug 2016 02:28AM",
                "nextDeliveryDate": "01 Sep 2016 02:28AM",
                "loa": "36.123333",
                "vdeReorder": "0.796666",
                "nod": "12",
                "tvd": "111281",
                "capacity": "14518.00(M3)",
                "reOrderLevel": 20,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 33.8986,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D1114",
                "customerName": "ELTHAM LEISURE CENTRE YMCA (PLAY POOL)",
                "customerNo": "SH118401",
                "address": "BROUGHAM STREET, MAIN ENTRANCE(CO2 -300),ELTHAM",
                "longi": 145.141572,
                "lati": -37.723453,
                "tel": "9439 2266",
                "email": "",
                "lastDeliveryDate": "17 Jun 2016 08:55AM",
                "nextDeliveryDate": "24 Jun 2016 08:55AM",
                "loa": "45.882500",
                "vdeReorder": "0.775000",
                "nod": "4",
                "tvd": "381",
                "capacity": "176.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.1676,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1137",
                "customerName": "ST ALBANS LEISURE CENTRE (CO2 MINIBULK)",
                "customerNo": "ST292200",
                "address": "TAYLORS ROAD(CO2 - 176),ST ALBANS EAST",
                "longi": 144.804900,
                "lati": -37.728100,
                "tel": "9249 4635",
                "email": "",
                "lastDeliveryDate": "07 Sep 2016 17:14AM",
                "nextDeliveryDate": "14 Sep 2016 17:14AM",
                "loa": "36.018823",
                "vdeReorder": "1.065882",
                "nod": "17",
                "tvd": "1914.32",
                "capacity": "176.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.4329,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1237",
                "customerName": "WILLOW CREEK VINEYARD PTY LTD",
                "customerNo": "WIV26200",
                "address": "166 BALNARRING ROAD(CO2 - 300),MERRICKS NORTH",
                "longi": 145.075200,
                "lati": -38.353800,
                "tel": "03 5989 7448",
                "email": "",
                "lastDeliveryDate": "20 Jun 2016 07:31AM",
                "nextDeliveryDate": "27 Jun 2016 07:31AM",
                "loa": "41.330000",
                "vdeReorder": "0.840000",
                "nod": "1",
                "tvd": "176",
                "capacity": "300.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.1028,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D645",
                "customerName": "BARLEY CORN BREWERS (CVL INVESTMENTS)",
                "customerNo": "BAV04001",
                "address": "388 HUNTINGDALE ROAD,OAKLEIGH SOUTH",
                "longi": 145.102700,
                "lati": -37.916900,
                "tel": "9548 8288",
                "email": "",
                "lastDeliveryDate": "01 Sep 2016 12:12AM",
                "nextDeliveryDate": "08 Sep 2016 12:12AM",
                "loa": "5.000000",
                "vdeReorder": "1.357500",
                "nod": "4",
                "tvd": "684",
                "capacity": "180.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.2108,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D820",
                "customerName": "MOUNT LANGI GHIRAN P/L  (CO2 MINIBULK)",
                "customerNo": "FR555400",
                "address": "80 VINE ROAD(CO2 - 500),BAYINDEEN",
                "longi": 143.160200,
                "lati": -37.317900,
                "tel": "5354 3207",
                "email": "",
                "lastDeliveryDate": "29 Aug 2016 11:55AM",
                "nextDeliveryDate": "05 Sep 2016 11:55AM",
                "loa": "31.184615",
                "vdeReorder": "1.147692",
                "nod": "13",
                "tvd": "4473",
                "capacity": "500.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.8177,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D845",
                "customerName": "GOULBURN RIVER TROUT PTY LTD",
                "customerNo": "GOV03201",
                "address": "1680 GOULBURN VALLEY HIGHWAY,ALEXANDRIA",
                "longi": 145.787587,
                "lati": -37.232789,
                "tel": "5773 2483",
                "email": "",
                "lastDeliveryDate": "01 Sep 2016 14:50AM",
                "nextDeliveryDate": "08 Sep 2016 14:50AM",
                "loa": "26.787777",
                "vdeReorder": "1.037777",
                "nod": "9",
                "tvd": "96126",
                "capacity": "14700.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 27.2403,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D1006",
                "customerName": "NISSAN CASTING (BULK LIN)",
                "customerNo": "NI042202",
                "address": "CASTING PLANTFRANKSON ROAD(BULK NITROGEN),DANDENONG",
                "longi": 145.216600,
                "lati": -38.021300,
                "tel": "97974008",
                "email": "accountspayablencap@nissan.com.au",
                "lastDeliveryDate": "18 Aug 2016 20:16AM",
                "nextDeliveryDate": "25 Aug 2016 20:16AM",
                "loa": "36.225000",
                "vdeReorder": "0.848750",
                "nod": "8",
                "tvd": "4102",
                "capacity": "804.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 6.7013,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D1020",
                "customerName": "NUFARM LTD-O2  (BULK -  OXY)",
                "customerNo": "NU062103",
                "address": "103 PIPE ROAD(BULK OXY),LAVERTON NORTH",
                "longi": 144.798800,
                "lati": -37.825400,
                "tel": "9282 1000",
                "email": "",
                "lastDeliveryDate": "01 Sep 2016 21:10AM",
                "nextDeliveryDate": "08 Sep 2016 21:10AM",
                "loa": "39.225238",
                "vdeReorder": "0.782857",
                "nod": "21",
                "tvd": "98403",
                "capacity": "7992.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 32.4769,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D1113",
                "customerName": "SELBY SAFETY EQUIPMENT SERVICES P/L(CO2)",
                "customerNo": "SE582001",
                "address": "8 WIGAN ROAD(CO2 - LTH 6120),BAYSWATER",
                "longi": 145.267900,
                "lati": -37.842600,
                "tel": "9762 6888",
                "email": "",
                "lastDeliveryDate": "02 Aug 2016 01:16AM",
                "nextDeliveryDate": "09 Aug 2016 01:16AM",
                "loa": "17.085000",
                "vdeReorder": "0.900000",
                "nod": "2",
                "tvd": "7550",
                "capacity": "6000.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 187.1520,
                "vmi": "FALSE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1224",
                "customerName": "STAWELL GOLD MINES PTY LTD",
                "customerNo": "WE703701",
                "address": "LEVIATHAN ROAD,STAWELL",
                "longi": 142.803400,
                "lati": -37.058600,
                "tel": "5358 1022.",
                "email": "",
                "lastDeliveryDate": "02 Sep 2016 22:30AM",
                "nextDeliveryDate": "09 Sep 2016 22:30AM",
                "loa": "41.442222",
                "vdeReorder": "1.097037",
                "nod": "27",
                "tvd": "418425",
                "capacity": "36038.00(M3)",
                "reOrderLevel": 60,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 138.1751,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D1231",
                "customerName": "MILL PARK LEISURE CENTRE (Y M C A)",
                "customerNo": "WH404801",
                "address": "MORANG DRIVE(CO2 - 176 X 2),MILL PARK",
                "longi": 145.056074,
                "lati": -37.658046,
                "tel": "9404 4811",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 19:53AM",
                "nextDeliveryDate": "07 Sep 2016 19:53AM",
                "loa": "29.243181",
                "vdeReorder": "1.180000",
                "nod": "22",
                "tvd": "5604",
                "capacity": "360.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 1.1267,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2117",
                "customerName": "BERTOCCHI M. & SONS P/L (CO2 BULK)",
                "customerNo": "BE963102",
                "address": "LOT 1,  6 TRAWALLA AVENUE,THOMASTOWN",
                "longi": 144.973900,
                "lati": -37.686700,
                "tel": "9355 5100",
                "email": "",
                "lastDeliveryDate": "30 Aug 2016 00:52AM",
                "nextDeliveryDate": "06 Sep 2016 00:52AM",
                "loa": "31.460000",
                "vdeReorder": "0.910000",
                "nod": "14",
                "tvd": "13943",
                "capacity": "1500.00(KG)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 13.7759,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2185",
                "customerName": "SPECTRUM LASER (VIV 3000)",
                "customerNo": "LA970002",
                "address": "SPECTRUM LASER CUTTING13 SEISMIC COURT,ROWVILLE",
                "longi": 145.245800,
                "lati": -37.908300,
                "tel": "9763 5700",
                "email": "osman@spectrumlaser.com.au",
                "lastDeliveryDate": "02 Sep 2016 02:28AM",
                "nextDeliveryDate": "09 Sep 2016 02:28AM",
                "loa": "15.906521",
                "vdeReorder": "1.121304",
                "nod": "23",
                "tvd": "36749",
                "capacity": "1900.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 15.3588,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2210",
                "customerName": "INTERVET AUST PTY LTD (BULK) VIV2500",
                "customerNo": "INV98501",
                "address": "91 -105 HARPIN ST,BENDIGO EAST",
                "longi": 144.305200,
                "lati": -36.748600,
                "tel": "08 9300 0921",
                "email": "",
                "lastDeliveryDate": "13 Aug 2016 07:09AM",
                "nextDeliveryDate": "20 Aug 2016 07:09AM",
                "loa": "30.236000",
                "vdeReorder": "0.954000",
                "nod": "5",
                "tvd": "5302",
                "capacity": "1520.00(M3)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 1.6535,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D600",
                "customerName": "ALEXANDRA FISH FARM **BULK OXYGEN**",
                "customerNo": "ALV08101",
                "address": "2 PENDLE BURY STREET,ALEXANDRA",
                "longi": 145.717700,
                "lati": -37.199600,
                "tel": "03 5772 2078",
                "email": "aas@virtual.net.au",
                "lastDeliveryDate": "23 Aug 2016 21:40AM",
                "nextDeliveryDate": "30 Aug 2016 21:40AM",
                "loa": "18.984000",
                "vdeReorder": "1.080000",
                "nod": "5",
                "tvd": "14380",
                "capacity": "3550.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 3.9682,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D749",
                "customerName": "C.S.I.R.O. DIVISION OF A.A.H.L (CO2 MBK)",
                "customerNo": "CS383501",
                "address": "RYRIE STREET(CO2 - 500),EAST GEELONG",
                "longi": 144.387345,
                "lati": -38.156621,
                "tel": "5227 5329",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 00:12AM",
                "nextDeliveryDate": "07 Sep 2016 00:12AM",
                "loa": "25.138461",
                "vdeReorder": "1.070000",
                "nod": "13",
                "tvd": "4866",
                "capacity": "500.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 1.4783,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D919",
                "customerName": "KNIGHT GRANITE HILLS PTY LTD (BULK)",
                "customerNo": "KNV17900",
                "address": "BURKE & WILLS TRACK(C02  - 300),BAYNTON",
                "longi": 144.637552,
                "lati": -37.162557,
                "tel": "03 5423 7273",
                "email": "knights@granitehills.com.au",
                "lastDeliveryDate": "16 Mar 2016 20:31AM",
                "nextDeliveryDate": "23 Mar 2016 20:31AM",
                "loa": "21.670000",
                "vdeReorder": "1.310000",
                "nod": "1",
                "tvd": "235",
                "capacity": "300.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.1413,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1149",
                "customerName": "SUPAGAS EX WORKS ALTONA (BULK LIN)",
                "customerNo": "SU114505",
                "address": "23 COMMERCIAL DRIVE(BULK LIN),DANDENONG SOUTH",
                "longi": 145.215600,
                "lati": -38.018600,
                "tel": "9706 6262",
                "email": "",
                "lastDeliveryDate": "31 Mar 2016 07:51:20:000",
                "nextDeliveryDate": "07 Apr 2016 07:51:20:000",
                "loa": "0.000000",
                "vdeReorder": "0.630000",
                "nod": "1",
                "tvd": "10685",
                "capacity": "34000.00(M3)",
                "reOrderLevel": 50,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.0000,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D1183",
                "customerName": "THE AUSTIN HOSPITAL - BULK BACK UP",
                "customerNo": "TIV06601",
                "address": "OFF BURGUNDY STREETBULK OXY - BACK UP,HEIDELBERG",
                "longi": 145.066849,
                "lati": -37.756367,
                "tel": "",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 22:25AM",
                "nextDeliveryDate": "12 Sep 2016 22:25AM",
                "loa": "76.383333",
                "vdeReorder": "1.573333",
                "nod": "12",
                "tvd": "6810",
                "capacity": "2403.00(M3)",
                "reOrderLevel": 85,
                "safetyLevel": 50,
                "criticalLevel": 3,
                "usageRate": 5.7008,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D1217",
                "customerName": "VICTORIAN ALPS WINE COMPANY  (BULK)",
                "customerNo": "VJV10201",
                "address": "3897 GREAT ALPINE ROAD(CO2 MINIBULK),GAPSTED",
                "longi": 146.675700,
                "lati": -36.507400,
                "tel": "5751 1992",
                "email": "",
                "lastDeliveryDate": "22 Aug 2016 12:27AM",
                "nextDeliveryDate": "29 Aug 2016 12:27AM",
                "loa": "35.115000",
                "vdeReorder": "1.080000",
                "nod": "6",
                "tvd": "23358",
                "capacity": "6000.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 20,
                "criticalLevel": 2,
                "usageRate": 8.5442,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2119",
                "customerName": "MONASH UNI - CLAYTON - MED - AUST REGEN MEDICINE INST (ARMI)",
                "customerNo": "MSH02601",
                "address": "BLDG 75,  15 INNOVATION WAYWELLINGTON ROAD (BULK),Clayton",
                "longi": 145.143400,
                "lati": -37.916500,
                "tel": "9902 9610 / 9902 0199",
                "email": "matthew.dobbs@monash.edu",
                "lastDeliveryDate": "31 Aug 2016 01:30AM",
                "nextDeliveryDate": "07 Sep 2016 01:30AM",
                "loa": "40.956666",
                "vdeReorder": "0.908333",
                "nod": "18",
                "tvd": "72481",
                "capacity": "6820.00(M3)",
                "reOrderLevel": 35,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 29.4466,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2255",
                "customerName": "RUTHERGLEN ESTATES (ETERNITY RUTHERGLEN)",
                "customerNo": "RUV96401",
                "address": "CNR MURRAY VALLEY HIGHWAY &GREAT NORTHERN ROAD,RUTHERGLEN",
                "longi": 146.538906,
                "lati": -36.054104,
                "tel": "02 6032 8516",
                "email": "",
                "lastDeliveryDate": "30 Aug 2016 12:57AM",
                "nextDeliveryDate": "06 Sep 2016 12:57AM",
                "loa": "20.182000",
                "vdeReorder": "1.110000",
                "nod": "5",
                "tvd": "23751",
                "capacity": "6120.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 4.2991,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D633",
                "customerName": "BARWON WATER(BOUNDARY RD)",
                "customerNo": "BA093801",
                "address": "BOUNDARY ROAD(BULK OXYGEN),EAST GEELONG",
                "longi": 144.386100,
                "lati": -38.159600,
                "tel": "5226 9123",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 07:01AM",
                "nextDeliveryDate": "12 Sep 2016 07:01AM",
                "loa": "26.965454",
                "vdeReorder": "0.974545",
                "nod": "11",
                "tvd": "16919",
                "capacity": "2106.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 8.9076,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D748",
                "customerName": "SUGAR AUSTRALIA (CO2 MINIBULK)",
                "customerNo": "CS184500",
                "address": "265 WHITEHALL STREET(CO2 - 500),YARRAVILLE",
                "longi": 144.900300,
                "lati": -37.817800,
                "tel": "9283 4558",
                "email": "",
                "lastDeliveryDate": "14 Jul 2016 13:50AM",
                "nextDeliveryDate": "21 Jul 2016 13:50AM",
                "loa": "14.666666",
                "vdeReorder": "1.220000",
                "nod": "3",
                "tvd": "1280",
                "capacity": "500.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.3751,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D784",
                "customerName": "BAIADA POULTRY P/L  (CO2 BULK)",
                "customerNo": "EAV57602",
                "address": "17 - 19 PIPE ROAD(BULK CO2),LAVERTON NORTH",
                "longi": 144.815500,
                "lati": -37.821200,
                "tel": "9368 9001",
                "email": "",
                "lastDeliveryDate": "07 Sep 2016 07:15:20:000",
                "nextDeliveryDate": "14 Sep 2016 07:15:20:000",
                "loa": "22.276428",
                "vdeReorder": "0.985714",
                "nod": "14",
                "tvd": "275621",
                "capacity": "29070.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 63.9474,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D818",
                "customerName": "FRONTLINE ENGINEERING PL - (CO2 - 240)",
                "customerNo": "FR215401",
                "address": "55 LETCON DRIVE(CO2 - 240),DANDENONG SOUTH",
                "longi": 145.192158,
                "lati": -38.037115,
                "tel": "0422 445 633",
                "email": "mkamalina@frontline-aust.com.au",
                "lastDeliveryDate": "06 Sep 2016 21:14AM",
                "nextDeliveryDate": "13 Sep 2016 21:14AM",
                "loa": "32.378461",
                "vdeReorder": "1.126923",
                "nod": "13",
                "tvd": "2109.8",
                "capacity": "240.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.4642,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D884",
                "customerName": "HOLGATE BREWHOUSE (2 X 240 KG )",
                "customerNo": "HOV03801",
                "address": "79 HIGH STREET,WOODEND",
                "longi": 144.527000,
                "lati": -37.357000,
                "tel": "5427 3522",
                "email": "hotel@holgatebrewhouse.com;accounts@holgatebrewhouse.com",
                "lastDeliveryDate": "29 Aug 2016 19:47AM",
                "nextDeliveryDate": "05 Sep 2016 19:47AM",
                "loa": "28.893684",
                "vdeReorder": "1.185789",
                "nod": "19",
                "tvd": "6485",
                "capacity": "480.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 1.8535,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D918",
                "customerName": "KILCHURN WINES - BULK",
                "customerNo": "KIV98301",
                "address": "144 GLENFERN ROAD,ROMSEY",
                "longi": 144.716300,
                "lati": -37.337800,
                "tel": "5429 5666",
                "email": "admin@kilchurnwines.com.au",
                "lastDeliveryDate": "23 Aug 2016 18:56AM",
                "nextDeliveryDate": "30 Aug 2016 18:56AM",
                "loa": "14.167142",
                "vdeReorder": "1.431428",
                "nod": "7",
                "tvd": "1442",
                "capacity": "240.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.4796,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D967",
                "customerName": "MELBOURNE SPORTS & AQUATIC CNTRE(BULK)",
                "customerNo": "ME009701",
                "address": "AUGHTIE DRIVE(CO2 MINIBULK),ALBERT PARK",
                "longi": 144.954066,
                "lati": -37.841207,
                "tel": "9666 4261",
                "email": "",
                "lastDeliveryDate": "24 Aug 2016 06:14AM",
                "nextDeliveryDate": "31 Aug 2016 06:14AM",
                "loa": "41.178000",
                "vdeReorder": "0.807000",
                "nod": "20",
                "tvd": "27787",
                "capacity": "2362.00(KG)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 6.7155,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1033",
                "customerName": "ORIGIN ENERGY RESOURCES LTD (BLK NITR)",
                "customerNo": "ORV71901",
                "address": "5575 SOUTH GIPPSLAND HIGHWAY(BULK NITROGEN),LANG LANG",
                "longi": 145.588400,
                "lati": -38.322600,
                "tel": "5654 9104",
                "email": "",
                "lastDeliveryDate": "29 Aug 2016 20:41AM",
                "nextDeliveryDate": "05 Sep 2016 20:41AM",
                "loa": "30.225882",
                "vdeReorder": "0.931176",
                "nod": "17",
                "tvd": "76685",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 2,
                "usageRate": 14.8315,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D1203",
                "customerName": "VARIAN AUSTRALIA P/L (LAR ALPHAGAZ LIQ)",
                "customerNo": "VA524310",
                "address": "679 SPRINGVALE ROAD(BULK ARGON),MULGRAVE",
                "longi": 145.158400,
                "lati": -37.921500,
                "tel": "9560 7133",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 21:19AM",
                "nextDeliveryDate": "07 Sep 2016 21:19AM",
                "loa": "25.073333",
                "vdeReorder": "1.020000",
                "nod": "6",
                "tvd": "21509",
                "capacity": "4806.00(M3)",
                "reOrderLevel": 27,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 3.0468,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LAR",
                "type": "customer"
            },
            {
                "id": "D2409",
                "customerName": "MONASH UNI - CLAYTON - MED - AUST REGEN MEDICINE INST (ARMI)",
                "customerNo": "MSH02602",
                "address": "BLDG 75,  15 INNOVATION WAYWELLINGTON ROAD (MINI BULK CO2),Clayton",
                "longi": 145.129600,
                "lati": -37.912100,
                "tel": "9902 9610 / 9902 0199",
                "email": "matthew.dobbs@monash.edu",
                "lastDeliveryDate": "31 Aug 2016 06:48AM",
                "nextDeliveryDate": "07 Sep 2016 06:48AM",
                "loa": "29.736000",
                "vdeReorder": "1.021000",
                "nod": "10",
                "tvd": "4699",
                "capacity": "720.00(KG)",
                "reOrderLevel": 36,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 1.2466,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2909",
                "customerName": "GROUNDMASTER ENGINEERING (BULK - LIN)",
                "customerNo": "GSV09702",
                "address": "67 CALARCO DRIVE,DERRIMUT",
                "longi": 144.758300,
                "lati": -37.799600,
                "tel": "03 9394 0800",
                "email": "accounts.gme@groundmaster.com.au",
                "lastDeliveryDate": "14 Jul 2016 21:55:20:000",
                "nextDeliveryDate": "21 Jul 2016 21:55:20:000",
                "loa": "3.210000",
                "vdeReorder": "1.320000",
                "nod": "4",
                "tvd": "25380",
                "capacity": "6479.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 26.1365,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2410",
                "customerName": "MONASH UNI - CLAYTON - MED - SCH OF BIOMED SCI - B77",
                "customerNo": "MSH04002",
                "address": "BLDG 77, 23 INNOVATION WALKWELLINGTON ROAD,Clayton",
                "longi": 145.129600,
                "lati": -37.911900,
                "tel": "9902 0199",
                "email": "",
                "lastDeliveryDate": "23 Aug 2016 10:58AM",
                "nextDeliveryDate": "30 Aug 2016 10:58AM",
                "loa": "11.487142",
                "vdeReorder": "1.197142",
                "nod": "7",
                "tvd": "2974",
                "capacity": "480.00(KG)",
                "reOrderLevel": 26,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.6583,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2785",
                "customerName": "SIMPLOT LIN (FLEMINGTON)",
                "customerNo": "SIV01702",
                "address": "UNIT 2, 31-33 ASCOT VALE ROAD,FLEMINGTON",
                "longi": 144.921700,
                "lati": -37.784500,
                "tel": "8371 5422",
                "email": "frank.vadnjal@simplot.com.au",
                "lastDeliveryDate": "08 Sep 2016 18:25AM",
                "nextDeliveryDate": "15 Sep 2016 18:25AM",
                "loa": "27.153684",
                "vdeReorder": "0.985263",
                "nod": "19",
                "tvd": "10533",
                "capacity": "761.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 6.7671,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2810",
                "customerName": "FOODMACH  - BULK LIN PTY LTD",
                "customerNo": "FO545606",
                "address": "1 DARLING STREET,ECHUCA",
                "longi": 144.764500,
                "lati": -36.129100,
                "tel": "5482 4666 / 0417 030 276",
                "email": "Dallas.coote@foodmach.com.au",
                "lastDeliveryDate": "16 Aug 2016 13:54AM",
                "nextDeliveryDate": "23 Aug 2016 13:54AM",
                "loa": "32.121250",
                "vdeReorder": "0.918750",
                "nod": "8",
                "tvd": "21591",
                "capacity": "3976.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 21.4014,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D586",
                "customerName": "A C LASER (BULK 6000 NI)",
                "customerNo": "ACV65503",
                "address": "UNIT 1 / 72 NORTHGATE DRIVE,THOMASTOWN",
                "longi": 145.035734,
                "lati": -37.688331,
                "tel": "9465 6344",
                "email": "",
                "lastDeliveryDate": "30 Aug 2016 12:45AM",
                "nextDeliveryDate": "06 Sep 2016 12:45AM",
                "loa": "29.772400",
                "vdeReorder": "0.936400",
                "nod": "25",
                "tvd": "68489",
                "capacity": "3901.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 10,
                "criticalLevel": 3,
                "usageRate": 16.0480,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D672",
                "customerName": "BMS STEEL FABRICATIONS (LOX)",
                "customerNo": "BM887601",
                "address": "59 MEROLA WAY(BULK OXYGEN),CAMPBELLFIELD",
                "longi": 144.959100,
                "lati": -37.654800,
                "tel": "9357 8341",
                "email": "",
                "lastDeliveryDate": "29 Aug 2016 23:22AM",
                "nextDeliveryDate": "05 Sep 2016 23:22AM",
                "loa": "19.708461",
                "vdeReorder": "1.100769",
                "nod": "13",
                "tvd": "9394",
                "capacity": "900.00(M3)",
                "reOrderLevel": 27,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 3.7637,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D772",
                "customerName": "DI ROSSI FOODS PTY LTD",
                "customerNo": "DIV75302",
                "address": "16 - 18 BATE DRIVE(CO2 BULK),BRAESIDE",
                "longi": 145.116200,
                "lati": -38.000300,
                "tel": "9587 2999",
                "email": "",
                "lastDeliveryDate": "06 Sep 2016 22:54AM",
                "nextDeliveryDate": "13 Sep 2016 22:54AM",
                "loa": "23.665000",
                "vdeReorder": "1.352857",
                "nod": "14",
                "tvd": "15083.5",
                "capacity": "1448.00(KG)",
                "reOrderLevel": 45,
                "safetyLevel": 40,
                "criticalLevel": 3,
                "usageRate": 9.5127,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D786",
                "customerName": "BAIADA POULTRY P/L  (LOX)",
                "customerNo": "EAV57604",
                "address": "17 - 19 PIPE ROAD(BULK OXYGEN),LAVERTON NORTH",
                "longi": 144.815500,
                "lati": -37.821200,
                "tel": "9368 9001",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 11:31AM",
                "nextDeliveryDate": "12 Sep 2016 11:31AM",
                "loa": "18.371111",
                "vdeReorder": "1.087777",
                "nod": "9",
                "tvd": "28549",
                "capacity": "3886.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 5.5740,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D879",
                "customerName": "HILTON MANUFACTURING P/L (BLK LIN- BANGHOLME RD)",
                "customerNo": "HI689504",
                "address": "110 BANGHOLME ROAD,DANDENONG SOUTH",
                "longi": 145.197700,
                "lati": -38.036800,
                "tel": "8791 9400",
                "email": "purchasing@hiltonmfg.com.au",
                "lastDeliveryDate": "02 Sep 2016 04:18AM",
                "nextDeliveryDate": "09 Sep 2016 04:18AM",
                "loa": "29.403333",
                "vdeReorder": "1.008000",
                "nod": "15",
                "tvd": "68462",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 18.6656,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D886",
                "customerName": "HUNT LASERCUT  (BULK OXY)",
                "customerNo": "HU174101",
                "address": "8 - 16 REDWOOD DRIVE(BULK OXYGEN),DINGLEY",
                "longi": 145.111837,
                "lati": -37.984245,
                "tel": "9551 3077",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 19:10AM",
                "nextDeliveryDate": "12 Sep 2016 19:10AM",
                "loa": "24.607894",
                "vdeReorder": "1.005789",
                "nod": "19",
                "tvd": "14253",
                "capacity": "995.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 2.2573,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D965",
                "customerName": "MAROONDAH HOSPITAL -MAIN",
                "customerNo": "MD874002",
                "address": "MT DANDENONG ROAD(BULK OXYGEN),RINGWOOD",
                "longi": 145.255100,
                "lati": -37.806700,
                "tel": "",
                "email": "",
                "lastDeliveryDate": "23 Aug 2016 23:40AM",
                "nextDeliveryDate": "30 Aug 2016 23:40AM",
                "loa": "48.838333",
                "vdeReorder": "0.853333",
                "nod": "6",
                "tvd": "25878",
                "capacity": "8430.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 7.2657,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D2158",
                "customerName": "MAI HONG INDUSTRIES",
                "customerNo": "MBV07801",
                "address": "59 BARRY STREET(BULK),BAYSWATER",
                "longi": 145.282400,
                "lati": -37.847500,
                "tel": "9762 8683",
                "email": "",
                "lastDeliveryDate": "07 Sep 2016 23:45AM",
                "nextDeliveryDate": "14 Sep 2016 23:45AM",
                "loa": "39.266956",
                "vdeReorder": "0.809347",
                "nod": "46",
                "tvd": "335248",
                "capacity": "12000.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 186.5098,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2365",
                "customerName": "COFIELD WINES (CO2 - PLV240)",
                "customerNo": "CPV13101",
                "address": "DISTILLERY ROAD,WAHGUNYAH",
                "longi": 146.398916,
                "lati": -36.022724,
                "tel": "02 6033 3798",
                "email": "damien@cofieldwines.com.au",
                "lastDeliveryDate": "17 Aug 2016 08:58AM",
                "nextDeliveryDate": "24 Aug 2016 08:58AM",
                "loa": "27.708000",
                "vdeReorder": "1.032000",
                "nod": "5",
                "tvd": "1735",
                "capacity": "480.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 5,
                "usageRate": 0.4016,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2744",
                "customerName": "MONASH UNI - CLAYTON - SCI - SCHOOL OF BIOLOGICAL SCIENCES",
                "customerNo": "MSH05001",
                "address": "BLDG 53, 12 INNOVATION WAYWELLINGTON ROAD,Clayton",
                "longi": 145.133300,
                "lati": -37.907800,
                "tel": "0428 575 643",
                "email": "",
                "lastDeliveryDate": "18 Aug 2016 07:42AM",
                "nextDeliveryDate": "25 Aug 2016 07:42AM",
                "loa": "43.467500",
                "vdeReorder": "0.762500",
                "nod": "4",
                "tvd": "796",
                "capacity": "352.00(KG)",
                "reOrderLevel": 26,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.7976,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2404",
                "customerName": "M. CHAPOUTIER PTY LTD - (CO2 MINIBULK)",
                "customerNo": "MCV95901",
                "address": "141 - 143 HIGH STREET,HEATHCOTE",
                "longi": 144.708094,
                "lati": -36.921773,
                "tel": "03 5433 2411",
                "email": "rlewis@mchapoutier.com",
                "lastDeliveryDate": "29 Aug 2016 21:05AM",
                "nextDeliveryDate": "05 Sep 2016 21:05AM",
                "loa": "21.875000",
                "vdeReorder": "1.302500",
                "nod": "12",
                "tvd": "2250",
                "capacity": "240.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.3515,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2757",
                "customerName": "VIC DESAL PLANT - STRM2A",
                "customerNo": "DFV04104",
                "address": "VIC DESAL PLANT - VES 3LOWER POWLETT ROAD,WONTHAGGI",
                "longi": 145.549186,
                "lati": -38.592092,
                "tel": "5671 9000",
                "email": "",
                "lastDeliveryDate": "27 Apr 2016 08:00AM",
                "nextDeliveryDate": "04 May 2016 08:00AM",
                "loa": "34.640000",
                "vdeReorder": "0.700000",
                "nod": "1",
                "tvd": "14000",
                "capacity": "55200.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 8.8224,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2940",
                "customerName": "AUSTRALIAN MEAT GROUP PTY LTD",
                "customerNo": "AUV86901",
                "address": "342 HAMMOND ROAD,DANDENONG",
                "longi": 145.202800,
                "lati": -38.028500,
                "tel": "+618329 8500",
                "email": "",
                "lastDeliveryDate": "14 Mar 2016 21:15AM",
                "nextDeliveryDate": "21 Mar 2016 21:15AM",
                "loa": "53.805000",
                "vdeReorder": "0.685000",
                "nod": "2",
                "tvd": "27027",
                "capacity": "32800.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 89.7185,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D3021",
                "customerName": "ALWA - CPT RAIL VIC - (FULL ISO)",
                "customerNo": "AJV02101",
                "address": "3 CHANNEL CLOSE,HENDERSON",
                "longi": 144.932600,
                "lati": -37.803700,
                "tel": "+61894949625",
                "email": "alwaaccpay@airliquide.com",
                "lastDeliveryDate": "13 Mar 2016 14:25AM",
                "nextDeliveryDate": "20 Mar 2016 14:25AM",
                "loa": "84.458000",
                "vdeReorder": "0.916000",
                "nod": "10",
                "tvd": "155420",
                "capacity": "99999.00(KG)",
                "reOrderLevel": 3,
                "safetyLevel": 2,
                "criticalLevel": 1,
                "usageRate": 0.0000,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2937",
                "customerName": "YMCA - DIAMOND CREEK",
                "customerNo": "YMV99901",
                "address": "1 ELIZABETH STREETMINIBULK,DIAMOND CREEK",
                "longi": 145.157400,
                "lati": -37.672200,
                "tel": "",
                "email": "",
                "lastDeliveryDate": "16 Aug 2016 09:53AM",
                "nextDeliveryDate": "23 Aug 2016 09:53AM",
                "loa": "50.433333",
                "vdeReorder": "0.826666",
                "nod": "9",
                "tvd": "803",
                "capacity": "180.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 0.0945,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2269",
                "customerName": "WODONGA HOSPITAL (VIV7000)",
                "customerNo": "00V00001",
                "address": "VERMONT STREET,WODONGA",
                "longi": 146.879208,
                "lati": -36.126862,
                "tel": "02 6051 7507",
                "email": "",
                "lastDeliveryDate": "11 Aug 2016 22:03AM",
                "nextDeliveryDate": "18 Aug 2016 22:03AM",
                "loa": "46.690000",
                "vdeReorder": "0.886666",
                "nod": "3",
                "tvd": "8966",
                "capacity": "5606.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 4.2517,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D2369",
                "customerName": "BURRA FOODS PTY LTD (ALIGAL 2 LIQUID)",
                "customerNo": "BUV91202",
                "address": "47 STATION STREET,KORUMBURRA",
                "longi": 145.821700,
                "lati": -38.427900,
                "tel": "(03) 5658 1066",
                "email": "glennf@burrafoods.com.au",
                "lastDeliveryDate": "03 Sep 2016 13:47AM",
                "nextDeliveryDate": "10 Sep 2016 13:47AM",
                "loa": "24.100000",
                "vdeReorder": "1.046666",
                "nod": "6",
                "tvd": "87881",
                "capacity": "20000.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 19.5409,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2756",
                "customerName": "VIC DESAL PLANT - STRM1B",
                "customerNo": "DFV04103",
                "address": "VIC DESAL PLANT - VES 2LOWER POWLETT ROAD,WONTHAGGI",
                "longi": 145.549186,
                "lati": -38.592092,
                "tel": "5671 9000",
                "email": "",
                "lastDeliveryDate": "11 Apr 2016 10:45AM",
                "nextDeliveryDate": "18 Apr 2016 10:45AM",
                "loa": "14.916666",
                "vdeReorder": "0.980000",
                "nod": "3",
                "tvd": "59160",
                "capacity": "55200.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 332.0700,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D628",
                "customerName": "AKZO NOBEL PTY LTD (LIN)",
                "customerNo": "AZV89401",
                "address": "51 MCINTYRE ROAD(BULK NITROGEN),SUNSHINE",
                "longi": 144.829800,
                "lati": -37.770600,
                "tel": "9313 4555",
                "email": "",
                "lastDeliveryDate": "02 Aug 2016 00:03AM",
                "nextDeliveryDate": "09 Aug 2016 00:03AM",
                "loa": "37.995454",
                "vdeReorder": "1.031818",
                "nod": "11",
                "tvd": "44094",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 26,
                "usageRate": 11.2386,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D653",
                "customerName": "BARDEN FABRICATION PTY LTD",
                "customerNo": "BBV41602",
                "address": "35 GATWICK ROAD(BULK NITRO) VIV6000,BAYSWATER NORTH",
                "longi": 145.296800,
                "lati": -37.824200,
                "tel": "9729 3233",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 21:20AM",
                "nextDeliveryDate": "07 Sep 2016 21:20AM",
                "loa": "22.336666",
                "vdeReorder": "1.034666",
                "nod": "15",
                "tvd": "40773",
                "capacity": "3500.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 10,
                "criticalLevel": 2,
                "usageRate": 11.5072,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D798",
                "customerName": "EPWORTH EASTERN",
                "customerNo": "EPV00301",
                "address": "NELSON STREET(BULK OXY),BOX HILL",
                "longi": 145.123543,
                "lati": -37.819030,
                "tel": "",
                "email": "",
                "lastDeliveryDate": "01 Sep 2016 23:15AM",
                "nextDeliveryDate": "08 Sep 2016 23:15AM",
                "loa": "41.531250",
                "vdeReorder": "0.973750",
                "nod": "8",
                "tvd": "37383",
                "capacity": "7992.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 35,
                "criticalLevel": 3,
                "usageRate": 10.0771,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D819",
                "customerName": "FRONTLINE ENGINEERING PL - ARGON BULK",
                "customerNo": "FR215402",
                "address": "55 LETCON DRIVE(BULK ARGON),DANDENONG SOUTH",
                "longi": 145.192158,
                "lati": -38.037115,
                "tel": "9768 4200",
                "email": "mkamalina@frontline-aust.com.au",
                "lastDeliveryDate": "31 Aug 2016 20:05AM",
                "nextDeliveryDate": "07 Sep 2016 20:05AM",
                "loa": "47.220000",
                "vdeReorder": "0.719166",
                "nod": "12",
                "tvd": "14801",
                "capacity": "2348.00(M3)",
                "reOrderLevel": 27,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 9.5578,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LAR",
                "type": "customer"
            },
            {
                "id": "D828",
                "customerName": "FX SERVICES AUSTRALIA PTY LTD (CO2 MINI BULK)",
                "customerNo": "FXV00201",
                "address": "1/3 LONGVIEW CURCUIT(CO2 MINI BULK),THOMASTOWN",
                "longi": 145.043207,
                "lati": -37.689422,
                "tel": "0409 911 429",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 06:06AM",
                "nextDeliveryDate": "12 Sep 2016 06:06AM",
                "loa": "24.215384",
                "vdeReorder": "1.263846",
                "nod": "26",
                "tvd": "9852",
                "capacity": "500.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 3.5160,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D930",
                "customerName": "LAVERTON SWIM CENTRE (MINIBULK)",
                "customerNo": "LAV03901",
                "address": "JENNINGS STREET(CO2 - 176),LAVERTON",
                "longi": 144.769794,
                "lati": -37.862015,
                "tel": "9360 0318",
                "email": "",
                "lastDeliveryDate": "07 Sep 2016 15:44AM",
                "nextDeliveryDate": "14 Sep 2016 15:44AM",
                "loa": "13.973750",
                "vdeReorder": "1.433750",
                "nod": "8",
                "tvd": "1211.24",
                "capacity": "176.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.3365,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1053",
                "customerName": "PEERLESS HOLDINGS P/L- BRAYBROOK (BLK CO2)",
                "customerNo": "PL087901",
                "address": "21 EVANS STREET,BRAYBROOK",
                "longi": 144.862900,
                "lati": -37.776000,
                "tel": "9214 7777",
                "email": "",
                "lastDeliveryDate": "09 Sep 2016 06:54AM",
                "nextDeliveryDate": "16 Sep 2016 06:54AM",
                "loa": "29.541600",
                "vdeReorder": "0.932000",
                "nod": "25",
                "tvd": "260881",
                "capacity": "15333.00(KG)",
                "reOrderLevel": 27,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 65.0501,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1198",
                "customerName": "UNIDRIVE PTY LTD CO2  (MINI BULK)",
                "customerNo": "UNV52100",
                "address": "DAVID MILLMAN45 - 49 MCNAUGHTON ROAD(CO2 - 300),CLAYTON",
                "longi": 145.137200,
                "lati": -37.927500,
                "tel": "0400440153",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 08:19AM",
                "nextDeliveryDate": "07 Sep 2016 08:19AM",
                "loa": "33.477142",
                "vdeReorder": "1.107142",
                "nod": "7",
                "tvd": "1397",
                "capacity": "300.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.3971,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2393",
                "customerName": "BARWON REGION WATER QUEENSCLIFF NO.11 - BONNYVALE ROAD",
                "customerNo": "BA094002",
                "address": "135 BONNEY VALE ROAD(BULK OXYGEN),OCEAN GROVE",
                "longi": 144.551400,
                "lati": -38.267400,
                "tel": "03 5226 9131",
                "email": "ap-list@barwonwater.vic.gov.au",
                "lastDeliveryDate": "05 Sep 2016 08:20AM",
                "nextDeliveryDate": "12 Sep 2016 08:20AM",
                "loa": "31.628000",
                "vdeReorder": "0.976000",
                "nod": "5",
                "tvd": "13230",
                "capacity": "3870.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 25,
                "criticalLevel": 3,
                "usageRate": 3.1538,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D2925",
                "customerName": "PEMARA LABELS (BULK)",
                "customerNo": "PFV00903",
                "address": "294 FERNTREE GULLY ROAD,NOTTING HILL",
                "longi": 145.133300,
                "lati": -37.900900,
                "tel": "9542 7777",
                "email": "accounts.vic@pemara.com.au",
                "lastDeliveryDate": "01 Sep 2016 01:37AM",
                "nextDeliveryDate": "08 Sep 2016 01:37AM",
                "loa": "31.543333",
                "vdeReorder": "0.926666",
                "nod": "6",
                "tvd": "26698",
                "capacity": "6500.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 44.7127,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D3104",
                "customerName": "THE AUSTRALIAN STEEL COMPANY (OPERATIONS) PTY LTD(ADMINISTRATORS APPOINTED)",
                "customerNo": "TIV17601",
                "address": "105 DOHERTYS ROAD(BULK ARGON),LAVERTON NORTH",
                "longi": 0.000000,
                "lati": 0.000000,
                "tel": "+61393602360",
                "email": "workflowapinvoices@onesteel.com;osaccpay_nonpo@onesteel.com",
                "lastDeliveryDate": "06 Sep 2016 11:54AM",
                "nextDeliveryDate": "13 Sep 2016 11:54AM",
                "loa": "39.580000",
                "vdeReorder": "0.863333",
                "nod": "3",
                "tvd": "14160",
                "capacity": "7812.00(M3)",
                "reOrderLevel": 30,
                "safetyLevel": 25,
                "criticalLevel": 3,
                "usageRate": 13.6623,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LAR",
                "type": "customer"
            },
            {
                "id": "D691",
                "customerName": "CADBURY SCHWEPPES PTY LTD (BULK CO2)",
                "customerNo": "CA261802",
                "address": "BEVERAGE DRIVE(BULK CO2),TULLAMARINE",
                "longi": 144.862300,
                "lati": -37.717800,
                "tel": "9339 6352",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 15:03AM",
                "nextDeliveryDate": "12 Sep 2016 15:03AM",
                "loa": "50.422133",
                "vdeReorder": "0.968000",
                "nod": "75",
                "tvd": "1.45078e+006",
                "capacity": "102000.00(KG)",
                "reOrderLevel": 80,
                "safetyLevel": 60,
                "criticalLevel": 10,
                "usageRate": 418.8514,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D777",
                "customerName": "DON KRC - CASTLEMAINE  -  (BULK - LIN   VIV 15,000)",
                "customerNo": "DOV06301",
                "address": "64 RICHARDS ROAD,CASTLEMAINE",
                "longi": 144.209300,
                "lati": -37.055600,
                "tel": "5479 2545",
                "email": "",
                "lastDeliveryDate": "01 Sep 2016 15:08AM",
                "nextDeliveryDate": "08 Sep 2016 15:08AM",
                "loa": "37.118823",
                "vdeReorder": "0.829411",
                "nod": "17",
                "tvd": "97141",
                "capacity": "9173.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 22.3334,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D874",
                "customerName": "THE AUSTIN & REPATRIATION MEDICAL",
                "customerNo": "HB635701",
                "address": "CENTRE - REPATRIATION CAMPUSBANKSIA STREET(BULK OXYGEN),HEIDELBERG",
                "longi": 145.059400,
                "lati": -37.757500,
                "tel": "9496 5000",
                "email": "",
                "lastDeliveryDate": "05 Sep 2016 23:40AM",
                "nextDeliveryDate": "12 Sep 2016 23:40AM",
                "loa": "51.888333",
                "vdeReorder": "0.801111",
                "nod": "18",
                "tvd": "20810",
                "capacity": "2403.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 35,
                "criticalLevel": 3,
                "usageRate": 6.1245,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LOX",
                "type": "customer"
            },
            {
                "id": "D960",
                "customerName": "MC WILLIAMS WINES (HANWOOD) PTY LTD",
                "customerNo": "MCV10001",
                "address": "JACK MC WILLIAM ROAD(BULK C02),HANWOOD",
                "longi": 146.103100,
                "lati": -34.252800,
                "tel": "02 6963 3400",
                "email": "",
                "lastDeliveryDate": "24 Aug 2016 12:05AM",
                "nextDeliveryDate": "31 Aug 2016 12:05AM",
                "loa": "35.251111",
                "vdeReorder": "1.294444",
                "nod": "9",
                "tvd": "35663",
                "capacity": "6120.00(KG)",
                "reOrderLevel": 50,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 7.2330,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1091",
                "customerName": "TALTARNI VINEYARDS (CO2 MINIBULK)",
                "customerNo": "REV61001",
                "address": "339 TALTARNI ROAD(CO2 - 240 X 1),MOONAMBEL",
                "longi": 143.260174,
                "lati": -36.969747,
                "tel": "5459 7923",
                "email": "accounts@taltarni.com.au",
                "lastDeliveryDate": "16 Aug 2016 21:19AM",
                "nextDeliveryDate": "23 Aug 2016 21:19AM",
                "loa": "35.190000",
                "vdeReorder": "1.081428",
                "nod": "7",
                "tvd": "1088.8",
                "capacity": "240.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.3971,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1109",
                "customerName": "SAIZERIYA AUSTRALIA PTY LTD",
                "customerNo": "SAV37901",
                "address": "2 - 82 SHOGAKI DRIVE(OFF FERRIS ROAD)(BULK CO2),MELTON",
                "longi": 144.580500,
                "lati": -37.683000,
                "tel": "9971 0536",
                "email": "",
                "lastDeliveryDate": "31 Aug 2016 13:41AM",
                "nextDeliveryDate": "07 Sep 2016 13:41AM",
                "loa": "31.079444",
                "vdeReorder": "1.052777",
                "nod": "18",
                "tvd": "289826",
                "capacity": "25500.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 20,
                "usageRate": 104.3957,
                "vmi": "TRUE",
                "layout": "HORIZONTAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D1228",
                "customerName": "WESTEND ESTATE PTY LTD (VESSEL NO 2) - SERIAL NO 6598",
                "customerNo": "WEV02903",
                "address": "1283 BRAYNE ROAD,GRIFFITH",
                "longi": 146.027800,
                "lati": -34.277100,
                "tel": "02 6969 0800",
                "email": "",
                "lastDeliveryDate": "13 Jul 2016 14:45:20:000",
                "nextDeliveryDate": "20 Jul 2016 14:45:20:000",
                "loa": "47.055000",
                "vdeReorder": "0.755000",
                "nod": "4",
                "tvd": "14824",
                "capacity": "7000.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 2,
                "usageRate": 5.7826,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D2832",
                "customerName": "BARTTER ENTERPRISES PTY LTD (BULK LIN)",
                "customerNo": "BBV00605",
                "address": "MURPHY ROAD (VIV10,000),HANWOOD",
                "longi": 146.041800,
                "lati": -34.341700,
                "tel": "02 4924 4350",
                "email": "",
                "lastDeliveryDate": "07 Aug 2016 11:06AM",
                "nextDeliveryDate": "14 Aug 2016 11:06AM",
                "loa": "25.563333",
                "vdeReorder": "1.005000",
                "nod": "6",
                "tvd": "34059",
                "capacity": "7626.00(M3)",
                "reOrderLevel": 26,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 16.0771,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D2946",
                "customerName": "REBELLO WINES (ALIGAL 1 BULK)",
                "customerNo": "RFV02201",
                "address": "297 DOUTHIE ROAD,SEVILLE EAST",
                "longi": 145.513300,
                "lati": -37.798000,
                "tel": "+619001 9205",
                "email": "",
                "lastDeliveryDate": "11 Aug 2016 10:50AM",
                "nextDeliveryDate": "18 Aug 2016 10:50AM",
                "loa": "50.322500",
                "vdeReorder": "0.780000",
                "nod": "4",
                "tvd": "54728",
                "capacity": "29156.00(M3)",
                "reOrderLevel": 40,
                "safetyLevel": 30,
                "criticalLevel": 3,
                "usageRate": 988.8412,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D583",
                "customerName": "ACTCO PICKERING P/L - (BULK NITRO)",
                "customerNo": "AC169002",
                "address": "28 QUALITY DRIVE(BULK NITROGEN),DANDENONG",
                "longi": 145.205500,
                "lati": -38.028300,
                "tel": "8791 7555",
                "email": "",
                "lastDeliveryDate": "04 Sep 2016 13:30AM",
                "nextDeliveryDate": "11 Sep 2016 13:30AM",
                "loa": "25.478888",
                "vdeReorder": "0.992222",
                "nod": "9",
                "tvd": "43361",
                "capacity": "6465.00(M3)",
                "reOrderLevel": 25,
                "safetyLevel": 20,
                "criticalLevel": 2,
                "usageRate": 28.2609,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LIN",
                "type": "customer"
            },
            {
                "id": "D617",
                "customerName": "YMCA ASHBURTON POOL & RECREATION CENTRE (CO2 - 500)",
                "customerNo": "AS179701",
                "address": "8 WARNER AVENUE(CO2 - 500),ASHBURTON",
                "longi": 145.085331,
                "lati": -37.866452,
                "tel": "9885 0333",
                "email": "",
                "lastDeliveryDate": "06 Sep 2016 19:22AM",
                "nextDeliveryDate": "13 Sep 2016 19:22AM",
                "loa": "37.556250",
                "vdeReorder": "1.040625",
                "nod": "16",
                "tvd": "9991",
                "capacity": "1000.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 20,
                "criticalLevel": 3,
                "usageRate": 1.3990,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D651",
                "customerName": "BAILEYS OF GLENROWAN  (CO2 MBK)",
                "customerNo": "BBV40401",
                "address": "TAMINICK GAP ROAD(CO2 - 240),GLENROWAN",
                "longi": 146.192600,
                "lati": -36.415900,
                "tel": "5766 1600",
                "email": "",
                "lastDeliveryDate": "17 Aug 2016 11:50AM",
                "nextDeliveryDate": "24 Aug 2016 11:50AM",
                "loa": "25.115555",
                "vdeReorder": "1.247777",
                "nod": "9",
                "tvd": "3235",
                "capacity": "480.00(KG)",
                "reOrderLevel": 40,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 1.0027,
                "vmi": "FALSE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            },
            {
                "id": "D698",
                "customerName": "CAROL S COUNTRY KITCHEN",
                "customerNo": "CA889101",
                "address": "13 GARFIELD STREET(CO2 - 300),RICHMOND",
                "longi": 144.992613,
                "lati": -37.811666,
                "tel": "9429 6822",
                "email": "",
                "lastDeliveryDate": "29 Jul 2016 13:35AM",
                "nextDeliveryDate": "05 Aug 2016 13:35AM",
                "loa": "45.000000",
                "vdeReorder": "0.785000",
                "nod": "2",
                "tvd": "330",
                "capacity": "300.00(KG)",
                "reOrderLevel": 30,
                "safetyLevel": 15,
                "criticalLevel": 3,
                "usageRate": 0.0652,
                "vmi": "TRUE",
                "layout": "VERTICAL",
                "product": "LCO2",
                "type": "customer"
            }
        ];

        $scope.depots = [
            {
                "id": "A5",
                "customerName": "ALA NSW BOTANY ASU",
                "customerNo": "AI571503",
                "address": "21 BAKER STREET,BOTANY",
                "longi": 151.217400,
                "lati": -33.945800,
                "tel": "+61293167920",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [3, 1, 1, 0]
                    },
                    {
                        "name": "Total Trips",
                        "values": [563, 151, 1, 12]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [845, 246, 1, 51]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["11920024(M3)", "2073321(M3)", "1(M3)", "261382(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [169, 7, 0, 0]
                    },
                    {
                        "name": "KM/TON",
                        "values": [23, 15, 44378, 12]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["26%", "32%", "0%", "27%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "85%", "0%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [34, 7, 1, 8]
                    }
                ]
            },
            {
                "id": "A6",
                "customerName": "ALA NSW KOORAGANG ISLAND CO2 V1",
                "customerNo": "AIN11901",
                "address": "C - INCITEC15 GREENLEAF ROAD,KOORAGANG ISLAND",
                "longi": 151.779200,
                "lati": -32.893800,
                "tel": "+61249201066",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [0, 0, 0, 2]
                    },
                    {
                        "name": "Total Trips",
                        "values": [14, 0, 0, 475]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [15, 0, 0, 718]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["216779(M3)", "0(M3)", "0(M3)", "9833457(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [6, 0, 0, 71]
                    },
                    {
                        "name": "KM/TON",
                        "values": [19, 0, 0, 22]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["29%", "0%", "0%", "20%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["90%", "0%", "0%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [0, 0, 0, 49]
                    }
                ]
            },
            {
                "id": "A7",
                "customerName": "ALA NSW FAIRFIELD 200TN CO2 STORAGE",
                "customerNo": "AIN41201",
                "address": "43 - 47 PINE ROAD,FAIRFIELD",
                "longi": 150.951100,
                "lati": -33.868900,
                "tel": "02 9892 9777",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [1, 2, 2, 6]
                    },
                    {
                        "name": "Total Trips",
                        "values": [296, 391, 80, 1021]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [405, 654, 160, 2117]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["4789558(M3)", "5019061(M3)", "950194(M3)", "15118611(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [68, 23, 2, 138]
                    },
                    {
                        "name": "KM/TON",
                        "values": [14, 17, 44, 25]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["24%", "32%", "27%", "24%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["91%", "83%", "88%", "89%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [36, 20, 1, 224]
                    }
                ]
            },
            {
                "id": "A12",
                "customerName": "ALA VIC ALTONA ASU",
                "customerNo": "99999945",
                "address": "631 KOROROIT CREEK ROAD,ALTONA",
                "longi": 144.792700,
                "lati": -37.845300,
                "tel": "",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [3, 4, 3, 17]
                    },
                    {
                        "name": "Total Trips",
                        "values": [822, 744, 186, 1544]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [2183, 1271, 238, 3540]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["16658958(M3)", "8310482(M3)", "1056783(M3)", "23245498(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [117, 114, 26, 181]
                    },
                    {
                        "name": "KM/TON",
                        "values": [10, 28, 6, 24]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["21%", "30%", "27%", "22%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "68%", "57%", "82%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [96, 60, 7, 396]
                    }
                ]
            },
            {
                "id": "A22",
                "customerName": "ALA SA ELIZABETH",
                "customerNo": "ELS00700",
                "address": "164 PHILIP HIGHWAY,ELIZABETH SA",
                "longi": 138.665400,
                "lati": -34.727700,
                "tel": "",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [4, 0, 0, 23]
                    },
                    {
                        "name": "Total Trips",
                        "values": [267, 57, 33, 872]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [505, 57, 93, 2734]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["2685451(M3)", "468847(M3)", "277142(M3)", "21135994(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [3, 8, 2, 85]
                    },
                    {
                        "name": "KM/TON",
                        "values": [63, 79, 68, 44]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["20%", "15%", "31%", "21%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["80%", "67%", "86%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [69, 10, 3, 354]
                    }
                ]
            },
            {
                "id": "A29",
                "customerName": "ALA QLD WACOL",
                "customerNo": "AMQ07000",
                "address": "759 PROGRESS ROAD,WACOL",
                "longi": 152.928900,
                "lati": -27.589500,
                "tel": "3246 6363",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [3, 4, 4, 13]
                    },
                    {
                        "name": "Total Trips",
                        "values": [150, 143, 48, 1792]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [510, 519, 51, 4854]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["3045101(M3)", "3339159(M3)", "378540(M3)", "35152393(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 1, 21, 152]
                    },
                    {
                        "name": "KM/TON",
                        "values": [56, 53, 12, 33]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["25%", "29%", "21%", "24%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "100%", "72%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [25, 24, 5, 578]
                    }
                ]
            },
            {
                "id": "A31",
                "customerName": "ALA QLD TOWNSVILLE",
                "customerNo": "AMQ07002",
                "address": "44-46 TOLL ST,BOHLE",
                "longi": 146.739000,
                "lati": -19.254300,
                "tel": "4774 8276",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [0, 0, 0, 2]
                    },
                    {
                        "name": "Total Trips",
                        "values": [0, 0, 0, 10]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [0, 0, 0, 18]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["0(M3)", "0(M3)", "0(M3)", "159412(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 0, 0, 7]
                    },
                    {
                        "name": "KM/TON",
                        "values": [0, 0, 0, 9]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["0%", "0%", "0%", "34%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["0%", "0%", "0%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [0, 0, 0, 0]
                    }
                ]
            },
            {
                "id": "A71",
                "customerName": "ALA WA KWINANA ASU LAR",
                "customerNo": "AL000201",
                "address": "MASON ROAD,KWINANA BEACH",
                "longi": 115.777500,
                "lati": -32.217900,
                "tel": "",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [18, 11, 6, 0]
                    },
                    {
                        "name": "Total Trips",
                        "values": [252, 256, 250, 0]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [608, 459, 453, 0]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["1771729(M3)", "2870638(M3)", "1083425(M3)", "0(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 25, 10, 0]
                    },
                    {
                        "name": "KM/TON",
                        "values": [30, 151, 9, 0]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["22%", "21%", "24%", "0%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["61%", "87%", "79%", "0%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [62, 32, 69, 0]
                    }
                ]
            },
            {
                "id": "A72",
                "customerName": "ALA WA KWINANA CSBP CO2",
                "customerNo": "AL000301",
                "address": "KWINANA BEACH ROAD,KWINANA BEACH",
                "longi": 115.775200,
                "lati": -32.236800,
                "tel": "",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [0, 0, 0, 23]
                    },
                    {
                        "name": "Total Trips",
                        "values": [0, 0, 0, 840]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [0, 0, 0, 1239]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["0(M3)", "0(M3)", "0(M3)", "13745331(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 0, 0, 303]
                    },
                    {
                        "name": "KM/TON",
                        "values": [0, 0, 0, 9]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["0%", "0%", "0%", "23%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["0%", "0%", "0%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [0, 0, 0, 101]
                    }
                ]
            },
            {
                "id": "A1033",
                "customerName": "ALA NSW BERESFIELD",
                "customerNo": "AIN11903",
                "address": "4 KULLARA CLOSE,BERESFIELD",
                "longi": 151.631900,
                "lati": -32.812600,
                "tel": "",
                "email": "",
                "product": "9999",
                "type": "depot",
                "table": [
                    {
                        "name": "Total Trailers",
                        "values": [1, 0, 1, 0]
                    },
                    {
                        "name": "Total Trips",
                        "values": [250, 66, 0, 0]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [314, 72, 0, 0]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["4296883(M3)", "1074430(M3)", "0(M3)", "0(KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [56, 3, 0, 0]
                    },
                    {
                        "name": "KM/TON",
                        "values": [17, 18, 0, 0]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["28%", "32%", "0%", "0%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["99%", "95%", "0%", "0%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [6, 2, 0, 0]
                    }
                ]
            }
        ];

        $scope.comp = [
            {
                "id": "CD1",
                "customerName": "BOC ASU-LOX",
                "customerNo": "BOCXXXXX",
                "address": "351 Hammond Road, Dandenong 3175",
                "longi": 145.20599,
                "lati": -38.017554,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "product": "LOX",
                "type": "comp"
            },
            {
                "id": "CD2",
                "customerName": "BOC ASU-LIN",
                "customerNo": "BOCXXXXX",
                "address": "351 Hammond Road, Dandenong 3175",
                "longi": 145.20599,
                "lati": -38.017554,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "product": "LIN",
                "type": "comp"
            },
            {
                "id": "CD3",
                "customerName": "BOC ASU-LAR",
                "customerNo": "BOCXXXXX",
                "address": "351 Hammond Road, Dandenong 3175",
                "longi": 145.20599,
                "lati": -38.017554,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "product": "LAR",
                "type": "comp"
            },
            {
                "id": "CD4",
                "customerName": "BOC CO2-LCO2",
                "customerNo": "BOCXXXXX",
                "address": "Callaghans Road, Nirranda South 3268",
                "longi": 142.814401,
                "lati": -38.521459,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "product": "LCO2",
                "type": "comp"
            }
        ];
        $scope.comp_cust = [
            {
                "id": "1",
                "customerName": "Eastern Treatment Plant",
                "product": "9999",
                "address": "Alan Bird Dr, Bangholme  3175",
                "longi": 145.174189,
                "lati": -38.066191,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust",
            },
            {
                "id": "2",
                "customerName": "Coliban Water Treatment Facility",
                "product": "9999",
                "address": "Burnside Rd, Epsom 3551",
                "longi": 144.293925,
                "lati": -36.701026,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "3",
                "customerName": "Toyoya Motor Corporation",
                "product": "9999",
                "address": "155 Bertie St, Port Melbourne  3207",
                "longi": 144.934729,
                "lati": 37.826727,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "4",
                "customerName": "BAE Systems",
                "product": "9999",
                "address": "Nelson Pl, Williamstown 3016",
                "longi": 144.905413,
                "lati": 37.863405,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "5",
                "customerName": "Hilton Food Group",
                "product": "9999",
                "address": "441 Doherty Road, Truganina 3029",
                "longi": 144.758738,
                "lati": 37.825998,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "16",
                "customerName": "Lyondellbasell",
                "product": "9999",
                "address": "Refinery Road Corio 3124",
                "longi": 144.373943,
                "lati": 38.075997,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "17",
                "customerName": "General Mills Australia",
                "product": "9999",
                "address": "4 Ricketts Rd, Mount Waverley 3149",
                "longi": 145.131757,
                "lati": 37.894723,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "18",
                "customerName": "Heidelberg General Engineering",
                "product": "9999",
                "address": "25/27 Commercial Dr, Thomastown 3074",
                "longi": 145.041447,
                "lati": 37.692388,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "19",
                "customerName": "WIGLEY ENGINEERING",
                "product": "9999",
                "address": "16 Zenith Rd, Dandenong South 3175",
                "longi": 145.221993,
                "lati": 38.020359,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "20",
                "customerName": "PRONTO E FRESCO",
                "product": "9999",
                "address": "91-93 Riggall Street, Broadmeadows 3047",
                "longi": 144.925793,
                "lati": 37.676994,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "21",
                "customerName": "METALSA",
                "product": "9999",
                "address": "5 Elma Road Cheltenham, 319",
                "longi": 145.072374,
                "lati": 37.951739,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "22",
                "customerName": "BAR CRUSHER",
                "product": "9999",
                "address": "5 Quality Dr, Dandenong South 3175",
                "longi": 145.210056,
                "lati": 38.026433,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "23",
                "customerName": "Krueger Transport",
                "product": "9999",
                "address": "391 boundary Road, Truganina 3029",
                "longi": 144.762072,
                "lati": 37.811856,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "24",
                "customerName": "Olex Cable",
                "product": "9999",
                "address": "207 Sunshine Rd., Tottenham 3012",
                "longi": 144.855411,
                "lati": 37.798957,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "25",
                "customerName": "BARKER TRAILERS PTY LTD",
                "product": "9999",
                "address": "144 Clancys Ln, Woodend 3442",
                "longi": 144.540327,
                "lati": 37.32357,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "26",
                "customerName": "DIAMOND VALLEY PORK",
                "product": "9999",
                "address": "13-15 Thomas Rd, Laverton North 3026",
                "longi": 144.80547,
                "lati": 37.820945,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "27",
                "customerName": "FARM FOODS RETAIL SERVICES",
                "product": "9999",
                "address": "60 Leather Street, Breakwater 3219",
                "longi": 144.378556,
                "lati": 38.186265,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "28",
                "customerName": "Aquanation",
                "product": "9999",
                "address": "Reilly St & Greenwood Ave, Ringwood 3134",
                "longi": 145.230338,
                "lati": 37.826374,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "29",
                "customerName": "BELGRAVIA LEISURE - WATERMARC",
                "product": "9999",
                "address": "1 Flintoff St, Greensborough 3088",
                "longi": 145.105032,
                "lati": 37.704182,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            },
            {
                "id": "30",
                "customerName": "LONGWARRY FOOD PARK",
                "product": "9999",
                "address": "31-41 Mackay St, Longwarry 3816",
                "longi": 145.773349,
                "lati": 38.112365,
                "tel": "xxxxxx888",
                "email": "info@boc.com",
                "type": "comp_cust"
            }
        ];

        $scope.regions = [
            {
                "id": "NSW",
                "product": "9999",
                "type": "region",
                "table": [
                    {
                        "name": "Total Customers",
                        "values": [65, 64, 18, 272]
                    },
                    {
                        "name": "Total Sources",
                        "values": [8, 6, 6, 8]
                    },
                    {
                        "name": "Total Trailers",
                        "values": [5, 3, 4, 8]
                    },
                    {
                        "name": "Total Trips",
                        "values": [1123, 608, 81, 1508]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [1579, 972, 161, 2886]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["21,223K (M3)", "8,166K (M3)", "950K (M3)", "25,213K (KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [299, 33, 2, 209]
                    },
                    {
                        "name": "KM/TON",
                        "values": [20, 17, 44, 23]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["26%", "32%", "27%", "23%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "85%", "87%", "95%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [76, 29, 2, 281]
                    }
                ]
            },
            {
                "id": "QLD",
                "product": "9999",
                "type": "region",
                "table": [
                    {
                        "name": "Total Customers",
                        "values": [39, 39, 11, 234]
                    },
                    {
                        "name": "Total Sources",
                        "values": [6, 6, 4, 12]
                    },
                    {
                        "name": "Total Trailers",
                        "values": [3, 4, 4, 15]
                    },
                    {
                        "name": "Total Trips",
                        "values": [150, 143, 48, 1802]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [510, 519, 51, 4872]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["3,045K (M3)", "3,339K (M3)", "378K (M3)", "35,311K (KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 1, 21, 159]
                    },
                    {
                        "name": "KM/TON",
                        "values": [56, 53, 12, 33]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["25%", "29%", "21%", "24%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "100%", "72%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [25, 24, 5, 578]
                    }
                ]
            },
            {
                "id": "SA",
                "product": "9999",
                "type": "region",
                "table": [
                    {
                        "name": "Total Customers",
                        "values": [44, 8, 9, 217]
                    },
                    {
                        "name": "Total Sources",
                        "values": [3, 4, 3, 9]
                    },
                    {
                        "name": "Total Trailers",
                        "values": [4, 0, 0, 23]
                    },
                    {
                        "name": "Total Trips",
                        "values": [267, 57, 33, 872]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [505, 57, 93, 2734]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["2,685K (M3)", "468K(M3)", "277K (M3)", "21,135K (KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [3, 8, 2, 85]
                    },
                    {
                        "name": "KM/TON",
                        "values": [63, 79, 68, 44]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["20%", "15%", "31%", "21%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["80%", "67%", "86%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [69, 10, 3, 354]
                    }
                ]
            },
            {
                "id": "VIC",
                "product": "9999",
                "type": "region",
                "table": [
                    {
                        "name": "Total Customers",
                        "values": [122, 96, 22, 386]
                    },
                    {
                        "name": "Total Sources",
                        "values": [4, 1, 3, 11]
                    },
                    {
                        "name": "Total Trailers",
                        "values": [3, 4, 3, 18]
                    },
                    {
                        "name": "Total Trips",
                        "values": [823, 744, 186, 1585]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [2183, 1271, 238, 3779]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["16,658K (M3)", "8,310K (M3)", "1,056K (M3)", "23,365K (KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [117, 114, 26, 181]
                    },
                    {
                        "name": "KM/TON",
                        "values": [10, 28, 6, 81]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["21%", "30%", "27%", "22%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["100%", "68%", "57%", "81%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [96, 60, 7, 432]
                    }
                ]
            },
            {
                "id": "WA",
                "product": "9999",
                "type": "region",
                "table": [
                    {
                        "name": "Total Customers",
                        "values": [60, 52, 39, 76]
                    },
                    {
                        "name": "Total Sources",
                        "values": [1, 3, 2, 2]
                    },
                    {
                        "name": "Total Trailers",
                        "values": [19, 11, 6, 23]
                    },
                    {
                        "name": "Total Trips",
                        "values": [252, 256, 250, 840]
                    },
                    {
                        "name": "Total Deliveries",
                        "values": [608, 459, 453, 1239]
                    },
                    {
                        "name": "Total Volume Delivered",
                        "values": ["1,771K (M3)", "2,870K (M3)", "1,083K (M3)", "13,745K (KG)"]
                    },
                    {
                        "name": "Full Drops",
                        "values": [0, 25, 10, 303]
                    },
                    {
                        "name": "KM/TON",
                        "values": [30, 151, 9, 9]
                    },
                    {
                        "name": "LOA (YTD)",
                        "values": ["22%", "21%", "24%", "23%"]
                    },
                    {
                        "name": "Vehicle Fill Ratio",
                        "values": ["61%", "87%", "79%", "100%"]
                    },
                    {
                        "name": "Stock Outs",
                        "values": [62, 32, 69, 101]
                    }
                ]
            }
        ];


        $scope.selectionRegion = null;

        $scope.selectRegion = function (region) {
            angular.forEach($scope.regions, function (value) {
                if (value.id === region) {
                    $scope.selectionRegion = value;
                    console.log('selected region', $scope.selectionRegion);
                    return;
                }
            });
        };


        $scope.slider_ticks = {
            value: 1,
            options: {
                ceil: 500,
                floor: 1,
                step: 1,
                showTicks: false,
                enforceStep: false,
                translate: function(value) {
                    return value + "KM";
                }
            }
        };

        $scope.showPanel = false;

        $scope.centerMap = {
            latitude: -45.583290,
            longitude: 79.453125,
            zoom: 9
        };

        $scope.mapImageVisible = true;

        $scope.setAusMap = function() {
            if ($scope.mapImageVisible) {
                $scope.map.center.latitude = -26.115986;
                $scope.map.center.longitude = 132.539063;
                $scope.map.zoom = 5;
                $scope.mapImageVisible = false;
            }
        };

        $scope.showHideSummary = function() {
            if ($scope.mapImageVisible) {
                $scope.map.center.latitude = -26.115986;
                $scope.map.center.longitude = 132.539063;
                $scope.map.zoom = 5;
                $scope.mapImageVisible = false;
            } else {
                $scope.map.center.latitude = -45.583290;
                $scope.map.center.longitude = 79.453125;
                $scope.map.zoom = 9;
                $scope.mapImageVisible = true;
            }
        };

        var myStyle = [
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];

        $scope.map = {
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ],
            center: { latitude: $scope.centerMap.latitude, longitude: $scope.centerMap.longitude },
            zoom: $scope.centerMap.zoom,
            events: {
                tilesloaded: function(map, eventName, originalEventArgs) {
                    //map is trueley ready then this callback is hit
                },
                click: function(mapModel, eventName, originalEventArgs) {


                    if (!$scope.mapImageVisible) {
                        var e = originalEventArgs[0];
                        var lat = e.latLng.lat(), lon = e.latLng.lng();
                        $scope.circle.center.latitude = lat;
                        $scope.circle.center.longitude = lon;
                        console.log("circle valies", $scope.circle);
                        $scope.circle.visible = true;
                    }

                    $scope.setAusMap();
                    $scope.$apply();
                }
            }
        };

        $scope.polygons = [
            {
                id: 1,
                path: [
                    { latitude: -29.075375, longitude: 140.888672 },
                    { latitude: -38.065392, longitude: 140.976563 },
                    { latitude: -38.479395, longitude: 142.910156 },
                    { latitude: -38.479395, longitude: 144.843750 },
                    { latitude: -38.341656, longitude: 146.601563 },
                    { latitude: -38.065392, longitude: 147.128906 },
                    { latitude: -37.788081, longitude: 148.271484 },
                    { latitude: -37.579413, longitude: 149.501953 },
                    { latitude: -33.284620, longitude: 151.611328 },
                    { latitude: -31.877558, longitude: 152.226563 },
                    { latitude: -30.977609, longitude: 153.017578 },
                    { latitude: -29.458731, longitude: 153.457031 },
                    { latitude: -28.459033, longitude: 153.720703 }
                ],
                stroke: {
                    color: "#E74C3C",
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: "#E74C3C",
                    opacity: 0.9
                }
            },
            {
                id: 2,
                path: [
                    { latitude: -16.551962, longitude: 137.988281 },
                    { latitude: -16.383391, longitude: 137.812500 },
                    { latitude: -25.799891, longitude: 138.076172 },
                    { latitude: -25.878994, longitude: 140.888672 },
                    { latitude: -28.767659, longitude: 140.976563 },
                    { latitude: -28.921631, longitude: 148.886719 },
                    { latitude: -28.381735, longitude: 149.501953 },
                    { latitude: -28.459033, longitude: 150.292969 },
                    { latitude: -28.690588, longitude: 151.171875 },
                    { latitude: -28.844674, longitude: 151.875000 },
                    { latitude: -28.149503, longitude: 152.138672 },
                    { latitude: -28.071980, longitude: 152.578125 },
                    { latitude: -28.226970, longitude: 153.369141 },
                    { latitude: -27.449790, longitude: 153.193359 },
                    { latitude: -25.799891, longitude: 152.841797 },
                    { latitude: -24.607069, longitude: 152.138672 },
                    { latitude: -22.998852, longitude: 150.556641 },
                    { latitude: -21.943046, longitude: 149.326172 },
                    { latitude: -20.468189, longitude: 148.535156 },
                    { latitude: -19.973349, longitude: 148.271484 },
                    { latitude: -18.895893, longitude: 146.425781 },
                    { latitude: -18.062312, longitude: 145.986328 },
                    { latitude: -16.888660, longitude: 145.722656 },
                    { latitude: -15.961329, longitude: 145.283203 },
                    { latitude: -15.114553, longitude: 145.019531 },
                    { latitude: -14.264383, longitude: 143.876953 },
                    { latitude: -12.983148, longitude: 143.173828 },
                    { latitude: -11.609193, longitude: 142.646484 },
                    { latitude: -10.746969, longitude: 142.119141 }
                ],
                stroke: {
                    color: "#27AE60",
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: "#27AE60",
                    opacity: 0.9
                }
            },
            {
                id: 3,
                path: [
                    { latitude: -37.996163, longitude: 140.976563 },
                    { latitude: -25.958045, longitude: 140.800781 },
                    { latitude: -25.958045, longitude: 128.935547 },
                    { latitude: -31.653381, longitude: 128.847656 }
                ],
                stroke: {
                    color: "#8E44AD",
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: "#8E44AD",
                    opacity: 0.9
                }
            },
            {
                id: 4,
                path: [
                    { latitude: -31.428663, longitude: 129.023438 },
                    { latitude: -32.249974, longitude: 125.771484 },
                    { latitude: -32.768800, longitude: 124.365234 },
                    { latitude: -33.651208, longitude: 123.925781 },
                    { latitude: -33.724340, longitude: 123.574219 },
                    { latitude: -33.724340, longitude: 122.255859 },
                    { latitude: -33.943360, longitude: 120.410156 },
                    { latitude: -34.741612, longitude: 118.740234 },
                    { latitude: -35.029996, longitude: 116.455078 },
                    { latitude: -34.307144, longitude: 115.576172 },
                    { latitude: -33.504759, longitude: 115.488281 },
                    { latitude: -32.546813, longitude: 115.488281 },
                    { latitude: -31.278551, longitude: 115.136719 },
                    { latitude: -29.305561, longitude: 114.521484 },
                    { latitude: -27.293689, longitude: 113.730469 },
                    { latitude: -25.244696, longitude: 113.291016 },
                    { latitude: -23.160563, longitude: 113.906250 },
                    { latitude: -22.024546, longitude: 114.257813 },
                    { latitude: -21.207459, longitude: 115.751953 },
                    { latitude: -20.550509, longitude: 117.070313 },
                    { latitude: -19.725342, longitude: 120.849609 },
                    { latitude: -19.311143, longitude: 121.640625 },
                    { latitude: -17.392579, longitude: 122.695313 },
                    { latitude: -15.453680, longitude: 124.628906 },
                    { latitude: -14.349548, longitude: 126.210938 },
                    { latitude: -14.093957, longitude: 127.001953 },
                    { latitude: -14.689881, longitude: 128.056641 },
                    { latitude: -14.944785, longitude: 128.935547 }
                ],
                stroke: {
                    color: "#2980B9",
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: "#2980B9",
                    opacity: 0.9
                }
            },
            {
                id: 5,
                path: [
                    { latitude: -25.720735, longitude: 129.199219 },
                    { latitude: -25.958045, longitude: 137.812500 },
                    { latitude: -16.636192, longitude: 137.900391 },
                    { latitude: -14.774883, longitude: 135.351563 },
                    { latitude: -12.468760, longitude: 136.406250 },
                    { latitude: -12.125264, longitude: 134.296875 },
                    { latitude: -11.867351, longitude: 132.363281 },
                    { latitude: -12.297068, longitude: 130.781250 },
                    { latitude: -13.410994, longitude: 129.902344 },
                    {
                        latitude: -14.859850,
                        longitude:
                            129.02343
                    }
                ],
                stroke: {
                    color: "#ffb92d",
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: "#ffb92d",
                    opacity: 0.9
                }
            }
        ];

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
            angular.forEach(list, function(value) {
                var _pCord = new google.maps.LatLng(value.lati, value.longi);
                var distance = google.maps.geometry.spherical.computeDistanceBetween(_kCord, _pCord) / 1000;
                if (distance < $scope.circle.radius) {
                    $scope.markers.push($scope.createMarker(value.lati, value.longi, value));
                }
            });
        };
        $scope.nearestCustomer = {
            id: "",
            distance: 0,
            obj: null
        };

        $scope.nearestCustomers = [];

        $scope.hideNearbyInfo = function() {
            $scope.showNearbyPanel = false;
            directionsRenderer.set("directions", null);

        };

        $scope.findNearestCompCust = function(lat, lon) {
            var _kCord = new google.maps.LatLng(lat, lon);
            $scope.nearestCustomers = [];

            angular.forEach($scope.comp_cust, function(value) {
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
                    longi: lon
                }, {
                    lati: closest.obj.lati,
                    longi: closest.obj.longi
                });

                $scope.showNearbyPanel = true;

                console.log("nearest customers", $scope.nearestCustomers);
            });
        };

        $scope.findMarkers = function() {
            if (!$scope.find.depot &&
                    !$scope.find.customer &&
                    !$scope.find.source &&
                    !$scope.find.com &&
                    !$scope.find.com_cust
            ) {
                alert("Please select to find nearby.");
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

        $scope.addProductPins = function (product) {
            $scope.markers = [];
            $scope.filter.customer = false;
            $scope.filter.depot = false;
            $scope.filter.source = false;

            if (product === 'LIN') {
                $scope.filter.lox = false;
                $scope.filter.lar = false;
                $scope.filter.co2 = false;
            } else if (product === 'LOX') {
                $scope.filter.lin = false;
                $scope.filter.lar = false;
                $scope.filter.co2 = false;
            }
            else if (product === 'LAR') {
                $scope.filter.lin = false;
                $scope.filter.lox = false;
                $scope.filter.co2 = false;
            } else if (product === 'LCO2') {
                $scope.filter.lin = false;
                $scope.filter.lar = false;
                $scope.filter.lox = false;
            }

            var markers = $scope.customers.filter(function (x) { return x.product === product });
            console.log('markers selected', markers);
            angular.forEach(markers, function(value, key) {
                var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                $scope.markers.push(marker);
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

        $scope.filterProducts = function(product) {
            //var markers = $scope.markers.filter(function(x) { return x.data.product !== product });
            //$scope.markers = [];
            //console.log("pending", markers);
            //angular.forEach(markers, function(value, key) {
            //    var marker = $scope.createMarker(value.coords.latitude, value.coords.longitude, value.data, 3);
            //    $scope.markers.push(marker);
            //});
        };

        $scope.clearProducts = function() {
            //$scope.filter.lin = false;
            //$scope.filter.lox = false;
            //$scope.filter.lar = false;
            //$scope.filter.co2 = false;
        };


        $scope.markCustomers = function () {
            
            if ($scope.filter.customer) {
                $scope.clearProducts();
                angular.forEach($scope.customers, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("customer");
            }
        };

        $scope.markDepots = function () {
            if ($scope.filter.depot) {
                $scope.clearProducts();
                angular.forEach($scope.depots, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("depot");
            }
        };

        $scope.markSources = function () {
            if ($scope.filter.source) {
                $scope.clearProducts();
                angular.forEach($scope.sources, function (value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                $scope.removeMark("source");
            }
        };


        //$scope.$watch("filter.customer", function(newValue, oldValue) {
        //    console.log("filter.customer", $scope.customers);
        //    if (newValue) {
        //        angular.forEach($scope.customers, function(value, key) {
        //            var marker = $scope.createMarker(value.lati, value.longi, value, 3);
        //            $scope.markers.push(marker);
        //        });
        //    } else {
        //        $scope.removeMark("customer");
        //    }
        //});

        //$scope.$watch("filter.depot", function(newValue, oldValue) {
        //    console.log("filter.depot", newValue);
        //    if (newValue) {
        //        angular.forEach($scope.depots, function(value, key) {
        //            var marker = $scope.createMarker(value.lati, value.longi, value, 3);
        //            $scope.markers.push(marker);
        //        });
        //    } else {
        //        //$scope.removeMark("depot");
        //    }
        //});

        $scope.$watch("filter.source", function(newValue, oldValue) {
            console.log("filter.source", newValue);
            if (newValue) {
                angular.forEach($scope.sources, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                //$scope.removeMark("source");
            }
        });

        $scope.$watch("filter.comp", function(newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                angular.forEach($scope.comp, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                //$scope.removeMark("comp");
            }
        });

        $scope.$watch("filter.comp_cust", function(newValue, oldValue) {
            if (newValue) {
                angular.forEach($scope.comp_cust, function(value, key) {
                    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                    $scope.markers.push(marker);
                });
            } else {
                //$scope.removeMark("comp_cust");
            }
        });

        $scope.$watch("filter.lin", function(newValue, oldValue) {
            if (newValue) {
                $scope.addProductPins("LIN");
                //angular.forEach($scope.comp_cust, function(value, key) {
                //    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                //    $scope.markers.push(marker);
                //});
            } else {
                //$scope.filterProducts("LIN");
            }
        });

        $scope.$watch("filter.lox", function(newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                $scope.addProductPins("LOX");
                //angular.forEach($scope.comp_cust, function(value, key) {
                //    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                //    $scope.markers.push(marker);
                //});
            } else {
                //$scope.filterProducts("LOX");
            }
        });

        $scope.$watch("filter.lar", function(newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                $scope.addProductPins("LAR");
                //angular.forEach($scope.comp_cust, function(value, key) {
                //    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                //    $scope.markers.push(marker);
                //});
            } else {
                //$scope.filterProducts("LAR");
            }
        });

        $scope.$watch("filter.co2", function(newValue, oldValue) {
            console.log("filter.comp", newValue);
            if (newValue) {
                $scope.addProductPins("LCO2");
                //angular.forEach($scope.comp_cust, function(value, key) {
                //    var marker = $scope.createMarker(value.lati, value.longi, value, 3);
                //    $scope.markers.push(marker);
                //});
            } else {
                //$scope.filterProducts("LCO2");
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
                url: "/images/icon-" + data.type + "-" + data.product + ".png", // url
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
                    icon: icon
                    //animation: google.maps.Animation.DROP
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

        $scope.loadCustomers = function() {
            console.log("customer data");
            $http.get("data/customers.json").then(function(response) {
                $scope.customers = response.data;
            });
        };

        $scope.loadDepot = function() {
            $http.get("data/depot.json").then(function(response) {
                $scope.depots = response.data;
            });
        };

        $scope.loadSources = function() {
            $http.get("data/source.json").then(function(response) {
                $scope.sources = response.data;
            });
        };

        $scope.loadComp = function() {
            $http.get("data/comp.json").then(function(response) {
                $scope.comp = response.data;
            });
        };

        $scope.loadCompCust = function() {
            $http.get("data/comp_cust.json").then(function(response) {
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

            //$scope.loadCustomers();
            //$scope.loadDepot();
            //$scope.loadSources();
            //$scope.loadComp();
            //$scope.loadCompCust();
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