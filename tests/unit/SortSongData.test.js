const SortSongData = require('../../api/SortSongData');

/**
 * Jest test for SongSongData.truncateTrackData().
 */
describe("truncateTrackData()", () => {
    it("should return truncated data", () => {
        // Sample raw spotify input data:
        const inputData = {
            name: "Song name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            album: {
                name: "Album name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            artists: [{
                name: "Artist name test aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }],
            explicit: true
        }
        const invalidInputData = "test";
        // Tests:
        expect(SortSongData.truncateTrackData(inputData).name.length).toBe(33);
        expect(SortSongData.truncateTrackData(inputData).album.length).toBe(23);
        expect(SortSongData.truncateTrackData(inputData).artist.length).toBe(43);
        expect(SortSongData.truncateTrackData(inputData).expl).toBeTruthy();
        // Invalid input:
        expect(() => SortSongData.truncateTrackData(inputData).toThrow(Error));
    });
});

/**
 * Jest test for SongSongData.sortTrackFeatures().
 */
describe("sortTrackFeatures()", () => {
    it("should return simplified track info from integer values", () => {
        // Sample raw spotify input data:
        const inputDataCase1 = {
            liveness: 0.8,
            acousticness: 0.8,
            instrumentalness: 0.8,
            speechiness: 0.8,  // ie. musicality.
            key: 0,
        }
        const inputDataCase2 = {
            liveness: 0.1,
            acousticness: 0.1,
            instrumentalness: 0.1,
            speechiness: 0.1,  // ie. musicality.
            key: 1,
        }
        const inputDataCase3 = {
            liveness: 0.1,
            acousticness: 0.4,
            instrumentalness: 0.1,
            speechiness: 0.5,  // ie. musicality.
            key: 2
        }
        const invalidInput = "test";
        // Test case 1:
        expect(SortSongData.sortTrackFeatures(inputDataCase1).live).toBe("Yes");
        expect(SortSongData.sortTrackFeatures(inputDataCase1).acoustic).toBe("Yes");
        expect(SortSongData.sortTrackFeatures(inputDataCase1).instrumental).toBe("Yes");
        expect(SortSongData.sortTrackFeatures(inputDataCase1).key).toBe("C");
        expect(SortSongData.sortTrackFeatures(inputDataCase1).musicality).toBe("Spoken word");
        // Test case 2:
        expect(SortSongData.sortTrackFeatures(inputDataCase2).live).toBe("No");
        expect(SortSongData.sortTrackFeatures(inputDataCase2).acoustic).toBe("No");
        expect(SortSongData.sortTrackFeatures(inputDataCase2).instrumental).toBe("No");
        expect(SortSongData.sortTrackFeatures(inputDataCase2).key).toBe("C #");
        expect(SortSongData.sortTrackFeatures(inputDataCase2).musicality).toBe("Musical");
        // Test case 3:
        expect(SortSongData.sortTrackFeatures(inputDataCase3).acoustic).toBe("Maybe");
        expect(SortSongData.sortTrackFeatures(inputDataCase3).musicality).toBe("Musical and spoken");
        expect(SortSongData.sortTrackFeatures(inputDataCase3).key).toBe("D");
        // Invalid test:
        expect(() => SortSongData.sortTrackFeatures(invalidInput).toThrow(Error));
    });
});

/**
 * Jest test for SongSongData.generateCharts().
 */
describe("generateCharts()", () => {
    it("should return chart options and data for input mood feature data", () => {
        // Input data:
        const inputData = {danceability: 0.5, energy: 0.4, valence: 0.3}
        // Tests:
        expect(SortSongData.generateCharts(inputData).data.datasets[0].data[0])
            .toBe((inputData.danceability * 10).toFixed(2));
        expect(SortSongData.generateCharts(inputData).data.datasets[0].data[1])
            .toBe((inputData.energy * 10).toFixed(2));
        expect(SortSongData.generateCharts(inputData).data.datasets[0].data[2])
            .toBe((inputData.valence * 10).toFixed(2));
        expect(() => SortSongData.generateCharts(null)).toThrow(TypeError);
    });
});