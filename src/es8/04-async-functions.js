const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) // if
        ? setTimeout(() => resolve('Async!!!'), 2000) // if true
        : reject(new(Error('Error'))); // else 
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!!')
}

console.log('Before');
anotherFn();
console.log('After');