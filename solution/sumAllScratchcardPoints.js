const fs = require("fs");
const path = require("path");
const scratchCards = fs.readFileSync(
  path.resolve(__dirname, "../input/day_4_input.txt"),
  "utf-8"
);

function sumScratchcardPoints(scratchCard){
    const allNumbers = scratchCard.match(/\d+/g);
    const winningNumbers = allNumbers.slice(1,11)
    const yourNumbers = allNumbers.slice(11)
    const matchingNumbers = yourNumbers.filter(number => winningNumbers.includes(number))
    if (matchingNumbers.length === 0) return 0
    return Math.pow(2, matchingNumbers.length-1)
}

function sumAllScratchcardPoints(scratchCards) {
    const allScratchCards = scratchCards.split("\n");
    const totalPoints = allScratchCards.reduce((total, scratchCard) => {
        return total + sumScratchcardPoints(scratchCard)
    }, 0)
    return totalPoints
}

const answer = sumAllScratchcardPoints(scratchCards)

module.exports = sumAllScratchcardPoints;