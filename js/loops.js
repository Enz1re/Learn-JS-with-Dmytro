const arr = [1,2,3,4,5,6];

// arr: [ 1, 2, 3, 4, 5, 6 ]
// index: 0  1  2  3  4  5

console.log(arr[0]); // 1
console.log(arr[5]); // 6
// индексы массива это свойства

// цикл for (for loop)
// let i = 0 - присвоение счетчика, i - счетчик, начинается с нуля
// i < arr.length - условие остановки цикла
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// i++ - инкремент, увеличивает значение счетчика цикла на 1

// цикл for наборот
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// for-in
for (let n in arr) {
    console.log(n);
}

const obj = {
    name: 'Kostia',
    'surname': 'Morozov',
    friends: [
        'Dima',
        'Vladik'
    ],
    girlfriend: null
}

for (let prop in obj) {
    console.log(prop);
}

// or
const keys = Object.keys(obj);
console.log(Object.keys.name);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

// for-of
// can be used only with arrays
for (let n of arr) {
    console.log(n);
}

// error
/*
for (let value of obj) {
    console.log(value);
}
*/
// for-in проходит по свойствам объекта
// for-of проходит по элементам массива

// while
// while - цикл з передумовою
let i = 0;
const max = 5;

while (i++ < max) {
    console.log('While is working'); // 5 times
}

// equals to

for (let i = 0; i < max; i++) {
    console.log('For is working'); // 5 times
}

// do-while
// do-while - цикл з післяумовою
i = 0;
do {
    console.log('Do while is working'); // 6 times
} while (i++ < max);

// break
// break - досрочный выход из цикла
let result = false;

/*
do {
    result = confirm('Hello?');
} while (!result);
*/

while (true) {
    result = confirm('Hello?');

    if (result) {
        break;
    }
}

const names = ['Dima', 'Vladik', 'Kostia'];

// возвращает true, если имя есть в массиве, false - если имени нет
function containsName(arr, name) {
    for (let value of arr) {
        if (value === name) {
            return true;
        }
    }

    return false;
}

console.log(containsName(names, 'Dima'));

// continue
// continue - завершение текущей итерации цикла

const numbers = [1,2,3,4,5,6,7,8,9];

function showNumbers(arr, pred) {
    for (let n of arr) {
        if (pred(n)) {
            console.log(n);
            continue;
        }

        console.log('Loop iteration');
    }
}

console.log('');
showNumbers(numbers, (number) => number % 2 === 0);
console.log('');
showNumbers(numbers, () => true);

// вложенные циклы
/*
for (let i = 0; i < 10; i++) {  // цикл 1
    console.log('Outer loop');

    for (let j = 0; j < 10; j++) {  // цикл 2
        console.log('Inner loop');
    }
}
*/

// выход из вложенных циклов

for (let i = 0; i < 10; i++) {  // цикл 1
    console.log('Outer loop');

    for (let j = 0; j < 10; j++) {  // цикл 2
        if (i === 4) {
            break; // выход только из цикла 2
        }

        console.log('Inner loop');
    }
}

console.log('');

// bad
startLoop: for (let i = 0; i < 10; i++) {  // цикл 1
    console.log('Outer loop');

    for (let j = 0; j < 10; j++) {  // цикл 2
        if (i === 4) {
            break startLoop; // выход только из цикла 2
        }

        console.log('Inner loop');
    }
}

// good
function countNumbers() {
    for (let i = 0; i < 10; i++) {  // цикл 1
        console.log('Outer loop');
    
        for (let j = 0; j < 10; j++) {  // цикл 2
            if (i === 4) {
                return;
            }
    
            console.log('Inner loop');
        }
    }
}

console.log('');
countNumbers();