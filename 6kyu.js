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
// The Morse code encodes every character as a sequence of "dots" and "dashes".For example, the letter A is coded as ?????, letter Q is coded as ???????????, and digit 1 is coded as ??????????????. The Morse code is case -insensitive, traditionally capital letters are used.When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.For example, the message HEY JUDE in Morse code is ???????? ?? ???????????   ??????????? ??????? ??????? ??.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS(that was first issued by Titanic), that is coded as ?????????????????????. These special codes are treated as single special characters, and usually are transmitted as separate words.

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
// 89 -- > 8?? + 9?? = 89 * 1
// 695 -- > 6?? + 9?? + 5???= 1390 = 695 * 2
// 46288 -- > 4?? + 6???+ 2??? + 8??? + 8??? = 2360688 = 46288 * 51
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
// It???s guaranteed that array contains at least 3 numbers.

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


// 6kyu Build Tower

// Build a pyramid - shaped tower given a positive integer number of floors.A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// Solution
function towerBuilder(n) {
    var tower = [];
    for (var i = 0; i < n; i++) {
        tower.push(" ".repeat(n - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(n - i - 1))
    }

    return tower;
}

// 6kyu build a pile of cubes

// Your task is to construct a building which will be a pile of n cubes.The cube at the bottom will have a volume of n ^ 3, the cube above will have volume of(n - 1) ^ 3 and so on until the top which will have a volume of 1 ^ 3.

// You are given the total volume m of the building.Being given m can you find the number n of cubes you will have to build ?

//     The parameter of the function findNb(find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n ^ 3 + (n - 1) ^ 3 + ... + 1 ^ 3 = m if such a n exists or - 1 if there is no such n.

//         Examples:
// findNb(1071225)-- > 45

// findNb(91716553919377)-- > -1

// Solution

function findNb(m) {
    let n = 0;
    let sum = 0;

    while (sum < m) {
        n++
        sum += Math.pow(n, 3)
    }
    return sum === m ? n : -1
}


// 6kyu Delete occurences of an element if it occurs more then n times

// Solution

// Enough is enough!
// Alice and Bob were on a holiday.Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats.He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times.Luckily, Alice and Bob are able to encode the motif as a number.Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order ?

//     Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2], drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to[1, 2, 3, 1, 2, 3].
// With list[20, 37, 20, 21] and number 1, the result would be[20, 37, 21].

function deleteNth(arr, n) {
    let counts = {}
    let filteredArr = []

    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]] += 1
        } else {
            counts[arr[i]] = 1
        }

        if (counts[arr[i]] <= n) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}


// 6kyu Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Solution

function high(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let words = str.split(" ")
    let alphabetArr = alphabet.split("");

    count = 0;
    let myObj = {}
    for (let i = 0; i < alphabetArr.length; i++) {
        count++
        alphabetArr[i]
        if (!myObj[alphabetArr[i]]) {
            myObj[alphabetArr[i]] = count
        }
    }

    let myArr = []
    for (let k = 0; k < words.length; k++) {
        let sum = 0;
        for (let i = 0; i < words[k].length; i++) {
            for (prop in myObj) {
                if (words[k][i] === prop) {
                    sum += myObj[prop]
                }
            }
        }
        myArr.push(sum)
    }
    const indexOfMaxValue = myArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    return words[indexOfMaxValue]


}

// 6kyu Count the smiley faces!

// Given an array(arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes.Eyes can be marked as : or;
// A smiley face can have a nose but it does not have to.Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) : D; -D : ~)
// Invalid smiley faces: ; ( :> :} :]

// Solution

function countSmileys(arr) {
    let count = 0;
    arr.forEach(item => {

        for (let i = 0; i < item.length; i++) {

            if (item.length == 2) {
                let aa = item[i]
                let bb = item[i + 1]
                if (((aa === ":") || (aa === ";")) && ((bb === "D") || (bb === ")"))) {
                    count++

                }
            } else if (item.length == 3) {
                let aa = item[i];
                let bb = item[i + 1];
                let cc = item[i + 2];
                if (((aa === ":") || (aa === ";")) && ((bb === "-") || (bb === "~")) && ((cc === ")") || (cc === "D"))) {
                    count++

                }
            }

        }
    })
    return count
}

// 6kyu Valid Braces

// Write a function that takes a string of braces, and determines if the order of the braces is valid.It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces { }. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{ }.

// What is considered Valid ?
//     A string of braces is considered valid if all braces are matched with the correct brace.


// Solution

function validBraces(braces) {
    let countArr = [];

    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            countArr.push(braces[i])
        } else {
            if (countArr.length === 0) {
                return false
            }
            let lastItem = countArr[countArr.length - 1]
            if ((braces[i] === ']' && lastItem === '[') || (braces[i] === '}' && lastItem === '{') || (braces[i] === ')' && lastItem === '(')) {
                countArr.pop()
            } else {
                break
            }
        }
    }
    return countArr.length === 0
}

// 6kyu Is a number prime

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Solution
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;
}

// 6kyu Consecutive strings

// You are given an array(list) strarr of strings and an integer k.Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//     Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling(length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// Solution

function longestConsec(strarr, k) {
    const n = strarr.length;
    if (n === 0 || k > n || k <= 0) {
        return ""
    }
    let longString = "";
    let newString = "";

    for (let i = 0; i < strarr.length; i++) {
        newString = strarr.slice(i, i + k);
        if (newString.join('').length > longString.length) {
            longString = newString.join('');
        }
    }

    return longString

}


