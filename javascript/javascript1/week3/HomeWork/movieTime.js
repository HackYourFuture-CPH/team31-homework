//Time Calculated in %age of Life Span spent on watching different series.
console.log("\n*******Movie Time %age over Life SPan Calculator*************");
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 8,
    hours: 3,
    minutes: 37,
  },
  {
    title: "Sopranos",
    days: 7,
    hours: 11,
    minutes: 45,
  },
  {
    title: "The Wire",
    days: 5,
    hours: 12,
    minutes: 15,
  },
  {
    title: "Best Games",
    days: 13,
    hours: 20,
    minutes: 28,
  },
  {
    title: "America",
    days: 21,
    hours: 4,
    minutes: 24,
  },
];

function getseriesDurations(obj) {
  let percentageTotal = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const durationOfSeriesInYears =
      daysConverterToYear(obj[i].days) +
      hoursConverterToYear(obj[i].hours) +
      minutesConverterToYears(obj[i].minutes);
    const percentage = (durationOfSeriesInYears / 80) * 100;
    percentageTotal += percentage;
    console.log(
      `'${obj[i].title}', took ${percentage.toFixed(3)}% of my life.`
    );
  }
  console.log(`In Total that is  ${percentageTotal.toFixed(3)}% of my life`);
}

getseriesDurations(seriesDurations);

function daysConverterToYear(noOfDays) {
  return noOfDays / 365;
}

function hoursConverterToYear(noOfHours) {
  return noOfHours / (365 * 24);
}

function minutesConverterToYears(noOfMinutes) {
  return noOfMinutes / (365 * 24 * 60);
}
