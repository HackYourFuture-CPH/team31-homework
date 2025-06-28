
console.log("=========Travel Information!=========");

const travelInformation = {speed: 50, destinationDistance: 432};

const travelTime = totalTime(travelInformation);
function totalTime(travelInformation) {
    const travelTimeInMinutes = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    const hours = Math.floor(travelTimeInMinutes / 60);
    const minutes = Math.round(travelTimeInMinutes % 60); 
    return `The trip will take: ${hours} hours and ${minutes} minutes`;
}

console.log (travelTime);