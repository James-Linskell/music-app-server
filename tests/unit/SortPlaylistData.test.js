const SortPlaylistData = require('../../api/SortPlaylistData');

/**
 * Jest test for SortPlaylistData.generateScores(). The other function in SortPlaylistData, simplifyData(), is called
 * by generateScores so is included in this test.
 */
describe("generateScores()", () => {
    it("should return sorted score, feature info and chart options", () => {
        // Input data:
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
        // Tests:
        expect(SortPlaylistData.generateScores(inputData).score).toBeTruthy();
        expect(SortPlaylistData.generateScores(inputData).featureInfo1).toBeTruthy();
        expect(SortPlaylistData.generateScores(inputData).featureInfo2).toBeTruthy();
        expect(SortPlaylistData.generateScores(inputData).featureInfoColour).toBeTruthy();
        expect(SortPlaylistData.generateScores(inputData).simplify).toBeTruthy();
        expect(SortPlaylistData.generateScores(inputData).chartColour).toBeTruthy();
        expect(() => SortPlaylistData.generateScores(null)).toThrow(TypeError);
    });
});