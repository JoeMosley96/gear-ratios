const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(
  path.resolve(__dirname, "../../input/day_6_input.txt"),
  "utf-8"
);

function parseInput(input) {
  const inputArr = input.split("\n");
  const raceLength = inputArr[0].match(/\d+/g).join("");
  const distanceTarget = inputArr[1].match(/\d+/g).join("");
  return { raceLength, distanceTarget };
}

function calculateNumberOfWinningStrategies(input) {
  const { raceLength, distanceTarget } = parseInput(input);
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

console.log(calculateNumberOfWinningStrategies(input))

module.exports = calculateNumberOfWinningStrategies;



