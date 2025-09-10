//WEATHER WEAR FUNCTIONALITY

console.log('\n***** Homework Javascript Week02 Task 03-WEATHER WEAR *****');

function whatToWear(temprature) {
    if (temprature <= 0) {
        return 'Wear a heavy coat, scarf, gloves, and boots\n Do Not Go Outside without atleast suggested warm clothes by assuming yourself as a snowman';
    } else if (temprature <= 10) {
        return 'Wear a winter jacket and boots\nYou can also wear a scarf and gloves if you want';
    } else if (temprature <= 20) {
        return 'Wear a sweater and jeans\nYou can also wear a light jacket if you want but No need of scarf and gloves';
    } else if (temprature <= 30) {
        return 'Wear a t-shirt and shorts or torusers\nYou can check if it will rain or not and take an umbrella if needed';
    } else {
        return 'Wear a tank top and shorts\nYou can also wear a hat and sunglasses if you want';
    }
}

console.log(whatToWear(20) + '\nEnjoy your day!');