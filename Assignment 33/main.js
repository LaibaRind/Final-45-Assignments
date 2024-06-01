"use strict";
// Assignment # 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.*/
// • Store the numbers 1 through 9 in a array.
let ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (let i = 0; i < ordinal_num.length; i++) {
    /*• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
    Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
    if (ordinal_num[i] == 1) {
        console.log(`${ordinal_num[i]}st`);
    }
    else if (ordinal_num[i] == 2) {
        console.log(`${ordinal_num[i]}nd`);
    }
    else if (ordinal_num[i] == 3) {
        console.log(`${ordinal_num[i]}rd`);
    }
    else if (ordinal_num[i] >= 4 && ordinal_num[i] <= 9) {
        console.log(`${ordinal_num[i]}th`);
    }
}
;
