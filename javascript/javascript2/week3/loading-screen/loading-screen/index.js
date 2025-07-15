const steps = document.querySelectorAll(".loading_step");
let progress = 0;
/**
 * @param {number} percents Loading percentage between 0 and 1.
 */
function progressTo(percents) {
  const count = Math.min(percents * steps.length, steps.length);
  for (let i = 0; i < count; i++) {
    steps[i].style.opacity = "1";
  }
}

const intervalId = setInterval(function () {
  progress += 0.1;
  progressTo(progress);
  if (progress >= 1) {
    clearInterval(intervalId);
  }
}, 1000);

// setInterval(function () {
//   progress += 0.1;
//   progressTo(progress);g
// }, 1000);

// // Progress to 10% after 1 seconds
// setTimeout(function () {
//   progressTo(0.1);
// }, 1000);

// // TODO: Progress to 60% after 6 seconds
// setTimeout(function () {
//   progressTo(0.6);
// }, 6000);

// // TODO: Progress to 80% after 8 seconds
// setTimeout(function () {
//   progressTo(0.8);
// }, 8000);

// // TODO: Progress to 100% after 10 seconds
// setTimeout(function () {
//   progressTo(1);
// }, 10000);
