 // Assignment 24

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result 
for each of the following:*/

// • Tests for equality and inequality with strings
let password1: string = "pasword234";
let password2: string = "pasword123";

// Test for equality
console.log(password1 == password2);     //False

// Test for inequality
console.log(password1 != password2);   //True

// • Tests using the lower case function
let UpperCase: string = "LAIBA";
let lowercase: string = "laiba";

console.log(UpperCase.toLowerCase() === lowercase);  //True

/* • Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to */
let Num1: number = 1923;
let Num2: number = 1324;

// Test for equality
console.log(Num1 === Num2);     //False

// Test for inequality
console.log(Num1 != Num2);      //True

// Test for greater than
console.log(Num1 > Num2);       //True);

// Test for less than
console.log(Num1 < Num2);       //False

// Test for greater than or equal
console.log(Num1 >= Num2);      //True

// Test for less than or equal
console.log(Num1 < Num2);      //False);

// • Tests using "and" and "or" operators
let prize1: number = 320;
let prize2: number = 230;
let prize3: number = 100;
let prize4: number = 200;

// Test for && operator
console.log(prize1 != prize2 && prize3 < prize4);   //True
console.log(prize1 < prize2 && prize2 < prize3);   //False

// Test for || operator
console.log(prize1 == prize2 || prize2 != prize3); //True
console.log(prize1 < prize2 ||  prize2 < prize3); //False

// • Test whether an item is in a array
let array: number[]= [1,2,3,4,5,6,7,8,9];
let itemtoFind: number =  5;

console.log(array.indexOf(itemtoFind) !== -1);  //True

// • Test whether an item is not in a array 
console.log(array.indexOf(11) == -1);   //True
