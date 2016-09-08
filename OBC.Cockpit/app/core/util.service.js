
(function () {
    'use strict';

    angular
        .module('core.module')
        .factory('UtilService', UtilService);

    UtilService.$inject = ['$rootScope', '$http', '$q', 'Settings'];

    function UtilService($rootScope, $http, $q, Settings) {
        var srv = {};

        srv.validateTeamName = function validateName(name) {
            var regexp = /^[a-zA-Z0-9-]+$/;
            return regexp.test(name);
        }

        srv.localTime = function (d) {
            var date = new Date(d);
            var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

            var offset = date.getTimezoneOffset() / 60;
            var hr = date.getHours();

            newDate.setHours(hr);

            //var d = new Date();
            //console.log('datetime offset', offset);
            return moment(newDate).format('DD MMM, YYYY h:mm a');
        };

        srv.getQueryString = function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        srv.getRandomNumber = function getRandomInt(length) {
            return Math.floor(Math.random() * ((length - 2) - 0 + 1)) + 0;
        }

        srv.scroll = function () {
            $('#chat').animate({ scrollTop: $('.chat-content').height() }, 'slow');
        };

        return srv;
    };

})();