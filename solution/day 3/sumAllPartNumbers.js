const fs = require("fs");
const path = require("path");
const schematic = fs.readFileSync(
  path.resolve(__dirname, "../../input/schematic.txt"),
  "utf-8"
);

function parseSchematic(schematic) {
  const numberRegex = /\d+/g;
  const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?@#£,\/]/g;

  const result = { numbers: [], symbols: [] };
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
     // push all symbols to an array - along with row/column numbers
    while ((match = symbolRegex.exec(line))) {
      result.symbols.push({
        symbol: match[0],
        row: rowNumber,
        col: match.index,
      });
    }
  });
  return result
}

function isAdjacent(number, symbol) {
  const horizontallyAdjacent =
    (number.start === symbol.col + 1 || number.end === symbol.col) &&
    symbol.row === number.row;

  const verticallyOrDiagonallyAdjacent =
    symbol.col >= number.start - 1 &&
    symbol.col <= number.end &&
    Math.abs(symbol.row - number.row) === 1;

  return horizontallyAdjacent || verticallyOrDiagonallyAdjacent;
}

function findPartNumbers(numbers, symbols) {
  //cycle through numbers and push those with an adjacent symbol to an array
  const partNumbers = [];
  numbers.forEach((number) => {
    if (symbols.some((symbol) => isAdjacent(number, symbol))) {
      partNumbers.push(number.value);
    }
  });

  return partNumbers;
}

function sumAllPartNumbers(schematic) {
  const { numbers, symbols } = parseSchematic(schematic);
  const partNumbers = findPartNumbers(numbers, symbols);
  return partNumbers.reduce((sum, num) => sum + num, 0);
}

const total = sumAllPartNumbers(schematic);
console.log(total);

module.exports = sumAllPartNumbers;
