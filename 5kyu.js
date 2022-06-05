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

// 5kyu Human Readable Time

// Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)

// Solution

function numToStr(num) {
    let str = num.toString()
    if (num < 10) {
        return str = "0" + num
    }
    return str
}

function humanReadable(s) {
    let x, y, z = 0;
    if (s < 60) {
        z = s
        z = numToStr(z)
        y = "00"
        x = "00"

    } else if (60 <= s && s < 3600) {
        x = "00"
        y = Math.floor(s / 60);
        y = numToStr(y)
        z = s % 60;
        z = numToStr(z)

    } else if (3600 <= s && s <= 359999) {
        x = Math.floor(s / 3600);
        x = numToStr(x)

        y = Math.floor((s % 3600) / 60);
        y = numToStr(y)

        z = (s % 3600) % 60;
        z = numToStr(z)

    }

    let hour = x.concat(":").concat(y).concat(":").concat(z)

    return hour
}


// 5kyu Where my anagrams at?

// What is an anagram ? Well, two words are anagrams of each other if they both contain the same letters.For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list.You will be given two inputs a word and an array with words.You should return an array of all the anagrams or an empty array if there are none.For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy', 'lacer']) => []

// Solution

const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
function anagrams(str, arr) {
    let anagrams = []
    arr.forEach(item => {
        let word = ""
        for (let i = 0; i < item.length; i++) {

            if (str.includes(item[i])) {
                word += item[i]
            }
        }
        console.log(word)
        if ((areAnagram(str, word) && item === word)) {
            anagrams.push(word)
        }

    })

    return anagrams
}


// 5kyu Direction Reduction

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another.The directions were "NORTH", "SOUTH", "WEST", "EAST".Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort.Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following(depending on the language):

//     ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
//         or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan.A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is[](nil in Clojure).

//     In["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to["WEST", "WEST"].

//         Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed(W < -> E or S < -> N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction { North, East, West, South }.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler.The path["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

// Solution

function dirReduc(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] == "NORTH" && arr[i + 1] == "SOUTH") || (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") || (arr[i] == "WEST" && arr[i + 1] == "EAST") || (arr[i] == "EAST" && arr[i + 1] == "WEST")) {
            i++
        } else {
            if (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST") {
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
}

// 5kyu RGB To Hex Conversion

// The rgb function is incomplete.Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0, 0, 0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// Solution

function componentToHex(c) {
    var hex;
    if (c > 255) {
        return hex = "FF"
    } else if (c < 0) {
        return hex = "00"
    }
    hex = c.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// 5kyu Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

// Solution

function rot13(message) {
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let arr = []
    for (let i = 0; i < message.length; i++) {

        let res = /^[a-zA-Z]+$/.test(message[i])
        if (!res) {
            arr.push(message[i])
        }

        for (let j = 0; j < alphabets.length; j++) {
            if (message[i] === message[i].toUpperCase()) {
                let lowerCase = message[i].toLowerCase()
                if (lowerCase == alphabets[j]) {

                    let indx = j;
                    if (indx < 13) {
                        arr.push(alphabets[indx + 13].toUpperCase())
                    } else {
                        arr.push(alphabets[indx - 13].toUpperCase())
                    }
                }

            }
            if (message[i] == alphabets[j]) {

                let indx = j;
                if (indx < 13) {
                    arr.push(alphabets[indx + 13])
                } else {
                    arr.push(alphabets[indx - 13])
                }
            }
        }
    }
    return arr.join("")
}