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
    let myArr = [];

    for (let i = 0; i < myString.length; i++) {
        myString[i].length >= 5 ?
            myArr.push(myString[i].split("").reverse().join("")) :
            myArr.push(myString[i]);
    }
    return myArr.join(" ").toString();
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

// 6kyu Find The Parity Outlier

// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array as an argument and returns this "outlier" N.

//     Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160(the only even number)

// Solution 1

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

// Solution 2

function findOutlier2(integers) {
    let countEven = 0;
    let countOdd = 0;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            countEven++
        } else {
            countOdd++
        }
    }
    if (countEven === 1) {
        for (let j = 0; j < integers.length; j++) {
            if (integers[j] % 2 === 0) {
                return integers[j]
            }
        }
    }

    if (countOdd === 1) {
        for (let j = 0; j < integers.length; j++) {
            if (integers[j] % 2 === 1) {
                return integers[j]
            }
        }
    }


}

//5kyu Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//     * url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
//         * url = "https://www.cnet.com" -> domain name = cnet"



// Solution

function domainName(str) {
    return str.replace('http://', '').replace('https://', '').replace("www.", "").split(".")[0]
}

// 6kyu Count the number of Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.

//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// Solution
function duplicateCount(text) {
    let arr = text.toLowerCase().split("")
    let duplicate = arr.filter((item, index) => arr.indexOf(item) != index);
    let result = [...new Set(duplicate)]
    return result.length
}

//6kyu Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

//     Examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 

// Solution

function duplicateEncode(word) {
    let myArr = word.toLowerCase().split("")
    let duplicate = myArr.filter((item, index) => myArr.indexOf(item) != index);
    let result = [...new Set(duplicate)]

    for (let i = 0; i < myArr.length; i++) {
        if (result.includes(myArr[i])) {
            myArr[i] = ")"
        } else {
            myArr[i] = "("
        }
    }
    return myArr.join("")
}


//6kyu 

// You live in the city of Cartesia where all roads are laid out in a perfect grid.You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.The city provides its citizens with a Walk Generating App on their phones-- everytime you press the button it sends you an array of one - letter strings representing directions to walk(eg. ['n', 's', 'w', 'e']).You always walk only a single block for each letter(direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array(string in COBOL) containing a random assortment of direction letters('n', 's', 'e', or 'w' only).It will never give you an empty array(that's not a walk, that's standing still!).

// Solution

function isValidWalk(walk) {
    let countE = 0;
    let countS = 0;
    let countW = 0;
    let countN = 0;
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === "e") {
            countE++
        } else if (walk[i] === "s") {
            countS++
        } else if (walk[i] === "n") {
            countN++
        } else if (walk[i] === "w") {
            countW++
        }
    }

    if (walk.length == 10 && (countE - countW == 0) && (countN - countS == 0)) {
        return true
    } else {
        return false
    }

}

// 6kyu Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// 4 -- > 0(because 4 is already a one - digit number)

// Solution 
function persistence(num) {
    let digits = `${num}`.split("");
    if (digits.length === 1) {
        return 0;
    }

    const multi = digits.reduce((a, b) => {
        return a * b
    }, 1);
    return 1 + persistence(multi);
}


// 6kyu Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Solution

function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alpIndex = [];

    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let index = alphabet.indexOf(text[i]);

        if (index === -1) {
            continue;
        } else {
            alpIndex.push(index + 1);
        }
    }

    return alpIndex.join(" ");
}



//6kyu Your order, please

// Your task is to sort a given string.Each word in the string will contain a single number.This number is the position the word should have in the result.

//     Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

//     Examples
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

// Solution
function order(words) {
    let arr = words.split(" ");

    let result = arr.sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    })
    return result.join(" ")

}

// 6kyu Tribonacci Sequence

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:

// [1, 1, 1, 3, 5, 9, 17, 31, ...]

// Solution

function tribonacci(s, n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}


// 6kyu Tribonacci Sequence

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:


// Solution

function tribonacci(s, n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        console.log(s[i])
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}


// 6 kyu Decode the Morse code


// In this kata you have to write a simple Morse code decoder.While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes".For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case -insensitive, traditionally capital letters are used.When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS(that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human - readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

// Solution

decodeMorse = function (morseCode) {
    var ref = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        '...---...': 'SOS',
        "/": " ",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ",",
        " ": ""
    };

    let trim = morseCode.trim()

    return trim.split("   ").map(letter => letter.split(" ").map(character =>
        ref[character]).join("")).join(" ").toUpperCase()


}

