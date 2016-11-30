// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngMap', 'uiGmapgoogle-maps', 'ngCordova', 'pascalprecht.translate']);


app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

$translateProvider.translations('en', {
    MAIN_TITLE : 'Plant & Bulk Atlas',
    SUB_TITLE: 'AirLiquide',
    BTN_BULK: 'Bulk',
    BTN_PLANT: 'Plant',
    BTN_DATA: 'Data',
    BTN_LOCATION: 'Current Location',
    BTN_SAVE: 'Save',
    NAME: 'Name',
    NAME_PLACE: 'Enter a name here',
    PRODUCT: 'Product',
    TANK_SIZE: 'Tank Size',
    SUPPLIER: 'Supplier',
    LOCATION: 'Location',
    HOME: 'Home',
    MARKET_SECTOR: 'Market Sector',
    ADDRESS: 'Address',
    PLACE: 'Place',
    POSTCODE: 'Postcode',
    COUNTRY: 'Country',
    LONGITUDE: 'Longitude',
    LATITUDE: 'Latitude',
    REMARKS: 'Remarks',
    REMARKS_PLACE: 'Enter your comments',
    WEBSITE: 'Website',
    WEBSITE_PLACE: 'Enter the website address',
    CYLIDNER_REQUIRED: 'Cylinder Required',
    SALES_FORCE: 'SalesForce',
    BAR: 'Bar+',
    WEATHER: 'Weather',
    SETTINGS: 'Settings',
    YOUR_CURRENT_LOCATION: 'Your current location',
    CURRENT_TEMPERATURE: 'Current temperature',
    LANGUAGE: 'Language'
  });

$translateProvider.translations('de', {
    MAIN_TITLE : 'Großatlas',
    SUB_TITLE: 'AirLiquide',
    BTN_BULK: 'Schüttgut',
    BTN_PLANT: 'Pflanze',
    BTN_DATA: 'Daten',
    BTN_LOCATION: 'Aktueller Standort',
    BTN_SAVE: 'sparen',
    NAME: 'Name',
    NAME_PLACE: 'Geben Sie hier einen Namen ein',
    PRODUCT: 'Produkt',
    TANK_SIZE: 'Behältergröße',
    SUPPLIER: 'Lieferant',
    LOCATION: 'Ort',
    HOME: 'Zuhause',
    MARKET_SECTOR: 'Marktsektor',
    ADDRESS: 'Adresse',
    PLACE: 'Ort',
    POSTCODE: 'Postleitzahl',
    COUNTRY: 'Land',
    LONGITUDE: 'Länge',
    LATITUDE: 'Breite',
    REMARKS: 'Bemerkungen',
    REMARKS_PLACE: 'Geben Sie Ihre Kommentare ein',
    WEBSITE: 'Webseite',
    WEBSITE_PLACE: 'Geben Sie die Website-Adresse ein',
    CYLIDNER_REQUIRED: 'Zylinder erforderlich',
    SALES_FORCE: 'SalesForce',
    BAR: 'Bar+',
    WEATHER: 'Wetter',
    SETTINGS: 'Einstellungen',
    YOUR_CURRENT_LOCATION: 'Deine aktuelle Position',
    CURRENT_TEMPERATURE: 'Aktuelle Temperatur',
    LANGUAGE: 'Sprache'
  });

$translateProvider.translations('fr', {
    MAIN_TITLE : 'Plant & Bulk Atlas',
    SUB_TITLE: 'Air Liquide',
    BTN_BULK: 'Vrac',
    BTN_PLANT: 'Usine',
    BTN_DATA: 'Données',
    LOCATION: 'Localisation',
    HOME: 'Accueil',
    BTN_LOCATION: 'Localisation',
    BTN_SAVE: 'sauvegarder',
    NAME: 'Nom',
    NAME_PLACE: 'Entrez un nom ici',
    PRODUCT: 'Produit',
    TANK_SIZE: 'Taille du réservoir',
    SUPPLIER: 'Fournisseur',
    MARKET_SECTOR: 'Segment Marché',
    ADDRESS: 'Adresse',
    PLACE: 'Endroit',
    POSTCODE: 'Code postal',
    COUNTRY: 'Pays',
    LONGITUDE: 'Longitude',
    LATITUDE: 'Latitude',
    REMARKS: 'Remarques',
    REMARKS_PLACE: 'Entrez vos commentaires',
    WEBSITE: 'Site Internet',
    WEBSITE_PLACE: 'Entrez ladresse du site Web',
    CYLIDNER_REQUIRED: 'Cylindre requis',
    SALES_FORCE: '',
    BAR: '',
    SETTINGS: 'Paramètres',
    WEATHER: 'Météo',
    YOUR_CURRENT_LOCATION: 'Votre localisation',
    CURRENT_TEMPERATURE: 'Température',
    LANGUAGE: 'Langue'
  });

