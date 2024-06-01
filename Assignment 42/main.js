"use strict";
// Assignment # 42
/*Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding the phrase
the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
let magicians = ["Dynamo", "Ricky jay", "Criss Angel"];
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
make_great(magicians);
show_magicians(magicians);
