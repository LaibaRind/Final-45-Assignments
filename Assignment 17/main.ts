//  Assignment # 17

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.*/

//  Define array of guests

let guests : string[] =["LaraibFatima","Irsa","MehakFatima","Muntaha"];

// Print a message

console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guests");

// unshift()

guests.unshift("Rida","Rahila");

// print message updated list

console.log("updated list of guest:", guests);

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.

while (guests.length > 2) {
    let removedguests : string | undefined =guests.pop();
    if (removedguests !== undefined) {
        console.log(`Sorry. ${removedguests}.we can't invite you`);
        
}
}

// Print a message to each of the two people still on your list, letting them know they're still invited 

guests.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for dinner`);
    
});

// • Remove the last two names from your list, so you have an empty list. 
// Remove two name from the list 

guests.splice(0, guests.length);

// Print your list to make sure you actually have an empty list at the end of your program*/
//  Print updatedempty list

console.log("Updated list of guest:", guests);