$translateProvider.translations('ch', {
    MAIN_TITLE : '批量地图集',
    SUB_TITLE: '液化空气集团',
    BTN_BULK: '块',
    BTN_PLANT: '厂',
    BTN_DATA: '数据',
    BTN_LOCATION: '当前位置',
    BTN_SAVE: '保存',
    LOCATION: '位置',
    HOME: '家',
    NAME: '名称',
    NAME_PLACE: '在此处输入名称',
    PRODUCT: '产品',
    TANK_SIZE: '油箱尺寸',
    SUPPLIER: '供应商',
    MARKET_SECTOR: '市场部门',
    ADDRESS: '地址',
    PLACE: '地点',
    POSTCODE: '邮政编码',
    COUNTRY: '国家',
    LONGITUDE: '经度',
    LATITUDE: '纬度',
    REMARKS: '备注',
    REMARKS_PLACE: '输入您的评论',
    WEBSITE: '网站',
    WEBSITE_PLACE: '输入网站地址',
    CYLIDNER_REQUIRED: '气缸需要',
    SALES_FORCE: 'SalesForce',
    BAR: 'Bar+',
    SETTINGS: '设置',
    WEATHER: '天气',
    YOUR_CURRENT_LOCATION: '您当前的位置',
    CURRENT_TEMPERATURE: '当前温度',
    LANGUAGE: '语言'
  });

$translateProvider.translations('jp', {
    MAIN_TITLE : 'バルクアトラス',
    SUB_TITLE: 'AirLiquide',
    BTN_BULK: 'バルク',
    BTN_PLANT: '工場',
    BTN_DATA: 'データ',
    LOCATION: 'ロケーション',
    HOME: 'ホーム',
    BTN_LOCATION: '現在位置',
    BTN_SAVE: 'セーブ',
    NAME: '名',
    NAME_PLACE: 'ここに名前を入力してください',
    PRODUCT: '製品',
    TANK_SIZE: 'タンクサイズ',
    SUPPLIER: 'サプライヤー',
    MARKET_SECTOR: 'マーケットセクター',
    ADDRESS: '住所',
    PLACE: '場所',
    POSTCODE: '郵便番号',
    COUNTRY: '国',
    LONGITUDE: '経度',
    LATITUDE: '緯度',
    REMARKS: '備考',
    REMARKS_PLACE: 'あなたのコメントを入力してください',
    WEBSITE: 'ウェブサイト',
    WEBSITE_PLACE: 'ウェブサイトのアドレスを入力してください',
    CYLIDNER_REQUIRED: '必要なシリンダ',
    SALES_FORCE: 'SalesForce',
    BAR: 'Bar+',
    SETTINGS: '設定',
    WEATHER: '天気',
    YOUR_CURRENT_LOCATION: 'あなたの現在の場所',
    CURRENT_TEMPERATURE: '現在の温度',
    LANGUAGE: '言語'
  });

    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    
    .state('app.plant', {
        url: '/plant',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-plant.html',
                controller: 'PlantCtrl'
            }
        }
    })

.state('app.main', {
        url: '/main',
        views: {
            'menuContent': {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            }
        }
    })

    .state('app.bulk', {
        url: '/bulk',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-bulk.html',
                controller: 'BulkCtrl'
            }
        }
    })

    .state('app.camera', {
        url: '/camera',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-camera.html',
                controller: 'CameraCtrl'
            }
        }
    })

    .state('app.dash', {
        url: '/dash',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

 .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-map.html',
                controller: 'MapCtrl'
            }
        }
    })

.state('app.lang', {
        url: '/lang',
        views: {
            'menuContent': {
                templateUrl: 'templates/tab-lang.html',
                controller: 'LangCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
});
