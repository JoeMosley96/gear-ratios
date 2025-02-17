const fs = require("fs");
const path = require("path");
const almanac = fs.readFileSync(
  path.resolve(__dirname, "../input/day_5_input.txt"),
  "utf-8"
);

function parseAlmanac(almanac) {
  const almanacArray = almanac.split("\n");
  const numberRegex = /\d+/g;
  const seeds = [];
  const maps = {
    "seed-to-soil map": [],
    "soil-to-fertilizer map": [],
    "fertilizer-to-water map": [],
    "water-to-light map": [],
    "light-to-temperature map": [],
    "temperature-to-humidity map": [],
    "humidity-to-location map": [],
  };
  const mapTypes = Object.keys(maps);
  let currentMapType = "";
  almanacArray.forEach((line) => {
    if (line.includes("seeds:")) {
      seeds.push(
        ...line.match(numberRegex).map((element) => parseInt(element))
      );
    }
    mapTypes.forEach((mapType) => {
      if (line.includes(mapType)) {
        currentMapType = mapType;
      }
      if (currentMapType === mapType) {
        if (line.match(numberRegex)) {
          const unsortedArray = line
            .match(numberRegex)
            .map((element) => parseInt(element));
          const map = {};
          unsortedArray.forEach((element, index) => {
            counter = index % 3;
            if (counter === 0) {
              map.destStart = element;
            }
            if (counter === 1) {
              map.sourceStart = element;
            }
            if (counter === 2) {
              map.rangeLength = element;
            }
          });
          maps[mapType].push(map);
        }
      }
    });
  });
  return { seeds, maps };
}

function mapSeedToLocation(seed, maps) {
  let currentNumber = seed;
  
  const mapOrder = [
    "seed-to-soil map",
    "soil-to-fertilizer map",
    "fertilizer-to-water map",
    "water-to-light map",
    "light-to-temperature map",
    "temperature-to-humidity map",
    "humidity-to-location map"
  ];

  for (const mapType of mapOrder) {
    for (const combo of maps[mapType]) {
      if (currentNumber >= combo.sourceStart && currentNumber < combo.sourceStart + combo.rangeLength) {
        currentNumber = combo.destStart + (currentNumber - combo.sourceStart);
        break;
      }
    }
  }
  
  return currentNumber;
}

function findClosestLocation(almanac) {
  const { seeds, maps } = parseAlmanac(almanac);
  
  const locations = seeds.map((seed)=>{
    return mapSeedToLocation(seed, maps)
  })
  const lowestLoc = Math.min(...locations)
  console.log(lowestLoc)
  return lowestLoc;
}

console.log(findClosestLocation(almanac));

module.exports = findClosestLocation;
