function generateHistogram(body) {
    let data = body.data;
    let songIndex = body.songIndex;

    let chartData = {
        labels: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0],
        datasets: [{
            label: "Song features",
            backgroundColor: ["darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred", "darkred",
                "darkred", "darkred", "darkred", "darkred", "darkred","darkred", "darkred", "darkred", "darkred", "darkred",],
            borderColor: 'rgb(255, 99, 132)',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            data: data
        }]
    }
    // Set colour of comparison song:
    chartData.datasets[0].backgroundColor[songIndex] = "darkgreen";

    const chartOptions = {
        responsive: false,
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function (tooltipItem, data) {
                    return data['datasets'][0]['data'][tooltipItem['index']];
                },
            },
            backgroundColor: '#FFF',
            titleFontSize: 16,
            titleFontColor: '#0066ff',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false,
        },
        legend: {
            display: false,
            labels: {
                fontColor: "white",
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: true,
                    fontColor: "white",
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            xAxes: [{
                display: false,
                ticks: {
                    max: 20
                },
            }, {
                display: true,
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    autoSkip: false,
                    max: 10,
                    stepSize: 1
                }
            }]
        },
    }

    return {chartData, chartOptions};
}

module.exports = {
    generateHistogram: generateHistogram
}