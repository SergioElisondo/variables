// EXAMPLE 1
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function transform(str){
    return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(l => l === l.toUpperCase() ? l.toLowerCase() : 
    l.toUpperCase())
    .join('')
}
console.log(transform("Example Input"), "InPuT EXAmplE")


// EXMAPLE 2
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longestPossible = (str1, str2) => [...new Set(str1 + str2)].sort().join('')
console.log(longestPossible("xyaabbbccccdefww", "xxxxyyyyabklmopq"))