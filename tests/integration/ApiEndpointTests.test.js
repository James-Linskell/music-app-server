const request = require('supertest');
const app = require('../../server');

/**
 * Supertest integration tests for API GET endpoints.
 */
describe('GET Endpoints', () => {
    // Test for /authenticate endpoint:
    it('should respond with json containing Spotify client access token',
        async (done) => {
        request(app)
            .get('/authenticate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

/**
 * Supertest integration tests for API POST endpoints.
 */
describe('POST Endpoints', () => {
    // Test for /api/plSort endpoint:
    const inputData = {
        audio_features: [{
            danceability: 0.872,
            energy: 0.391,
            key: 0,
            loudness: -9.144,
            mode: 0,
            speechiness: 0.242,
            acousticness: 0.469,
            instrumentalness: 0.00000413,
            liveness: 0.297,
            valence: 0.437,
            tempo: 134.021,
        },
            {
                danceability: 0.671,
                energy: 0.351,
                key: 2,
                loudness: -14.715,
                mode: 1,
                speechiness: 0.0447,
                acousticness: 0.0139,
                instrumentalness: 0.956,
                liveness: 0.11,
                valence: 0.358,
                tempo: 139.992,
            }]
    };
    it('respond with json string containing sorted playlist data', async (done) => {
        request(app)
            .post('/api/plSort')
            .send(inputData)
            .expect(200, done);
    });
    // Test for /api/songSort/truncate endpoint:
    const inputData2 = {
        name: "Song name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        album: {
            name: "Album name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        artists: [{
            name: "Artist name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }],
        explicit: true
    }
    it('respond with json string containing truncated song information', async (done) => {
        request(app)
            .post('/api/songSort/truncate')
            .send(inputData2)
            .expect(200, done);
    });
    // Test for /api/songSort/sortFeatures endpoint:
    const inputData3 = {
        liveness: 0.8,
        acousticness: 0.8,
        instrumentalness: 0.8,
        speechiness: 0.8,  // ie. musicality.
        key: 0,
    }
    it('respond with json string containing simplified mood feature data', async (done) => {
        request(app)
            .post('/api/songSort/sortFeatures')
            .send(inputData3)
            .expect(200, done);
    });
    // Test for /api/songSort/generateChart endpoint:
    const inputData4 = {
        danceability: 0.5,
        energy: 0.4,
        valence: 0.3
    }
    it('respond with json string containing chart options and data', async (done) => {
        request(app)
            .post('/api/songSort/generateChart')
            .send(inputData4)
            .expect(200, done);
    });
    // Test for /api/songSort/generateHistogram endpoint:
    const inputData5 = {
        data: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        songIndex: 5,
    };
    it('respond with json string containing histogram options and data', async (done) => {
        request(app)
            .post('/api/plSort/generateHistogram')
            .send(inputData5)
            .expect(200, done);
    });
    // Test for /api/songSort/generateChart endpoint:
    const inputData6 = "8";
    it('respond with json string containing playlist fitter score', async (done) => {
        request(app)
            .post('/api/plFit/web')
            .send(inputData6)
            .expect(200, done);
    });
});