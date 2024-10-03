/*
* Exercise 1: 
*/
function doubleValues(arr) {
    return arr.map(num => num * 2);
}

/*
* Exercise 2:
*/
function onlyEvenValues(arr) {
    return arr.filter(num => num % 2 === 0);
}

/*
* Exercise 3:
*/
function showFirstAndLast(arr) {
    return arr.map(str => str.charAt(0) + str.charAt(str.length - 1));
}

/*
* Exercise 4:
*/
function addKeyAndValue(arr, key, value) {
    return arr.map(obj => {
        obj[key] = value;
        return obj;
    });
}

/*
* Exercise 5:
*/
function vowelCount(str) {
    const vowels = 'aeiou';
    const result = {};
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }

    return result;
}
/*
 * Exercise 1: 
 */
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

/*
 * Exercise 2: 
 */
function stringItUp(arr) {
    return arr.map(num => num.toString());
}

/*
 * Exercise 3:  
 */
function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

/*
 * Exercise 4:  
 */
function namesOnly(arr) {
    return arr.map(obj => obj.name);
}

/*
 * Exercise 5:  
 */
function makeStrings(arr) {
    return arr.map(obj => {
        return obj.age >= 18 ?
            `${obj.name} can go to The Matrix` :
            `${obj.name} is under age!!`;
    });
}

/*
 * Exercise 6:  
 */
function readyToPutInTheDOM(arr) {
    return arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`);
}

/*
 * Exercise 7:
 */
function doubleValues(arr) {
    return arr.map(num => num * 2);
}

/*
 * Exercise 8:
 */
function valTimesIndex(arr) {
    return arr.map((num, index) => num * index);
}

/*
 * Exercise 9:
 */
function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
}

/*
 * Exercise 10:
 */
function extractFullName(arr) {
    return arr.map(obj => `${obj.first} ${obj.last}`);
}
