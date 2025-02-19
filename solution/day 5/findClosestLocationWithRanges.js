const fs = require("fs");
const path = require("path");
const almanac = fs.readFileSync(
  path.resolve(__dirname, "../../input/day_5_input.txt"),
  "utf-8"
);

// console.log(almanac);

function findClosestLocation(almanac) {
  const almanacArray = almanac.split("\r\n\r\n");
  console.log(almanacArray);

  const seeds = almanacArray[0]
    .split(": ")[1]
    .split(" ")
    .map((x) => parseInt(x))
    .reduce((acc, num, i) => {
      if (i % 2 == 0) acc.push([]);
      return acc[acc.length - 1].push(num), acc;
    }, []);
  const maps = almanacArray.slice(1).map((x) =>
    x
      .split("\n")
      .slice(1)
      .map((y) => y.split(" ").map((z) => parseInt(z)))
  );

  const intervals = [];
  for (const seedInterval of seeds) {
    intervals.push([seedInterval[0], seedInterval[0] + seedInterval[1], 0]);
  }

  const location_nums = []

  while (intervals.length) {
    let [inputStart, inputEnd, conversion_id] = intervals.pop();

    if (conversion_id === 7){ // i.e. once all the conversions have been completed, push the first location number to the location_nums array
      location_nums.push(inputStart)
      continue
    }

    let overlapFound=true
    for (const conversionRange of maps[conversion_id]) {
      let [conversionDestinationStart, conversionSourceStart, delta] = conversionRange;
      const conversionSourceEnd = conversionSourceStart + delta; // number after the end of the range
      const diff = conversionDestinationStart - conversionSourceStart; // difference between the source range and the destination range
      if (inputStart >= conversionSourceEnd || inputEnd <= conversionSourceStart) {//i.e. no overlap between the input range and the conversion range
        overlapFound = false;
        continue; // i.e. exit the for loop - will push the input range to the intervals array and move on to the next conversion
      }
      if (inputStart < conversionSourceStart) {
        //i.e. if the input range starts before the conversion range
        intervals.push([inputStart, conversionSourceStart, conversion_id]); //push the portion of the input which is before the conversion range back to the intervals array- to be dealt with later
        inputStart = conversionSourceStart; // set the input start equal to the start of the conversion range 
      }
      if (inputEnd > conversionSourceEnd) {
        //i.e. the input range ends after the conversion range
        intervals.push([conversionSourceEnd, inputEnd, conversion_id]);  //push the portion of the input which is after the conversion range back to the intervals array- to be dealt with later
        inputEnd = conversionSourceEnd; //set the input end equal to the end of the conversion range
      }
      //i.e push the converted range to the intervals array, with a marker to say that the next conversion should go ahead
      intervals.push([inputStart + diff, inputEnd + diff, conversion_id + 1]); //push the portion of the input range which is within the conversion range to the intervals array
      break
    }
    if (overlapFound === false) {
      intervals.push([inputStart, inputEnd, conversion_id + 1]);
    }
  }
return Math.min(...location_nums)
}

console.log(findClosestLocation(almanac));

module.exports = findClosestLocation;
