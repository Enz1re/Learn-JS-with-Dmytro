const arr = [1, 'Hello', null, 14, {}];

const isAllTrue = arr.every(value => value);
console.log(isAllTrue); // false

// !!!
let numbers = arr.filter(value => typeof value === 'number');
console.log(numbers); // [1, 14]

// !!!
const helloStr = arr.find(value => value === 'Hello'); 
console.log(helloStr); // 'Hello'

const helloIndex = arr.findIndex(value => value === 'Hello'); 
console.log(helloIndex); // 1

// !!!
arr.forEach((value, index) => {
    if (typeof value === 'number') {
        console.log(`Number ${value}`); // интерполяция строки
    } else {        // ==
        console.log('Not a number ' + value + ' on index ' + index); // конкатенация строк
    }
});

const words = ['Hello', 'Dima', 'and', 'world'];
console.log(words.join(' '));

// !!!
const objects = [{ username: 'Dimka1337' }, { username: 'Kostian4ik' }, { username: 'Vlad' }];
const usernames = objects.map(obj => obj.username);
const trues = objects.map(obj => true);
console.log(objects);
console.log(usernames);
console.log(trues);

const elements = [];
elements.push('Hello');
elements.push(420);
elements.push({ dima: 'Dima' });
elements.push('Bye');

elements.pop();
elements.pop();

console.log(elements);

// !!!
numbers = [1, 6, 10, 0, -1, 5, 4, 0, 1];
const sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sum);

const sortedNumbersAscending = [1, 6, 10, 0, -1, 5, 4, 0, 1].sort((a, b) => a - b);
const sortedNumbersDescending = [1, 6, 10, 0, -1, 5, 4, 0, 1].sort((a, b) => b - a);
console.log(sortedNumbersAscending);
console.log(sortedNumbersDescending);

numbers = [1,2,3,4,5];

// операции по изменению массива меняют массив, а не создают копию (!!!)
console.log([1,2,3,4,5].splice(1, 2));
console.log([1,2,3,4,5].slice(1, 2));

// прикольчики
// spread syntax
const names = ['Kostia', 'Dima', 'Vlad'];
console.log(...names); // names.map(name => name)
const namesCopy = [...names];
console.log(namesCopy);
console.log(names);

// Деструктурирующее присваивание
let kostiasName = names[0];
let dimasName = names[1];
let vladsName = names[2];
// лучше так:
[kostiasName, dimasName, vladsName] = names;
console.log(kostiasName, dimasName, vladsName);
console.log(names);