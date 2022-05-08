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