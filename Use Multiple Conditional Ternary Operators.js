
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

// same code below using if/else statements
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}




// another example
var foo = (
  bar === 'a' ? 1 : // if 
  bar === 'b' ? 2 : // else if 
  bar === 'c' ? 3 : // else if
  null // else 
);