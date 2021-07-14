// Example 1

const { serialize } = require("v8")

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecDupes(str){
    return str.split(" ").filter((e, i, arr) => e != arr[i-1] ).join(" ") // not equal to the one that came before it, then you .join it 
}

console.log(
    removeConsecDupes(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    )
)


// STRING EXAMPLES
// Strings ARE mutable
const str = 'We dont get got, we go get!'
console.log(str[3])

// slice takes a Beginning and an End
console.log(str.slice(18)) // we go get!
console.log(str.slice(18, 23)) // we go

//str.charAt(0) will sometimes get used




// Exmaple 2~~
//Create a function that returns the capitilization of a name. No Arrays, No REGEX! //leon ~> Leon //bob ~> Bob //John ~> John

function capitalize(str) {
    return str.charAt().toUpperCase() + str.slice(1);
}

console.log(capitalize('bob')) //Bob


function cap(str){
    return str(0).toUpperCase() + str.slice(1) // the returns a new string
}
console.log('leon')



// EXMAPLE 3
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

/*Prep

*/
// params : a valid string of any length, maxlength an integer 
// return : a string that is the length specified by the second param 
// examples : see below 
// 
const truncate = (str, maxLength) => {
    // return str if the string length is less than the maxLength
    if (str.length < maxLength) return str;
    // slice the string and return at the maxLength index
    return str.slice(0, maxLength)
}

// refactored!
// const truncate = (str,maxLength) => str.length < maxLength ? str : str.slice(0,maxLength)

console.log(truncate("Hello World how are you", 11), "Hello World")
console.log(truncate("Would you kindly hand me the glass", 16), "Would you kindly")
console.log(truncate("Hi everyone!", 20), "Hi everyone!")



// LEON version:
function truncate(str, maxLength){
    return str.length > maxLength ? str.slice(0, maxLength - 1) : str + "..."//maxlength - 1 because index starts at 0... so minus because we are off by 1 -- although the minus 1 acts a little weird
}

console.log(truncate("Hello World how are you", 11), "Hello World")
console.log(truncate("Would you kindly hand me the glass", 16), "Would you kindly")
console.log(truncate("Hi everyone!", 20), "Hi everyone!")


// EXAMPLE 4
function checkForImposterSyndrome(str) {
    return str.includes('not ready') || str.includes('can\'t interview yet')
}

console.log(checkForImposterSyndrome("I am not ready"))
console.log(checkForImposterSyndrome("I can't interview yet"))
console.log(checkForImposterSyndrome("not Ready")) // returns false.

// REFACTORED
// const checkForImposterSyndrome = str => str.includes('not ready') || str.includes("can't interview yet");

// Leon Version
function checkForImposterSyndrome(str){
    let lowerCase = str.toLowerCase()
    return lowerCase.includes('not ready') || lowerCase.includes("can't interview yet")
}

console.log(checkForImposterSyndrome("not ready"))
console.log(checkForImposterSyndrome("can't interview yet"))
console.log(checkForImposterSyndrome("Now Ready")) // returns false.


// Example 5
// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

function camelCase(str) {
    return str.toLowerCase().split(' ').map(a => a[0].toUpperCase() + a.slice(1)).join('')
}

console.log(camelCase('this string'))

// refactored AND makes it TRUE CAMEL CASE
const camelCase = (str) => str.toLowerCase().split(' ').map((a, i, arr) => i != 0 ? a[0].toUpperCase() + a.slice(1) : a).join('')
console.log(camelCase('this string'), 'ThisString')



//LEON version -- not true camelCase
function camelCase(str){
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join("")// take first letter off, make it capitolized, then add it to the rest of the string
}
console.log(camelCase('hello world'), "HelloCase")





// EXTRA!!!
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeap(year) {
    return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 ? false : true
}
console.log(isLeap(400), true)
console.log(isLeap(1400), false)
console.log(isLeap(1999), false)
console.log(isLeap(2020), true)



// ANOTHER APPROACH HERE!
const isLeap = (year) => year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0);
console.log(isLeap(400), true)
console.log(isLeap(1400), false)
console.log(isLeap(1999), false)
console.log(isLeap(2020), true)