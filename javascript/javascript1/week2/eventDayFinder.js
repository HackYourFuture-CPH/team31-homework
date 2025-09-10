//EVENT APPLICATION FUNCTIONALITY

console.log('\n***** Homework Javascript Week02 Task 02-EVENT DAY FINDER *****');

function getEventWeekday(daysFromToday) {
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const eventDay = (today.getDay() + daysFromToday) % 7;
    return weekDay[eventDay];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

