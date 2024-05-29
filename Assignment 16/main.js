"use strict";
// Assignment # 16
/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list*/
// Define array of guests
let guests = ["LaraibFatima", "Irsa", "MehakFatima", "Muntaha"];
console.log("Great news we found a bigger table");
// Add guest in array begining
// unshift()
guests.unshift("Mrs. Anwer");
// Add guest in middle of the array
// splice()
guests.splice(Math.floor(guests.length / 2), 0, "OwaisRaza");
// Add guest in array end
// push
guests.push("Fizza");
// foreach
guests.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});
