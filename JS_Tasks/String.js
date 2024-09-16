// 1. Concatenation: Combine the strings "Hello" and "World" with a space in between.
let str1 = "Hello";
let str2 = "World";
let combinedStr = str1 + " " + str2;
console.log(combinedStr); // Output: "Hello World"

// 2. Length: Find the length of the string "JavaScript".
let jsString = "JavaScript";
let lengthOfJsString = jsString.length;
console.log(lengthOfJsString); // Output: 10

// 3. Accessing characters: Get the first character of the string "Programming".
let progString = "Programming";
let firstChar = progString[0];
console.log(firstChar); // Output: "P"

// 4. Substrings: Extract the substring "code" from the string "coding is fun".
let codingString = "coding is fun";
let substring = codingString.substring(0, 4); // Extracting first 4 characters "code"
console.log(substring); // Output: "code"

// 5. Replacing characters: Replace all occurrences of the letter "a" with "e" in the string "cat".
let catString = "cat";
let replacedString = catString.replace(/a/g, "e");
console.log(replacedString); // Output: "cet"

// 6. Uppercase and lowercase: Convert the string "javascript" to uppercase.
let lowercaseString = "javascript";
let uppercaseString = lowercaseString.toUpperCase();
console.log(uppercaseString); // Output: "JAVASCRIPT"

// 7. Splitting strings: Split the string "apple,banana,orange" into an array of words.
let fruits = "apple,banana,orange";
let fruitsArray = fruits.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "orange"]

// 8. Joining arrays: Join the array ["hello", "world"] into a string with a space between each word.
let helloWorldArray = ["hello", "world"];
let joinedString = helloWorldArray.join(" ");
console.log(joinedString); // Output: "hello world"

// 9. Trimming whitespace: Remove any leading or trailing whitespace from the string " hello world ".
let stringWithWhitespace = " hello world ";
let trimmedString = stringWithWhitespace.trim();
console.log(trimmedString); // Output: "hello world"

// 10. Searching for substrings: Check if the string "world" exists in the string "hello world".
let searchString = "hello world";
let containsWorld = searchString.includes("world");
console.log(containsWorld); // Output: true


// 11. Reversing a string: Reverse the string "hello".
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// 12. Counting occurrences: Count the number of times the letter "e" appears in the string "elephant".
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("elephant", "e")); // Output: 2

// 13. Checking for palindromes: Determine if the string "racecar" is a palindrome.
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false

// 14. Converting case: Convert the first letter of each word in the string "hello world" to uppercase.
function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// 15. Formatting strings: Format the number 1234.5678 to have 2 decimal places.
let number = 1234.5678;
console.log(number.toFixed(2)); // Output: "1234.57"

// 16. Extracting numbers: Extract all numbers from the string "There are 3 apples and 2 oranges".
function extractNumbers(str) {
    return str.match(/\d+/g);
}
console.log(extractNumbers("There are 3 apples and 2 oranges")); // Output: ["3", "2"]

// 17. Validating email: Check if the string "example@email.com" is a valid email address.
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
console.log(validateEmail("example@email.com")); // Output: true
console.log(validateEmail("example.com")); // Output: false

// 18. Censoring words: Replace all occurrences of the word "bad" with "good" in the string "This is a bad word".
function censorWord(str, targetWord, replacementWord) {
    return str.replace(new RegExp(targetWord, 'g'), replacementWord);
}
console.log(censorWord("This is a bad word", "bad", "good")); // Output: "This is a good word"

// 19. Removing duplicates: Remove duplicate characters from the string "aabbc".
function removeDuplicates(str) {
    return Array.from(new Set(str)).join("");
}
console.log(removeDuplicates("aabbc")); // Output: "abc"

// 20. Sorting characters: Sort the characters in the string "hello" alphabetically.
function sortCharacters(str) {
    return str.split("").sort().join("");
}
console.log(sortCharacters("hello")); // Output: "ehllo"


// 21. Checking for Anagrams
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("").toLowerCase();
    let sortedStr2 = str2.split("").sort().join("").toLowerCase();
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false

// 22. Reverse Words in a Sentence
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"

// 23. Find the Longest Word
function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}
console.log(findLongestWord("Web development is fascinating")); // Output: "development"

// 24. Palindrome Check (Ignoring Case, Spaces, and Punctuation)
function isStrictPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove spaces and punctuation
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isStrictPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isStrictPalindrome("Hello World")); // Output: false

// 25. Character Frequency
function charFrequency(str) {
    let frequency = {};
    
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    return frequency;
}
console.log(charFrequency("mississippi")); // Output: {m: 1, i: 4, s: 4, p: 2}

// 26. Replace Vowels with Numbers
function replaceVowels(str) {
    let vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    
    return str.replace(/[aeiou]/gi, function(match) {
        return vowelMap[match.toLowerCase()];
    });
}
console.log(replaceVowels("Hello World")); // Output: "H2ll4 W4rld"
