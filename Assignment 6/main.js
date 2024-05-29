"use strict";
// Assignment # 6
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
// Store a person name with whitespace
let personName = "\t \n Laiba Rind \t \n";
// Printing person name with whitespace
console.log("Name with whitespace:", personName);
// Strip the whitespace from the name
let Strip = personName.trim();
// Printing the stripped name
console.log("stripped name:", Strip);
