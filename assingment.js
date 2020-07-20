// UnitConverterFeetToMile

function feetToMile(feets) {
    var mile = (feets / 5280) + " miles";
    return mile;
}
var lengthInFeet = 2640;
var lengthInMile = feetToMile(lengthInFeet);
console.log(lengthInMile);




// WoodCalculator

function woodCalculator(cheir, table, bed) {
    var cheirWood = cheir * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = cheirWood + tableWood + bedWood;
    return totalWood;
}
var cheirs = 5;
var tables = 10;
var beds = 2;
var totalWoods = woodCalculator(cheirs, tables, beds);
console.log(totalWoods);




// BricksCalculator 

function brickCalculator(floor, brickPerft) {
    var totalFeet;
    var exFloor;
    var exFeet;
    if (floor <= 10) {
        totalFeet = floor * 15;
    }
    if (floor >= 10 && floor <= 20) {
        exFloor = floor - 10;
        exFeet = exFloor * 12;
        totalFeet = exFeet + (10 * 15);
    }
    if (floor >= 21) {
        exFloor = floor - 20;
        exFeet = exFloor * 10;
        totalFeet = exFeet + (10 * 12) + (10 * 15);
    }
    var totalBrick = brickPerft * totalFeet;
    return totalBrick;

}
var brickPerft = 1000;
var floor = 12;
var totalBricks = brickCalculator(floor, brickPerft);
console.log(totalBricks);




// FindTinyFriend

function tinyFriend(friends) {

    var min = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length < min.length) {
            min = friends[i];
        }
    }
    return min;
}
var friend = ["Alyssa", "Sophia", "Dianna", "inna", "inn"];
var lettleFriend = tinyFriend(friend);
console.log(lettleFriend);