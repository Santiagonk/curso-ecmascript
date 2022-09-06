// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a,fruits[1]);

// Object destructuring

let user = { username: 'Santiago', age: 30};
let {username, age} = user;

console.log(username, user.age);

// spread operator

let person = {name: 'santiago', age: 20};
let country = 'CO';

let data = {id:1, ...person, country }

console.log(data);

// rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1, 2, 3, 4, 5);

// comment by partner
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)