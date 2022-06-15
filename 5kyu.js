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

// 5kyu Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.

// Solution

function maxSequence(arr) {

    if (!arr.length) {
        return 0
    }

    let arrSum = []
    let score = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            score++
        }

        if (score === arr.length) {
            return 0
        }

        let myArr = []
        let each = 0;
        let eachArr = []
        for (let j = i; j < arr.length; j++) {
            each += arr[j]
            myArr.push(arr[j])
            eachArr.push(each)

        }

        let zz = myArr.slice(0, eachArr.indexOf(Math.max(...eachArr)) + 1)

        arrSum.push(zz.reduce((a, b) => a + b, 0))

    }
    return Math.max(...arrSum)


}


// 5kyu Product of consecutive Fib numbers

// The Fibonacci numbers are the numbers in the following integer sequence(Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n - 1) + F(n - 2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod(for product), we search two Fibonacci numbers F(n) and F(n + 1) verifying

// F(n) * F(n + 1) = prod.

// Your function productFib takes an integer(prod) and returns an array:

// [F(n), F(n + 1), true] or { F(n), F(n + 1), 1 } or(F(n), F(n + 1), True)
// depending on the language if F(n) * F(n + 1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n + 1), false] or { F(n), F(n + 1), 0 } or(F(n), F(n + 1), False)
// F(n) being the smallest one such as F(n) * F(n + 1) > prod.



// Solution

function productFib(prod) {
    function fib(num) {
        let arr = []
        for (let i = 0; i <= num; i++) {
            if (i == 0 || i == 1) {
                arr[i] = i
            } else {
                arr[i] = arr[i - 1] + arr[i - 2]
            }
        }

        return arr[arr.length - 1]
    }

    let n = 0;
    while (fib(n) * fib(n + 1) < prod) {
        n++
    }

    if (fib(n) * fib(n + 1) == prod) {
        return [fib(n), fib(n + 1), true]
    } else {
        return [fib(n), fib(n + 1), false]
    }

}

// Solution 2

function productFib(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

// Solution 3

function productFib(prod) {
    let [a, b] = [0, 1];
    while (a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
}


// 5kyu Pete, the baker

// Pete likes to bake some cakes.He has some recipes and ingredients.Unfortunately he is not good in maths.Can you help him to find out, how many cakes he could bake considering his recipes ?

//     Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object) and returns the maximum number of cakes Pete can bake(integer).For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// // must return 0
// cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }); 

// Solution

function cakes(recipe, available) {
    let arr = []
    let doable = true;
    let count = 0;
    for (item in available) {
        for (item2 in recipe) {
            if (item2 == item) {
                count++;

                if (available[item] >= recipe[item2]) {
                    arr.push(available[item] / recipe[item2])
                } else {
                    doable = false
                }
            }
        }
    }

    if ((Object.keys(recipe).length == count) && doable) {
        return Math.floor(Math.min(...arr))
    }
    return 0

}


// 5kyu Weight for weight

// My friend John and I are members of the "Fat to Fit Club (FFC)".John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list".It was decided to attribute a "weight" to numbers.The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers ?

//     Example :
//     "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings(alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight"(9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Solution 1

function orderWeight(str) {

    let arr = str.split(" ");

    let sumArr = [];

    arr.forEach(item => {
        let sum = 0;
        for (let i = 0; i < item.length; i++) {

            let num = +item[i]
            sum += num
        }
        let subArr = [];
        subArr.push(sum, item)
        sumArr.push(subArr)
    })

    let sortedArr = [...sumArr].sort((a, b) => {
        return a[0] - b[0] || a > b || -(a < b)
    })

    let result = []

    sortedArr.forEach(function (key) {
        var found = false;
        arr = arr.filter(function (item) {
            if (!found && item == key[1]) {
                result.push(item);
                found = true;
                return false;
            } else
                return true;
        })
    })

    return result.join(" ").toString()

}

// Solution 2

function orderWeight(strng) {
    const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
    function comp(a, b) {
        let sumA = sum(a);
        let sumB = sum(b);
        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
    return strng.split(' ').sort(comp).join(' ');
}


// Solution 3

function digitSum(str) {
    return str.split('').reduce(function (s, e) {
        return s + parseInt(e);
    }, 0);
}

function orderWeight(str) {
    return str.split(' ').sort(function (a, b) {
        return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}

// 5kyu The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag(#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  => "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  => "#HelloWorld"
// ""                                        => false

// Solution

function generateHashtag(str) {
    if (str == "" || str.trim().length == 0) {
        return false
    }
    let aa = str.trim().split(" ")

    for (let i = 0; i < aa.length; i++) {

        if (aa[i]) {
            aa[i] = aa[i][0].toUpperCase() + aa[i].slice(1)
        }
    }
    const result = aa.join("").replace(/^/, '#')

    if (!result || result.length > 140) {
        return false
    }

    return result
}

// Solution 2

function generateHashtag(str) {
    if (!str || str.length < 1) return false;

    var r = '#' + str.split(' ').map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140 ? false : r;
}


// 5kyu String incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number.the number 1 should be appended to the new string.
//     Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// Solution

function incrementString(str) {
    const exceptLast = str.slice(0, -1);
    const lastDigit = str.slice(-1).match(/[0-9]/);
    console.log(lastDigit)
    if (!lastDigit) {
        return str + "1"
    } else if (lastDigit != 9) {
        return exceptLast + (+lastDigit + 1)
    } else {
        return incrementString(exceptLast) + "0"
    }
}

// 5kyu

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

//     N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 -- > 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 -- > 2 trailing zeros

// Solution

function zeros(n) {
    var result = 0;
    while (n = Math.floor(n / 5)) result += n;
    return result;
}


// 5kyu First non-repeating character

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper - and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string("") or None-- see sample tests.

// Solution

var firstNonRepeatingLetter = function (str) {
    const obj = {};
    for (let item of str) {
        let lower = item.toLowerCase()
        obj[lower] = obj[lower] + 1 || 1;
    }

    for (let item in obj) {
        if (obj[item] === 1) {

            if (str.includes(item.toUpperCase())) {
                return item.toUpperCase()
            } else {
                return item
            }
        }
    }

    return ""
};

// Solution 2

function firstNonRepeatingLetter(s) {
    var t = s.toLowerCase();
    for (var x = 0; x < t.length; x++)
        if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
            return s[x];
    return "";
}

// 5kyu Scramblies

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//     Notes:

// Only lower case letters will be used(a - z).No punctuation or digits will be included.
// Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// Solution1 

function scramble(str1, str2) {

    let score = 0;
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < str2.length; i++) {
        if (obj2[str2[i]] === undefined) {
            obj2[str2[i]] = 1
        } else {
            obj2[str2[i]] += 1
        }
    }
    for (let i = 0; i < str1.length; i++) {
        if (obj1[str1[i]] === undefined) {
            obj1[str1[i]] = 1
        } else {
            obj1[str1[i]] += 1
        }
    }

    for (const item in obj2) {
        if (obj1[item] >= obj2[item]) {
            score += obj2[item]
        }
    }

    return score === str2.length ? true : false
}

// Solution 2 (couldn't pass time efficiency test but logic is true)


function scramble(str1, str2) {

    let score = 0;

    for (const letter of str2) {
        for (const letter2 of str1) {

            if (letter === letter2) {
                score++
                str1 = str1.replace(letter2, "")
                break
            }
        }

    }

    if (score == str2.length) {
        return true
    }
    return false

}