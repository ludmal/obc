﻿
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
                customerName: "SUPAGAS PTY LTD (PICK CO2 ONLY)",
                customerNo: "SU114504",
                address: "14 COMMERCIAL DRIVE,DANDENONG SOUTH",
                longi: 145.228685,
                lati: -38.026143,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LAR - HOLBROOK/TARCUTTA",
                customerNo: "99999947",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.735000,
                lati: -35.278400,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOC BOGGY CREEK",
                customerNo: "99999931",
                address: "BOC BOGGY CREEK,BOGGY CREEK",
                longi: 144.963900,
                lati: -37.815200,
                tel: "5566 5340",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999944",
                address: "631 KORORIT CREEK ROAD,ALTONA",
                longi: 144.792687,
                lati: -37.845276,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC SUNSHINE 50TN V2 DI PLANT",
                customerNo: "00001309",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999943",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC SUNSHINE 50TN V1 DI PLANT",
                customerNo: "00001308",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999941",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.304554,
                lati: -35.737367,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC ALTONA ASU",
                customerNo: "99999945",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (S01)",
                customerNo: "99999953",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL CO2 - FULL",
                customerNo: "99999960",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 145.079500,
                lati: -37.878600,
                tel: "255 2288",
                email: "info@airliquide.com"
            },
            {
                customerName: "EMPTY LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999967",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.715300,
                lati: -35.288500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL - LIN COLLECT EMPTY",
                customerNo: "99999969",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 142.428610,
                lati: -36.859705,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL - LIN COLLECT FULL",
                customerNo: "99999970",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 148.974200,
                lati: -21.230900,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL CO2 - EMPTY",
                customerNo: "99999973",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 145.079500,
                lati: -37.878600,
                tel: "255 2288",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALWA - LAR EX WA",
                customerNo: "99999977",
                address: "LAR PICK UP,WA",
                longi: 147.735000,
                lati: -35.278400,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALWA - LAR PICK UP",
                customerNo: "99999978",
                address: "WA,PERTH",
                longi: 0.000000,
                lati: 0.000000,
                tel: "255 2288",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999941",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.304554,
                lati: -35.737367,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC LANG LANG CO2 ANALYSER",
                customerNo: "99999979",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "",
                email: "info@airliquide.com"
            }
        ];

        $scope.dps = [
            {
                customerName: "MARYBOROUGH SPORTS & FITNESS CENTRE (CO2 MINIBULK)",
                customerNo: "YMV01001",
                address: "40 GILLES STREET,MARYBOROUGH",
                longi: 143.743800,
                lati: -37.055200,
                tel: "5461 4300",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - MED - AUST REGEN MEDICINE INST (ARMI)",
                customerNo: "MSH02602",
                address: "BLDG 75,  15 INNOVATION WAYWELLINGTON ROAD (MINI BULK CO2),Clayton",
                longi: 145.129600,
                lati: -37.912100,
                tel: "9902 9610 / 9902 0199",
                email: "info@airliquide.com"
            },
            {
                customerName: "RUTHERGLEN ESTATES (ETERNITY RUTHERGLEN)",
                customerNo: "RUV96401",
                address: "CNR MURRAY VALLEY HIGHWAY &GREAT NORTHERN ROAD,RUTHERGLEN",
                longi: 146.538906,
                lati: -36.054104,
                tel: "02 6032 8516",
                email: "info@airliquide.com"
            },
            {
                customerName: "A C LASER (BULK 6000 NI)",
                customerNo: "ACV65503",
                address: "UNIT 1 / 72 NORTHGATE DRIVE,THOMASTOWN",
                longi: 145.035734,
                lati: -37.688331,
                tel: "9465 6344",
                email: "info@airliquide.com"
            },
            {
                customerName: "METALTEX AUSTRALIA (VIV 3000) (BULK N2) ALA-6447",
                customerNo: "MEV84101",
                address: "11 - 15 MICRO CIRCUIT(BULK N2) ALA-6447,DANDENONG SOUTH",
                longi: 145.237700,
                lati: -38.023700,
                tel: "8787 8600",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - SCI - SCHOOL OF CHEMISTRY (LIN)",
                customerNo: "MSH05102",
                address: "BLDG 23, 17 RAINFOREST WALKWELLINGTON ROAD,CLAYTON",
                longi: 145.143400,
                lati: -37.916500,
                tel: "9905 4310",
                email: "info@airliquide.com"
            },
            {
                customerName: "BALLARAT AQUATIC CENTRE (CO2 MBK)",
                customerNo: "BA180901",
                address: "PRINCE OF WALES PARKGILLES STREET NORTH(CO2 - 300 X 2 & 240 X 1),BALLARAT",
                longi: 143.818500,
                lati: -37.550500,
                tel: "03 5334 2499",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - CASEY RACE (MINIBULK)",
                customerNo: "YMV01701",
                address: "65 BERWICK - CRANBOURNE ROAD(CO2 - 500X 2),CRANBOURNE EAST",
                longi: 145.296100,
                lati: -38.114600,
                tel: "5990 8628",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAULFIELD HOSPITAL",
                customerNo: "CF255603",
                address: "260-294 KOOYONG ROAD,CAULFIELD",
                longi: 145.015700,
                lati: -37.882100,
                tel: "9276 2620",
                email: "info@airliquide.com"
            },
            {
                customerName: "SIMPLOT LIN (FLEMINGTON)",
                customerNo: "SIV01702",
                address: "UNIT 2, 31-33 ASCOT VALE ROAD,FLEMINGTON",
                longi: 144.921700,
                lati: -37.784500,
                tel: "8371 5422",
                email: "info@airliquide.com"
            },
            {
                customerName: "COREGAS - EX WORKS BULK LAR",
                customerNo: "LIV01005",
                address: "C/O AIR LIQUODE ALTONA ASU631 KOROROIT CREEK RD,ALTONA",
                longi: 144.793200,
                lati: -37.845300,
                tel: "(03) 8539 1605",
                email: "info@airliquide.com"
            },
            {
                customerName: "TYCAB AUSTRALIA",
                customerNo: "TY070101",
                address: "269 DANDENONG-FRANKSTON ROAD(BULK NITROGEN),DANDENONG",
                longi: 145.213302,
                lati: -38.026226,
                tel: "8791 0300",
                email: "info@airliquide.com"
            },
            {
                customerName: "UNIDRIVE PTY.LTD.(BULK- LAR)",
                customerNo: "UNV52101",
                address: "JACK FILIPOVIC45 - 49 MCNAUGHTON ROAD(BULK ARGON),CLAYTON",
                longi: 145.137200,
                lati: -37.927500,
                tel: "9542 4100",
                email: "info@airliquide.com"
            },
            {
                customerName: "RUYTON GIRLS SCHOOL (CO2 MINIBULK)",
                customerNo: "RUV02001",
                address: "13 - 19 FITZWILLIAM STREET(CO2 - 176),KEW",
                longi: 145.039980,
                lati: -37.811361,
                tel: "9819 2422",
                email: "info@airliquide.com"
            },
            {
                customerName: "FOWLES WINE PTY LTD(WINERY - BULK CO2 )",
                customerNo: "PLV00401",
                address: "1604 UPTON ROADBOTTLING SITE(LTH 6T),AVENEL",
                longi: 145.392476,
                lati: -36.908451,
                tel: "5796 2718",
                email: "info@airliquide.com"
            },
            {
                customerName: "SNF  (AUSTRALIA)  PTY LTD  (BULK)",
                customerNo: "SNV37100",
                address: "298 BRODERICK ROAD(BULK NITROGEN),LARA",
                longi: 144.380500,
                lati: -38.048300,
                tel: "5275 9200",
                email: "info@airliquide.com"
            },
            {
                customerName: "LITTORE FAMILY WINES P/L (LTH 6000)",
                customerNo: "JIV70501",
                address: "265 BALLAN ROAD(CO2 BULK),MOORABOOL",
                longi: 144.292300,
                lati: -38.077200,
                tel: "5276 1280",
                email: "info@airliquide.com"
            },
            {
                customerName: "FERGUSONS WINERY (BULK)",
                customerNo: "FF892100",
                address: "WILLS ROAD(CO2 - 500),YARRA GLEN",
                longi: 145.404310,
                lati: -37.612389,
                tel: "5965 2237            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM CAROLINE SPRINGS ( MBK 240KG)",
                customerNo: "YMV99401",
                address: "CNR TENTERFIELD ANDLEICHHARDT AVENUE,BURNSIDE HEIGHTS",
                longi: 144.755600,
                lati: -37.735400,
                tel: "83580717",
                email: "info@airliquide.com"
            },
            {
                customerName: "MAROONDAH HOSPITAL -MAIN",
                customerNo: "MD874002",
                address: "MT DANDENONG ROAD(BULK OXYGEN),RINGWOOD",
                longi: 145.255100,
                lati: -37.806700,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "TALTARNI VINEYARDS (CO2 MINIBULK)",
                customerNo: "REV61001",
                address: "339 TALTARNI ROAD(CO2 - 240 X 1),MOONAMBEL",
                longi: 143.260174,
                lati: -36.969747,
                tel: "5459 7923",
                email: "info@airliquide.com"
            },
            {
                customerName: "VITAN NOMINEES T/AS PUOPOLO S/GOODS (BULK LIN)",
                customerNo: "VI103803",
                address: "118 - 124 FITZGERALD ROADBULK LIN,LAVERTON NORTH",
                longi: 144.787016,
                lati: -37.824930,
                tel: "9369 3977",
                email: "info@airliquide.com"
            },
            {
                customerName: "OZPACK - CO2 LTH 6 (ALA 198)",
                customerNo: "MCV41103",
                address: "GOULBURN VALLEY HIGHWAY(C02 MINIBULK),NAGAMBIE",
                longi: 145.154700,
                lati: -36.784300,
                tel: "5794 2890",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUN PHARMACEUTICAL INDUSTRIES ( AUSTRALIA) PTY LTD (LIN)",
                customerNo: "SVV02301",
                address: "199 PRINCESS HIGHWAY,PORT FAIRY",
                longi: 142.236100,
                lati: -38.366100,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ARARAT SPORTS & FITNESS CENTRE",
                customerNo: "YNV00901",
                address: "HIGH STREET(CO2 - 300),ARARAT",
                longi: 142.933400,
                lati: -37.282700,
                tel: "5461 4300",
                email: "info@airliquide.com"
            },
            {
                customerName: "CITY OF STONNINGTON C/- PRAHRAN AQUATIC CENTRE (PLV176*2)",
                customerNo: "PRV05301",
                address: "PRAHRAN AQUATIC CENTRE (PLV180*(CO2 MINIBULK) ESSEX STREET,PRAHRAN",
                longi: 144.993500,
                lati: -37.851500,
                tel: "8290 7140",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC ALTONA ASU",
                customerNo: "99999945",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORTHERN HOSPITAL - EPPING",
                customerNo: "PA116401",
                address: "COOPER STREET(BULK OXYGEN),EPPING",
                longi: 145.014338,
                lati: -37.653247,
                tel: "03 8405 8000         ",
                email: "info@airliquide.com"
            },
            {
                customerName: "GIANT STEPS WINE PTY LTD (VIV1500)",
                customerNo: "GIV48202",
                address: "CNR DON ROAD & MAROONDAH HIGHW,HEALESVILLE",
                longi: 145.522900,
                lati: -37.650900,
                tel: "5962 6111",
                email: "info@airliquide.com"
            },
            {
                customerName: "LEISURE MANAGEMENT SERVICES (MBK176 * 2)",
                customerNo: "LEV00201",
                address: "CNR MASON & MILLS STREETS,ALTONA NORTH",
                longi: 144.855981,
                lati: -37.839852,
                tel: "9392 2222",
                email: "info@airliquide.com"
            },
            {
                customerName: "SY21  OC 422665R C/O MICM PROPERTY    (CO2 MINIBULK)",
                customerNo: "PSV40401",
                address: "800 CHAPEL STREET(CO2 - 176),SOUTH YARRA",
                longi: 144.995400,
                lati: -37.840100,
                tel: "9827 8088",
                email: "info@airliquide.com"
            },
            {
                customerName: "HEIDELBERG GENERAL ENGINEERING",
                customerNo: "HH816301",
                address: "27 COMMERCIAL DRIVE(BULK OXYGEN),THOMASTOWN",
                longi: 145.041800,
                lati: -37.691700,
                tel: "9464 1088",
                email: "info@airliquide.com"
            },
            {
                customerName: "UNITED FIRE EQUIPMENT SERVICES P/L **BULK ACC**",
                customerNo: "UN167201",
                address: "ATTN JOHN BOOTH68 - 70 LEVANSWELL ROAD(CO2 MINIBULK),MOORABBIN",
                longi: 145.070845,
                lati: -37.945678,
                tel: "9553 1112",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORTHERN HOSPITAL - BACK UP VESSEL",
                customerNo: "NOV97001",
                address: "COOPER STREET(BULK OXY BACK UP VESSEL),EPPING",
                longi: 145.014253,
                lati: -37.653213,
                tel: "8405 8000",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM DERRIMUT (CO2 - M/BLK)",
                customerNo: "KJV01601",
                address: "2 MAKLAND DRIVE,DERRIMUT",
                longi: 144.775400,
                lati: -37.787600,
                tel: "8348 5504",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH PRIVATE HOSPITAL RICHMOND - BACK UP VESSEL (LOX)",
                customerNo: "00V00501",
                address: "ERIN STREETBULK OXYGEN BACK UP VESSEL,RICHMOND",
                longi: 144.998000,
                lati: -37.823000,
                tel: "+61394294811",
                email: "info@airliquide.com"
            },
            {
                customerName: "PLATE & STEEL COMPANY",
                customerNo: "PL142401",
                address: "19 CENTURY DRIVE(BULK OXYGEN),BRAESIDE",
                longi: 145.107900,
                lati: -38.002400,
                tel: "9580 0888",
                email: "info@airliquide.com"
            },
            {
                customerName: "LASER 3D (BULK NITR)",
                customerNo: "LAV84304",
                address: "2 / 1368 HEATHERTON ROAD(BULK NITROGEN),DANDENONG",
                longi: 145.199800,
                lati: -37.968500,
                tel: "8710 4100",
                email: "info@airliquide.com"
            },
            {
                customerName: "VICTORIAN ALPS WINE COMPANY  (BULK)",
                customerNo: "VJV10201",
                address: "3897 GREAT ALPINE ROAD(CO2 MINIBULK),GAPSTED",
                longi: 146.675700,
                lati: -36.507400,
                tel: "5751 1992",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORTHERN FIRE EQUIPMENT SERVICE",
                customerNo: "NOV53700",
                address: "14 DILOP DRIVE(C02 - 500),EPPING",
                longi: 145.018100,
                lati: -37.642900,
                tel: "9401 4011",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMONSTRATION ACCOUNT (NITRO)",
                customerNo: "99999906",
                address: "VARIOUS,FFFF",
                longi: 144.840700,
                lati: -37.762600,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ARROW LASER AUST (LIN)",
                customerNo: "AR967401",
                address: "24 NORTHGATE DRIVE(BULK NITROGEN),THOMASTOWN",
                longi: 145.040463,
                lati: -37.690621,
                tel: "9464 4099",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH CITY COUNCIL (MONASH POOL MBK500 * 2)",
                customerNo: "MOV99501",
                address: "626 WAVERLEY ROAD,GLEN WAVERLEY",
                longi: 145.156200,
                lati: -37.888000,
                tel: "9265 4888",
                email: "info@airliquide.com"
            },
            {
                customerName: "FRONTLINE ENGINEERING PL - ARGON BULK",
                customerNo: "FR215402",
                address: "55 LETCON DRIVE(BULK ARGON),DANDENONG SOUTH",
                longi: 145.192158,
                lati: -38.037115,
                tel: "9768 4200",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE NEW ZEALAND (EX WORKS ALTONA)",
                customerNo: "MFV03601",
                address: "PO BOX 12-846AUCKLAND 6,NEW ZEALAND",
                longi: 144.793200,
                lati: -37.845300,
                tel: "649~622~3880",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM - MORNINGTON PTY LTD",
                customerNo: "KJV00701",
                address: "8 ST CATHERINE COURT,MORNINGTON",
                longi: 145.056682,
                lati: -38.237583,
                tel: "03 5975 0777",
                email: "info@airliquide.com"
            },
            {
                customerName: "COREGAS - LIQUID CARBON DIOXIDE ACCOUNT",
                customerNo: "LIV98704",
                address: "3 MILNE ST,THOMASTOWN",
                longi: 145.017768,
                lati: -37.689793,
                tel: "+61334650488",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - CASEY ARC (BULK)",
                customerNo: "YMV80802",
                address: "CNR PRINCESS HWY & OVERLAND DR,NARRE WARREN",
                longi: 145.301200,
                lati: -38.020200,
                tel: "9705 5000",
                email: "info@airliquide.com"
            },
            {
                customerName: "BMS STEEL FABRICATIONS (LOX)",
                customerNo: "BM887601",
                address: "59 MEROLA WAY(BULK OXYGEN),CAMPBELLFIELD",
                longi: 144.959100,
                lati: -37.654800,
                tel: "9357 8341",
                email: "info@airliquide.com"
            },
            {
                customerName: "LA TROBE UNIVERSITY (BULK A/C)",
                customerNo: "LAV51601",
                address: "PHYSICAL SCIENCES 1(BULK NITROGEN),BUNDOORA",
                longi: 145.050130,
                lati: -37.722630,
                tel: "9479 3745",
                email: "info@airliquide.com"
            },
            {
                customerName: "ARROW LASER AUSTRALIA PTY LTD (LOX)",
                customerNo: "AR967403",
                address: "24 NORTHGATE DRIVE(BULK OXY),THOMASTOWN",
                longi: 145.040463,
                lati: -37.690621,
                tel: "9464 4099",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - SCI - SCHOOL OF BIOLOGICAL SCIENCES",
                customerNo: "MSH05002",
                address: "BUILDING 17, 18 INNOVATION WALK(CHANCELLORS WALK),Clayton",
                longi: 145.133700,
                lati: -37.908400,
                tel: "03 9902 9653",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA - SSHINE - F/WSHOP (OXY)",
                customerNo: "00001304",
                address: "40 BUNNETT STREETOXYGEN,SUNSHINE NORTH",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "STATEWIDE FIRE PROTECTION (CO2 MINIBULK)",
                customerNo: "PW172401",
                address: "13 SEPERATION STREET(CO2 - 500),NORTH GEELONG",
                longi: 144.349259,
                lati: -38.111648,
                tel: "5272 3355",
                email: "info@airliquide.com"
            },
            {
                customerName: "WAVES LEISURE CENTRE - HIGHETT",
                customerNo: "WA796601",
                address: "CITY OF KINGSTON111 CHESTERVILLE ROAD(CO2 MINIBULK),HIGHETT",
                longi: 145.042847,
                lati: -37.948845,
                tel: "9559 7111",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORTH EAST REGION WATER CORP T/AS NORTH EAST WATER",
                customerNo: "NOV96901",
                address: "HALLS ROAD,MYRTLEFORD",
                longi: 146.739000,
                lati: -36.559600,
                tel: "02 6022 0525",
                email: "info@airliquide.com"
            },
            {
                customerName: "INGHAMS - SOMERVILLE",
                customerNo: "IOV00201",
                address: "GRANT ROAD,SOMERVILLE",
                longi: 145.180000,
                lati: -38.206800,
                tel: "02 9602 8744",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAMPARI AUSTRALIA PTY LTD (BULK LIN)",
                customerNo: "CBV08602",
                address: "81 CALARCO DRIVE(BULK LIN),DERRIMUT",
                longi: 144.760500,
                lati: -37.799600,
                tel: "+61294782727",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORTH MELBOURNE POOL (MINIBULK)",
                customerNo: "NT180201",
                address: "1 MACAULAY STREET(CO2 - 240),NORTH MELBOURNE",
                longi: 144.941900,
                lati: -37.798900,
                tel: "9658 9666",
                email: "info@airliquide.com"
            },
            {
                customerName: "TEDRA AUSTRALIA PTY LTD (BULK C02)",
                customerNo: "TEV98601",
                address: "CNR WERRIBEE MAIN RD & WILLIAMTHWAITES DR,WERRIBEE",
                longi: 144.658500,
                lati: -37.902900,
                tel: "0429 190 300",
                email: "info@airliquide.com"
            },
            {
                customerName: "FARMERS LANE PTY. LTD - (BULK CO2)",
                customerNo: "NEV05801",
                address: "33 LEVENSWELL ROAD,MOORABBIN",
                longi: 145.066957,
                lati: -37.944543,
                tel: "03 9015 9125",
                email: "info@airliquide.com"
            },
            {
                customerName: "ABC CUTTING IND P/L - BULK NITRO",
                customerNo: "AB638801",
                address: "2A RUTHERFORD ROAD(BULK NITROGEN),SEAFORD",
                longi: 145.152679,
                lati: -38.098704,
                tel: "9775 1025",
                email: "info@airliquide.com"
            },
            {
                customerName: "CHALLENGE MEATS PTY LTD - VIV 50000 (BULK LIN)",
                customerNo: "CIV09401",
                address: "300 BOUNDARY ROAD(VIV 50000 BULK NITROGEN),BREAKWATER",
                longi: 144.382000,
                lati: -38.182100,
                tel: "5248 4400",
                email: "info@airliquide.com"
            },
            {
                customerName: "PEERLESS HOLDINGS P/L - BRAYBROOK (BLK NITRO)GEN)",
                customerNo: "PL087902",
                address: "21 EVANS STREET,BRAYBROOK",
                longi: 144.862900,
                lati: -37.776000,
                tel: "9214 7777",
                email: "info@airliquide.com"
            },
            {
                customerName: "BIODIESEL PRODUCERS LTD",
                customerNo: "BIV01701",
                address: "1456 PLEMMINGS ROAD(BULK NITROGEN),BARNAWARTHA",
                longi: 146.693573,
                lati: -36.119469,
                tel: "02 6042 8400",
                email: "info@airliquide.com"
            },
            {
                customerName: "LA TROBE UNI - INSTITUTE FOR MOLECULAR SCIENCE (LIMS)",
                customerNo: "LBV01201",
                address: "RM 123, PHYSICAL SCIENCES BLD 3KINGSBURY DRIVE,BUNDOORA",
                longi: 145.050100,
                lati: -37.722600,
                tel: "9479 2510 / 94792012",
                email: "info@airliquide.com"
            },
            {
                customerName: "CMI INDUSTRIAL P/L (REC & MNGRS APP)",
                customerNo: "CMV91601",
                address: "76-106 NATIONAL BOULEVARD(BULK NITROGEN),CAMPBELLFIELD",
                longi: 144.944075,
                lati: -37.654547,
                tel: "9359 6088",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - WANGARATTA  (CO2 MINIBULK)",
                customerNo: "YMV99301",
                address: "HP BARR RESERVESCHILLING DRIVE(CO2 - 500),WANGARATTA",
                longi: 146.314942,
                lati: -36.343743,
                tel: "5722 1725",
                email: "info@airliquide.com"
            },
            {
                customerName: "DAIRY TECHNICAL SERVICES LTD",
                customerNo: "DAV00504",
                address: "83 - 71 BOUNDRY ROAD,NORTH MELBOURNE",
                longi: 144.939100,
                lati: -37.793100,
                tel: "8371 7687",
                email: "info@airliquide.com"
            },
            {
                customerName: "ANGLERS TAVERN (USE AOV014)",
                customerNo: "AN296001",
                address: "2 RALEIGH ROAD(CO2 -176),MARIBYRNONG",
                longi: 144.900267,
                lati: -37.769925,
                tel: "9318 2811",
                email: "info@airliquide.com"
            },
            {
                customerName: "BALGOWNIE ESTATE (CO2 MBK)",
                customerNo: "BA630201",
                address: "HERMITAGE ROAD(CO2 - 240),MAIDEN GULLY",
                longi: 144.191000,
                lati: -36.733900,
                tel: "5449 6222",
                email: "info@airliquide.com"
            },
            {
                customerName: "NATIONAL FOODS LTD  (CFIELD)   CO2",
                customerNo: "NA179501",
                address: "58 - 64 GLENBARRY ROAD(CO2 - LTV 1530),CAMPBELLFIELD",
                longi: 144.955677,
                lati: -37.665113,
                tel: "9358 7888",
                email: "info@airliquide.com"
            },
            {
                customerName: "PETER MACCALLUM CLINIC",
                customerNo: "PM085909",
                address: "ST ANDREWS PLACE(BULK OXYGEN),MELBOURNE",
                longi: 144.977206,
                lati: -37.811962,
                tel: "9656 1111",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (SO3)",
                customerNo: "99999956",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "YARRA VALLEY SNACK FOODS P/L (BULK NITROGEN)",
                customerNo: "YAV97101",
                address: "66A EAST COURT,LILYDALE",
                longi: 145.350900,
                lati: -37.749400,
                tel: "+61397372600",
                email: "info@airliquide.com"
            },
            {
                customerName: "PROBE ANALYTICAL-AR ALPHAGAZ LIQ",
                customerNo: "IC080467",
                address: "BUILDING 119-23 PARAMOUNT ROAD(BULK ARGON),FOOTSCRAY WEST",
                longi: 144.861400,
                lati: -37.807500,
                tel: "9316 4627",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON REGION WATER - COWIES CREEK",
                customerNo: "BA093602",
                address: "PRINCESS HWAY(ACCESS VIA EDOLS ST)(BULK OXYGEN - VIV 10,000),GEELONG",
                longi: 144.361300,
                lati: -38.148500,
                tel: "+61352262388",
                email: "info@airliquide.com"
            },
            {
                customerName: "GLYDE METAL INDUSTRIES PTY LTD(BULK)",
                customerNo: "GLV13501",
                address: "65 ZENITH ROADENTER VIA LANYON STREET(BULK OXY),DANDENONG SOUTH",
                longi: 145.221300,
                lati: -38.017800,
                tel: "9791 3402            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMONSTRATION ACCOUNT MINI BULK",
                customerNo: "99999916",
                address: "VARIOUS,A",
                longi: 144.826366,
                lati: -37.788500,
                tel: "3135200              ",
                email: "info@airliquide.com"
            },
            {
                customerName: "CASELLA WINES PTY LTD   (C02 VIV 25 T)",
                customerNo: "CA705003",
                address: "FARM 1471, WAKELEY ROAD(BULK CO2),YENDA",
                longi: 146.198500,
                lati: -34.250200,
                tel: "02 6968 1346",
                email: "info@airliquide.com"
            },
            {
                customerName: "AITKEN GREENS PTY LTD",
                customerNo: "BH969701",
                address: "DUNHELEN ROAD(CO2 - 300),YUROKE",
                longi: 144.878700,
                lati: -37.590200,
                tel: "03 9217 4888",
                email: "info@airliquide.com"
            },
            {
                customerName: "ADVANCED CUTTING TECHNOLOGY (LOX)",
                customerNo: "ADV41302",
                address: "31 NICHOLAS DRIVE(BULK OXYGEN),DANDENONG",
                longi: 145.204813,
                lati: -38.037398,
                tel: "9768 3553            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "INTERVET AUST PTY LTD (BULK) (VESSEL #1)",
                customerNo: "IOV01301",
                address: "91 - 105 HARPIN STREET(BULK NITROGEN) VIV10000,BENDIGO EAST",
                longi: 144.305200,
                lati: -36.748600,
                tel: "+61354409944",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALIGNED LEISURE - CARDINIA LIFE (2 X 240 KG) BULK",
                customerNo: "AMV18201",
                address: "930 PRINCES HIGHWAY(CO2 - 240),PAKENHAM",
                longi: 145.456400,
                lati: -38.063800,
                tel: "+61359452888",
                email: "info@airliquide.com"
            },
            {
                customerName: "COOGEE TITANIUM",
                customerNo: "CPV13301",
                address: "UNIT 4 25 - 27 AGOSTA DRIVE,LAVERTON",
                longi: 144.800998,
                lati: -37.821323,
                tel: "9264 1834",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL CO2 - FULL",
                customerNo: "99999960",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 145.079500,
                lati: -37.878600,
                tel: "255 2288",
                email: "info@airliquide.com"
            },
            {
                customerName: "EUROFINS ENVIRONMENT TESTING  VIC- LIN",
                customerNo: "EUV80402",
                address: "2-5 KINGSTON TOWN CLOSEMELBOURNE LABORATORY,OAKLEIGH",
                longi: 145.098500,
                lati: -37.893500,
                tel: "+61 3 8564 5000",
                email: "info@airliquide.com"
            },
            {
                customerName: "GREATER STH-EAST ASIAN PORK CO (BULK CO2)",
                customerNo: "GR630401",
                address: "8 - 14 HUME ROAD(BULK CO2),LAVERTON NORTH",
                longi: 144.815872,
                lati: -37.820682,
                tel: "9369 6777",
                email: "info@airliquide.com"
            },
            {
                customerName: "SLADES BEVERAGES PTY LTD",
                customerNo: "SL763801",
                address: "46 - 54 KEON PARADE(BULK CO2),THOMASTOWN",
                longi: 145.018115,
                lati: -37.695632,
                tel: "9460 5522",
                email: "info@airliquide.com"
            },
            {
                customerName: "DOMAINE CHANDON AUST P/L  (BULK)",
                customerNo: "DO637601",
                address: "GREEN POINTMAROONDAH HIGHWAY(CO2 MINIBULK),COLDSTREAM",
                longi: 145.430059,
                lati: -37.679745,
                tel: "97389238",
                email: "info@airliquide.com"
            },
            {
                customerName: "NUGAN ESTATE PTY LTD",
                customerNo: "TEV90001",
                address: "DARLING POINT ROAD(BULK CO2),WILLBRIGGIE",
                longi: 146.016144,
                lati: -34.466461,
                tel: "02 6963 3900         ",
                email: "info@airliquide.com"
            },
            {
                customerName: "J.K & M.A ATKINSON& SONS (BULK CO2)",
                customerNo: "JKV88601",
                address: "74  BOB IRVIN ROAD,GRIFFITH",
                longi: 146.101000,
                lati: -34.326100,
                tel: "+61269630442",
                email: "info@airliquide.com"
            },
            {
                customerName: "HARDCHROME ENGINEERING PTY LTD",
                customerNo: "HAV26501",
                address: "175 WELLINGTON ROAD(BULK NITROGEN),NORTH CLAYTON",
                longi: 145.147035,
                lati: -37.916993,
                tel: "9561 9555            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "COMMODITY TRADERS AUSTRALIA P/L (MINI BULK CO2)",
                customerNo: "CPV19500",
                address: "185 WAHRING-MURCHISON EAST ROAD,WAHRING",
                longi: 145.230800,
                lati: -36.673500,
                tel: "(03) 5826 2688/5826 2000",
                email: "info@airliquide.com"
            },
            {
                customerName: "PYROZONE AUSTRALIA PTY LTD",
                customerNo: "PYV00101",
                address: "VODAFONE9 TARMAC DRIVE,TULLAMARINE",
                longi: 144.871900,
                lati: -37.694000,
                tel: "0411 729 651",
                email: "info@airliquide.com"
            },
            {
                customerName: "FX SERVICES AUSTRALIA PTY LTD (CO2 MINI BULK)",
                customerNo: "FXV00201",
                address: "1/3 LONGVIEW CURCUIT(CO2 MINI BULK),THOMASTOWN",
                longi: 145.043207,
                lati: -37.689422,
                tel: "0409 911 429",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM - NARRE WARREN",
                customerNo: "KJV00501",
                address: "4 - 12 THE AVENUE,NARRE WARREN",
                longi: 145.315194,
                lati: -38.057387,
                tel: "03 8790 1777",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM - ARMADALE PTY LTD",
                customerNo: "KJV00601",
                address: "97 ALMA ROAD(PLV240) ALA NO. 02286,ST KILDA",
                longi: 144.986300,
                lati: -37.861700,
                tel: "03 9510 6577",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - DERRIMUT (CO2  MBK)",
                customerNo: "YMV99501",
                address: "MAKLAND DRIVE,DERRIMUT",
                longi: 144.775400,
                lati: -37.787600,
                tel: "9361 6700",
                email: "info@airliquide.com"
            },
            {
                customerName: "HAZELDENES CHICKEN FARM (BULK CO2)",
                customerNo: "HA107702",
                address: "74 HAZELDENE ROAD(BULK CO2),LOCKWOOD",
                longi: 144.164089,
                lati: -36.795905,
                tel: "5431 1300",
                email: "info@airliquide.com"
            },
            {
                customerName: "STANTON & KILLEEN WINES PTY LTD (CO2 MINIBULK)",
                customerNo: "SUV18501",
                address: "440 JACKS ROADRUTHERGLEN,RUTHERGLEN",
                longi: 146.424700,
                lati: -36.054100,
                tel: "+61 2 60329457",
                email: "info@airliquide.com"
            },
            {
                customerName: "LIQUID NITROGEN SERVICES (VIC) P/L (BULK LIN)",
                customerNo: "LI431103",
                address: "C/O AIR LIQUIDE ALTONA ASU631 KOROROIT CREEK RD,ALTONA",
                longi: 144.793200,
                lati: -37.845300,
                tel: "(03) 8539 1605",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - THOMASTOWN RECREATION & AQUATIC CENTRE - BULK",
                customerNo: "WHV87301",
                address: "52-54 MAIN STREET,THOMASTOWN",
                longi: 145.006600,
                lati: -37.679000,
                tel: "9463 0700",
                email: "info@airliquide.com"
            },
            {
                customerName: "SDI LTD",
                customerNo: "SOV18901",
                address: "5 - 9 BRUNSDON STREET(BULK NITROGEN),BAYSWATER",
                longi: 145.267944,
                lati: -37.842567,
                tel: "9729 9088            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "SOMERVILLE RETAIL SERVICES PL (BULK NITR)",
                customerNo: "PP000704",
                address: "438 SOMERVILLE ROAD(BULK NITROGEN),WEST FOOTSCRAY",
                longi: 144.877700,
                lati: -37.797400,
                tel: "9315  2956 /DES",
                email: "info@airliquide.com"
            },
            {
                customerName: "PEERLESS HOLDINGS P/L- BRAYBROOK (BLK CO2)",
                customerNo: "PL087901",
                address: "21 EVANS STREET,BRAYBROOK",
                longi: 144.862900,
                lati: -37.776000,
                tel: "9214 7777",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999904",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.793000,
                lati: -37.845400,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "OZPACK PTY LTD (ALA 191)",
                customerNo: "MCV41102",
                address: "GOULBURN VALLEY HIGHWAY(C02 MINIBULK),NAGAMBIE",
                longi: 145.154700,
                lati: -36.784300,
                tel: "5794 2890",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH CITY COUNCIL (CLAYTON POOL MBK176 * 2)",
                customerNo: "MOV99701",
                address: "COOKE STREET,CLAYTON",
                longi: 145.118012,
                lati: -37.927105,
                tel: "9541 3100",
                email: "info@airliquide.com"
            },
            {
                customerName: "BALENCEA (MBK176 * 2)",
                customerNo: "OCV79001",
                address: "454 ST KILDA ROAD,MELBOURNE",
                longi: 144.976400,
                lati: -37.839400,
                tel: "9820 1473",
                email: "info@airliquide.com"
            },
            {
                customerName: "BAIADA POULTRY P/L  (LOX)",
                customerNo: "EAV57604",
                address: "17 - 19 PIPE ROAD(BULK OXYGEN),LAVERTON NORTH",
                longi: 144.815500,
                lati: -37.821200,
                tel: "9368 9001",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA -- SSHINE - F/WSHOP (CO2 MINI BULK)",
                customerNo: "00001307",
                address: "40 BUNNETT STREETCO2 MINI BULK,SUNSHINE NORTH",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "OAKRIDGE WINES PTY LTD  (CO2 BULK)",
                customerNo: "OAV44202",
                address: "864 MAROONDAH HIGHWAY(CO2- 1400),COLDSTREAM",
                longi: 145.457557,
                lati: -37.687760,
                tel: "9738 9900",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON REGION WATER QUEENSCLIFF NO.11 - BONNYVALE ROAD",
                customerNo: "BA094002",
                address: "135 BONNEY VALE ROAD(BULK OXYGEN),OCEAN GROVE",
                longi: 144.551400,
                lati: -38.267400,
                tel: "03 5226 9131",
                email: "info@airliquide.com"
            },
            {
                customerName: "BURRA FOODS PTY LTD (ALIGAL 1 LIQUID)",
                customerNo: "BUV91201",
                address: "47 STATION STREET,KORUMBURRA",
                longi: 145.821400,
                lati: -38.427500,
                tel: "(03) 5658 1066",
                email: "info@airliquide.com"
            },
            {
                customerName: "DE BORTOLI WINES PTY LTD - (LTH6 - NO. 00254)",
                customerNo: "DE169203",
                address: "DE-BORTOLIS ROAD(LTH 6 - 6000KG - NO. 00254),BILBUL",
                longi: 146.148260,
                lati: -34.274570,
                tel: "02 6966 0100",
                email: "info@airliquide.com"
            },
            {
                customerName: "ACTCO PICKERING P/L - (BULK NITRO)",
                customerNo: "AC169002",
                address: "28 QUALITY DRIVE(BULK NITROGEN),DANDENONG",
                longi: 145.205500,
                lati: -38.028300,
                tel: "8791 7555",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - DIAMOND CREEK",
                customerNo: "YMV99901",
                address: "1 ELIZABETH STREETMINIBULK,DIAMOND CREEK",
                longi: 145.157400,
                lati: -37.672200,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA  N2- SUNSHINE",
                customerNo: "99999908",
                address: "40 BUNNET STREET(BULK NITROGEN),NORTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "HERCULES CHEMICALS AUSTRALIA",
                customerNo: "HE934601",
                address: "1612 - 1638 CENTRE ROAD(BULK NITROGEN),SPRINGVALE",
                longi: 145.147612,
                lati: -37.932081,
                tel: "9550 5600            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ARMSTRONG WORLD IND (LIN)",
                customerNo: "AS005601",
                address: "29 - 39 MILLS ROAD(BULK NITROGEN),BRAESIDE",
                longi: 145.116200,
                lati: -38.000300,
                tel: "9580 9633",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH EASTERN",
                customerNo: "EPV00301",
                address: "NELSON STREET(BULK OXY),BOX HILL",
                longi: 145.123543,
                lati: -37.819030,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "MIMR - PHI (BULK)",
                customerNo: "MJV07702",
                address: "27 - 31 WRIGHT STREET,CLAYTON",
                longi: 145.125400,
                lati: -37.921700,
                tel: "(03) 9902 4782",
                email: "info@airliquide.com"
            },
            {
                customerName: "M. CHAPOUTIER PTY LTD - (CO2 MINIBULK)",
                customerNo: "MCV95901",
                address: "141 - 143 HIGH STREET,HEATHCOTE",
                longi: 144.708094,
                lati: -36.921773,
                tel: "03 5433 2411",
                email: "info@airliquide.com"
            },
            {
                customerName: "BORON MOLECULAR  (BULK NITROGEN)",
                customerNo: "BOV03101",
                address: "500 PRINCES HIGHWAY(LIN VIV5000),NOBLE PARK",
                longi: 145.184100,
                lati: -37.954800,
                tel: "8558 8000",
                email: "info@airliquide.com"
            },
            {
                customerName: "MOUNT LANGI GHIRAN P/L  (CO2 MINIBULK)",
                customerNo: "FR555400",
                address: "80 VINE ROAD(CO2 - 500),BAYINDEEN",
                longi: 143.160200,
                lati: -37.317900,
                tel: "5354 3207",
                email: "info@airliquide.com"
            },
            {
                customerName: "CADBURY SCHWEPPES P/L (BLK NITRO)",
                customerNo: "CA261804",
                address: "BEVERAGE DRIVE(BULK NITROGEN),TULLAMARINE",
                longi: 144.862300,
                lati: -37.717800,
                tel: "9339 6352",
                email: "info@airliquide.com"
            },
            {
                customerName: "QUEENSBRIDGE HOTEL - (CO2 MINIBULK)",
                customerNo: "QU347301",
                address: "1 QUEENSBRIDGE STREET(CO2 - 176),SOUTH MELBOURNE",
                longi: 144.955900,
                lati: -37.833900,
                tel: "9686 9818",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOROONDARA SPORTS COMPLEX",
                customerNo: "NO179901",
                address: "271 BELMORE ROAD(CO2 - 176 X 1, 240 X 2),BALWYN NORTH",
                longi: 145.086700,
                lati: -37.803400,
                tel: "98510 444",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALBURY BASE HOSPITAL (VIV 15,000)",
                customerNo: "AL035604",
                address: "HUME HEALTH SERVICE -BORELLA RD(VIV 15,000) ALA NO - 06743,ALBURY EAST",
                longi: 146.938491,
                lati: -36.078456,
                tel: "02 6058 4475",
                email: "info@airliquide.com"
            },
            {
                customerName: "FUCHS LUBRICANTS (BULK ARGON)",
                customerNo: "FUV00501",
                address: "49 MCINTYRE ROAD,SUNSHINE",
                longi: 144.829600,
                lati: -37.771000,
                tel: "03 9300 6456",
                email: "info@airliquide.com"
            },
            {
                customerName: "PAKENHAM HOTEL (CO2 BLK) - USE CBV046",
                customerNo: "CBV11601",
                address: "PRINCES  HIGHWAY(CO2 - 240),PAKENHAM",
                longi: 145.482727,
                lati: -38.078518,
                tel: "5941 1233",
                email: "info@airliquide.com"
            },
            {
                customerName: "DAVID TRAEGER WINES",
                customerNo: "DAV53801",
                address: "1 EMILY STREET(REAR SOMERSET CROSSING WINES)(CO2 - 240),SEYMOUR",
                longi: 145.117212,
                lati: -37.022056,
                tel: "5794 2514            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ROSEBUD EX-SERVICES CLUB  (CO2 MINIBULK)",
                customerNo: "RO068101",
                address: "117 EASTBOURNE ROAD(CO2 - 300),ROSEBUD",
                longi: 144.905199,
                lati: -38.367956,
                tel: "5986 1066            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "STARTRONICS PTY LTD - STARTRONICS TRUST",
                customerNo: "FU106301",
                address: "10 KITCHEN ROAD(BULK NITROGEN),DANDENONG SOUTH",
                longi: 145.215600,
                lati: -38.018600,
                tel: "9212 4060",
                email: "info@airliquide.com"
            },
            {
                customerName: "MAROONDAH HOSPITAL - BACK UP VESSEL",
                customerNo: "MBV02001",
                address: "MT DANDENONG ROAD,RINGWOOD",
                longi: 145.255100,
                lati: -37.806700,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "SPARKLING BEVERAGES - VIV15000",
                customerNo: "SPV96101",
                address: "32 SOMERTON PARK DRIVE,CAMPBELLFIELD",
                longi: 144.946300,
                lati: -37.648000,
                tel: "9308 6681",
                email: "info@airliquide.com"
            },
            {
                customerName: "RED EAGLE HOTEL (CO MINIBULK)",
                customerNo: "THV05001",
                address: "111 VICTORIA AVENUE(CO2 - 176),ALBERT PARK",
                longi: 144.954066,
                lati: -37.841207,
                tel: "9699 9744",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA(PASMINCO)",
                customerNo: "99999929",
                address: "ELLEN STREET(BULK OXYGEN),PORT PIRIE",
                longi: 138.603812,
                lati: -34.932829,
                tel: "08 8633 3214",
                email: "info@airliquide.com"
            },
            {
                customerName: "AUSTRALIAN MEAT GROUP PTY LTD",
                customerNo: "AUV86901",
                address: "342 HAMMOND ROAD,DANDENONG",
                longi: 145.202800,
                lati: -38.028500,
                tel: "+618329 8500",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM3B",
                customerNo: "DFV04107",
                address: "VIC DESAL PLANT - VES 6LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "EMPTY LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999967",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.715300,
                lati: -35.288500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA  O2- SUNSHINE",
                customerNo: "99999912",
                address: "BUNNET STREET(BULK OXYGEN),SUNSHINE",
                longi: 144.840930,
                lati: -37.761116,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAMPBELLS WINES (BULK)",
                customerNo: "CB253401",
                address: "MURRAY VALLEY HWY(BULK CO2),RUTHERGLEN",
                longi: 146.432133,
                lati: -36.061485,
                tel: "02 6032 9458",
                email: "info@airliquide.com"
            },
            {
                customerName: "MITCHELTON WINERIES",
                customerNo: "MT876401",
                address: "470 MITCHELTON ROAD(CO2 MINIBULK),NAGAMBIE",
                longi: 145.154700,
                lati: -36.784300,
                tel: "+61357362222",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE - MT GAMBIER",
                customerNo: "00001398",
                address: "CARBA ROAD,CAROLINE",
                longi: 140.906700,
                lati: -37.946400,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999944",
                address: "631 KORORIT CREEK ROAD,ALTONA",
                longi: 144.792687,
                lati: -37.845276,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALWA - CPT RAIL VIC - (FULL ISO)",
                customerNo: "AJV02101",
                address: "3 CHANNEL CLOSE,HENDERSON",
                longi: 144.932600,
                lati: -37.803700,
                tel: "+61894949625",
                email: "info@airliquide.com"
            },
            {
                customerName: "GALLI ESTATE WINERY ((MINIBULK CO2)",
                customerNo: "GBV05801",
                address: "1507 MELTON HIGHWAY(MINIBULK CO2 - 240KG PLV),PLUMPTON",
                longi: 144.670900,
                lati: -37.687600,
                tel: "+61397471444",
                email: "info@airliquide.com"
            },
            {
                customerName: "WODONGA HOSPITAL (VIV7000)",
                customerNo: "00V00001",
                address: "VERMONT STREET,WODONGA",
                longi: 146.879208,
                lati: -36.126862,
                tel: "02 6051 7507",
                email: "info@airliquide.com"
            },
            {
                customerName: "BURRA FOODS PTY LTD (ALIGAL 2 LIQUID)",
                customerNo: "BUV91202",
                address: "47 STATION STREET,KORUMBURRA",
                longi: 145.821700,
                lati: -38.427900,
                tel: "(03) 5658 1066",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER(BOUNDARY RD)",
                customerNo: "BA093801",
                address: "BOUNDARY ROAD(BULK OXYGEN),EAST GEELONG",
                longi: 144.386100,
                lati: -38.159600,
                tel: "5226 9123",
                email: "info@airliquide.com"
            },
            {
                customerName: "VALLEY PRIVATE HOSPITAL (BULK) VIV 7000",
                customerNo: "VAV84502",
                address: "CNR GLADSTONE & POLICE RDS(BULK OXYGEN),NORTH DANDENONG",
                longi: 145.210500,
                lati: -37.940100,
                tel: "9795 7700",
                email: "info@airliquide.com"
            },
            {
                customerName: "RENEWED METAL TECHNOLOGIES - COMBINED VESSELS 1 & 2",
                customerNo: "REV03303",
                address: "509 BYRNES ROAD(VIV 33,000 X 2 COMBINED),WAGGA WAGGA",
                longi: 147.430300,
                lati: -35.047000,
                tel: "02 6937 1903",
                email: "info@airliquide.com"
            },
            {
                customerName: "ST ALBANS LEISURE CENTRE (CO2 MINIBULK)",
                customerNo: "ST292200",
                address: "TAYLORS ROAD(CO2 - 176),ST ALBANS EAST",
                longi: 144.804900,
                lati: -37.728100,
                tel: "9249 4635",
                email: "info@airliquide.com"
            },
            {
                customerName: "COBURG LEISURE CENTRE (BULK)",
                customerNo: "COV48900",
                address: "RUSSELL STREET(CO2 - 240 X 2),COBURG",
                longi: 144.962800,
                lati: -37.741700,
                tel: "9354 3504",
                email: "info@airliquide.com"
            },
            {
                customerName: "WODONGA SPORTS & LEISURE CNT-YMCA (CO2 MINI)",
                customerNo: "WOV01201",
                address: "HEDGEROW COURT(CO2 - 240 X 2),WODONGA",
                longi: 146.862971,
                lati: -36.127373,
                tel: "02 6058 2555",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUPAGAS",
                customerNo: "SU114501",
                address: "26 COMMERCIAL DRIVECO2,DANDENONG SOUTH",
                longi: 145.229200,
                lati: -38.024100,
                tel: "9706 6262",
                email: "info@airliquide.com"
            },
            {
                customerName: "PETTAVEL PTY LIMITED (RECEIVERS & MANAGERS APPOINTED)(BULK)",
                customerNo: "PFV02001",
                address: "665 PETTAVEL ROAD(C02 - 176),WAURN PONDS",
                longi: 144.243090,
                lati: -38.226465,
                tel: "5266 1120",
                email: "info@airliquide.com"
            },
            {
                customerName: "SCOTCHMANS HILL VINEYARD AND WINERY (CO2)",
                customerNo: "SC874601",
                address: "190 SCOTCHMAN ROAD(CO2 - 500),DRYSDALE",
                longi: 144.569951,
                lati: -38.173547,
                tel: "5251 3176            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMO ACCOUNT( ANTON MAZAR- BULK CO2)",
                customerNo: "CY149701",
                address: "ANTON MAZAR..,.",
                longi: 144.826366,
                lati: -37.788500,
                tel: "9290 1131            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA - SSHINE - F/W'SHOP  (NIT)",
                customerNo: "00001303",
                address: "40 BUNNETT STREETNITROGEN,SUNSHINE NORTH",
                longi: 144.830100,
                lati: -37.768900,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "NUFARM LTD- AR  (BULK ARGON)",
                customerNo: "NU062101",
                address: "103 PIPE ROAD(BULK ARGON),LAVERTON NORTH",
                longi: 144.798800,
                lati: -37.825400,
                tel: "9282 1000",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG",
                customerNo: "99999954",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - WODONGA WAVES CENTRE",
                customerNo: "YNV00101",
                address: "8 MACTIER AVENUE(CO2 PLV 176),WODONGA",
                longi: 146.895600,
                lati: -36.140300,
                tel: "+61260582555",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - NOBLE PARK AQUATIC CENTRE (C02 MINIBULK)",
                customerNo: "YNV00802",
                address: "9 MEMORIAL DRIVE,NOBLE PARK",
                longi: 145.170200,
                lati: -37.958100,
                tel: "+61395467955",
                email: "info@airliquide.com"
            },
            {
                customerName: "GENAZZANO COLLEGE",
                customerNo: "GEV30000",
                address: "301 COTHAM ROAD(CO2 - 240),KEW",
                longi: 145.057307,
                lati: -37.809792,
                tel: "8862 1000",
                email: "info@airliquide.com"
            },
            {
                customerName: "COMMINS ENTERPRISES - BULK",
                customerNo: "COV21201",
                address: "BRIGALOW FARM 1758(BULK CO2),WHITTON",
                longi: 146.181400,
                lati: -34.576000,
                tel: "02 6955 2779",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER(ELLIOT CT) VIV6000",
                customerNo: "BA093701",
                address: "ELLIOT COURT(BULK OXYGEN),NEWCOMB",
                longi: 144.462500,
                lati: -38.196400,
                tel: "52269123",
                email: "info@airliquide.com"
            },
            {
                customerName: "LINDSAY F NELSON MANUFACTURING P/L (BULK - ARGON)",
                customerNo: "LIV96202",
                address: "KYABRAM ROAD,ROCHESTER",
                longi: 144.967078,
                lati: -36.351313,
                tel: "5484 1577",
                email: "info@airliquide.com"
            },
            {
                customerName: "CHUBB FIRE-PYROZONE ACCOUNT (CO2 MINIBULK)",
                customerNo: "CHV21302",
                address: "314 BOUNDARY RD,DINGLEY",
                longi: 145.110000,
                lati: -37.983100,
                tel: "92649700",
                email: "info@airliquide.com"
            },
            {
                customerName: "MAI HONG INDUSTRIES",
                customerNo: "MBV07801",
                address: "59 BARRY STREET(BULK),BAYSWATER",
                longi: 145.282400,
                lati: -37.847500,
                tel: "9762 8683",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL - LIN DELIVER FULL",
                customerNo: "99999972",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 148.974200,
                lati: -21.230900,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - NORTHCOTE AQUATIC CENTRE (CO2 MINIBULK 3)",
                customerNo: "YM978603",
                address: "180 VICTORIA ROAD,NORTHCOTE",
                longi: 145.012500,
                lati: -37.769200,
                tel: "9486 7200",
                email: "info@airliquide.com"
            },
            {
                customerName: "PURE BEVERAGE GROUP PTY LTD (BULK)",
                customerNo: "NOV23601",
                address: "T/AS  NODDYS SOFT DRINKS150 BARWON HEADS ROAD(BULK),BELMONT",
                longi: 144.342898,
                lati: -38.174890,
                tel: "5241 6711            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER",
                customerNo: "GE072501",
                address: "PO BOX 659,GEELONG",
                longi: 144.361347,
                lati: -38.148543,
                tel: "052 661690           ",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOC GASES AUSTRALIA LIMITED         ",
                customerNo: "CI311702",
                address: "90 BELL STREETPRESTON,",
                longi: 145.026200,
                lati: -37.747300,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "BAYSIDE AQUATICS AT MENTONE (BULK)",
                customerNo: "MEV00001",
                address: "CNR LUCERNE ST & COMO PDE WEST(C02 MINIBULK),WEST MENTONE",
                longi: 145.064700,
                lati: -37.981900,
                tel: "9581 3288",
                email: "info@airliquide.com"
            },
            {
                customerName: "BALLARAT PRESSINGS PTY LTD (BULK LASAL)",
                customerNo: "BAV00401",
                address: "3181 OLD MELBOURNE ROAD(BULK LASAL 2003),WARRENHEIP",
                longi: 143.934400,
                lati: -37.568100,
                tel: "5334 7040",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG",
                customerNo: "99999952",
                address: "5775 SOUT GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOX HILL HOSPITAL VTH-5000 ALHC 6498 OXYGEN - BACK UP VESSEL",
                customerNo: "00V00400",
                address: "THAMES ROADBULK OXYGEN BACK UP VESSEL,BOX HILL",
                longi: 145.122800,
                lati: -37.813400,
                tel: ".",
                email: "info@airliquide.com"
            },
            {
                customerName: "EUROFINS ENVIRONMENT TESTING -VIC-ARG",
                customerNo: "EUV80401",
                address: "2-5 KINGSTON TOWN CLOSEOAKLEIGH,OAKLEIGH",
                longi: 145.098500,
                lati: -37.893500,
                tel: "+61 3 8564 5000",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LAR - HOLBROOK/TARCUTTA",
                customerNo: "99999947",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.735000,
                lati: -35.278400,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "RATHBONE WINE GROUP P/L (CO2 BULK)",
                customerNo: "RBV05301",
                address: "262 - 276 LORIMER ST,PORT MELBOURNE",
                longi: 144.904100,
                lati: -37.825900,
                tel: "+61386710999",
                email: "info@airliquide.com"
            },
            {
                customerName: "WESTEND ESTATE PTY LTD (VESSEL NO 2) - SERIAL NO 6598",
                customerNo: "WEV02903",
                address: "1283 BRAYNE ROAD,GRIFFITH",
                longi: 146.027800,
                lati: -34.277100,
                tel: "02 6969 0800",
                email: "info@airliquide.com"
            },
            {
                customerName: "DON KRC - CASTLEMAINE - (BULK CO2 - VIV 10,000)",
                customerNo: "DOV06302",
                address: "64 RICHARDS ROAD,CASTLEMAINE",
                longi: 144.209300,
                lati: -37.055600,
                tel: "5479 2545",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUPAGAS EX WORKS ALTONA (BULK LIN)",
                customerNo: "SU114505",
                address: "23 COMMERCIAL DRIVE(BULK LIN),DANDENONG SOUTH",
                longi: 145.215600,
                lati: -38.018600,
                tel: "9706 6262",
                email: "info@airliquide.com"
            },
            {
                customerName: "DON KRC - CASTLEMAINE (BULK NO 2 VESSEL)",
                customerNo: "DOV06306",
                address: "64 RICHARDS ROAD,CASTLEMAINE",
                longi: 144.209300,
                lati: -37.055600,
                tel: "5479 2545",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON REG. WATER AUTH - CORIO WEST (VIV6000)",
                customerNo: "BAV72801",
                address: "4 MARYLAND DRIVE(BULK OXYGEN) ALA6556,CORIO",
                longi: 144.351800,
                lati: -38.081100,
                tel: "5226 2500",
                email: "info@airliquide.com"
            },
            {
                customerName: "PASTA DA VINCI (CO2 MINIBULK)",
                customerNo: "PAV58304",
                address: "84 - 86 FILLO DRIVE,SOMERTON",
                longi: 144.956600,
                lati: -37.638100,
                tel: "83381301",
                email: "info@airliquide.com"
            },
            {
                customerName: "SAM MIRANDA WINES (CO2 MINIBULK A/C)",
                customerNo: "SAV68801",
                address: "CNR SNOW & WHITFIELD ROADS(CO2 MINIBULK),OXLEY",
                longi: 146.368618,
                lati: -36.440895,
                tel: "5727 3399            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "MELBOURNE SPORTS & AQUATIC CNTRE(BULK)",
                customerNo: "ME009701",
                address: "AUGHTIE DRIVE(CO2 MINIBULK),ALBERT PARK",
                longi: 144.954066,
                lati: -37.841207,
                tel: "9666 4261",
                email: "info@airliquide.com"
            },
            {
                customerName: "INDUCTION HARDENING SERVICES - (BULK LIN)",
                customerNo: "INV98901",
                address: "1/18 TURBO DRIVE,BAYSWATER",
                longi: 145.276898,
                lati: -37.824960,
                tel: "03 9320 2744",
                email: "info@airliquide.com"
            },
            {
                customerName: "HUNT LASERCUT  (BULK OXY)",
                customerNo: "HU174101",
                address: "8 - 16 REDWOOD DRIVE(BULK OXYGEN),DINGLEY",
                longi: 145.111837,
                lati: -37.984245,
                tel: "9551 3077",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAMPOLI FOODS",
                customerNo: "CAV79401",
                address: "45 - 47 LAKESIDE AVENUE(C02 BULK),RESERVOIR",
                longi: 144.987500,
                lati: -37.707900,
                tel: "9460 6766",
                email: "info@airliquide.com"
            },
            {
                customerName: "HUNTINGTOWER SCHOOL (MBK176 * 2)",
                customerNo: "HUV96201",
                address: "77 WAIMARIE DRIVE,MOUNT WAVERLEY",
                longi: 145.137100,
                lati: -37.876600,
                tel: "9807 8888",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA SPEC GAS - MED OXY VIV10000",
                customerNo: "00001315",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.830100,
                lati: -37.768900,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "LASER 3D (BLK OXY)",
                customerNo: "LAV84301",
                address: "BULK OXY DELIVERIES2 / 1368 HEATHERTON ROAD,DANDENONG",
                longi: 145.199800,
                lati: -37.968500,
                tel: "8710 4100",
                email: "info@airliquide.com"
            },
            {
                customerName: "MANNINGHAM YMCA (BALSAM ST ACCESS)",
                customerNo: "MA180501",
                address: "DONCASTER AQUARENA138 -153 WILLIAMSONS ROAD,DONCASTER",
                longi: 145.126100,
                lati: -37.775200,
                tel: "9848 1300",
                email: "info@airliquide.com"
            },
            {
                customerName: "A C LASER ( NORTHGATE - LOX)",
                customerNo: "ACV65501",
                address: "1 / 72 NORTHGATE DRIVE(BULK OXYGEN),THOMASTOWN",
                longi: 145.035734,
                lati: -37.688331,
                tel: "9465 6344",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE ALFRED HEALTHCARE GROUP - BACK UP VESSEL",
                customerNo: "TIV06501",
                address: "COMMERCIAL ROAD(BULK OXYGEN),PRAHRAN",
                longi: 144.993484,
                lati: -37.851524,
                tel: "9520 2811",
                email: "info@airliquide.com"
            },
            {
                customerName: "MT ALEXANDER HOSPITAL",
                customerNo: "MTV00501",
                address: "CORNISH STREET(BULK OXYGEN),CASTLEMAINE",
                longi: 144.211618,
                lati: -37.054227,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "HILTON MANUFACTURING P/L (BLK LIN- BANGHOLME RD)",
                customerNo: "HI689504",
                address: "110 BANGHOLME ROAD,DANDENONG SOUTH",
                longi: 145.197700,
                lati: -38.036800,
                tel: "8791 9400",
                email: "info@airliquide.com"
            },
            {
                customerName: "WICKHAM HILL WINERY (BULK CO2) VIV10,000 (ALA 4409)",
                customerNo: "WJV01401",
                address: "22 JENSEN ROAD,GRIFFITH",
                longi: 146.056600,
                lati: -34.295800,
                tel: "02 6962 5014",
                email: "info@airliquide.com"
            },
            {
                customerName: "WANNON WATER-CAMPERDOWN WTP (BULK CO2)",
                customerNo: "WAV05701",
                address: "COBDEN ROAD(CO2 BULK),CAMPERDOWN",
                longi: 143.128252,
                lati: -38.250381,
                tel: "5564 7631            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "DON KRC - CASTLEMAINE (VESSEL NO 1)",
                customerNo: "DOV06304",
                address: "64 RICHARDS ROADVENDOR - VN11868,CASTLEMAINE",
                longi: 144.209300,
                lati: -37.055600,
                tel: "5479 2545",
                email: "info@airliquide.com"
            },
            {
                customerName: "OMERGA CHEMICALS",
                customerNo: "OMV00104",
                address: "47-61 FITZGERALD ROAD,LAVERTON NORTH",
                longi: 144.782500,
                lati: -37.836600,
                tel: "8368 8000",
                email: "info@airliquide.com"
            },
            {
                customerName: "INGHAMS - THOMASTOWN - BCO2 - VESSEL 5079",
                customerNo: "IOV00101",
                address: "319 SETTLEMENT ROAD,THOMASTOWN",
                longi: 145.024300,
                lati: -37.689900,
                tel: "03 9463 7624",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE ALFRED HOSPITAL - LGE VESSEL",
                customerNo: "AL039466",
                address: "COMMERCIAL ROAD(BULK OXY),PRAHRAN",
                longi: 144.981605,
                lati: -37.845571,
                tel: "9276 2000            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "JASPER HILL VINEYARD (CO2 MINI BULK)",
                customerNo: "JAV66401",
                address: "637 NORTHERN HIGHWAY(CO2 - 240),HEATHCOTE",
                longi: 144.692774,
                lati: -36.853252,
                tel: "5433 2528            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "KILCHURN WINES - BULK",
                customerNo: "KIV98301",
                address: "144 GLENFERN ROAD,ROMSEY",
                longi: 144.716300,
                lati: -37.337800,
                tel: "5429 5666",
                email: "info@airliquide.com"
            },
            {
                customerName: "ORIGIN ENERGY RESOURCES LTD (BLK NITR)",
                customerNo: "ORV71901",
                address: "5575 SOUTH GIPPSLAND HIGHWAY(BULK NITROGEN),LANG LANG",
                longi: 145.588400,
                lati: -38.322600,
                tel: "5654 9104",
                email: "info@airliquide.com"
            },
            {
                customerName: "TREASURY WINE ESTATE VINTNERS LTD. COLDSTREAM HILLS WINERY",
                customerNo: "CPV37801",
                address: "31 MADDENS LANE(CO2 - 500),COLDSTREAM",
                longi: 145.463791,
                lati: -37.722732,
                tel: "5960 7099",
                email: "info@airliquide.com"
            },
            {
                customerName: "PORTET WINEMAKERS  (CO2 MINIBULK)",
                customerNo: "POV93801",
                address: "870 - 872 MAROONDAH HIGHWAY((CO2 - 240),COLDSTREAM",
                longi: 145.465851,
                lati: -37.687217,
                tel: "5962 5760",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE - INVERMAY (BULK C02)",
                customerNo: "99999957",
                address: "11 WINDSOR STREET,INVERMAY",
                longi: 147.136300,
                lati: -41.425500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "AUSTRALIAN PRESSURE VESSEL HEADS P/L (BULK) LOX VESSEL",
                customerNo: "AUV83801",
                address: "73 - 95 BUNNETT STREET,SUNSHINE",
                longi: 144.840930,
                lati: -37.761115,
                tel: "9311 7722",
                email: "info@airliquide.com"
            },
            {
                customerName: "UNITED FIRE SERVICES - SHIP VESSELS",
                customerNo: "UNV00901",
                address: "DOCKLANDS,DOCKLANDS",
                longi: 144.937371,
                lati: -37.812572,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "PRODUCTION RESOURCE GROUP (AUST) P/L (MINIBULK)",
                customerNo: "PRV99001",
                address: "88 NATHAN ROAD  (MINIBULK),DANDENONG SOUTH",
                longi: 145.241670,
                lati: -38.011100,
                tel: "8710 2510",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH PRIVATE HOSPITAL - VIV33500",
                customerNo: "EP502405",
                address: "29 ERIN STREET,RICHMOND",
                longi: 144.992000,
                lati: -37.816500,
                tel: "03 9426 8685",
                email: "info@airliquide.com"
            },
            {
                customerName: "ENSIGN SERVICES PTY LTD (ABBOTSFORD)",
                customerNo: "EN025001",
                address: "18 VICTORIA CRESCENT(CO2 MINIBULK),ABBOTSFORD",
                longi: 144.998400,
                lati: -37.802400,
                tel: "9419 1944",
                email: "info@airliquide.com"
            },
            {
                customerName: "C.S.I.R.O. DIVISION OF A.A.H.L (CO2 MBK)",
                customerNo: "CS383501",
                address: "RYRIE STREET(CO2 - 500),EAST GEELONG",
                longi: 144.387345,
                lati: -38.156621,
                tel: "5227 5329",
                email: "info@airliquide.com"
            },
            {
                customerName: "MILLS RUBBER INNOVATIONS (BULK)",
                customerNo: "MIV08801",
                address: "44 - 80 SINCLAIR ROAD(BULK NITROGEN),DANDENONG",
                longi: 145.193928,
                lati: -37.987090,
                tel: "9706 7399",
                email: "info@airliquide.com"
            },
            {
                customerName: "TABRO MEAT PTY LTD - VIV 45000",
                customerNo: "TBV02702",
                address: "2140 KORUMBURRA - WONTHAGGI RD,LANCE CREEK",
                longi: 145.673900,
                lati: -38.548000,
                tel: "03 5674 9300",
                email: "info@airliquide.com"
            },
            {
                customerName: "RATHBONE WINE GROUP P/L (LIN)",
                customerNo: "RBV05302",
                address: "262 - 276 LORIMER ST,PORT MELBOURNE",
                longi: 144.904100,
                lati: -37.825900,
                tel: "+61386710999",
                email: "info@airliquide.com"
            },
            {
                customerName: "DI ROSSI FOODS PTY LTD",
                customerNo: "DIV75301",
                address: "16 - 18 BATE DRIVE(N2 BULK),BRAESIDE",
                longi: 145.116200,
                lati: -38.000300,
                tel: "9587 2999",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - MED - SCH OF BIOMED SCI - B77",
                customerNo: "MSH04002",
                address: "BLDG 77, 23 INNOVATION WALKWELLINGTON ROAD,Clayton",
                longi: 145.129600,
                lati: -37.911900,
                tel: "9902 0199",
                email: "info@airliquide.com"
            },
            {
                customerName: "DE BORTOLI WINES PTY LTD ( VIV 20000 ALA 4484)",
                customerNo: "DE169201",
                address: "DE-BORTOLIS ROAD(VIV 20000 ALA 4484),BILBUL",
                longi: 146.148300,
                lati: -34.274600,
                tel: "02 6966 0100",
                email: "info@airliquide.com"
            },
            {
                customerName: "BAIADA POULTRY P/L  (CO2 BULK)",
                customerNo: "EAV57602",
                address: "17 - 19 PIPE ROAD(BULK CO2),LAVERTON NORTH",
                longi: 144.815500,
                lati: -37.821200,
                tel: "9368 9001",
                email: "info@airliquide.com"
            },
            {
                customerName: "GRACE MCCELLAR CENTRE(CO2 MINIBULK)",
                customerNo: "LIV55601",
                address: "POOL LOCATION45 BALLARAT ROAD(C02 - 176),NORTH GEELONG",
                longi: 144.336646,
                lati: -38.123450,
                tel: "4215 5851",
                email: "info@airliquide.com"
            },
            {
                customerName: "SHADOWFAX WINERY PTY LTD  (CO2 MINBULK)",
                customerNo: "SHV40501",
                address: "K. ROAD(CO2 - 240),WERRIBEE",
                longi: 144.658474,
                lati: -37.902906,
                tel: "9731 4420",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIP PLASTIC PACKAGING PTY LTD   (BULK CO2)",
                customerNo: "AC091500",
                address: "EPS OPERATIONS4 KINGS WAY(BULK C02),MOORABBIN",
                longi: 145.074100,
                lati: -37.939200,
                tel: "9577 4400",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOSCH CHASSIS SYSTEMS AUST P/L  (LIN)",
                customerNo: "BR206302",
                address: "BULK NITROGEN ACCOUNTEAST BOUNDARY ROAD(BULK NITROGEN),EAST BENTLEIGH",
                longi: 145.063700,
                lati: -37.908700,
                tel: "9575 2200 (47",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONCREIFFS PTY LTD",
                customerNo: "DBV39701",
                address: "GOULBURN VALLEY HIGHWAY(C02 MINIBULK),NAGAMBIE",
                longi: 145.152800,
                lati: -36.786700,
                tel: "5794 1446            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "BAIADA POULTRY P/L  (LIN)",
                customerNo: "EAV57603",
                address: "17 - 19 PIPE ROAD(BULK NITROGEN),LAVERTON NORTH",
                longi: 144.815500,
                lati: -37.821200,
                tel: "9368 9001",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - SCI - SCHOOL OF BIOLOGICAL SCIENCES",
                customerNo: "MSH05001",
                address: "BLDG 53, 12 INNOVATION WAYWELLINGTON ROAD,Clayton",
                longi: 145.133300,
                lati: -37.907800,
                tel: "0428 575 643",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM2A",
                customerNo: "DFV04104",
                address: "VIC DESAL PLANT - VES 3LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - MED - AUST REGEN MEDICINE INST (ARMI)",
                customerNo: "MSH02601",
                address: "BLDG 75,  15 INNOVATION WAYWELLINGTON ROAD (BULK),Clayton",
                longi: 145.143400,
                lati: -37.916500,
                tel: "9902 9610 / 9902 0199",
                email: "info@airliquide.com"
            },
            {
                customerName: "WORMALD - BULK ACCOUNT- CO2",
                customerNo: "NAV00003",
                address: "ATTN; MR JOHN NIGHTINGALE47 GILBY ROAD(CO2 MINIBULK),MOUNT WAVERLEY",
                longi: 145.129300,
                lati: -37.875900,
                tel: "03 9538 7000",
                email: "info@airliquide.com"
            },
            {
                customerName: "FLORIDIA CHEESE",
                customerNo: "FMV33801",
                address: "327 SETTLEMENT ROAD,THOMASTOWN",
                longi: 145.023700,
                lati: -37.690700,
                tel: "9464 2600",
                email: "info@airliquide.com"
            },
            {
                customerName: "PETER MACCALLUM CLINIC",
                customerNo: "PM085910",
                address: "ST ANDREWS PLACE(BULK NITROGEN),MELBOURNE",
                longi: 144.977206,
                lati: -37.811962,
                tel: "9653 9454",
                email: "info@airliquide.com"
            },
            {
                customerName: "VISY CARTONS P\L T\AS VISYPAK (LIN 50,000)",
                customerNo: "VIV95802",
                address: "MALDON STREET,BROADMEADOWS",
                longi: 144.932800,
                lati: -37.679100,
                tel: "9301 0333",
                email: "info@airliquide.com"
            },
            {
                customerName: "SALT WATER COAST LEISURE CENTRE",
                customerNo: "SBV00303",
                address: "261 SALT WATER PROMANADE,POINT COOK",
                longi: 144.778000,
                lati: -37.912900,
                tel: "83538882",
                email: "info@airliquide.com"
            },
            {
                customerName: "GROUNDMASTER ENGINEERING (BULK - LOX)",
                customerNo: "GSV09701",
                address: "67 CALARCO DRIVE,DERRIMUT",
                longi: 144.758300,
                lati: -37.799600,
                tel: "03 9394 0800",
                email: "info@airliquide.com"
            },
            {
                customerName: "TERREL ESTATE WINES (BULK CO2)",
                customerNo: "NA783302",
                address: "WHITTON STOCK ROUTE(BULK CO2),YENDA",
                longi: 146.232609,
                lati: -34.247581,
                tel: "02 69681110          ",
                email: "info@airliquide.com"
            },
            {
                customerName: "MILL PARK LEISURE CENTRE (Y M C A)",
                customerNo: "WH404801",
                address: "MORANG DRIVE(CO2 - 176 X 2),MILL PARK",
                longi: 145.056074,
                lati: -37.658046,
                tel: "9404 4811",
                email: "info@airliquide.com"
            },
            {
                customerName: "*** TELEMETRY ONLY *** RENEWED METAL TECHNOLOGIES - LOX VESSEL NO 1",
                customerNo: "REV03301",
                address: "509 BYRNES ROAD(VIV 33,000),WAGGA WAGGA",
                longi: 147.428400,
                lati: -35.059700,
                tel: "02-6937-1903",
                email: "info@airliquide.com"
            },
            {
                customerName: "TANKER/ISO TRANSFER TO TANKER/ISO - LOCATION CONFIRM REQ",
                customerNo: "99999974",
                address: "VICTORIA,VICTORIA",
                longi: 144.793200,
                lati: -37.845300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALEXANDRA FISH FARM **BULK OXYGEN**",
                customerNo: "ALV08101",
                address: "2 PENDLE BURY STREET,ALEXANDRA",
                longi: 145.717700,
                lati: -37.199600,
                tel: "03 5772 2078",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH HOSPITAL GEELONG MAIN VESSEL (LOX)",
                customerNo: "00V00602",
                address: "PIGDONS ROAD,WAURN PONDS",
                longi: 144.305000,
                lati: -38.194200,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH RICHMOND - HYDROTHERAPHY POOL (CO2 MINIBULK)",
                customerNo: "EP502404",
                address: "ERIN ST,RICHMOND",
                longi: 144.992020,
                lati: -37.816509,
                tel: "9429 4811",
                email: "info@airliquide.com"
            },
            {
                customerName: "GOULBURN RIVER TROUT PTY LTD",
                customerNo: "GOV03201",
                address: "1680 GOULBURN VALLEY HIGHWAY,ALEXANDRIA",
                longi: 145.787587,
                lati: -37.232789,
                tel: "5773 2483",
                email: "info@airliquide.com"
            },
            {
                customerName: "STOLTHAVEN COODE ISLAND PTY LTD",
                customerNo: "MBV75302",
                address: "COODE ISLAND TERMINAL46 - 52 MAC KENZIE ROAD,FOOTSCRAY",
                longi: 144.908500,
                lati: -37.813400,
                tel: "9687 2166",
                email: "info@airliquide.com"
            },
            {
                customerName: "BALLARAT PRESSINGS PTY LTD   (BULK LIN)",
                customerNo: "BAV00402",
                address: "3181 OLD MELBOURNE ROAD(BULK LIN),WARRENHEIP",
                longi: 143.933400,
                lati: -37.567200,
                tel: "5334 7040",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER (ALDERBARAN RD)",
                customerNo: "BA093901",
                address: "ALDERBARAN ROAD(BULK OXYGEN),OCEAN GROVE",
                longi: 144.542000,
                lati: -38.269500,
                tel: "03 5226 9288",
                email: "info@airliquide.com"
            },
            {
                customerName: "TOWNSEND CHEMICALS",
                customerNo: "TS420901",
                address: "114 FRANKSTON ROAD(BULK NITROGEN),DANDENONG SOUTH",
                longi: 145.215585,
                lati: -38.018634,
                tel: "9793 6000XT227",
                email: "info@airliquide.com"
            },
            {
                customerName: "COCA COLA BOTTLERS MELBOURNE",
                customerNo: "CC254901",
                address: "LEVANSWELL ROADCHAD STEEDMAN,MOORABBIN",
                longi: 145.037300,
                lati: -37.934300,
                tel: "9556 2654",
                email: "info@airliquide.com"
            },
            {
                customerName: "ITAL BISCUITS & CAKES ( CO2 MINIBULK)",
                customerNo: "AOV01901",
                address: "1962 HUME HIGHWAY(VIV 1400),CAMPBELLFIELD",
                longi: 144.949198,
                lati: -37.632612,
                tel: "9357 9799",
                email: "info@airliquide.com"
            },
            {
                customerName: "SOMERVILLE RETAIL SERVICES PTY LTD (ALIGAL 2)",
                customerNo: "PP000706",
                address: "438 SOMERVILLE ROAD(BULK CO2 - 50000C),ALTONA GATE",
                longi: 144.850986,
                lati: -37.808545,
                tel: "9315 2956",
                email: "info@airliquide.com"
            },
            {
                customerName: "FORESTERS ARMS HOTEL (MBK) - USE 3CBV047",
                customerNo: "FOV61901",
                address: "1529 DANDENONG ROAD(CO2 - 176),OAKLEIGH",
                longi: 145.091672,
                lati: -37.893127,
                tel: "9563 0233",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE TASMANIA(BULK-LIN)",
                customerNo: "00001405",
                address: "11 WINDSOR STREET,INVERMAY",
                longi: 147.136254,
                lati: -41.425501,
                tel: "6331 9755            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (S01)",
                customerNo: "99999953",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "G F C INDUSTRIES",
                customerNo: "FW519201",
                address: "42 GLENBARRY ROAD(BULK OXYGEN),CAMPBELLFIELD",
                longi: 144.958800,
                lati: -37.663200,
                tel: "9357 9900",
                email: "info@airliquide.com"
            },
            {
                customerName: "BRUNSWICK YMCA (CO2 - 240)",
                customerNo: "BR180001",
                address: "9 PHOENIX STREET,BRUNSWICK",
                longi: 144.959600,
                lati: -37.771300,
                tel: "9381 1840",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALLEN FOUNDRY",
                customerNo: "AL042601",
                address: "3 HULETT STREET(BULK CO2),SUNSHINE",
                longi: 144.811134,
                lati: -37.772733,
                tel: "9311 0451",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA - SSHINE - BULK DEPOT",
                customerNo: "00001312",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (S02)",
                customerNo: "99999955",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC SUNSHINE 50TN V1 DI PLANT",
                customerNo: "00001308",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "MAINSTREAM AQUACULTURE (LOX - 33000)",
                customerNo: "MAV04102",
                address: "73 - 79 LOCK AVENUE,WERRIBEE",
                longi: 144.664300,
                lati: -37.915300,
                tel: "9734 1912",
                email: "info@airliquide.com"
            },
            {
                customerName: "COREGAS - EX WORKS C02",
                customerNo: "LIV01008",
                address: "C/- AIR LIQUIDE5570 SOUTH GIPPSLAND HIGHWAY,LANG LANG",
                longi: 145.605400,
                lati: -38.332200,
                tel: "02 9794 2205",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONTARA WINERY",
                customerNo: "MCV48201",
                address: "CHALAMBAR ROAD(CO2 - 240),ARARAT",
                longi: 142.931142,
                lati: -37.308297,
                tel: "5352 3868",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH FREEMASONS",
                customerNo: "AIV99900",
                address: "166 CLARENDON STREET(BULK OXY),EAST MELBOURNE",
                longi: 144.983838,
                lati: -37.811078,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "POSITIVE PROTEINS P/L",
                customerNo: "POV96301",
                address: "21 INDUSTRIAL DRIVE,BRAESIDE",
                longi: 145.107300,
                lati: -38.004800,
                tel: "0438 322 232",
                email: "info@airliquide.com"
            },
            {
                customerName: "BENALLA AQUATIC CENTRE YMCA (MINI BULK)",
                customerNo: "DE188201",
                address: "4 MAIR STREET((CO2 - 300 X 2),BENALLA",
                longi: 145.981701,
                lati: -36.551495,
                tel: "03 5762 2154",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMO ACCOUNT (ANTON MAZAR) LOX",
                customerNo: "CY149702",
                address: ".ANTON MAZAR..,.",
                longi: 144.826366,
                lati: -37.788500,
                tel: "9290 1131            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE - DEVONPORT (BULK CO2)",
                customerNo: "99999903",
                address: "SHIP TO DEVONPORT TASMANIAVIA WEBB DOCK,PORT MELBOURNE",
                longi: 144.958430,
                lati: -37.846027,
                tel: "704",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMO ACCOUNT (INTERNAL)",
                customerNo: "CY149101",
                address: "PAUL HORABIK-,-",
                longi: 144.823628,
                lati: -37.779115,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "LANCE FAMILY WINES PTY LTD (CO2 MINIBULK)",
                customerNo: "LAV00201",
                address: "2130 KINGLAKE ROAD(CO2 - 300 X 2),ST ANDREWS",
                longi: 145.292720,
                lati: -37.579523,
                tel: "9710 1155",
                email: "info@airliquide.com"
            },
            {
                customerName: "YARROWEYAH ENGINEERING (BULK)",
                customerNo: "YA590802",
                address: "4346 MURRAY VALLEY HIGHWAY,YARROWEYAH",
                longi: 145.569500,
                lati: -35.924700,
                tel: "5873 2383",
                email: "info@airliquide.com"
            },
            {
                customerName: "WHITE RABBIT BREWERY",
                customerNo: "WHV01203",
                address: "221 SWANSTON STREET,SOUTH GEELONG",
                longi: 144.362320,
                lati: -38.165192,
                tel: "5962 6516",
                email: "info@airliquide.com"
            },
            {
                customerName: "C A SINCLAIR (BULK C02)",
                customerNo: "CBV04001",
                address: "LOT 1 FIRTH ROAD,BENALLA",
                longi: 145.931225,
                lati: -36.573406,
                tel: "57626897",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM - WANTIRNA  (BULK)",
                customerNo: "YNV00401",
                address: "141 MOUNTAIN HWY,WANTIRNA",
                longi: 145.216352,
                lati: -37.855292,
                tel: "9800 2555",
                email: "info@airliquide.com"
            },
            {
                customerName: "BULK OXY DEMO ACCOUNT (INTERNAL - G KENNY)",
                customerNo: "CY149301",
                address: "GARY KENNY,NORHT SUNSHINE",
                longi: 144.831940,
                lati: -37.786461,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "PORTAVIN ESTATE BOTTLERS (BULK)",
                customerNo: "POV37801",
                address: "114 - 118 TALINGA ROAD(CO2 MINIBULK),CHELTENHAM",
                longi: 145.033900,
                lati: -37.961300,
                tel: "9584 7344",
                email: "info@airliquide.com"
            },
            {
                customerName: "STAWELL GOLD MINES PTY LTD (CO2 MINIBLK)",
                customerNo: "WE703702",
                address: "LEVIATHAN ROAD,STAWELL",
                longi: 142.803400,
                lati: -37.058600,
                tel: "5358 1022",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - CNTRL - MELB CNTR FOR NANOFAB (MCN)",
                customerNo: "MSH00501",
                address: "151 WELLINGTON RD (BULK)BUILDING 222,Clayton",
                longi: 145.143400,
                lati: -37.916500,
                tel: "9902 9653 / 9902 4682",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE -  SPECIALTY GASES(LOX)",
                customerNo: "99999937",
                address: "40 BUNNETT STREET(BULK OXY),NORTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "HUNT LASERCUT  (BULK NITRO)",
                customerNo: "HU174102",
                address: "8 - 16 REDWOOD DRIVE(BULK NITROGEN),DINGLEY",
                longi: 145.111837,
                lati: -37.984245,
                tel: "9551 3077",
                email: "info@airliquide.com"
            },
            {
                customerName: "NUFARM LTD - N2  (BULK NITROGEN)",
                customerNo: "NU062102",
                address: "103 PIPE ROAD(BULK NITROGEN),LAVERTON NORTH",
                longi: 144.798800,
                lati: -37.825400,
                tel: "9282 1000",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE AUSTIN HOSPITAL (BULK)",
                customerNo: "THV99602",
                address: "WATERDALE ROAD OFF BURGUNDY ST(BULK OXYGEN),HEIDELBERG",
                longi: 145.059496,
                lati: -37.757551,
                tel: "9496 5000",
                email: "info@airliquide.com"
            },
            {
                customerName: "VITAN NOMINEES T/AS PUOPOLO S/GOODS (BULK)",
                customerNo: "VI103802",
                address: "118 -124 FITZGERALD ROAD(BULK - 1300C),LAVERTON NORTH",
                longi: 144.787016,
                lati: -37.824930,
                tel: "9369 3977",
                email: "info@airliquide.com"
            },
            {
                customerName: "QUALITY BAKERS (BLK NITRO)",
                customerNo: "GOV01301",
                address: "45 - 53 WHITESIDE ROAD(BULK NITROGEN),CLAYTON SOUTH",
                longi: 145.121391,
                lati: -37.938545,
                tel: "1300 789 012",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOEING AEROSTRUCTURES AUSTRALIA",
                customerNo: "AE013301",
                address: "226 LORIMER STREET(BULK NITROGEN),PORT MELBOURNE",
                longi: 144.922600,
                lati: -37.831500,
                tel: "9647 3264",
                email: "info@airliquide.com"
            },
            {
                customerName: "CRYOGRIND AUST PTY LTD",
                customerNo: "CR196501",
                address: "12 - 20 MOON STREET(BULK NITROGEN),MOOLAP",
                longi: 144.413600,
                lati: -38.165200,
                tel: "5248 2221            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "TML ENTERPRISES PTY LTD  (MINIBULK)",
                customerNo: "TMV58801",
                address: "HER MAJESTYS THEATRE219 EXHIBITION STREET,MELBOURNE",
                longi: 144.970000,
                lati: -37.811100,
                tel: "0409 630 291",
                email: "info@airliquide.com"
            },
            {
                customerName: "GRAEME MILLER WINES",
                customerNo: "GRV26202",
                address: "1620 MELBA HWY,DIXONS CREEK",
                longi: 145.423500,
                lati: -37.606300,
                tel: "5965 2553",
                email: "info@airliquide.com"
            },
            {
                customerName: "ELTHAM LEISURE CENTRE YMCA (MAIN POOL}",
                customerNo: "SH194800",
                address: "ENTER VIA SUSAN STREETWITHERS STREET(CO2 - 300),ELTHAM",
                longi: 145.141600,
                lati: -37.723500,
                tel: "9439 2266",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - HAWTHORN LEISURE CENTRE (BULK)",
                customerNo: "HA179800",
                address: "LINDA CRESCENT(CO2 - 3 * 180),HAWTHORN",
                longi: 145.032800,
                lati: -37.822200,
                tel: "8393 9500",
                email: "info@airliquide.com"
            },
            {
                customerName: "MELTON WAVES DIV - PLSS (CO2 MINIBULK)",
                customerNo: "ME672201",
                address: "206 COBURNS ROAD(CO2 - 500),MELTON",
                longi: 144.569700,
                lati: -37.678700,
                tel: "9747 4333",
                email: "info@airliquide.com"
            },
            {
                customerName: "CORPORAL PTY LTD T/A SNOWY MOUNTAIN TROUT FARM (BULK LOX)",
                customerNo: "CPV03502",
                address: "WEST BLOWERING ROAD(BULK LOX),TUMUT",
                longi: 148.246577,
                lati: -35.389391,
                tel: "02 6947 3612",
                email: "info@airliquide.com"
            },
            {
                customerName: "HAZELDENES CHICKEN FARM ( BULK OXYGEN)",
                customerNo: "HA107701",
                address: "74 HAZELDENE ROAD(BULK OXYGEN),LOCKWOOD",
                longi: 144.164089,
                lati: -36.795905,
                tel: "5431 1300",
                email: "info@airliquide.com"
            },
            {
                customerName: "FOODMACH  - BULK LIN PTY LTD",
                customerNo: "FO545606",
                address: "1 DARLING STREET,ECHUCA",
                longi: 144.764500,
                lati: -36.129100,
                tel: "5482 4666 / 0417 030 276",
                email: "info@airliquide.com"
            },
            {
                customerName: "OPPY HEAT TREATMENT PTY LTD (BULK)",
                customerNo: "OPV28701",
                address: "23 GROSVENOR STREET(BULK NITROGEN),ABBOTSFORD",
                longi: 145.006300,
                lati: -37.809500,
                tel: "9428 8039",
                email: "info@airliquide.com"
            },
            {
                customerName: "BRU 4 U   (PLV176)",
                customerNo: "BRV31401",
                address: "UNIT 4 & 5, 100 BARWON TERRACE(MINIBULK 176),GEELONG",
                longi: 144.367000,
                lati: -38.172200,
                tel: "5221 3500",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE SSHINE - MEDICAL VESSEL",
                customerNo: "99999925",
                address: "40 BUNNETT STREET(BULK CO2),SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FAIRMONT MEDICAL  (BULK)",
                customerNo: "FAV00201",
                address: "11 SCORESBY ROAD(BULK NITROGEN),BAYSWATER",
                longi: 145.267944,
                lati: -37.842567,
                tel: "9720 8840",
                email: "info@airliquide.com"
            },
            {
                customerName: "REBELLO WINES (ALIGAL 1 BULK)",
                customerNo: "RFV02201",
                address: "297 DOUTHIE ROAD,SEVILLE EAST",
                longi: 145.513300,
                lati: -37.798000,
                tel: "+619001 9205",
                email: "info@airliquide.com"
            },
            {
                customerName: "BLACKSTEEL ENGINEERING",
                customerNo: "BL789301",
                address: "35 MALUA STREET(BULK OXYGEN),RESERVOIR",
                longi: 144.984810,
                lati: -37.718601,
                tel: "9462 1111",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAMPOLI FOODS  (BULK NITR)",
                customerNo: "CAV79402",
                address: "45 - 47 LAKESIDE AVENUE(BULK NITROGEN),RESERVOIR",
                longi: 144.987500,
                lati: -37.707900,
                tel: "9460 6766",
                email: "info@airliquide.com"
            },
            {
                customerName: "HILTON MANUFACTURING P/L (LOX)",
                customerNo: "HI689599",
                address: "110 BANGHOLME ROAD(LOX),DANDENONG SOUTH",
                longi: 145.197700,
                lati: -38.036800,
                tel: "8791 9400",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE SHOTTON GROUP (LIN)",
                customerNo: "TIV13002",
                address: "139 - 145 GREENS ROAD,DANDENONG SOUTH",
                longi: 145.210300,
                lati: -38.013000,
                tel: "9791 6444",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM3A",
                customerNo: "DFV04106",
                address: "VIC DESAL PLANT - VES 5LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "HILTON MANUFACTURING P/L (VIV6000) LAR",
                customerNo: "HI689506",
                address: "124 BANGHOLME ROAD(ALA4047),DANDENONG SOUTH",
                longi: 145.197700,
                lati: -38.036800,
                tel: "8791 9400",
                email: "info@airliquide.com"
            },
            {
                customerName: "HOFMANN ENGINEERING (BENDIGO) (BULK - LOX)",
                customerNo: "HOV97401",
                address: "25 BUSHMASTER COURT,BENDIGO",
                longi: 144.286400,
                lati: -36.737000,
                tel: "5440 7404",
                email: "info@airliquide.com"
            },
            {
                customerName: "BERTOCCHI M. & SONS PTY LTD  (N2 BULK)",
                customerNo: "BE963103",
                address: "LOT 97-113 TRAWALLA AVENUE,THOMASTOWN",
                longi: 144.973900,
                lati: -37.686700,
                tel: "9355 5100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FOWLES WINE CO2 BULK)",
                customerNo: "PLV00001",
                address: "LAMBING GULLY ROADBOTTLING SITE(CO2 - 240 X 2),AVENEL",
                longi: 145.226061,
                lati: -36.972918,
                tel: "5796 2150",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - KENSINGTON  (CO2 - 176)",
                customerNo: "YMV66701",
                address: "CNR KENSINGTON RD & ALTONA ST(CO2 - 176),KENSINGTON",
                longi: 144.924570,
                lati: -37.795945,
                tel: "9376 1633",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUGAR AUSTRALIA (CO2 MINIBULK)",
                customerNo: "CS184500",
                address: "265 WHITEHALL STREET(CO2 - 500),YARRAVILLE",
                longi: 144.900300,
                lati: -37.817800,
                tel: "9283 4558",
                email: "info@airliquide.com"
            },
            {
                customerName: "BROADS POULTRY (LIN - VIV20,000)",
                customerNo: "VIV03602",
                address: "1 WILTSHIRE LANE,DELACOMBE",
                longi: 143.810900,
                lati: -37.571100,
                tel: "5461 1966",
                email: "info@airliquide.com"
            },
            {
                customerName: "LASSLET RUBBER (BULK)",
                customerNo: "LA828601",
                address: "15 PAW PAW ROAD(BULK NITROGEN),BROOKLYN",
                longi: 144.835408,
                lati: -37.822680,
                tel: "8329 4800",
                email: "info@airliquide.com"
            },
            {
                customerName: "HOLGATE BREWHOUSE (2 X 240 KG )",
                customerNo: "HOV03801",
                address: "79 HIGH STREET,WOODEND",
                longi: 144.527000,
                lati: -37.357000,
                tel: "5427 3522",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUN PHARMACEUTICAL INDUSTRIES ( AUSTRALIA) PTY LTD (CO2)",
                customerNo: "SVV02302",
                address: "199 PRINCESS HIGHWAY,PORT FAIRY",
                longi: 142.236100,
                lati: -38.366100,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "KNOX LEISUREWORKS YMCA",
                customerNo: "KNV67801",
                address: "TORMORE ROAD(MBK 500 * 1, MBK 240 * 1),BORONIA",
                longi: 145.286900,
                lati: -37.862500,
                tel: "03 9762 3133",
                email: "info@airliquide.com"
            },
            {
                customerName: "VICTORIAN ARTS CENTRE (MINIBULK)",
                customerNo: "VI006501",
                address: "THEATRES STAGE DOOR1 STURT STREET(MINIBULK),MELBOURNE",
                longi: 144.975000,
                lati: -37.842300,
                tel: "9281 8365",
                email: "info@airliquide.com"
            },
            {
                customerName: "BENDIGO HEALTH (BACKUP VESSEL) VIV3000",
                customerNo: "00V00801",
                address: "ENTRANCE OFF BANE STREET(BULK MEDICAL OXYGEN),BENDIGO",
                longi: 144.283700,
                lati: -36.758700,
                tel: "5454 6000",
                email: "info@airliquide.com"
            },
            {
                customerName: "FIRE PROTECTION SERVICES PTY LTD",
                customerNo: "FIV73200",
                address: "FACTORY2 , 13 GATWICK ROAD(C02 - 500 - CUST OWN VESSEL),BAYSWATER NORTH",
                longi: 145.296694,
                lati: -37.821312,
                tel: "9761 4411            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "DI ROSSI FOODS PTY LTD",
                customerNo: "DIV75302",
                address: "16 - 18 BATE DRIVE(CO2 BULK),BRAESIDE",
                longi: 145.116200,
                lati: -38.000300,
                tel: "9587 2999",
                email: "info@airliquide.com"
            },
            {
                customerName: "*** TELEMETRY ONLY *** RENEWED METAL TECHNOLOGIES - LOX  VESSEL NO 2",
                customerNo: "REV03302",
                address: "509 BYRNES ROAD(VIV 33,000),WAGGA WAGGA",
                longi: 147.428400,
                lati: -35.059700,
                tel: "02-6937-1903",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - ENG- NEW HORIZONS (VIV-20000)",
                customerNo: "MSH07501",
                address: "BLDG 82, 20 RESEARCH WAYWELLINGTON ROAD,Clayton",
                longi: 145.132500,
                lati: -37.908100,
                tel: "9905 1957 / 9902 0199",
                email: "info@airliquide.com"
            },
            {
                customerName: "SCHLUMBERGER  AUSTRALIA PTY LTD (BULK NITROGEN)",
                customerNo: "SCV00701",
                address: "C/O AIR LIQUIDE ALTONA  ASU631 KOROROIT CREEK RD,ALTONA",
                longi: 144.793000,
                lati: -37.845500,
                tel: "5149 5600",
                email: "info@airliquide.com"
            },
            {
                customerName: "VARIAN AUSTRALIA P/L (LAR ALPHAGAZ LIQ)",
                customerNo: "VA524310",
                address: "679 SPRINGVALE ROAD(BULK ARGON),MULGRAVE",
                longi: 145.158400,
                lati: -37.921500,
                tel: "9560 7133",
                email: "info@airliquide.com"
            },
            {
                customerName: "SHANTELL WINERY (LC02 180)",
                customerNo: "SHV09501",
                address: "WOODNOOK DRIVE,DIXONS CREEK",
                longi: 145.414057,
                lati: -37.579889,
                tel: "5965 2321",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER(BAWTREE RD)",
                customerNo: "BA182701",
                address: "BAWTREE ROAD(BULK OXYGEN),LEOPOLD",
                longi: 144.491900,
                lati: -38.192700,
                tel: "5226 9123",
                email: "info@airliquide.com"
            },
            {
                customerName: "CASA IBERICA (BULK NITROGEN)",
                customerNo: "CAV40701",
                address: "24 - 26 HUGHES STREET(BULK NITROGEN),YARRAVILLE",
                longi: 144.889699,
                lati: -37.823182,
                tel: "9687 8571",
                email: "info@airliquide.com"
            },
            {
                customerName: "I.B & W.L MORTLOCK",
                customerNo: "IBV24900",
                address: "LOT TIPPERARY LANE(CO2 ),ALMA",
                longi: 143.703858,
                lati: -37.034716,
                tel: "5461 1111            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAROLS COUNTRY KITCHEN",
                customerNo: "CA889101",
                address: "13 GARFIELD STREET(CO2 - 300),RICHMOND",
                longi: 144.992613,
                lati: -37.811666,
                tel: "9429 6822            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "CHARLES STURT UNIVERSITY-WINERY (CO2)",
                customerNo: "RI108701",
                address: "COLLEGE WINERY,WAGGA WAGGA",
                longi: 147.354900,
                lati: -35.059800,
                tel: "0415463443",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA ASHBURTON POOL & RECREATION CENTRE (CO2 - 500)",
                customerNo: "AS179701",
                address: "8 WARNER AVENUE(CO2 - 500),ASHBURTON",
                longi: 145.085331,
                lati: -37.866452,
                tel: "9885 0333",
                email: "info@airliquide.com"
            },
            {
                customerName: "SOUTHEAST PRIVATE HOSPITAL (BULK)",
                customerNo: "SOV85101",
                address: "CNR PRINCESS HWY &HEATHERTON ROAD,NOBLE PARK",
                longi: 145.193006,
                lati: -37.966455,
                tel: "9549 6555            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "COLIBAN REGIONAL WATER CORP (MALDON)",
                customerNo: "CPV08601",
                address: "98 CASTLEMAINE-MALDON ROAD(VIV1400),MUCKLEFORD",
                longi: 144.168123,
                lati: -37.059501,
                tel: "5434 1385",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE TASMANIA (ARGON)",
                customerNo: "00001403",
                address: "C/O COMALCO,INVERMAY",
                longi: 147.135346,
                lati: -41.420612,
                tel: "6331 9755            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "WARBURN ESTATE (BULK CO2 - VIV 10,000)",
                customerNo: "RI622002",
                address: "FARM 1305 HILLSTON ROADTHARBOGANG,GRIFFITH",
                longi: 145.998602,
                lati: -34.273425,
                tel: "02 6963 8300         ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999943",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "                     ",
                email: "info@airliquide.com"
            },
            {
                customerName: "DOVETON POOL IN THE PARK",
                customerNo: "DO180301",
                address: "KIDDS ROAD(CO2 - 240),DOVETON",
                longi: 145.243072,
                lati: -37.988866,
                tel: "9791 8346",
                email: "info@airliquide.com"
            },
            {
                customerName: "AKZO NOBEL PTY LTD (LIN)",
                customerNo: "AZV89401",
                address: "51 MCINTYRE ROAD(BULK NITROGEN),SUNSHINE",
                longi: 144.829800,
                lati: -37.770600,
                tel: "9313 4555",
                email: "info@airliquide.com"
            },
            {
                customerName: "BUCKLEYS ENTERTAINMENT CNTRE (CO2 MINIBULK)",
                customerNo: "BUV18601",
                address: "54 FELMONGERS ROAD(C02 - 240),BREAKWATER",
                longi: 144.380900,
                lati: -38.180600,
                tel: "03 5248 4866",
                email: "info@airliquide.com"
            },
            {
                customerName: "SIMPLOT CO2 (FLEMINGTON)",
                customerNo: "SIV01701",
                address: "UNIT 2, 31-33 ASCOT VALE ROAD,FLEMINGTON",
                longi: 144.921700,
                lati: -37.784500,
                tel: "8371 5422",
                email: "info@airliquide.com"
            },
            {
                customerName: "SYNCHROTRON LIGHT SOURCE AUSTRALIA (LIN)",
                customerNo: "SYV98101",
                address: "ATTN: ACCOUNTS800 BLACKBURN ROAD,CLAYTON",
                longi: 145.140679,
                lati: -37.913826,
                tel: "8540 4189",
                email: "info@airliquide.com"
            },
            {
                customerName: "LONG GULLY ESTATE WINES (MINI BULK)",
                customerNo: "LO426100",
                address: "LONG GULLY ROAD,HEALESVILLE",
                longi: 145.474606,
                lati: -37.643189,
                tel: "5962 3663",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEAKIN UNIVERSITY - IFM BUILDING NJ",
                customerNo: "DFV04001",
                address: "NICOL DRIVE NORTH (BLDG NJ)OFF PIGDONS RD  (VIV50000),WAURN PONDS",
                longi: 144.299100,
                lati: -38.196300,
                tel: "5227 1303",
                email: "info@airliquide.com"
            },
            {
                customerName: "KEW RECREATIONAL CENTRE (1X240 / 1X500)",
                customerNo: "CI752601",
                address: "308 HIGH STREET(CO2 - 500),KEW",
                longi: 145.032800,
                lati: -37.803500,
                tel: "9853-6177",
                email: "info@airliquide.com"
            },
            {
                customerName: "NORLANE HOTEL (CO2 MINIBULK)",
                customerNo: "NO349301",
                address: "2 PRINCES HWY(CO2 - 176),NORLANE",
                longi: 144.360300,
                lati: -38.095300,
                tel: "5278 2423",
                email: "info@airliquide.com"
            },
            {
                customerName: "HANGING ROCK WINERY LTD (CO2 MINIBULK)",
                customerNo: "HA190701",
                address: "JIM ROAD(CO2  2 X 300),NEWHAM",
                longi: 144.592668,
                lati: -37.311704,
                tel: "5427 0542            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "MOUNT AVOCA PTY LTD",
                customerNo: "MT081901",
                address: "MOATES LANE(CO2 - 240),AVOCA",
                longi: 143.417652,
                lati: -37.077983,
                tel: "5465 3282",
                email: "info@airliquide.com"
            },
            {
                customerName: "BERTON VINEYARDS PTY LTD",
                customerNo: "BEV08502",
                address: "55 MIRROOL AVENUE,YENDA",
                longi: 146.198200,
                lati: -34.247300,
                tel: "02 6968 1600",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUST INVERMAY (BULK OXY)",
                customerNo: "99999933",
                address: "11 WINDSOR STREET,INVERMAY",
                longi: 147.136300,
                lati: -41.425500,
                tel: "03 6334 9666",
                email: "info@airliquide.com"
            },
            {
                customerName: "GATEWAY HYDROPONICS",
                customerNo: "SPV58201",
                address: "669 MAROONDAH HWY(CO2 MINIBULK),COLDSTREAM",
                longi: 145.378956,
                lati: -37.722469,
                tel: "9739 0568            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "TOX FREE AUSTRALIA PTY LTD",
                customerNo: "TPV01800",
                address: "83 DOHERTYS ROADLAVERTON NORTH,LAVERTON NORTH",
                longi: 144.794800,
                lati: -37.828900,
                tel: "03 9224 2052",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARLEY CORN BREWERS (CVL INVESTMENTS)",
                customerNo: "BAV04001",
                address: "388 HUNTINGDALE ROAD,OAKLEIGH SOUTH",
                longi: 145.102700,
                lati: -37.916900,
                tel: "9548 8288",
                email: "info@airliquide.com"
            },
            {
                customerName: "WERRIBEE MERCY HOSPITAL (BULK)",
                customerNo: "WEV00201",
                address: "300 - 310 PRINCES HWY(BULK OXYGEN),WERRIBEE",
                longi: 144.698063,
                lati: -37.886040,
                tel: "9216 8888            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "GROUNDMASTER ENGINEERING (BULK - LIN)",
                customerNo: "GSV09702",
                address: "67 CALARCO DRIVE,DERRIMUT",
                longi: 144.758300,
                lati: -37.799600,
                tel: "03 9394 0800",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE ANGLISS HOSPITAL (BULK OXYGEN)",
                customerNo: "AN182601",
                address: "THE ANGLISS HOSPITALALBERT STREET,FERNTREE GULLY",
                longi: 145.313737,
                lati: -37.898892,
                tel: "9764 6111",
                email: "info@airliquide.com"
            },
            {
                customerName: "ST VINCENTS HOSPITAL - FITZROY",
                customerNo: "ST371505",
                address: "PRINCES STREET(BULK OXYGEN),FITZROY",
                longi: 144.978700,
                lati: -37.798700,
                tel: "9288 2700",
                email: "info@airliquide.com"
            },
            {
                customerName: "GWM WATER - POMONAL (STAWELL)",
                customerNo: "GRV26600",
                address: "TUNNEL ROAD(BULK C02),POMONAL",
                longi: 142.611000,
                lati: -37.160700,
                tel: "5382 4611",
                email: "info@airliquide.com"
            },
            {
                customerName: "STAWELL GOLD MINES PTY LTD",
                customerNo: "WE703701",
                address: "LEVIATHAN ROAD,STAWELL",
                longi: 142.803400,
                lati: -37.058600,
                tel: "5358 1022.",
                email: "info@airliquide.com"
            },
            {
                customerName: "PASCOE VALE SWIMMING POOL",
                customerNo: "PA299601",
                address: "7 PROSPECT STREET(CO2 - 176),PASCOE VALE",
                longi: 144.937092,
                lati: -37.729033,
                tel: "9354 1723            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "FLORIDIA CHEESE",
                customerNo: "FMV33802",
                address: "327 SETTLEMENT ROAD,THOMASTOWN",
                longi: 145.023962,
                lati: -37.689127,
                tel: "9464 2600",
                email: "info@airliquide.com"
            },
            {
                customerName: "EPWORTH HOSPITAL GEELONG - BACKUP VESSEL (LOX)",
                customerNo: "00V00901",
                address: "PIGDONS ROAD,WAURN PONDS",
                longi: 144.304938,
                lati: -38.196056,
                tel: "+61396605888",
                email: "info@airliquide.com"
            },
            {
                customerName: "CASELLA WINES PTY LTD   (C02 VIV 50T)",
                customerNo: "CA705005",
                address: "FARM 1471, WAKELEY ROAD(BULK CO2),YENDA",
                longi: 146.198500,
                lati: -34.250200,
                tel: "02 6968 1346",
                email: "info@airliquide.com"
            },
            {
                customerName: "CADBURY SCHWEPPES PTY LTD (BULK CO2)",
                customerNo: "CA261802",
                address: "BEVERAGE DRIVE(BULK CO2),TULLAMARINE",
                longi: 144.862300,
                lati: -37.717800,
                tel: "9339 6352",
                email: "info@airliquide.com"
            },
            {
                customerName: "ROCHFORD WINES  (CO2 MINIBULK)",
                customerNo: "EY426000",
                address: "LOT 7 MAROONDAH HIGHWAY(CO2 - 500),COLDSTREAM",
                longi: 145.474500,
                lati: -37.685900,
                tel: "5962 2119",
                email: "info@airliquide.com"
            },
            {
                customerName: "NISSAN CASTING (BULK LIN)",
                customerNo: "NI042202",
                address: "CASTING PLANTFRANKSON ROAD(BULK NITROGEN),DANDENONG",
                longi: 145.216600,
                lati: -38.021300,
                tel: "97974008",
                email: "info@airliquide.com"
            },
            {
                customerName: "TARRAWARRA VINEYARD P/L (CO2 MINIBULK)",
                customerNo: "TA165501",
                address: "HEALESVILLE YARRA GLEN ROAD(CO2 - 500),YARRA GLEN",
                longi: 145.456195,
                lati: -37.660263,
                tel: "5962 3311            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "OUTOTEC  PTY  LTD  (LOX)",
                customerNo: "AU963201",
                address: "12 KITCHEN ROAD(BULK OXYGEN),DANDENONG",
                longi: 145.224300,
                lati: -38.024500,
                tel: "99041600",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEE VINE ESTATE (CO2 - BULK)",
                customerNo: "DFV06701",
                address: "FARM 576ROSSETTO ROAD,BEELBANGERA",
                longi: 146.095900,
                lati: -34.267500,
                tel: "(02) 6962 6935",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEPARTMENT OF ECONOMIC DEVELOPMENT JOBS TRANSPORT & RESOU",
                customerNo: "DFV07001",
                address: "455 GOULBURN VALLEY HWY(BULK - LOX),EILDON",
                longi: 145.874600,
                lati: -37.257300,
                tel: "+61357708018",
                email: "info@airliquide.com"
            },
            {
                customerName: "BIDGEEBONG WINES AUST LTD (BULK)",
                customerNo: "BIV92400",
                address: "352 BYRNES ROAD(BULK C02),WAGGA WAGGA",
                longi: 147.422825,
                lati: -35.073945,
                tel: "02 6931 9955         ",
                email: "info@airliquide.com"
            },
            {
                customerName: "TAYLOR FERGUSON & CO P/L T/AS ALEPAT TAYLOR - PRESTON SITE",
                customerNo: "AMV08601",
                address: "62 ALBERT STREETBULK CO2,PRESTON",
                longi: 145.023400,
                lati: -37.746200,
                tel: "03 9487 2599",
                email: "info@airliquide.com"
            },
            {
                customerName: "COUNTRY LIFE BAKERY - BULK LIN",
                customerNo: "CO400301",
                address: "21 - 23 HYDRIVE CLOSE,DANDENONG SOUTH",
                longi: 145.232793,
                lati: -38.030405,
                tel: "9799 8077",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM2B",
                customerNo: "DFV04105",
                address: "VIC DESAL PLANT - VES 4LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - CNTRL - CNTR FOR ELCTN MCRSCPY (MCEM)",
                customerNo: "MSH00601",
                address: "BLDG 81,10 INNOVATION WALKWELLINGTON ROAD,Clayton",
                longi: 145.143400,
                lati: -37.916500,
                tel: "9905 5563 / 9902 4168",
                email: "info@airliquide.com"
            },
            {
                customerName: "BAILEYS OF GLENROWAN  (CO2 MBK)",
                customerNo: "BBV40401",
                address: "TAMINICK GAP ROAD(CO2 - 240),GLENROWAN",
                longi: 146.192600,
                lati: -36.415900,
                tel: "5766 1600",
                email: "info@airliquide.com"
            },
            {
                customerName: "KING VALLEY  WINES PTY LTD",
                customerNo: "KIV65900",
                address: "WHITTY LANE(BULK CO2),WHITFIELD",
                longi: 146.411600,
                lati: -36.765100,
                tel: "5729 8555",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE -  SPECIALTY GASES (LIN)",
                customerNo: "99999936",
                address: "40 BUNNETT STREET(BULK NITROGEN),NORTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999941",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.304554,
                lati: -35.737367,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "WESTEND ESTATE PTY LTD- (VESSEL NO 1) - SERIAL NO 603H",
                customerNo: "WEV02902",
                address: "1283 BRAYNE ROAD(BULK - VIV7000),GRIFFITH",
                longi: 146.027774,
                lati: -34.277060,
                tel: "02 6969 0800",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE SHOTTON GROUP (LOX)",
                customerNo: "TIV13001",
                address: "139 - 145 GREENS ROAD,DANDENONG SOUTH",
                longi: 145.210300,
                lati: -38.013000,
                tel: "9791 6444",
                email: "info@airliquide.com"
            },
            {
                customerName: "DAIRY COUNTRY  - BULK CO2",
                customerNo: "DBV07601",
                address: "3 - 4 TARMAC DRIVE,TULLAMARINE",
                longi: 144.871000,
                lati: -37.692800,
                tel: "9336 9100",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALBURY BASE HOSPITAL - BULK OXY BACK UP VESSEL",
                customerNo: "00V00200",
                address: "HUME HEALTH SERVICEBORELLA ROAD(BULK),ALBURY EAST",
                longi: 147.259300,
                lati: -35.997700,
                tel: "02 6058 4475",
                email: "info@airliquide.com"
            },
            {
                customerName: "DAIRY - PAC AUSTRALIA (BULK LIN)",
                customerNo: "DAV91603",
                address: "UNIT 1B, 60 KEON PARADE(VIV 6500),THOMASTOWN",
                longi: 145.019700,
                lati: -37.695700,
                tel: "9460 9888",
                email: "info@airliquide.com"
            },
            {
                customerName: "CEM PTY LTD  (BMEADOWS - NITRO BLK VIV2,500)",
                customerNo: "CE293203",
                address: "63 - 65 MAFFRA STREET,BROADMEADOWS",
                longi: 144.940000,
                lati: -37.658900,
                tel: "9309 4822",
                email: "info@airliquide.com"
            },
            {
                customerName: "STAGONO PTY LTD (LIN)",
                customerNo: "NOV03501",
                address: "10 NORFOLK COURT (LIN),COBURG NORTH",
                longi: 144.978900,
                lati: -37.721600,
                tel: "9350 3188",
                email: "info@airliquide.com"
            },
            {
                customerName: "ST VINCENTS HOSPITAL - BULK OXY - BACK UP VESSEL",
                customerNo: "SUV06101",
                address: "PRINCES STREET,FITZROY",
                longi: 144.974889,
                lati: -37.806924,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "CAMPARI AUSTRALIA PTY LTD (BULK ALIGAL 2)",
                customerNo: "CBV08601",
                address: "81 CALARCO DRIVE(BULK ALIGAL 2),DERRIMUT",
                longi: 144.760500,
                lati: -37.799600,
                tel: "+61294782727",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM1A",
                customerNo: "DFV04102",
                address: "VIC DESAL PLANT - VES 1LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "MARIBYRNONG AQUATIC CENTRE (CO2 BULK)",
                customerNo: "MAV29101",
                address: "ROBERT BARRETT RESERVEROSAMOND ROAD(CO2 - 240 X 2),MARIBYRNONG",
                longi: 144.885200,
                lati: -37.769200,
                tel: "90324100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FARM PRIDE FOODS LTD (VIV 15,000) ALA 6703",
                customerNo: "FAV01502",
                address: "551 CHANDLER ROAD,KEYSBOROUGH",
                longi: 145.181790,
                lati: -37.996790,
                tel: "9798 7077",
                email: "info@airliquide.com"
            },
            {
                customerName: "STAGONO PTY LTD (BULK OXY)",
                customerNo: "NOV03503",
                address: "10-20 NORFOLK COURT (VIV5000),COBURG",
                longi: 144.978700,
                lati: -37.721900,
                tel: "9350 3188",
                email: "info@airliquide.com"
            },
            {
                customerName: "HAROLD HOLT SWIM CENTRE (PLV180 * 3)",
                customerNo: "HAV05501",
                address: "HAROLD HOLT SWIM CENTRE (PLV176CNR HIGH & EDGAR STREETS,GLEN IRIS",
                longi: 145.057400,
                lati: -37.860000,
                tel: "8290 1678",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE S`SHINE-CYLINDER FILLING",
                customerNo: "99999910",
                address: "40 BUNNETT STREET(BULK CO2),SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "CYLINDER DEMO ACCOUNT (INTERNAL)",
                customerNo: "CY149703",
                address: "ANTON MAZAR40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1131",
                email: "info@airliquide.com"
            },
            {
                customerName: "ST CATHERINES SCHOOL - MINIBULK",
                customerNo: "SUV07501",
                address: "17 HEYINGTON PLACE(CO2 MINI BULK - 180),TOORAK",
                longi: 145.020600,
                lati: -37.838100,
                tel: "9822 1285",
                email: "info@airliquide.com"
            },
            {
                customerName: "SOMERVILLE RETAIL SERVICES P/L (BULK OXY)",
                customerNo: "PP000702",
                address: "OXY ACCT438 SOMERVILLE ROAD(BULK OXYGEN),WEST FOOTSCRAY",
                longi: 144.877700,
                lati: -37.797400,
                tel: "9315 2956 DES",
                email: "info@airliquide.com"
            },
            {
                customerName: "QUEENS PARK POOL",
                customerNo: "QUV00101",
                address: "CNR THE STRAND & PASCOEVALE RD(CO2 MINIBULK),MOONEE PONDS",
                longi: 144.925900,
                lati: -37.761600,
                tel: "9375 3651",
                email: "info@airliquide.com"
            },
            {
                customerName: "EYE & EAR HOSPITAL",
                customerNo: "00V01001",
                address: "ST ANDREW PLACE(BULK OXYGEN),MELBOURNE",
                longi: 144.832000,
                lati: -37.781000,
                tel: "+61418173176",
                email: "info@airliquide.com"
            },
            {
                customerName: "VARIAN AUSTRALIA PTY LTD (LOX)",
                customerNo: "VA524302",
                address: "679 SPRINGVALE ROAD(BULK OXYGEN),MULGRAVE",
                longi: 145.158400,
                lati: -37.921500,
                tel: "9560 7133",
                email: "info@airliquide.com"
            },
            {
                customerName: "COLIBAN REGIONAL WATER CORP (NEWSTEAD)",
                customerNo: "CPV08602",
                address: "1726 PYRENEES HIGHWAYVIV 1400,MCKENZIE HILL",
                longi: 144.171910,
                lati: -37.069937,
                tel: "5434 1385",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM - DINGLEY ( BULK)",
                customerNo: "YNV00301",
                address: "CNR CENTRE DANDENONG ROAD &TOOTAL ROAD,DINGLEY",
                longi: 145.121541,
                lati: -37.973762,
                tel: "9558 0666",
                email: "info@airliquide.com"
            },
            {
                customerName: "MONASH UNI - CLAYTON - MED - SCH OF BIOMED SCI - B77",
                customerNo: "MSH04001",
                address: "BLDG 77, 23 INNOVATION WALKWELLINGTON ROAD,Clayton",
                longi: 145.143400,
                lati: -37.916500,
                tel: "9902 0199",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARTTER ENTERPRISES PTY LTD (BULK OXY)",
                customerNo: "BBV00606",
                address: "MURPHY ROAD (VIV29,000),HANWOOD",
                longi: 146.041800,
                lati: -34.341700,
                tel: "02 4924 4350",
                email: "info@airliquide.com"
            },
            {
                customerName: "MACKAY CONSOLIDATED INDUSTRIES",
                customerNo: "MA951401",
                address: "260 CHESTERVILLE ROAD(BULK NITROGEN),MOORABBIN",
                longi: 145.061771,
                lati: -37.940475,
                tel: "9555 6500            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE FAIRFIELD",
                customerNo: "99999900",
                address: "43-47 PINE ROAD,FAIRFIELD",
                longi: 150.960650,
                lati: -33.864620,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "LAVERTON SWIM CENTRE (MINIBULK)",
                customerNo: "LAV03901",
                address: "JENNINGS STREET(CO2 - 176),LAVERTON",
                longi: 144.769794,
                lati: -37.862015,
                tel: "9360 0318            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE AUSTRALIAN STEEL COMPANY (OPERATIONS) PTY LTD(ADMINISTRATORS APPOINTED)",
                customerNo: "TIV17601",
                address: "105 DOHERTYS ROAD(BULK ARGON),LAVERTON NORTH",
                longi: 0.000000,
                lati: 0.000000,
                tel: "+61393602360",
                email: "info@airliquide.com"
            },
            {
                customerName: "WANGARATTA BASE HOSPITAL",
                customerNo: "WR542602",
                address: "GREEN STREET(BULK OXYGEN),WANGARATTA",
                longi: 146.325700,
                lati: -36.354300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE LOCAL PT MELB (USE THV085)",
                customerNo: "THV63101",
                address: "22 - 24 BAY STREET(CO2 MINIBULK),PORT MELBOURNE",
                longi: 144.938730,
                lati: -37.842656,
                tel: "9646 0072            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "UNITED SURFACE TECHNOLOGY",
                customerNo: "HA646703",
                address: "26-32 ABERDEEN ROADBULK LIN,ALTONA",
                longi: 144.808042,
                lati: -37.861393,
                tel: "9398 5925",
                email: "info@airliquide.com"
            },
            {
                customerName: "GWM WATER - TAYLORS LAKE (BULK)",
                customerNo: "GWV00701",
                address: "HORSHAM - LUBECK ROAD,HORSHAM",
                longi: 142.392600,
                lati: -36.760300,
                tel: "5381 9611",
                email: "info@airliquide.com"
            },
            {
                customerName: "COREGAS - EX WORKS BULK LIN",
                customerNo: "LIV01006",
                address: "C/O AIR LIQUIDE ALTONA ASU631 KOROROIT CREEK RD,ALTONA",
                longi: 144.793200,
                lati: -37.845300,
                tel: "(03) 8539 1605",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEMO ACCT (INTERNAL) - CO2 - JAMIE GREASLEY",
                customerNo: "CY149201",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1127",
                email: "info@airliquide.com"
            },
            {
                customerName: "IVANHOE GIRLS GRAMMAR SCHOOL (BULK)",
                customerNo: "IV188300",
                address: "123 MARSHAL STREET(C02 - 240),IVANHOE",
                longi: 145.047300,
                lati: -37.766600,
                tel: "9490 6222",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC SUNSHINE 50TN V2 DI PLANT",
                customerNo: "00001309",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "CARLTON YMCA (CO2 - 240)",
                customerNo: "CA180101",
                address: "CARLTON BATHS COMMUNITY CENTRE248 RATHDOWNE STREET(CO2 - 240),CARLTON",
                longi: 144.971700,
                lati: -37.793500,
                tel: "9347 3677",
                email: "info@airliquide.com"
            },
            {
                customerName: "SUNSHINE LEISURE CENTRE (CO2 BLK)",
                customerNo: "SU160401",
                address: "5 KENNEDY STREET(CO2 - 240),SUNSHINE",
                longi: 144.834900,
                lati: -37.784500,
                tel: "9249 4615",
                email: "info@airliquide.com"
            },
            {
                customerName: "PEERLESS (LAVERTON)",
                customerNo: "PEV90101",
                address: "11 HOLCOURT ROAD,LAVERTON NORTH",
                longi: 144.810400,
                lati: -37.819200,
                tel: "9369 4123",
                email: "info@airliquide.com"
            },
            {
                customerName: "UNIDRIVE PTY LTD CO2  (MINI BULK)",
                customerNo: "UNV52100",
                address: "DAVID MILLMAN45 - 49 MCNAUGHTON ROAD(CO2 - 300),CLAYTON",
                longi: 145.137200,
                lati: -37.927500,
                tel: "0400440153",
                email: "info@airliquide.com"
            },
            {
                customerName: "FRONTLINE ENGINEERING PL - (CO2 - 240)",
                customerNo: "FR215401",
                address: "55 LETCON DRIVE(CO2 - 240),DANDENONG SOUTH",
                longi: 145.192158,
                lati: -38.037115,
                tel: "0422 445 633",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARDEN FABRICATION PTY LTD",
                customerNo: "BBV41602",
                address: "35 GATWICK ROAD(BULK NITRO) VIV6000,BAYSWATER NORTH",
                longi: 145.296800,
                lati: -37.824200,
                tel: "9729 3233",
                email: "info@airliquide.com"
            },
            {
                customerName: "DON KRC - CASTLEMAINE  -  (BULK - LIN   VIV 15,000)",
                customerNo: "DOV06301",
                address: "64 RICHARDS ROAD,CASTLEMAINE",
                longi: 144.209300,
                lati: -37.055600,
                tel: "5479 2545",
                email: "info@airliquide.com"
            },
            {
                customerName: "IDYLL WINE CO PTY LTD (BULK CO2)",
                customerNo: "IDV68302",
                address: "265 BALLAN ROAD,MOORABOOL",
                longi: 144.292300,
                lati: -38.077100,
                tel: "03 5228 488",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE MELBURNIAN ID 422669",
                customerNo: "THV05201",
                address: "250 ST KILDA ROAD(CO2 - 240),MELBOURNE",
                longi: 144.970436,
                lati: -37.825718,
                tel: "0400 559 840",
                email: "info@airliquide.com"
            },
            {
                customerName: "SOUTHERN ESTATE WINES AUST. PTY LTD (DO NOT USE)",
                customerNo: "SOV99901",
                address: "WALLA AVENUE(BULK C02)****REFER TO SPV024**,GRIFFITH",
                longi: 146.100600,
                lati: -34.256200,
                tel: "03 8320 0500",
                email: "info@airliquide.com"
            },
            {
                customerName: "SODA STREAM AUSTRALIA PTY LTD (BULK) LTV 50,000",
                customerNo: "SOV97702",
                address: "21 HENDERSON ROAD,KNOXFIELD",
                longi: 145.249200,
                lati: -37.901500,
                tel: "8706 0200",
                email: "info@airliquide.com"
            },
            {
                customerName: "CARLIN GROUP (MINIBULK)",
                customerNo: "CBV07501",
                address: "5115 NORTHERN HIGHWAY,TOOBORAC",
                longi: 144.798600,
                lati: -37.042400,
                tel: "03 5433 5201",
                email: "info@airliquide.com"
            },
            {
                customerName: "ADVANCED CUTTING TECH (LIN)",
                customerNo: "ADV41301",
                address: "31 NICHOLAS DRIVE(BULK NITROGEN),DANDENONG",
                longi: 145.204813,
                lati: -38.037398,
                tel: "9768 3553            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ELTHAM LEISURE CENTRE YMCA (PLAY POOL)",
                customerNo: "SH118401",
                address: "BROUGHAM STREET, MAIN ENTRANCE(CO2 -300),ELTHAM",
                longi: 145.141572,
                lati: -37.723453,
                tel: "9439 2266",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARWON WATER(BLACK ROCK)",
                customerNo: "BA093501",
                address: "BLACK ROCK ROAD,CONNEWARE",
                longi: 144.421900,
                lati: -38.273000,
                tel: "5254 2448",
                email: "info@airliquide.com"
            },
            {
                customerName: "FREWSTAL PTY LTD ( CO2 MINIBULK )",
                customerNo: "FRV01101",
                address: "46 ABATTOIRS ROAD,STAWELL",
                longi: 142.756300,
                lati: -37.053700,
                tel: "5358 2844",
                email: "info@airliquide.com"
            },
            {
                customerName: "GOULBURN RIVER TROUT PTY LTD",
                customerNo: "GOV03202",
                address: "WALNUT ISLAND - MC MARTINS RDOFF GOULBURN VALLEY HIGHWAY,ALEXANDRIA",
                longi: 145.745230,
                lati: -37.230704,
                tel: "5773 2483",
                email: "info@airliquide.com"
            },
            {
                customerName: "HAZELDENES CHICKEN FARM PTY LTD (ALA6324)",
                customerNo: "HA107704",
                address: "74 HAZELDENE ROAD(BULK NITROGEN),LOCKWOOD",
                longi: 144.164089,
                lati: -36.795905,
                tel: "5431 1300",
                email: "info@airliquide.com"
            },
            {
                customerName: "NHILL - LIN DELIVER EMPTY",
                customerNo: "99999971",
                address: "WESTERN HIGHWAY,NHILL",
                longi: 148.974200,
                lati: -21.230900,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "BRIGHTON HOTEL (BULK)",
                customerNo: "HOV70100",
                address: "286 BAY STREET(CO2 - 176),BRIGHTON",
                longi: 145.004300,
                lati: -37.905700,
                tel: "9596 3869",
                email: "info@airliquide.com"
            },
            {
                customerName: "PROPERTY ESSENTIALS (BULK)",
                customerNo: "MJV59201",
                address: "YARRAS EDGE - DOCKLANDS50 LORIMER STREET(CO2 - 176),DOCKLANDS",
                longi: 144.947751,
                lati: -37.824539,
                tel: "9695  9405           ",
                email: "info@airliquide.com"
            },
            {
                customerName: "SAIZERIYA AUSTRALIA PTY LTD",
                customerNo: "SAV37901",
                address: "2 - 82 SHOGAKI DRIVE(OFF FERRIS ROAD)(BULK CO2),MELTON",
                longi: 144.580500,
                lati: -37.683000,
                tel: "9971 0536            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG  (SO4)",
                customerNo: "99999958",
                address: "5570 SOUTH GIPPSLAND HWY,LANG LANG",
                longi: 145.614760,
                lati: -38.334134,
                tel: "255 2288",
                email: "info@airliquide.com"
            },
            {
                customerName: "PACIFIC MEAT SALES PTY LTD (BULK)",
                customerNo: "PA069702",
                address: "2 LIPTON DRIVETHE BIG BUTCHER SHOP,THOMASTOWN",
                longi: 144.997800,
                lati: -37.692900,
                tel: "9469 4409",
                email: "info@airliquide.com"
            },
            {
                customerName: "YERING FARM WINES (BULK)",
                customerNo: "YEV00301",
                address: "ST HERBERTS ROAD(CO2 - 240),YERING",
                longi: 145.375800,
                lati: -37.690700,
                tel: "9739 0461",
                email: "info@airliquide.com"
            },
            {
                customerName: "YMCA - DANDENONG OASIS (MINIBULK)",
                customerNo: "YNV00701",
                address: "CNR HEATHERTON RD & CLEELAND STDANDENONG,DANDENONG",
                longi: 145.217200,
                lati: -37.970300,
                tel: "03 9767 3100",
                email: "info@airliquide.com"
            },
            {
                customerName: "BCD TECHNOLOGIES P/L **USE 3TPV018**",
                customerNo: "SR933601",
                address: "(ATT: MICHAEL GIRGIS)BEACHLEY ST(BULK ARGON),BRAYBROOK",
                longi: 144.856600,
                lati: -37.790400,
                tel: "9310 1290",
                email: "info@airliquide.com"
            },
            {
                customerName: "CEM PTY LTD  (BULK - ROAD TRAILER)",
                customerNo: "CE293201",
                address: "63 MAFFRA STREET(NITROGEN),BROADMEADOWS",
                longi: 144.920000,
                lati: -37.683300,
                tel: "9309 4822",
                email: "info@airliquide.com"
            },
            {
                customerName: "KNIGHT GRANITE HILLS PTY LTD (BULK)",
                customerNo: "KNV17900",
                address: "BURKE & WILLS TRACK(C02  - 300),BAYNTON",
                longi: 144.637552,
                lati: -37.162557,
                tel: "03 5423 7273",
                email: "info@airliquide.com"
            },
            {
                customerName: "TAHBILK PTY LTD",
                customerNo: "TA424701",
                address: "CHATEAU TAHBILK WINERY254 ONEILLS ROAD,NAGAMBIE",
                longi: 145.085621,
                lati: -36.826325,
                tel: "5794 2555",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LIN - HOLBROOK/TARCUTTA",
                customerNo: "99999961",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.715300,
                lati: -35.288500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE AUSTIN & REPATRIATION MEDICAL",
                customerNo: "HB635701",
                address: "CENTRE - REPATRIATION CAMPUSBANKSIA STREET(BULK OXYGEN),HEIDELBERG",
                longi: 145.059400,
                lati: -37.757500,
                tel: "9496 5000",
                email: "info@airliquide.com"
            },
            {
                customerName: "ADVANCED HERD BULL BARS AUSTRALIA (BULK N2)",
                customerNo: "AEV00801",
                address: "156 SOUTH GIPPSLAND HIGHWAY,DANDENONG",
                longi: 145.231200,
                lati: -38.013000,
                tel: "9794 5474",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARREE STUD  (BULK)",
                customerNo: "BAV01401",
                address: "469 FORBES - MORANDING ROAD(BULK OXYGEN),KILMORE",
                longi: 144.867954,
                lati: -37.265037,
                tel: "5781 1165            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA -ALTONA - BULK DEPOT",
                customerNo: "99999940",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE AUSTIN HOSPITAL - BULK BACK UP",
                customerNo: "TIV06601",
                address: "OFF BURGUNDY STREETBULK OXY - BACK UP,HEIDELBERG",
                longi: 145.066849,
                lati: -37.756367,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "CHALLENGE MEATS PTY LTD - VIV 15000 (BULK LIN)",
                customerNo: "CIV09402",
                address: "300 BOUNDARY ROAD(VIV 15000 BULK LIN),BREAKWATER",
                longi: 144.382000,
                lati: -38.182100,
                tel: "5248 4400",
                email: "info@airliquide.com"
            },
            {
                customerName: "SELBY SAFETY EQUIPMENT SERVICES P/L(CO2)",
                customerNo: "SE582001",
                address: "8 WIGAN ROAD(CO2 - LTH 6120),BAYSWATER",
                longi: 145.267900,
                lati: -37.842600,
                tel: "9762 6888",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALEPAT TAYLOR - KYNETON (BULK CO2)",
                customerNo: "AMV18301",
                address: "818 LAURISTON ROAD,KYNETON",
                longi: 145.008000,
                lati: -37.743000,
                tel: "+61394872599",
                email: "info@airliquide.com"
            },
            {
                customerName: "GREATER SOUTH EAST ASIAN PORK CO.",
                customerNo: "GR630402",
                address: "8 - 14 HUME ROAD(BULK CO2),LAVERTON NORTH",
                longi: 144.815900,
                lati: -37.820700,
                tel: "9369 6777",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOX HILL HOSPITAL (VTH-30000) ALHC 6906",
                customerNo: "BOV54804",
                address: "THAMES ROAD(BULK OXYGEN),BOX HILL",
                longi: 145.119717,
                lati: -37.813759,
                tel: ".",
                email: "info@airliquide.com"
            },
            {
                customerName: "COREGAS - EX WORKS BULK LOX",
                customerNo: "LIV01007",
                address: "C/O AIR LIQUIDE ALTONA ASU631 KOROROIT CREEK RD,ALTONA",
                longi: 144.793200,
                lati: -37.845300,
                tel: "(03) 8539 1605",
                email: "info@airliquide.com"
            },
            {
                customerName: "WESTERN WATER (BULK)",
                customerNo: "WEV32702",
                address: "ROSSLYNE PUMPING STATIONBACCUS MARSH ROAD,GISBORNE",
                longi: 144.559028,
                lati: -37.466986,
                tel: "5428 4230            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "MC WILLIAMS WINES (HANWOOD) PTY LTD",
                customerNo: "MCV10001",
                address: "JACK MC WILLIAM ROAD(BULK C02),HANWOOD",
                longi: 146.103100,
                lati: -34.252800,
                tel: "02 6963 3400",
                email: "info@airliquide.com"
            },
            {
                customerName: "BESTS WINES  (BULK - GREAT WESTERN)",
                customerNo: "BE165602",
                address: "WESTERN HWY(BULK NITROGEN),GREAT WESTERN",
                longi: 142.841202,
                lati: -37.134567,
                tel: "5356 2250            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "ENSIGN SERVICES (AUST) PTY LTD NCOTE",
                customerNo: "EN674401",
                address: "24 LEINSTER GROVE(CO2 - 500 X 2),NORTHCOTE",
                longi: 144.988225,
                lati: -37.762479,
                tel: "9489 1011",
                email: "info@airliquide.com"
            },
            {
                customerName: "VISY PAPER PTY LTD MILL (NO.4) - CO2 MINI BULK",
                customerNo: "VI535801",
                address: "13 REO CRESENT(CO2 MINIBULK),CAMPBELLFIELD",
                longi: 144.938715,
                lati: -37.646397,
                tel: "9247 4458",
                email: "info@airliquide.com"
            },
            {
                customerName: "IDYLL WINE CO PTY LTD (BULK CO2)",
                customerNo: "IDV68301",
                address: "265 BALLAN ROAD,MOORABOOL",
                longi: 144.292300,
                lati: -38.077100,
                tel: "03 5228 488",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE NEW ZEALAND (EX WORKS ALTONA)",
                customerNo: "MFV03602",
                address: "PO BOX 12-846 (BULK CO2)AUCKLAND 6,NEW ZEALAND",
                longi: 144.793200,
                lati: -37.845300,
                tel: "649~622~3880",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LOX - HOLBROOK/TARCUTTA",
                customerNo: "99999976",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.715300,
                lati: -35.288500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ELEPHANT & CASTLE HOTEL - GEELONG",
                customerNo: "ELV95901",
                address: "158 MCKILLOP STREET(MINIBULK),GEELONG",
                longi: 144.366424,
                lati: -38.156241,
                tel: "5221 3707",
                email: "info@airliquide.com"
            },
            {
                customerName: "GWM WATER - LONGERENONG - BULK",
                customerNo: "GWV00501",
                address: "CNR LONGERENONG RD &DRUNG JUNG RD(CO2 MINIBULK),LONGERENONG",
                longi: 142.330700,
                lati: -36.686400,
                tel: "1300 659 961",
                email: "info@airliquide.com"
            },
            {
                customerName: "GAZPAC NOUVELLE - CALEDONIE - LAR",
                customerNo: "AIV99802",
                address: "ANSE LOYAUTE - BAIE DE NUMBOBP 7256 - DUCOS,98801-NOUMEA CEDEX",
                longi: 144.793200,
                lati: -37.845300,
                tel: "(687) 284141",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA -SUNSHINE",
                customerNo: "99999948",
                address: "40 BUNNETT STREET,NTH SUNSHINE",
                longi: 144.840775,
                lati: -37.762668,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "COBURG OLYMPIC SWIMMING POOL",
                customerNo: "CO304901",
                address: "CRN MURRAY RD & NEWLANDS ROAD(CO2 - 176),COBURG",
                longi: 144.974500,
                lati: -37.735500,
                tel: "9354 2096",
                email: "info@airliquide.com"
            },
            {
                customerName: "BERTOCCHI M. & SONS P/L (CO2 BULK)",
                customerNo: "BE963102",
                address: "LOT 1,  6 TRAWALLA AVENUE,THOMASTOWN",
                longi: 144.973900,
                lati: -37.686700,
                tel: "9355 5100",
                email: "info@airliquide.com"
            },
            {
                customerName: "ORIGIN ENERGY RESOURCES LTD (OTWAY GAS PLANT) BULK LIN",
                customerNo: "ORV71904",
                address: "305 WAARRE ROADPORT CAMPBELL,PORT CAMPBELL",
                longi: 143.047700,
                lati: -38.567600,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "FLSMIDTH ABON PTY LTD (VIV - 5000)",
                customerNo: "AB109403",
                address: "28 - 30 VICTORY ROAD(REAR OF 27 MARSHALL RD),AIRPORT WEST",
                longi: 144.889100,
                lati: -37.718400,
                tel: "9338 7011",
                email: "info@airliquide.com"
            },
            {
                customerName: "KINGSWIM CHIRNSIDE PARK PTY LTD",
                customerNo: "KJV00801",
                address: "286 - 288 MAROONDAH HWY,CHIRNSIDE PARK",
                longi: 145.289369,
                lati: -37.780918,
                tel: "03 9727 5800",
                email: "info@airliquide.com"
            },
            {
                customerName: "INTERVET AUST PTY LTD (BULK) VIV2500",
                customerNo: "INV98501",
                address: "91 -105 HARPIN ST,BENDIGO EAST",
                longi: 144.305200,
                lati: -36.748600,
                tel: "08 9300 0921",
                email: "info@airliquide.com"
            },
            {
                customerName: "DEAKIN UNIVERSITY - IFM BUILDING NA",
                customerNo: "DEV08001",
                address: "BUILDING NA (VIV6500) NITROGENPIGDONS ROAD,WAURN PONDS",
                longi: 144.299100,
                lati: -38.196300,
                tel: "0438547563",
                email: "info@airliquide.com"
            },
            {
                customerName: "BOSTIK (AUST) P/L   - (LIN )",
                customerNo: "BO671702",
                address: "51 - 71 HIGH STREET(BULK - VIV5000),THOMASTOWN",
                longi: 145.013900,
                lati: -37.681200,
                tel: "9279 9333",
                email: "info@airliquide.com"
            },
            {
                customerName: "FAWKNER LEISURE CENTRE - YMCA (BULK)",
                customerNo: "FAV94201",
                address: "79-83 JUKES ROAD(BULK),FAWKNER",
                longi: 144.968200,
                lati: -37.702000,
                tel: "9358 6600",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARTTER ENTERPRISES PTY LTD (BULK LIN)",
                customerNo: "BBV00605",
                address: "MURPHY ROAD (VIV10,000),HANWOOD",
                longi: 146.041800,
                lati: -34.341700,
                tel: "02 4924 4350",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - FAIRFIELD",
                customerNo: "99999915",
                address: "43-47 PINE ROAD,FAIRFIELD",
                longi: 150.942200,
                lati: -33.854300,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "MELBOURNE CITY BATHS (MINIBULK)",
                customerNo: "CIV00501",
                address: "420 SWANSTON STREET(CO2 - 240),MELBOURNE",
                longi: 144.963000,
                lati: -37.807000,
                tel: "9663 5888",
                email: "info@airliquide.com"
            },
            {
                customerName: "BENDIGO HEALTH (VIV 15000)",
                customerNo: "BEV02602",
                address: "ENTRANCE OFF BANE STREET(BULK OXYGEN),BENDIGO",
                longi: 144.283745,
                lati: -36.758711,
                tel: "5454 6000            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "WILLOW CREEK VINEYARD PTY LTD",
                customerNo: "WIV26200",
                address: "166 BALNARRING ROAD(CO2 - 300),MERRICKS NORTH",
                longi: 145.075200,
                lati: -38.353800,
                tel: "03 5989 7448",
                email: "info@airliquide.com"
            },
            {
                customerName: "TEMPO FOODS",
                customerNo: "TEV02801",
                address: "24 HINKLER ROAD(CO2 MINIBULK),MORDIALLOC",
                longi: 145.099007,
                lati: -37.989105,
                tel: "9588 0200            ",
                email: "info@airliquide.com"
            },
            {
                customerName: "PEMARA LABELS (BULK)",
                customerNo: "PFV00903",
                address: "294 FERNTREE GULLY ROAD,NOTTING HILL",
                longi: 145.133300,
                lati: -37.900900,
                tel: "9542 7777",
                email: "info@airliquide.com"
            },
            {
                customerName: "COFIELD WINES (CO2 - PLV240)",
                customerNo: "CPV13101",
                address: "DISTILLERY ROAD,WAHGUNYAH",
                longi: 146.398916,
                lati: -36.022724,
                tel: "02 6033 3798",
                email: "info@airliquide.com"
            },
            {
                customerName: "THE ALFRED HEALTHCARE GROUP - CAULFIELD",
                customerNo: "CF255602",
                address: "CAULFIELD HOSPITAL294 KOOYONG ROAD(CO2 - 300),CAULFIELD",
                longi: 145.022800,
                lati: -37.882900,
                tel: "9276 6000",
                email: "info@airliquide.com"
            },
            {
                customerName: "NUFARM LTD-O2  (BULK -  OXY)",
                customerNo: "NU062103",
                address: "103 PIPE ROAD(BULK OXY),LAVERTON NORTH",
                longi: 144.798800,
                lati: -37.825400,
                tel: "9282 1000",
                email: "info@airliquide.com"
            },
            {
                customerName: "EMPTY LOX - HOLBROOK/TARCUTTA",
                customerNo: "99999975",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.715300,
                lati: -35.288500,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "SPECTRUM LASER (VIV 3000)",
                customerNo: "LA970002",
                address: "SPECTRUM LASER CUTTING13 SEISMIC COURT,ROWVILLE",
                longi: 145.245800,
                lati: -37.908300,
                tel: "9763 5700",
                email: "info@airliquide.com"
            },
            {
                customerName: "BARTTER ENTERPRISES PTY LTD (BULK CO2)",
                customerNo: "BBV00604",
                address: "MURPHY ROAD (VIV50,000),HANWOOD",
                longi: 146.041800,
                lati: -34.341700,
                tel: "02 4924 4350",
                email: "info@airliquide.com"
            },
            {
                customerName: "GWMWATER - MT ZERO",
                customerNo: "WI013702",
                address: "TREATMENT PLANTLAHARM ROAD,MT ZERO",
                longi: 142.180600,
                lati: -36.720400,
                tel: "5381 2801",
                email: "info@airliquide.com"
            },
            {
                customerName: "YERING STATION  (BULK)",
                customerNo: "YEV90701",
                address: "368 MELBA HIGHWAY(CO2 MINIBULK),YARRA GLEN",
                longi: 145.425000,
                lati: -37.705800,
                tel: "9730 0107",
                email: "info@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE W.A. (CO2 BULK) KWINANA",
                customerNo: "LA830601",
                address: "LEATH ROAD,KWINANA",
                longi: 115.776401,
                lati: -32.211799,
                tel: "08 9439 1593",
                email: "info@airliquide.com"
            },
            {
                customerName: "SWIFT AUSTRALIA PTY LTD (CO2 BULK)",
                customerNo: "TAV79703",
                address: "30 INDUSTRIAL PARK DRIVE(BULK C02),BROOKLYN",
                longi: 144.851600,
                lati: -37.812800,
                tel: "9315 1299",
                email: "info@airliquide.com"
            },
            {
                customerName: "SURFACE TECHNOLOGY COATINGS (LIN - VIV 6000)",
                customerNo: "SU476802",
                address: "382 SETTLEMENT ROADFACTORY 22,THOMASTOWN",
                longi: 145.015151,
                lati: -37.688103,
                tel: "9464 0644",
                email: "info@airliquide.com"
            },
            {
                customerName: "RAYSON RTK PTY LTD (ADMINISTRATORS APPOINTED) (BULK LIN)",
                customerNo: "RBV02201",
                address: "203 PRINCESS HIGHWAY,HALLAM",
                longi: 145.267200,
                lati: -38.005600,
                tel: "87810000",
                email: "info@airliquide.com"
            },
            {
                customerName: "VIC DESAL PLANT - STRM1B",
                customerNo: "DFV04103",
                address: "VIC DESAL PLANT - VES 2LOWER POWLETT ROAD,WONTHAGGI",
                longi: 145.549186,
                lati: -38.592092,
                tel: "5671 9000",
                email: "info@airliquide.com"
            },
            {
                customerName: "STAGONO PTY LTD (BULK CO2)",
                customerNo: "NOV03502",
                address: "10-20 NORFOLK COURT(VIV1300),COBURG",
                longi: 144.978700,
                lati: -37.721900,
                tel: "9350 3188",
                email: "info@airliquide.com"
            }
        ];

        $scope.depots = [
            {
                customerName: "ALA VIC SUNSHINE 50TN V1 DI PLANT",
                customerNo: "00001308",
                address: "40 BUNNETT STREET,NORTH SUNSHINE",
                longi: 144.840800,
                lati: -37.762700,
                tel: "9290 1100",
                email: "info@airliquide.com"
            },
            {
                customerName: "FULL LCO2 - HOLBROOK/TARCUTTA",
                customerNo: "99999941",
                address: "CHANGEOVER,TARCUTTA",
                longi: 147.304554,
                lati: -35.737367,
                tel: "",
                email: "info@airliquide.com"
            },
            {
                customerName: "ALA VIC ALTONA ASU",
                customerNo: "99999945",
                address: "631 KOROROIT CREEK ROAD,ALTONA",
                longi: 144.792700,
                lati: -37.845300,
                tel: "",
                email: "info@airliquide.com"
            },
        ];

        $scope.map = {
            center: { latitude: $scope.sources[0].lati, longitude: $scope.sources[0].longi },
            zoom: 8
        };

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

        $scope.testData = function() {
            $http.get("data/source.json").success(function(data) {
                console.log(data);
            });
        };

        $scope.init = function() {
            angular.forEach($scope.sources, function(value, key) {
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 1);
                $scope.markers.push(marker);
            });

            angular.forEach($scope.depots, function(value, key) {
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 2);
                $scope.markers.push(marker);
            });

            angular.forEach($scope.dps, function(value, key) {
                var marker = $scope.createMarker(value.lati, value.longi, { title: value.customerName, subtitle: value.address, tel: value.tel }, 3);
                $scope.markers.push(marker);
            });

            $scope.testData();
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