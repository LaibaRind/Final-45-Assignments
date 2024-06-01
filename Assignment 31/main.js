"use strict";
// Assignment # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let users_name = ["Laiba", "Laraib", "Maryam", "Admin", "Mehak", "Fizza"];
if (users_name.length == 0) {
    console.log("We need to find some users");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed
else {
    users_name = [];
    console.log("All user have been removed " + users_name.length);
}
