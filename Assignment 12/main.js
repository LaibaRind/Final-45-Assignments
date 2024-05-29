"use strict";
// Assignment # 12
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name.*/
// Array
//  Defines an array of names
let names = ["OwaisRaza", "Sadaf", "Fariya", "Nabiha", "Fizza"];
// loop
for (let i = 0; i < names.length; i++) {
    console.log(`Hi, ${names[i]}! how are you?`);
}
