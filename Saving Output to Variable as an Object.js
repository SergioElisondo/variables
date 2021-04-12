let obj;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))