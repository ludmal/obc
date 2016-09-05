(function () {
    'use strict';

    angular
        .module('core.module')
        .filter('customCurrency',
        [
            '$filter', function (filter) {
                var currencyFilter = filter('currency');
                return function (amount) {
                    return '$' + currencyFilter(amount, 2);
                };
            }
        ])
        .directive('help', [
            function () {
                return {
                    restrict: 'E',
                    scope: { text: '@' },
                    template: '<i class="fa fa-question-circle info-icon" tooltip-placement="bottom" tooltip="{{text}}"></i>'
                };
            }
        ])
        .filter('localDate', [
            '$filter', 'Settings',
            function (filter, Settings) {
                //var dateFilter = filter('date');
                return function (d) {
                    var date = new Date(d);
                    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

                    var offset = date.getTimezoneOffset() / 60;
                    var hr = date.getHours();

                    newDate.setHours(hr);

                    //var d = new Date();
                    //console.log('datetime offset', offset);
                    return moment(newDate).format('DD MMM, YYYY h:mm a');
                    //return moment(date).add(11, 'hours').format('DD MMM, YYYY h:mm a');
                }
            }
        ])
        .directive('timeAgo', [function () {
            return {
                restrict: 'E',
                scope: {
                    date: '@'
                },
                template: '<span class="text-date" tooltip-placement="bottom" tooltip="{{date | localDate}}" am-time-ago="(date)"></span>'
            };
        }
        ])
        .filter('customDate',
        [
            '$filter', function (filter) {
                var dateFilter = filter('date');
                return function (date) {
                    return dateFilter(date, 'MMM dd, yyyy');
                };
            }
        ])

        .directive('passwordConfirm', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                scope: {
                    matchTarget: '=',
                },
                require: 'ngModel',
                link: function link(scope, elem, attrs, ctrl) {
                    var validator = function (value) {
                        ctrl.$setValidity('match', value === scope.matchTarget);
                        return value;
                    }

                    ctrl.$parsers.unshift(validator);
                    ctrl.$formatters.push(validator);

                    // This is to force validator when the original password gets changed
                    scope.$watch('matchTarget', function (newval, oldval) {
                        validator(ctrl.$viewValue);
                    });

                }
            };
        }]);

})();