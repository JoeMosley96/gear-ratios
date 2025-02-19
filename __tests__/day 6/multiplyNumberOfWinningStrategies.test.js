const multiplyNumberOfWinningStrategies = require("../../solution/day 6/multiplyNumberOfWinningStrategies");

describe("multiplyNumberOfWinningStrategies", () => {
    it("should return a number", () => {
        expect(typeof multiplyNumberOfWinningStrategies(`Time:      7
Distance:  9`)).toBe("number");
    });
    it("should correctly return the number of winning strategies for a single race", () => {
        expect(multiplyNumberOfWinningStrategies(`Time:      7
Distance:  9`)).toBe(4);
    });
    it.only("should correctly return the number of winning strategies for a multiple races", () => {
        expect(multiplyNumberOfWinningStrategies(`Time:      7  15   30
Distance:  9  40  200`)).toBe(288);
    });
    
})