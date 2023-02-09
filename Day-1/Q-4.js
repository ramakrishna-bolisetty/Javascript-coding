// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. 
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. 
// The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40.
//  If you rent the car for 7 or more days, you get $50 off your total.
//  Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

var costPerDay = 40;
var totalDays = 3;
var totalCost = totalDays * costPerDay;
var discount = 0;
if (totalDays >= 7) {
    discount = 50;
    totalCost -= discount;
    console.log("Total cost is $", totalCost);
}
else if (totalDays >= 3) {
    discount = 20;
    totalCost -= discount;
    console.log("Total cost is $", totalCost);
}
else {
    discount = 0;
    totalCost -= discount;
    console.log("Total cost is ", totalCost);
}