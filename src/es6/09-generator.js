function* iterate(array) {
    for (let value of array) {
        yield value;
    } 
}

const it = iterate(['Santiago', 'Oscar', 'Africa', 'Mulan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);