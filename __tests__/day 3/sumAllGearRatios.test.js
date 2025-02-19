const sumAllGearRatios = require("../solution/sumAllGearRatios")

describe("sumAllGearRatios", () => {
    it("should return a number", () => {
        expect(typeof sumAllGearRatios(`
467..114..
...*......
..35..633.`)).toBe("number");
    });
    it("should correctly return the sum of the gear ratios - three lines",()=>{
        expect (sumAllGearRatios(`
467..114..
...*......
..35..633.`)).toBe(16345)
        })
    it("should correctly return the sum of the gear ratios - multiple lines", ()=>{
        expect(sumAllGearRatios(`
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
        )).toBe(467835)
        expect(sumAllGearRatios(`
12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
........*...
2.2......12.
.*.........*
1.1..503+.56`)).toBe(6900)
    })
})