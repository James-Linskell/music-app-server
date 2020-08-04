function truncateTrackData(data) {

    let name = data.name;
    let album = data.album.name;
    let artist = data.artists[0].name;
    let expl = "Unknown";
    // Truncate info if it is too long to fit on card:
    if (data.name.length > 30) {
        name = data.name.substring(0, 30) + '...'
    }
    if (data.album.name.length > 20) {
        album = data.album.name.substring(0, 20) + '...'
    }
    if (data.artists[0].name.length > 40) {
        artist = data.artists[0].name.substring(0, 40) + '...'
    }
    if (data.explicit === true) {
        expl = "Yes";
    } else {
        expl = "No";
    }
    let artists = "";
    data.artists.forEach(artist => {
        artists += artist.name + ", "
    });
    // Remove final comma:
    artists = artists.substring(0, (artists.length) - 2);

    return {name, album, artist, expl, artists}
}

function sortTrackFeatures(data) {
    let live = "Maybe";
    if (data.liveness < 0.5) {
        live = "No"
    } else if (data.liveness > 0.5) {
        live = "Yes"
    }
    let acoustic = "Maybe";
    if (data.acousticness < 0.3) {
        acoustic = "No";
    } else if (data.acousticness < 0.5) {
        acoustic = "Maybe";
    } else {
        acoustic = "Yes";
    }
    let instrumental = "Unknown";
    if (data.instrumentalness < 0.5) {
        instrumental = "No";
    } else {
        instrumental = "Yes";
    }
    let musicality = "Unknown";
    if (data.speechiness < 0.33) {
        musicality = "Musical";
    } else if (data.speechiness < 0.66){
        musicality = "Musical and spoken";
    } else {
        musicality = "Spoken word";
    }
    let key = "Unknown";
    if (data.key === 0) {
        key = "C";
    } else if (data.key === 1) {
        key = "C #";
    } else if (data.key === 2) {
        key = "D";
    } else if (data.key === 3) {
        key = "D #";
    } else if (data.key === 4) {
        key = "E";
    } else if (data.key === 5) {
        key = "F";
    } else if (data.key === 6) {
        key = "F #";
    } else if (data.key === 7) {
        key = "G";
    } else if (data.key === 8) {
        key = "G #";
    } else if (data.key === 9) {
        key = "A";
    } else if (data.key === 10) {
        key = "A #";
    } else if (data.key === 11) {
        key = "B";
    }

    return {live, acoustic, instrumental, musicality, key};
}

function generateCharts(features) {
    const chartData = {
        labels: ["Danceability", "Energy", "Happiness"],
        datasets: [{
            label: "Song features",
            backgroundColor: 'darkred',
            borderColor: 'rgb(255, 99, 132)',
            data: [(features.danceability * 10).toFixed(2), (features.energy * 10).toFixed(2),
                (features.valence * 10).toFixed(2)]
        }]
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
                    display: true,
                    fontColor: "white",
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            xAxes: [{
                barPercentage: 0.5,
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    min: 0,
                    max: 10,
                    stepSize: 1
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        },
    }
   return {
        data: chartData,
        options: chartOptions
    }
}

module.exports = {
    truncateTrackData: truncateTrackData,
    sortTrackFeatures: sortTrackFeatures,
    generateCharts: generateCharts
}