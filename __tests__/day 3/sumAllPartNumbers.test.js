const sumAllPartNumbers = require("../solution/sumAllPartNumbers");

describe("sumAllPartNumbers", () => {
  it("should return a number", () => {
    expect(typeof sumAllPartNumbers("..234..$123..12...56$")).toBe("number");
  });
  it("should correctly count the part numbers on a single row", () => {
    expect(sumAllPartNumbers("..234..$123..12...56$")).toBe(179);
    expect(sumAllPartNumbers("..234...123..12...56.")).toBe(0);
  });
  it("should correctly count the part numbers on two rows", () => {
    expect(
      sumAllPartNumbers(`
..234..$123..12...56$
..*..........&.......`)
    ).toBe(425);
    expect(
      sumAllPartNumbers(`
..234..$123..12...56$
..#.........-456.....`)
    ).toBe(881);
  });
  it("should correctly count the part numbers on three rows", () => {
    expect(
      sumAllPartNumbers(`
...1....33....46..123
11...123.6....$7..^..
6.11..23..%..98......
        `)
    ).toBe(280);
    expect(
      sumAllPartNumbers(`
...1....33@...46.1123
11...123.6....$7..^..
6.11..23..%..98......
        `)
    ).toBe(1313);
  });
  it("should correctly count the part numbers on multiple rows - no duplicate part numbers", () =>{
    expect(sumAllPartNumbers(`
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
    )).toBe(4361)
  })
  it("should correctly count the part numbers on multiple rows - with duplicate part numbers", () => {
    expect(
      sumAllPartNumbers(`
12.......$..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56`)
    ).toBe(925);
    expect(
      sumAllPartNumbers(`
12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56`)
    ).toBe(413);
  });
});