// 6kyu Are the Array same?

// Solution 1
const comp = (a, b) => {
    if (!a || !b || a.length !== b.length) return false;

    return a.map(item => item * item).sort().toString() === b.sort().toString()

}

// Solution 2

const compare = (a, b) => {
    if (!a || !b || a.length !== b.length) return false;
    let myArr = [];
    for (let i = 0; i < a.length; i++) {
        console.log(Math.pow(a[i], 2))
        if (b.includes(Math.pow(a[i], 2))) {
            myArr.push(Math.pow(a[i], 2))
        }
    }
    console.log(myArr)
    return myArr.sort().toString() === b.sort().toString()
}


// 6kyu Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form.For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// Solution 1

function expandedForm(num) {
    let numToArr = Array.from(num.toString()).map(Number);
    if (numToArr.length === 1) {
        return num.toString()
    }

    let arr = []
    let sum = 0;

    for (let i = 1; i < num; i = i * 10) {
        for (let j = 0; j < numToArr.length; j++) {
            sum = numToArr[j] * i
            arr.push(sum)
        }
    }
    let resultArr = []
    for (let i = (numToArr.length - 1); i < arr.length - 1; i += (numToArr.length - 1)) {
        resultArr.push(arr[i])
    }

    const result = resultArr.map(item => item += "+").reverse().join("").slice(0, -1).replace(/\+0/g, "")
    return result.replace(/\+/g, " + ")
}

// Solution 2

const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");


// 6kyu Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

//     Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns[]

// Solution 1

function inArray(arr1, arr2) {

    let result = []
    loop: for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j].includes(arr1[i])) {
                result.push(arr1[i])
                continue loop
            }
        }
    }
    return result.sort()
}

// Solution 2

function inArray2(arr1, arr2) {
    return arr1.filter(arr1Item => {
        return arr2.some(arr2Item => {
            return arr2Item.indexOf(arr1Item) > -1
        })
    }).sort()
}


// Solution 3

function inArray3(arr1, arr2) {
    return arr1.filter(arr1Item => arr2.find(arr2Item => arr2Item.match(arr1Item)))
}


// 6kyu Bouncing Ball
// A child is playing with a ball on the nth floor of a tall building.The height of this floor, h, is known.

// He drops the ball out of the window.The ball bounces(for example), to two - thirds of its height(a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window(including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Solution
function bouncingBall(h, b, w = 1.5) {
    let max = 2 * h
    let result = 0
    if (h <= 0 || b <= 0 || b >= 1 || w >= h) {
        return -1
    }
    for (let i = 0; i < max; i++) {
        if (h > w) {
            result += 2
        }
        h = (h * b)
    }
    return result - 1
}

// 6kyu The Supermarket Queue

// There is a queue for the self - checkout tills at the supermarket.Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//         output
// The function should return an integer, the total time required.

// Solution

function queueTime(arr, n) {
    if (arr.length === 0) {
        return 0
    }
    if (n == 1) {
        return arr.reduce((a, b) => a + b, 0);
    }

    let myArr = arr.splice(0, n)
    let maxMyArr = myArr.reduce((a, b) => { return Math.max(a, b) });
    let sumRest = arr.reduce((a, b) => a + b, 0)

    if (maxMyArr >= sumRest) {
        return maxMyArr
    }

    for (let j = 0; j < arr.length; j++) {

        let minMyArr = myArr.reduce((a, b) => { return Math.min(a, b) });
        myArr[myArr.indexOf(minMyArr)] += arr[j]

    }

    return myArr.reduce((a, b) => { return Math.max(a, b) });

}


// 6kyu Mexican Wave

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
//     Rules
// 1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Solution 

function wave(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        if (letter === " ") {
            continue
        } else {
            arr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
        }
    }
    return arr
}

// Solution 2

function wave2(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let strArr = str.split('');
        console.log(copy)
        if (strArr[i] !== ' ') {
            strArr[i] = strArr[i].toUpperCase()
            arr.push(strArr.join(''))
        }
    }
    return arr
}
wave2("hello")



// 6kyu Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""

// Solution

function solution(str) {
    if (str === "") {
        return ""
    }
    if (str === str.toLowerCase()) {
        return str
    }

    return str.replace(/([A-Z])/g, " $1");
}



//6kyu Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....??Eureka!!


// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8 ^ 1 + 9 ^ 2

// The next number in having this property is 135.

// See this property again: 135 = 1 ^ 1 + 3 ^ 2 + 5 ^ 3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range[a, b](inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

//     Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]


// Solution
function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        let bb = i.toString()
        let aa = i.toString().length;
        let sum = 0;
        if (aa == 1) {
            arr.push(i)
        } else {
            for (let j = 0; j < aa; j++) {

                sum += Math.pow(bb[j], j + 1)
                if (sum == i) {
                    arr.push(i)
                }
            }
        }
    }
    return arr
}

// 6kyu Count characters in your string

// The main idea is to count all the occurring characters in a string.If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty ? Then the result should be empty object literal, {}.

// Solution

function count(string) {
    let obj = {}
    string.split("").map(x => obj[x] = obj[x] + 1 || 1)
    return obj
}