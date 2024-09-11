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
