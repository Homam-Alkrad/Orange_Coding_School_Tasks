/*
Task 1: Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
*/
function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);
// Output: You will be a software engineer in Jordan, and married to Alice with 3 kids.


/*
Task 2: Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
*/
function calculateDogAge(puppyAge) {
    const dogYears = puppyAge * 7;
    console.log(`Your doggie is ${dogYears} years old in dog years!`);
}

calculateDogAge(1);
// Output: Your doggie is 7 years old in dog years!


/*
Task 3: Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result like so:
"You will need NN to last you until the ripe old age of X"
*/
function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
    const totalAmount = amountPerDay * 365 * yearsRemaining;
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(30, 3);
// Output: You will need 76650 to last you until the ripe old age of 100


/*
Task 4: Write a function called greet that:
takes 1 argument: name.
and it will return "Hello + name"
*/
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Adam"));
// Output: Hello Adam


/*
Task 5: Error Explanation:
The errors in the previous functions are:
1. cannot define multiple functions with the same name but different argument types in JavaScript.
2. Variable 'x' is not defined in one of the functions.
Correcting these below:
*/
function double(x) {
    return 2 * x;
}

console.log(double(7));     // Output: 14
console.log(double('7'));   // Output: 14 (JavaScript will convert '7' to a number)


/*
Task 6: Fix these functions:
Correcting the syntax errors in these functions:
*/
function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}

console.log(double1(5)); // Output: 10
console.log(double2(6)); // Output: 12
console.log(double3(7)); // Output: 14

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
*/
function cube(num) {
    return num ** 3;
}

console.log(cube(4)); // Output: 64


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
*/
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // Output: 12
console.log(multiply(5, 4)); // Output: 20


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
*/
function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return "yes you can";
    } else {
        return `please come back after ${20 - age} years to get one`;
    }
}

console.log(canIGetADrivingLicense(21)); // Output: "yes you can"
console.log(canIGetADrivingLicense(17)); // Output: "please come back after 3 years to get one"
console.log(canIGetADrivingLicense(20)); // Output: "yes you can"


/*
10
Write a function called sameLength
that accepts two strings as arguments
*/
function sameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(sameLength("tree", "clue")); // Output: true
console.log(sameLength("tree", "car"));  // Output: false


/*
11
Write a function called largerNumber
that accept two numbers as arguments
*/
function largerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(largerNumber(5, 6)); // Output: 6
console.log(largerNumber(5, 3)); // Output: 5


/*
12
Write a function called smallerNumber
that accept three numbers as arguments
*/
function smallerNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

console.log(smallerNumber(8, 6, 7)); // Output: 6
console.log(smallerNumber(5, 99, 34)); // Output: 5
console.log(smallerNumber(5, 99, 3)); // Output: 3
console.log(smallerNumber(5, 3, 3)); // Output: 3


/*
13
Write a function called shorterString
that accept five string as arguments
*/
function shorterString(str1, str2, str3, str4, str5) {
    return [str1, str2, str3, str4, str5].reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
}

console.log(shorterString("air", "school", "car", "by", "github")); // Output: by
console.log(shorterString("air", "tr", "car", "by", "github"));     // Output: tr
console.log(shorterString("by", "tr", "car", "air", "github"));     // Output: by


/*
14
Write a function called longerString
that accept four string as arguments
*/
function longerString(str1, str2, str3, str4) {
    return [str1, str2, str3, str4].reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

console.log(longerString("air", "school", "car", "github"));   // Output: school
console.log(longerString("air", "schoo", "car", "github"));    // Output: github

/*
15
Write a function called isEven
that accepts 1 argument as a number,
and returns true if this number is even
and false if this number is odd
*/
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(1)); // Output: false
console.log(isEven(2)); // Output: true


/*
16
Write a function called isOdd
that accepts 1 argument as a number,
and returns true if this number is odd
and false if this number is even
*/
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(4)); // Output: false
console.log(isOdd(5)); // Output: true


/*
17
Write a function called positive
that accepts 1 argument as a number,
and returns the positive version of the number passed
*/
function positive(num) {
    return Math.abs(num);
}

console.log(positive(4)); // Output: 4
console.log(positive(-5)); // Output: 5


/*
18
Write a function called fullName
that accepts two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
*/
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Adam", "McCallen")); // Output: "Adam McCallen"
console.log(fullName("Alex", "Mercer"));   // Output: "Alex Mercer"


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
*/
function average(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(average(1, 2, 3, 4, 5));   // Output: 3
console.log(average(5, 7, 9, 3, 5));   // Output: 5.8


/*
20
Write a function called randomNumber
that doesn't take any parameter
and returns a random number between 0-1
*/
function randomNumber() {
    return Math.random();
}

console.log(randomNumber());  // Output: Random number between 0 and 1


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters and returns a random number between them
*/
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(1, 8));    // Output: Random number between 1 and 8
console.log(randomBetweenNumbers(3, 100));  // Output: Random number between 3 and 100


/*
22
Write a function called scoreInUniversity
that takes 1 parameter and returns the grade in the university system
*/
function scoreInUniversity(score) {
    if (score >= 95 && score <= 100) {
        return "A";
    } else if (score >= 85 && score <= 94) {
        return "B";
    } else if (score >= 70 && score <= 84) {
        return "C";
    } else if (score >= 50 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

console.log(scoreInUniversity(96)); // Output: "A"
console.log(scoreInUniversity(3));  // Output: "F"
console.log(scoreInUniversity(71)); // Output: "C"


/*
23
Write a function called counter
that will return a number bigger
than the one that returned before, starting from 0
*/
let count = 0;
function counter() {
    return ++count;
}

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3


/*
24
Write a function called resetCounter
that will reset the previous function
and return the number before reset and
a string saying that the counter is reset
*/
function resetCounter() {
    let temp = count;
    count = 0;
    return `${temp} and the counter is reset now`;
}

console.log(counter());       // Output: 1
console.log(counter());       // Output: 2
console.log(resetCounter());  // Output: "2 and the counter is reset now"
console.log(counter());       // Output: 1
console.log(counter());       // Output: 2
console.log(resetCounter());  // Output: "2 and the counter is reset now"
console.log(counter());       // Output: 1
