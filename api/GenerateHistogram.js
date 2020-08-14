/**
 * Contains functions for generating histogram options from input data.
 * @module api/GenerateHistogram
 */

/**
 * Function which generates Spotify histogram options for Spotify mood features.
 * @param {object} data - json containing an array of mood feature values and a song index {features, songIndex}
 * @return {object} options - json containing chart data and options
 */
function generateHistogram(body) {
    let data = body.data;
    let songIndex = body.songIndex;

    let chartData = {
        labels: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0],
        datasets: [{
            label: "Playlist Songs (Your Song's Position is in Green)",
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
        responsive: true,
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
            display: true,
            labels: {
                fontColor: "white",
            },
	    position: "bottom",
        },
        scales: {
            yAxes: [{
		scaleLabel: {
		    display: true,
                    fontColor: "white",
		    labelString: "Number of Songs",
		},
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
		scaleLabel: {
		    display: true,
                    fontColor: "white",
		    labelString: "Feature Strength",
		},
                ticks: {
                    max: 20,
		    fontColor: "white",
                },
            },
            ]
        },
    }

    return {chartData, chartOptions};
}

module.exports = {
    generateHistogram: generateHistogram
}
