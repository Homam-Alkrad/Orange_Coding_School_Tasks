// 1. Correct the syntax errors
var array1 = [1, 7, 9, 45];
var array2 = ["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];

// 2. Find the index of "Banana" and "Tomato"
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log("Index of Banana: ", fruits.indexOf("Banana")); // Output: 1
console.log("Index of Tomato: ", fruits.indexOf("Tomato")); // Output: 0

// 3. Favorite Food, Sport, and Movie Arrays
var favoriteFood = ["Pizza", "Sushi", "Pasta", "Steak", "Ice Cream"];
var favoriteSport = ["Soccer", "Basketball", "Tennis"];
var favoriteMovies = ["Inception", "The Matrix", "The Dark Knight", "Interstellar"];

// 4. Function to return the first element of an array
function firstOfArray(arr) {
    return arr[0];
}
console.log(firstOfArray([1, 4, 5])); // Output: 1
console.log(firstOfArray(["t", "u", "g", "x"])); // Output: "t"

// 5. Function to return the last element of an array
function lastOfArray(arr) {
    return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5])); // Output: 5
console.log(lastOfArray(["t", "u", "g", "x"])); // Output: "x"

// 6. Array manipulation (push, unshift, shift, pop)
var array = [0, 5, 7, 9];
array.pop(); // removes 9
array.pop(); // removes 7
array.shift(); // removes 0
array.shift(); // removes 5
array.push(6, 8, 9, 10);
array.unshift(1, 3, 4);
console.log(array); // Output: [1, 3, 4, 6, 8, 9, 10]

// 7. Return values of (push, unshift, shift, pop)
var array2 = [5, 9, -7, 3.5];
console.log(array2.push(10)); // Output: 5 (new length)
console.log(array2.unshift(0)); // Output: 6 (new length)
console.log(array2.shift()); // Output: 0 (removed element)
console.log(array2.pop()); // Output: 10 (removed element)

// 8. Function to return the middle element(s) of an array
function middleOfArray(arr) {
    var mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return arr[mid - 1] + " and " + arr[mid];
    } else {
        return arr[mid];
    }
}
console.log(middleOfArray([1, 4, 5])); // Output: 4
console.log(middleOfArray(["t", "u", "g", "x"])); // Output: "u and g"

// 9. Modify the animals and nums arrays
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.splice(2); // remove third element
console.log(animals); // Output: ['zebra', 'elephant']

var nums = [1, 2, 3, 8, 9];
nums = [5, -22, 3.5, 44, 98, 44];
console.log(nums); // Output: [5, -22, 3.5, 44, 98, 44]

// 10. Function to return the element at a given index
function indexOfArray(arr, index) {
    return arr[index];
}
console.log(indexOfArray(nums, 3)); // Output: 44
console.log(indexOfArray(nums, 1)); // Output: -22
console.log(indexOfArray(nums, 4)); // Output: 98


/*
11. Create a function called arrayExceptLast
that accepts an array and returns the entire array except the last element
*/
function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1);
}

var nums = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums)); // Output: [1, 2, 3, 8]

/*
12. Create a function called addToEnd
that accepts an array and value and returns the array with the value added to the end
*/
function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}

console.log(addToEnd(nums, 55)); // Output: [1, 2, 3, 8, 9, 55]

/*
13. Create a function called sumArray
that accepts an array and returns the summation of all elements
** using for loop
*/
function sumArrayFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArrayFor(nums)); // Output: 78

// ** using while loop
function sumArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

console.log(sumArrayWhile(nums)); // Output: 78

/*
14. Create a function called minInArray
that accepts an array and returns the minimum value
** using for loop
*/
function minInArrayFor(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minInArrayFor(nums)); // Output: 1

// ** using while loop
function minInArrayWhile(arr) {
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    return min;
}

console.log(minInArrayWhile(nums)); // Output: 1

/*
15. Create a function called removeFromArray
that accepts an array and an element to remove and returns the array after removing it
** using for loop
*/
function removeFromArrayFor(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeFromArrayFor(nums, 8)); // Output: [1, 2, 3, 9, 55]

// ** using while loop
function removeFromArrayWhile(arr, value) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== value) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

console.log(removeFromArrayWhile(nums, 8)); // Output: [1, 2, 3, 9, 55]

/*
16. Create a function called oddArray
that accepts an array and returns an array of odd elements
** using for loop
*/
function oddArrayFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddArrayFor(nums)); // Output: [1, 3, 9, 55]

// ** using while loop
function oddArrayWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

console.log(oddArrayWhile(nums)); // Output: [1, 3, 9, 55]

/*
17. Create a function called aveArray
that accepts an array and returns the average
** using for loop
*/
function aveArrayFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(aveArrayFor(nums)); // Output: 15.6

// ** using while loop
function aveArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum / arr.length;
}

console.log(aveArrayWhile(nums)); // Output: 15.6

/*
18. Create a function called shorterInArray
that accepts an array of strings and returns the shortest string
** using for loop
*/
function shorterInArrayFor(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArrayFor(strings)); // Output: "alex"

// ** using while loop
function shorterInArrayWhile(arr) {
    let shortest = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
        i++;
    }
    return shortest;
}

console.log(shorterInArrayWhile(strings)); // Output: "alex"

/*
19. Create a function called repeatChar
that accepts a string and a char and returns the count of the char
** using for loop
*/
function repeatCharFor(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatCharFor(string, "a")); // Output: 6

// ** using while loop
function repeatCharWhile(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(repeatCharWhile(string, "a")); // Output: 6

/*
20. Create a function called evenIndexOddLength
that accepts an array of strings and returns a new array of strings with odd length at even index
** using for loop
*/
function evenIndexOddLengthFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(evenIndexOddLengthFor(strings)); // Output: ["madrasa"]

// ** using while loop
function evenIndexOddLengthWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

console.log(evenIndexOddLengthWhile(strings)); // Output: ["madrasa"]

/*
21. Create a function called powerElementIndex
that accepts an array and returns a new array with each element powered by its index
** using for loop
*/
function powerElementIndexFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], i));
    }
    return result;
}

var nums2 = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndexFor(nums2)); // Output: [1, 5, 16, 27, 16, 100000]

// ** using while loop
function powerElementIndexWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(Math.pow(arr[i], i));
        i++;
    }
    return result;
}

console.log(powerElementIndexWhile(nums2)); // Output: [1, 5, 16, 27, 16, 100000]

/*
22. Create a function called evenNumberEvenIndex
that accepts an array and returns a new array of even numbers at even index
** using for loop
*/
function evenNumberEvenIndexFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var nums3 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndexFor(nums3)); // Output: [2, 8, 34]

// ** using while loop
function evenNumberEvenIndexWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

console.log(evenNumberEvenIndexWhile(nums3)); // Output: [2, 8, 34]
