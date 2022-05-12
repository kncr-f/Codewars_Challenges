//6kyu Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//     Examples
// [7] should return 7, because it occurs 1 time(which is odd).
// [0] should return 0, because it occurs 1 time(which is odd).
// [1, 1, 2] should return 2, because it occurs 1 time(which is odd).
// [0, 1, 0, 1, 0] should return 0, because it occurs 3 times(which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).

// Solution

function findOdd(A) {
    let counts = {}
    for (let i = 0; i < A.length; i++) {
        if (counts[A[i]]) {
            counts[A[i]] += 1
        } else {
            counts[A[i]] = 1
        }
    }
    for (let prop in counts) {
        if (counts[prop] % 2 === 1) {
            return +prop;
        }
    }

}

// Solution 2

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// 6kyu Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.Additionally, if the number is negative, return 0(for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Solution 1

function solution(num) {
    let myArr = [];
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            myArr.push(i)

        }
    }

    const sum = myArr.reduce((a, b) => a + b, 0)
    return sum
}

// Solution 2

function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}

//6kyu Stop gninnnipS My sdroW
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words 
// reversed(Just like the name of this Kata).Strings passed in 
// will consist of only letters and spaces.Spaces will be included only when more than one word is present.

//     Examples: spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw" spinWords("This is a test") => returns "This is a test" spinWords("This is another test")=> returns "This is rehtona test"

// Solution 1
function spinWords(string) {
    let myString = string.split(" ");
    let myArr = []

    for (let i = 0; i < myString.length; i++) {

        if (myString[i].length >= 5) {
            let a = myString[i].split("").reverse().join("");
            myArr.push(a)

        } else {
            let b = myString[i].split("").join("");
            myArr.push(b)

        }
    }
    let result = myArr.join(" ").toString();
    return result
}

// Solution 2

function spinWords2(words) {
    return words.split(" ").map((word) => {
        return (word.length > 4) ? word.split("").reverse().join("") : word;
    }).join(" ");
}

// 6 kyu Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.

// Solution 1

function digital_root(n) {

    var arr = Array.from(n.toString())
    var result = arr.map(Number).reduce((a, b) => a + b, 0)
    if (arr.length == 1) {
        return result
    } else {
        return digital_root(result)

    }

}

// Solution 2

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

//6kyu Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

//     arrayDiff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]

//Solution 1
function arrDiff(a, b) {
    return a.filter(item => !b.includes(item))

}

//Solution 2
function arrayDiff(a, b) {
    let myArr = [];
    for (let i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                myArr.push(a[i])
            }
        }
    }

    for (let k = 0; k < myArr.length; k++) {
        if (a.includes(myArr[k])) {
            var myIndex = a.indexOf(myArr[k])
            a.splice(myIndex, 1)
        }
    }
    return a
}

// 6kyu Where is my parent!?(cry)
// Mothers arranged a dance party for the children in school.At that party, there are only mothers and their children.All are having great fun on the dance floor when suddenly all the lights went out.It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
//     - Function input: String contains only letters, uppercase letters are unique.
//         Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// Solution

function findChildren(str) {
    return str.split("").sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a)).join("");

}



// &kyu Who likes it ?

//     You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

// Solution

function likes(names) {
    if (!names.length) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// 6kyu Bir Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solution

var countBits = function (n) {
    return [...n.toString(2)].filter(el => el === '1').length
};

// 6kyu Create Phone Number
// Output
// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//     Don't forget the space after the closing parentheses!

// Solution 1

function createPhoneNumber(numbers) {

    let bb = numbers.join("").toString()

    var phoneFormat = bb.replace(bb[0] + bb[1] + bb[2] + bb[3] + bb[4] + bb[5], "(" + bb[0] + bb[1] + bb[2] + ") " + bb[3] + bb[4] + bb[5] + "-")
    return phoneFormat;
}

// Solution 2

function createPhoneNumber2(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}