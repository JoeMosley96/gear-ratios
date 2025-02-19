const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(
  path.resolve(__dirname, "../../input/day_6_input.txt"),
  "utf-8"
);

function parseInput(input) {
    const inputArr = input.split("\n");
    const raceLengths = inputArr[0].match(/\d+/g);
    const distanceTargets = inputArr[1].match(/\d+/g);
    return { raceLengths, distanceTargets };
}

function calculateNumberOfWinningStrategies(raceLength, distanceTarget) {
    const potentialHoldTimes = Array.from({ length: Number(raceLength) + 1 }, (_, i) =>  i);
    const finalDistances = [];
    potentialHoldTimes.forEach((holdTime) => {
    const travelTime = Number(raceLength) - holdTime;
    const speed = holdTime;
    const distance = speed * travelTime;
    finalDistances.push(distance);
  });
  const winningHoldTimes = finalDistances.filter(
    (finalDistance) => finalDistance > Number(distanceTarget)
  );

  return winningHoldTimes.length;
}

function multiplyNumberOfWinningStrategies(input) {
    const { raceLengths, distanceTargets } = parseInput(input);
    return raceLengths.reduce((acc, raceLength, i) => acc * calculateNumberOfWinningStrategies(raceLength, distanceTargets[i]), 1);
  }

console.log(multiplyNumberOfWinningStrategies(input))

module.exports = multiplyNumberOfWinningStrategies;



