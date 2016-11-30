app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $state, $translate) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    $scope.language = navigator.language || navigator.userLanguage;
    $scope.lng =  $scope.language.substring(0, 2);
    console.log('multi languge',$scope.language);

    $scope.setLang = function(lang){
        $scope.lng = lang;
        console.log('language', $scope.lng);
         $translate.use($scope.lng);

    };

    $translate.use($scope.lng);

    // var fab = document.getElementById('fab');
    // fab.addEventListener('click', function () {
    //     //location.href = 'https://twitter.com/satish_vr2011';
    //     // window.open('#/app/camera', '_self');
    //     $state.go('app.camera');
    // });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});