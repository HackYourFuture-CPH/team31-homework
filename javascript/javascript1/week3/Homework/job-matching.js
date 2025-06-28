console.log("=========Bonus Homework!=========");
console.log("=========Job Matching-1!=========");


function match(candidat, job) {
  if (!candidat.minSalary || !job.maxSalary) {
    throw new Error("The provided data was not complete.");
  }
  const wiggledSalary = candidat.minSalary - (candidat.minSalary * 0.1);

  return job.maxSalary >= wiggledSalary;
}

let candidat = { minSalary: 120000 };
let job = { maxSalary: 140000 };
console.log(match(candidat, job)); 