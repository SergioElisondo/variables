  const arr = [1, 2, 3, 4, 5, 6];

  // item(s) greater than 3
  const filtered = arr.filter(num => num > 3);
  console.log(filtered); // output: [4, 5, 6]

  //doesn't mutate array
  console.log(arr); // output: [1, 2, 3, 4, 5, 6]