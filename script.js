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