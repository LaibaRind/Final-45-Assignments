"use strict";
// Assignment # 14
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
// Define array of guests
let guests = ["LaraibFatima", "Irsa", "MehakFatima", "Nabiha"];
// map ()
//  Invite guest 
let invitation = guests.map(guest => `Hi, ${guest}, please join me for dinner at my place tonight,you're invited!`);
console.log(invitation);
