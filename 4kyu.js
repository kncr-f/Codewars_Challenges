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
