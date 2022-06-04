// 4 kyu Snail
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Solution

function snail(array) {
    let finalArr = [];

    while (array.length) {

        finalArr.push(...array.shift())

        for (var i = 0; i < array.length; i++) {
            finalArr.push(array[i].pop());

        }
        finalArr.push(...(array.pop() || []).reverse())
        for (let i = array.length - 1; i >= 0; i--) {
            finalArr.push(array[i].shift());
            //console.log(array[i].shift())
        }
    }

    return finalArr
}


// 4kyu Remove Zeros

// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array.The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0".Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects.You are also not allowed to use any Array.prototype or Object.prototype methods.

// Solution

function removeZeros(array) {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if ((array[i] === 0 || array[i] === "0") && (array[i + 1] !== 0 && array[i + 1] !== "0")) {
                let aa = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aa
            }
        }
    }
    return array;
}