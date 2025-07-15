console.log("=========Series Duration=========");

const series = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function seriesDuration() {  //function logOutSeriesText() didn't make much sense (as was written in homework)
  let totalViewTime = 0; 
  const lifeTimeInMinutes  = 80 * 365 * 24 * 60;  

  for (i = 0; i < series.length; i++){
    const seriesTime = (series[i].days * 24 * 60) + (series[i].hours * 60) + series[i].minutes;
    const percentOfAge = (seriesTime / lifeTimeInMinutes ) * 100;
    console.log(`${series[i].title} took ${(percentOfAge).toFixed(3)}% of my life`);
    totalViewTime += seriesTime;
  }   
    totalViewTime = (totalViewTime / lifeTimeInMinutes ) * 100;
    console.log(`In total that took ${totalViewTime.toFixed(3)}% of my life`);
}

seriesDuration();