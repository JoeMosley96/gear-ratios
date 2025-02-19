const calculateNumberOfWinningStrategiesLong = require("../../solution/day 6/calculateNumberOfWinningStrategies");

describe("calculateNumberOfWinningStrategiesLong", () => {
    it("should return a number", () => {
        expect(typeof calculateNumberOfWinningStrategiesLong(`Time:      7
Distance:  9`)).toBe("number");
    });
    it("should correctly return the number of winning strategies for a single race", () => {
        expect(calculateNumberOfWinningStrategiesLong(`Time:      7
Distance:  9`)).toBe(4);
    });
    it("should correctly return the number of winning strategies when multiple races need to be concatenated", () => {
        expect(calculateNumberOfWinningStrategiesLong(`Time:      7  15   30
Distance:  9  40  200`)).toBe(71503);
    });
    
})