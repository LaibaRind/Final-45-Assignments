"use strict";
// Assignment # 3
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in
 lowercase, uppercase, and titlecase.*/
// Storing a person name in a veriable
let personName = "Laiba Rind";
// Printing the person name   
// lowercase:
console.log("lowercase:", personName.toLowerCase());
// Uppercase:
console.log("Uppercase:", personName.toUpperCase());
// Tittlecase:
console.log("Tittlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
