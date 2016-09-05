
(function () {
    'use strict';

    angular
        .module('home.module')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', '$rootScope', 'ngDialog', '$window', 'HomeService'];

    function HomeIndexController($scope, $rootScope, ngDialog, $window, HomeService) {
        $scope.tab = 'All';

        $scope.title = 'Welcome';

        $scope.init = function() {

            $scope.chartUser = function (data) {
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'chart-user',
                        type: 'pie'
                    },
                    colors: ['#F39C12', '#2ECC71', '#3498DB', '#F1C40F', '#27AE60', '#2980B9', '#C0392B'],
                    credits: false,
                    title: {
                        useHtml: true,
                        verticalAlign: 'middle',
                        style: { "color": '#889bad', "fontSize": '12px', textTransform: 'none' },
                        floating: true,
                        text: 'CTS Confirmation',
                        y: 0
                    },
                    plotOptions: {
                        pie: {
                            innerSize: '80%'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return this.point.name + ': ' + Math.round(this.y);
                        }
                    },
                    series: [
                        {
                            data: [['Unconfirmed',3], ['Confirmed',6]],
                            size: '100%',
                            showInLegend: false,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                });

            };

            $scope.chartUser();
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

            HomeService.getPromotedLibraryItems(10).then(function (response) {
                $scope.libraryItems = response.data;
            });

            HomeService.getLibraryItemsByType('ANN', 10).then(function (response) {
                $scope.annItems = response.data;
            });
        };

        $scope.init();
    };

})();
