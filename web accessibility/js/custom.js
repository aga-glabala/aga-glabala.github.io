$(document).ready(function() {
    Highcharts.theme = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
            '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            backgroundColor: 'transparent',
            width: 700
        },
        title: {
            style: {
                display: 'none',
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },

        legend: {
            itemStyle: {
                font: '15pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            },
            itemHoverStyle:{
                color: 'gray'
            },
            enabled: true
        }
    };
    Highcharts.setOptions(Highcharts.theme);


    $('#disables-1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,//null,
            plotShadow: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        legend: {
            enabled: false
        },
        series: [{
            type: 'pie',
            data: [
                ['Pełnosprawni', 93],
                ['Niepełnosprawni',       7]
            ]
        }]
    });

    $('#disables-2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,//null,
            plotShadow: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        legend: {
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            data: [
                ['ruchu', 40.2995414376],
                ['słuchu', 3.6204008882],
                ['wzroku', 5.6852302084],
                ['krążenia', 14.6050134255],
                ['neurologiczne', 13.727208585],
                ['inne', 22.062642032]
            ]
        }]
    });
});