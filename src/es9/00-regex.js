const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('1993-03-19');
console.table(matchers);