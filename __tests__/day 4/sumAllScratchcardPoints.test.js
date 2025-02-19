const sumAllScratchcardPoints = require("../solution/sumAllScratchcardPoints");

describe("sumAllScratchCardPoints", () => {
  it("should return a number", () => {
    expect(
      typeof sumAllScratchcardPoints(`Card   1:  4 33 89 61 95 36  5 30 26 55 | 15 33 28 36 93 57 26 13 95  4 18 79  6 87 60 66 69 67 19 42 22 61 78  5 58
Card   2:  9 16 48 75 82 61 56 91  3 27 |  4 12 96 20 22 13  6 86 61 94 95 30  9 75 56 38 26 28  7 16 42 55  2 34  8`)
    ).toBe("number");
  });
  it("should correctly count the points on a single card", () => {
    expect(
      sumAllScratchcardPoints(
        `Card   1:  4 33 89 61 95 36  5 30 26 55 | 15 33 28 36 93 57 26 13 95  4 18 79  6 87 60 66 69 67 19 42 22 61 78  5 58`
      )
    ).toBe(64);
  });
  it.only("should correctly count the points on two cards", () => {
    expect(
      sumAllScratchcardPoints(
        `Card   1:  4 33 89 61 95 36  5 30 26 55 | 15 33 28 36 93 57 26 13 95  4 18 79  6 87 60 66 69 67 19 42 22 61 78  5 58
Card   2:  9 16 48 75 82 61 56 91  3 27 |  4 12 96 20 22 13  6 86 61 94 95 30  9 75 56 38 26 28  7 16 42 55  2 34  8`
      )
    ).toBe(80);
  });
});
