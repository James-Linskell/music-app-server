const PlaylistFitWeb = require('../../api/GenerateScoreChart');

/**
 * Jest test for PlaylistFitWeb.generateScore().
 */
describe("generateScore()", () => {
    it("should return chart options and data for a single input integer of track score", () => {
        // Input data:
        const inputData = 8;
        // Tests:
        expect(PlaylistFitWeb.generateScore(inputData).chartData.datasets[0].backgroundColor).toBe("#bfff00");
    });
});