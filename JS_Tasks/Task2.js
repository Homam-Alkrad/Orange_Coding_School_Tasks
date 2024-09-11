// Task 1: Birthdate Month
let month = prompt("Please enter your birthdate month (as a number):");

switch (parseInt(month)) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// Task 2: Loop to Produce Number Pyramid
let count = 1;
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += count + " ";
        count++;
    }
    console.log(row.trim());
}

// Task 3: Numbers Divisible by 13
for (let i = 1; i <= 1000; i++) {
    if (i % 13 === 0) {
        console.log(i);
    }
}

// Task 4: Multiplication Using Only Sum
function multiplication2(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

console.log(multiplication2(5, 4)); // 20
console.log(multiplication2(2, 8)); // 16
console.log(multiplication2(7, 6)); // 42

// Task 5: Calculate the Area of a Triangle
function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log(triangleArea(5, 10)); // 25
console.log(triangleArea(7, 14)); // 49

// Task 6: Pandigital Number Checker
function isPandigital(number) {
    let numStr = number.toString();
    for (let i = 0; i <= 9; i++) {
        if (!numStr.includes(i.toString())) {
            return false;
        }
    }
    return true;
}

console.log(isPandigital(98140723568910)); // true
console.log(isPandigital(90864523148909)); // false (missing 7)

// Task 7: Favorite Drink and Price Using Switch Statement
let drink = prompt("Enter your favorite drink:");

switch (drink.toLowerCase()) {
    case "banana":
        console.log("The price of a banana drink is 20 dollars");
        break;
    case "apple":
        console.log("The price of an apple drink is 15 dollars");
        break;
    case "orange":
        console.log("The price of an orange drink is 18 dollars");
        break;
    case "coffee":
        console.log("The price of a coffee drink is 25 dollars");
        break;
    case "tea":
        console.log("The price of a tea drink is 10 dollars");
        break;
    default:
        console.log("Sorry, we don't have that drink");
}
