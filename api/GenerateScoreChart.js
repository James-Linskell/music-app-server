/**
 * Contains functions for generating the final playlist analyser score options for Chart.js.
 * @module api/GenerateScoreChart
 */

/**
 * Generates options for rendering a bar chart for chart.js (for Reaact JS) with a single bar denoting the score of the song.
 * The bar changes colour (red => green) depending on how high the score is.
 * @param {int} score - the final score for the Playlist Analyser
 * @return {object} options - json containing chart data and options
 */
function generateScoreChart(score) {
        const chartData = {
            labels: ["Score"],
            datasets: [{
                label: "Song Score",
                backgroundColor: 'darkred',
                borderColor: 'rgb(255, 99, 132)',
                data: score
            }]
        }
        // Colour the bar:
        if (score > 10) {
            chartData.datasets[0].backgroundColor = "#1E9600";
        } else if (score > 8) {
            chartData.datasets[0].backgroundColor = "#77b300";
        } else if (score > 6) {
            chartData.datasets[0].backgroundColor = "#bfff00";
        } else if (score > 5) {
            chartData.datasets[0].backgroundColor = "#ffcc00";
        } else if (score > 3) {
            chartData.datasets[0].backgroundColor = "#ff751a";
        } else if (score > 2) {
            chartData.datasets[0].backgroundColor = "#cc2900";
        } else {
            chartData.datasets[0].backgroundColor = "#e60000";
        }

        const chartOptions = {
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
                        display: false,
                        fontColor: "white",
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: false,
                    barPercentage: 0.5,
                    ticks: {
                        display: false,
                        fontColor: "black",
                        fontSize: 14,
                        min: 0,
                        max: 12,
                        stepSize: 1
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            },
        }
        return {chartData, chartOptions};
}

module.exports = {
    generateScoreChart: generateScoreChart
}
