const fs = require("fs");
const path = require("path");
const schematic = fs.readFileSync(
  path.resolve(__dirname, "../input/schematic.txt"),
  "utf-8"
);

function parseSchematic(schematic) {
  const numberRegex = /\d+/g;
  const symbolRegex = /\*/g;

  const result = { numbers: [], asterisks: [] };
  const lines = schematic.split("\n");

  lines.forEach((line, rowNumber) => {
    let match;
    // push all numbers to an array - along with row/column numbers
    while ((match = numberRegex.exec(line))) {
      result.numbers.push({
        value: Number(match[0]),
        row: rowNumber,
        start: match.index,
        end: match.index + match[0].length,
      });
    }
    // push all asterisks to an array - along with row/column numbers
    while ((match = symbolRegex.exec(line))) {
      result.asterisks.push({
        symbol: match[0],
        row: rowNumber,
        col: match.index,
      });
    }
  });
  return result;
}

function isAdjacent(number, symbol) {
  const horizontallyAdjacent =
    (number.start === symbol.col + 1 || number.end === symbol.col) &&
    symbol.row === number.row;

  const verticallyOrDiagonallyAdjacent =
    symbol.col >= number.start - 1 &&
    symbol.col <= number.end &&
    Math.abs(symbol.row - number.row) === 1 ;

  return horizontallyAdjacent || verticallyOrDiagonallyAdjacent;
}

function findGears(numbers, asterisks) {
  //cycle through asterisks and push those with two adjacent numbers to an array
  const gears = [];
  asterisks.forEach((asterisk) => {
    const surroundingNumbers = numbers.filter((number) => isAdjacent(number, asterisk))
    if (surroundingNumbers.length===2) {
      gears.push([surroundingNumbers[0].value, surroundingNumbers[1].value]);
    }
  });
  return gears;
}

function sumAllGearRatios(schematic) {
  const { numbers, asterisks } = parseSchematic(schematic);
  const gears = findGears(numbers, asterisks)
  return gears.reduce((sum, gear)=>{
    return sum+gear[0]*gear[1]
  },0)

}

const total = sumAllGearRatios(schematic)
console.log(total)


module.exports = sumAllGearRatios;
