"use strict";
// Assignment # 45
/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure
all the information was stored correctly.*/
function Cars_details(manufacturer, model, option) {
    return Object.assign({ manufacturer: manufacturer, model: model }, option);
}
let car = Cars_details("toyota", "corolla", { color: "red", sunroof: true, year: 2022 });
console.log(car);
