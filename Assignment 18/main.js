"use strict";
// Assignment # 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Define array of world
let places = ["Saudia Arabia", "Palestine", "Turkey", "Iran", "Japan"];
// Print array in original order
console.log("original order:", places);
// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", places.slice().sort());
// Array is still in its original order by printing it
console.log("original order:", places);
// Print array in reverse alphabetical order without changing the order of the original list
console.log("reverse alphabetical order:", places.slice().sort().reverse());
// Array is still in its original order by printing it again
console.log("original order:", places);
// Reverse the order of your list, Print the array to show that its order has changed
console.log("reverse order change");
places.reverse();
console.log(places);
// Reverse the order of your list again. Print the list to show its back to it's original order
console.log("original order:", places.sort());
console.log(places);
// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed
console.log("revers alphabetical order changed:", places.sort().reverse());
console.log(places);
