const fs = require("fs");
const path = require("path");
const scratchCards = fs.readFileSync(
  path.resolve(__dirname, "../../input/day_4_input.txt"),
  "utf-8"
);

function findTotalMatches(scratchCard) {
  const allNumbers = scratchCard.match(/\d+/g);
  const winningNumbers = allNumbers.slice(1, 11);
  const yourNumbers = allNumbers.slice(11);
  const matchingNumbers = yourNumbers.filter((number) =>
    winningNumbers.includes(number)
  );
  return matchingNumbers.length;
}

function sumAllCopies(scratchCards) {
  const allCards = scratchCards.split("\n").map((card) => [card]);
  let total = 0;
  allCards.forEach((cardStack, index) => {
    const matchCount = findTotalMatches(cardStack[0]);
    cardStack.forEach((card) => {
      for (let j = index + 1; j < index + matchCount + 1; j++) {
        allCards[j].push(allCards[j][0]);
      }
    });
    total += cardStack.length;
  });
  return total;
}

console.log(sumAllCopies(scratchCards));

module.exports = sumAllCopies;
