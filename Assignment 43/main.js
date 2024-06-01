"use strict";
// Assignment # 43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
let magicians = ["Dynamo", "Ricky jay", "Criss Angel"];
function copyarray(arr) {
    return [...arr];
}
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = magicians[i] + ' the Great';
    }
}
function show_magicians(magiciansArray) {
    magiciansArray.forEach(magicians => {
        console.log(magicians);
    });
}
const copyMagician = copyarray(magicians);
make_great(copyMagician);
console.log(`\n\nOriginal Array:`);
show_magicians(magicians);
console.log(`\n\nModified copy of Array:`);
show_magicians(copyMagician);
