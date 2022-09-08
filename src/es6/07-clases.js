// declarando
class User {};
// instancia de una clase
const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const Santigo = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const Africa = new user('Africa');
console.log(Africa.speak());
console.log(Africa.greeting());

// setters getters

class user {
    
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const Mulan = new user('Mulan', 1);
console.log(Mulan.speak());
console.log(Mulan.greeting());
console.log(Mulan.uAge);
Mulan.uAge = 1.5;
console.log(Mulan.uAge);
