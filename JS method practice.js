console.log('bob'.split(" ")) // ['b', 'o', 'b']

console.log('bob and john'.split(" ")) // ['bob', 'and', 'john']splits because of space delimeter 

console.log('bob,and,john'.split(",")) // ['bob', 'and', 'john']splits because of space delimeter 

join('') // <--- this is a delimeter

console.log('bob,and,john'.reverse()) // error because it's a string, not an array - should be used on a function

console.log([bob,and,john].reverse()) // error again because it's looking for variables bob john sara -- needs to be strings 

console.log(['bob,and,john'].split(',').reverse()) // error this is an array... needs to be a string

console.log(['bob,and,john'].split(',').reverse().join(", ")) //add space after comma -- join turns it back into an array


// Create a function that determines whether or not a word is a palindrome.
// works
function isPalindrome(word){
  return word === word.split('').reverse('').join('')
}

console.log(isPalindrome('leon noel'))
console.log(isPalindrome('cat'))
console.log(isPalindrome('tacocat'))


//works
const palindromeChecker = str => str === str.split('').reverse().join('')



//MAP method
const arr = ['dog','cat','hippo']
// const newArr = arr.map( (element, index, array) => {}) // can have a function with up to three parameters -- will run once per element, so for now, a total of 3 times on this callback function
// const newArr = arr.map( (e, i, a) => {return e = e + 1}) // inside curly braces, use return -- no braces, no return word needed
const newArr = arr.map( e => e = e + 2)
console.log(newArr)


let dogName = 'SimBa'
console.log(dogName.toLocaleLowerCase())





// Please create a function that determines whether or not a word is a palindrome. You must make each letter lower case before doing the comparison, but we now exist in a world where .toLowerCase() only works on an indiviual letter...

// my group's approach
function palindromeChecker2 (word){
  let toLowerCase = word.split('').map(letter => letter.toLowerCase())
  return toLowerCase.join('') === toLowerCase.reverse().join('')
}

console.log(palindromeChecker2('tAcocAt'))
console.log(palindromeChecker2('racEcar'))
console.log(palindromeChecker2('BoB'))
console.log(palindromeChecker2('caRs'))



// leon's approach
function isPali(str){
    // let lowerCase = str.split('').map(letter=>letter.toLocaleLowerCase())
    // console.log(lowerCase)
    let lowerCase = str.split('').map(letter=>letter.toLocaleLowerCase())
    return lowerCase.join('') === lowerCase.reverse().join('')
}
console.log(isPali('leOnoEl'))
console.log(isPali('caR'))





// FILTER method
const words = ['dog','cat','hippo']
const result = words.filter(word => word.length > 4) // looking for anything that is greater than 6, and will be created in a new array
console.log(result)


// example below 
const nums = [1,2,3,4,5,6,7]
const greaterThan3 = nums.filter(num => num > 3)
console.log(greaterThan3)




//Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// ********************************************
//Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
// Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
// Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);
// ********************************************



// const findNumOfAppears = (arr1, arr2) => arr2.map(x => x.length) //what map does is first time x runs... x=abc, then x=cde, then x=uap
// Solution below!
const findNumOfAppears = (arr1, arr2) => arr2.map(x => arr1.filter(y => y === x).length) // .length tells us how many matches there actually are
console.log(findNumOfAppears(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']))




// Sort method
let nums = [1,2,3,4,5]
console.log( nums.sort( (a,b => {return b-a})) // descending order, then a -b ascending order


// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// test examples for below:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6


// My group's approach
const sumWithoutMinMax = (arr) => {
  arr.sort((a, b) => a - b)
  arr.pop()
  arr.shift()
  return arr.reduce((acc, num) => acc + num, 0)
}

sumWithoutMinMax([ 6, 2, 1, 8, 10 ])

// Leon's approach
const sumWithoutMinMax = arr => arr.reduce((acc, num) => acc + num, 0) - Math.max(...arr) - Math.min(...arr)

console.log(sumWithoutMinMax([6,2,1,8,10], 16))