console.log("=========Bonus Homework!=========");
console.log("=========Job Matching-2!=========");



//This works on my computer perfectly, can't get it working on the codewars.

let candidates = [{
  desiresEquity: true, 
  currentLocation: 'Dhaka',
  desiredLocations: ['San Francisco', 'Copenhagen', 'Colorado'
]}, {
  desiresEquity: false, 
  currentLocation: 'New York',
  desiredLocations: ['Sao Paulo', 'Seattle', 'Texas']
}];

function match2(jobs, candidates) {
  let results = [];

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    const equityMatch = !candidate.desiresEquity || jobs.equityMax > 0;
    let locationMatch = false;

    for (let j = 0; j < jobs.locations.length; j++) {
      if (candidate.currentLocation === jobs.locations[j] || candidate.desiredLocations.includes(jobs.locations[j])) {
        locationMatch = true;
        break;
      }
    }
    results.push({candidate: i++, equityMatch: equityMatch, locationMatch: locationMatch })
  }

  return results
}

const job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] }
const job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] }

console.log(match2(job1, candidates))
console.log(match2(job2, candidates))