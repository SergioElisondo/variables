let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2, since there are two elements in the array at index 0 and 1



let first = fruits[0]
// Apple
let last = fruits[fruits.length - 1]
// Banana

console.log(first + last)


fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1