//6kyu Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

// Solution 1
function uniqueInOrder(arg) {
    if (Array.isArray(arg)) {
        var myArr = arg
    } else if (typeof arg === "string") {
        myArr = arg.split("");
    }
    let res = [];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] !== myArr[i + 1]) {
            res.push(myArr[i])
        }
    }
    return res
}

// Solution 2

function uniqueInOrder(arg) {
    if (Array.isArray(arg)) {
        var myArr = arg
    } else if (typeof arg === "string") {
        myArr = arg.split("");
    }

    return myArr.filter((v, i, a) => a[i] !== a[i + 1])

}

//6kyu Playing with digits

// Some numbers have funny properties.For example:
// 89 -- > 8¹ + 9² = 89 * 1
// 695 -- > 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 -- > 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k
// If it is the case we will return k, if not return -1.

// Solution

function digPow(n, p) {
    let arr = Array.from(n.toString()).map(Number);
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.pow(arr[i], p)
        p++
    }
    if (Number.isInteger(res / n)) {
        return res / n
    }
    return -1
}

// 6kyu Equal Sides Of An Array

// You are going to be given an array of integers.Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index({ 1, 2, 3}) and the sum of the right side of the index({ 3, 2, 1}) both equal 6.

// Let's look at another one.
// You are given the array { 1, 100, 50, -51, 1, 1 }:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index({ 1}) and the sum of the right side of the index({ 50,- 51, 1, 1}) both equal 1.

// Last one:
// You are given the array { 20, 10, -80, 10, 10, 15, 35 }
// At index 0 the left side is { }
// The right side is { 10, -80, 10, 10, 15, 35 }
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

//     Note: Please remember that in most programming / scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

//     Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N.If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// Solution

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr.slice(0, i).reduce((a, b) => a + b, 0)) === (arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0))) {
            return i
        }
    }
    return -1
}

// 6kyu Convert string to camel case

// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// Solution 
function toCamelCase(str) {

    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        let rest = str.replace(str.charAt(0), "").toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        return str.charAt(0).concat(rest)

    }

    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// 6kyu Does my number look big in this?

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

// For example, take 153(3 digits), which is narcisstic:

// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
// and 1652(4 digits), which isn't:

// 1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938

// Solution

function narcissistic(n) {
    let myArr = Array.from(n.toString()).map(Number);
    let sum = 0;
    for (digit of myArr) {
        sum += Math.pow(digit, myArr.length)
    }

    if (sum === n) {
        return true
    }
    return false
}

// 6 kyu Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, False if not.Ignore numbers and punctuation.

// Solution

function isPangram(str) {
    let lower = str.toLowerCase()
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    return alphabets.every(item => lower.includes(item))
}

// 6kyu Find the unique number

// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Solution
function findUniq(arr) {
    const myArr = arr.sort((a, b) => a - b)
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] === myArr[i + 1]) {
            return myArr[myArr.length - 1]
        } else {
            return myArr.shift()
        }
    }
}


// 6kyu Find the missing letter

// #Find the missing letter

// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a', 'b', 'c', 'd', 'f'] -> 'e'['O', 'Q', 'R', 'S'] -> 'P'

// ["a", "b", "c", "d", "f"] -> "e"
// ["O", "Q", "R", "S"] -> "P"
//         (Use the English alphabet with 26 letters!)

// Solution
function findMissingLetter(array) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    const first = array[0]
    const firstItem = alphabets.indexOf(first)
    const myArr = alphabets.splice(firstItem, array.length + 1)

    for (let i = 0; i < myArr.length; i++) {
        if (array.indexOf(myArr[i]) == -1) {
            return myArr[i]

        }
    }
}

//6kyu Split strings

// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//     Examples:

// * 'abc' => ['ab', 'c_']
//     * 'abcdef' => ['ab', 'cd', 'ef']

//Solution
function solution(str) {
    const myArr = str.split("");
    console.log(myArr)
    if (myArr.length % 2 === 1) {
        myArr.push("_")
    }
    let res = []
    for (let i = 0; i < myArr.length; i += 2) {

        res.push(myArr[i] + myArr[i + 1])
    }
    return res
}


//6kyu Sort the odd

// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//     Examples
// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Solution

function sortArray(arr) {

    const sortedOdd = arr.filter(item => item % 2 !== 0).sort((a, b) => a - b)

    return arr.map((x) => x % 2 ? sortedOdd.shift() : x);
}




