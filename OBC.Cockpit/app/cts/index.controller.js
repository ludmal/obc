
(function () {
    'use strict';

    angular
        .module('home.module')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window'];

    function HomeIndexController($scope, $rootScope, ngDialog, $window) {
        $scope.tab = 'All';

        $scope.title = 'Welcome';

        $scope.init = function() {

            $('#container').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                colors: ['#E74C3C'],
                xAxis: {
                    lineColor: '#f7f7f7',
                    gridLineColor: '#f7f7f7',
                    type: 'datetime',
                    categories: [
                        "010101",
                        "010173",
                        "010301",
                        "010320",
                        "010321"
                    ],
                    title: {
                        text: ''
                    },
                    //tickInterval: 24 * 1,
                    labels: {
                        formatter: function () {
                            return this.value;
                            //return moment(this.value).format('DD, MMM');
                        }
                    }
                },
                yAxis: {
                    lineColor: '#f7f7f7',
                    gridLineColor: '#f7f7f7',
                    title: {
                        text: 'Count'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    formatter: function () {
                        return this.x;
                        //return moment(this.x).format('DD, MMM h a') + ': ' + this.y;
                    }
                },

                plotOptions: {
                    spline: {
                        dataLabels: {
                            color: '#B0B0B3'
                        },
                        lineWidth: 2,
                        marker: {
                            enabled: false
                        }
                    }
                },
                showInLegend: true,
                credits: {
                    enabled: false
                },
                series: [
                {
                    color: '#F39C12',
                    data: [7, 8, 15, 18, 20],
                    //data: [10, 0, 5, 0, 3, 2, 10, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    name: "Applications"
                }]
            });
        };

        $scope.init();
    };

})();
