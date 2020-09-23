const express = require('express');
const app = express();
const request = require('request'); // "Request" library
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const plSort = require('./api/SortPlaylistData');
const songSort = require('./api/SortSongData');
const plFitWeb = require('./api/GenerateScoreChart');
const histogram = require('./api/GenerateHistogram');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

/**
 * Endpoint for generating a Spotify client access token for their API.
 */
app.get('/authenticate', (req, res) => {
    let token = 'NO_TOKEN(SERVER)';
    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // use the access token to access the Spotify Web API
            token = body.access_token;
            res.send({
                test: 'RESPONSE RECEIVED FROM AUTHENTICATION SERVER',
                myToken: token,
            });
        }
    });
});

/**
 * Endpoint for pre-processing playlist data.
 */
app.post('/api/plSort', function(req, res) {
    let response = plSort.generateFitScores(req.body);
    res.json(response);
    res.end();
});

/**
 * Endpoint for pre-processing song data.
 */
app.post('/api/songSort/truncate', function(req, res) {
    let response = songSort.truncateTrackData(req.body);
    res.json(response);
    res.end();
});

/**
 * Endpoint for pre-processing song mood feature data.
 */
app.post('/api/songSort/sortFeatures', function(req, res) {
    let response = songSort.sortTrackFeatures(req.body);
    res.json(response);
    res.end();
});

/**
 * Endpoint for pre-processing chart options for song mood features.
 */
app.post('/api/songSort/generateChart', function(req, res) {
    let response = songSort.generateCharts(req.body);
    res.json(response);
    res.end();
});

/**
 * Endpoint for pre-processing playlist data and histogram options for song mood features.
 */
app.post('/api/plSort/generateHistogram', function(req, res) {
    let response = histogram.generateHistogram(req.body);
    res.json(response);
    res.end();
});

/**
 * Endpoint for pre-processing chart options for playlist fit score chart.
 */
app.post('/api/plFit/web', function(req, res) {
    let response = plFitWeb.generateScoreChart(req.body);
    res.json(response);
    res.end();
});

const client_id = 'REDACTED'; // My Spotify access client id
const client_secret = 'REDACTED'; // My Spotify access client secret

// Request options for authentication from Spotify server:
const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

/**
 * All other routes redirect back to React app index.html (catches invalid routes).
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// console.log that the server is up and running:
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
