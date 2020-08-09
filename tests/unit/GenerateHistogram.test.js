const GenerateHistogram = require('../../api/GenerateHistogram');

/**
 * Jest test for GenerateHistogram.generateHistogram().
 */
describe("generateHistogram()", () => {
    it("should return chart options and data from input json of binned data and song index", () => {
        // Input data:
        const inputData = {
            data: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            songIndex: 5,
        };
        // Tests:
        expect(GenerateHistogram.generateHistogram(inputData).chartData.datasets[0].data)
            .toStrictEqual([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        expect(GenerateHistogram.generateHistogram(inputData).chartData.datasets[0].backgroundColor[5])
            .toBe("darkgreen");     // Test for input index
        expect(GenerateHistogram.generateHistogram(inputData).chartData.datasets[0].backgroundColor[1])
            .toBe("darkred");     // Test for any other index
        expect(() => GenerateHistogram.generateHistogram(null)).toThrow(TypeError);
    });
});