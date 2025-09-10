// Calculation of time in hours and minutes to reach destination.
console.log("\n*******Travel Duration Calculator***************");
const travelInformation = {};
travelInformation.speed = 50;
travelInformation.destinationDistance = 432;
const travelTime = calculateTravelTime(
  travelInformation.speed,
  travelInformation.destinationDistance
);

function calculateTravelTime(speedInKm, destDistInKm) {
  const requiredTime = destDistInKm / speedInKm;
  const hours = seperateHours(requiredTime);
  const minutes = seperateMinutes(requiredTime, hours);
  return `${hours} hours and ${minutes} minutes.`;
}

function seperateHours(totalTime) {
  return Math.floor(totalTime);
}

function seperateMinutes(totalTime, hour) {
  return Math.round((totalTime - hour) * 60);
}

console.log(`Time to the destination is: ${travelTime}`);
