// Assignment # 15

/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.*/

// Define array of guests

let guests : string[] =["LaraibFatima","Irsa","MehakFatima","Nabiha"];

// print the name who cannot make dinner

let unabletoattend : string =guests.splice(3,1)[0];

console.log(`${unabletoattend} cant make dinner`);

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// push

guests.push("Muntaha");

// • Print a second set of invitation messages, one for each person who is still in your list

guests.forEach(guest => {
    console.log(`Hi, ${guest}, please join me for dinner at my place tonight,you're invited!`);
    
});