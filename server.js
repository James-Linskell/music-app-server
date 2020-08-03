const express = require('express');
const app = express();
const request = require('request'); // "Request" library
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const plSort = require('./SortPlaylistData');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

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

app.post('/plSort', function(req, res) {
    let response = plSort.generateScores(req.body);
    res.json(response);
    res.end();
});

const client_id = 'a0b2820d204d4c4e8a88b75a9ce09b34'; // Your client id
const client_secret = '979d1cf2088a4142a1669ac299db74dc'; // Your secret

// Request options for authentication from Spotify server
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
