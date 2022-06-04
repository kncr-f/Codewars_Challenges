// 5kyu Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true

// Solution

function validParentheses(parens) {
    var result = 0;

    for (var i = 0; i < parens.length && result >= 0; i++) {
        result += (parens[i] == '(') ? 1 : -1;
    }

    if (result == 0) {
        return true
    } else {
        return false
    }
}

// 5kyu Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Solution

function pigIt(str) {
    let arr = []
    str.split(" ").forEach((item) => {

        if (item.match(/[A-z]/i)) {
            arr.push(item.match(/[A-z]/i).input.slice(1).concat(item.charAt(0)).concat("ay"))
        } else {
            arr.push(item)
        }

    })
    return arr.join(" ")
}

// 5kyu Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//     moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Solution

function moveZeros(array) {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if ((array[i] === 0) && (array[i + 1] !== 0)) {
                let aa = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aa
            }
        }

    }
    return array
}


