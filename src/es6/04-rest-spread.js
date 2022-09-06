// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a,fruits[1]);

// Object destructuring

let user = { username: 'Santiago', age: 30};
let {username, age} = user;

console.log(username, user.age);