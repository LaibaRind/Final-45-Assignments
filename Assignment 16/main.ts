// Assignment # 16

/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table.*/


// Define array of guests

let guests : string[] =["LaraibFatima","Irsa","MehakFatima","Muntaha"];

console.log("Great news we found a bigger table");

// • Add one new guest to the beginning of your array.
// unshift()

guests.unshift ("Mrs. Anwer");

// • Add one new guest to the middle of your array.  
// splice()

guests.splice(Math.floor(guests.length/2),0, "OwaisRaza");

// • Use append() to add one new guest to the end of your list.
// push

guests.push("Fizza");

// • Print a new set of invitation messages, one for each person in your list*/
// foreach

guests.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
    
});