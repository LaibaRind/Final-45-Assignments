// Assignment # 39

/*City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city:string, country:string) {
    return city + ", " + country;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("El Fasher", "Sudan"));
console.log(city_country("Rafah","Palestine"));
