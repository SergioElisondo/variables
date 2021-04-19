// Array.from()

// This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.

  const name = 'frugence';
  const nameArray = Array.from(name);

  console.log(name); // output: frugence
  console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
