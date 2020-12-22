var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;

var chartdata_before = document.getElementById("공복혈당");
var before_data = [];
var chartdata_after = document.getElementById("식후혈당");
var after_data = [];
for(var i = 1; i < chartdata_before.children.length; i++) {
    before_data.push(chartdata_before.children[i].childNodes[0].nodeValue);
}
for(var i = 1; i < chartdata_after.children.length; i++) {
    after_data.push(chartdata_after.children[i].childNodes[0].nodeValue);
}
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: '공복혈당',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: before_data
    }, {
        label: '식후혈당',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: after_data
    }]

};

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'line',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 80,
                        max: 250
                    }
                }]
            }
        }
    });
};

document.getElementById('addData').addEventListener('click', function () {
    if (barChartData.datasets.length > 0) {
        var month = MONTHS[barChartData.labels.length % MONTHS.length];
        barChartData.labels.push(month);

        for (var index = 0; index < barChartData.datasets.length; ++index) {
            // window.myBar.addData(randomScalingFactor(), index);
            barChartData.datasets[index].data.push(randomScalingFactor());
        }

        window.myBar.update();
    }
});


document.getElementById('removeData').addEventListener('click', function () {
    barChartData.labels.splice(-1, 1); // remove the label first

    barChartData.datasets.forEach(function (dataset) {
        dataset.data.pop();
    });

    window.myBar.update();
});