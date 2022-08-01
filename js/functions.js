// function
function getNumber() {
    return 5;
}

function logNumber() {
    const number = 5;
    console.log(number);
}

console.log(getNumber());
console.log(logNumber());

function logSomeNumber(n) {
    if (n !== 0) {
        console.log(n);
    }
}

logSomeNumber(0);
logSomeNumber(10);

function doubleNumber(n) {
    return n * 2;
}

console.log(doubleNumber(0));
console.log(doubleNumber(5));
console.log(doubleNumber(10));

function doSomething() {} // correct name
function iWantToPee() {} // incorrect name

// function declaration
// we use it usually
function getRandomNumber() {
    return Math.random();
}

// function expression
const getAnotherRandomNumber = function () {
    return Math.random();
}

console.log(getRandomNumber());
console.log(getAnotherRandomNumber());

// in objects we use function expression
const obj = {
    func: function () {
        return Math.random();
    }
};

// method
console.log(obj.func());

// IIFE (immediately invoked function expression)
let number = (function() { return Math.random()})();
console.log(number);

// arrow function (lambda function)
function getDoubledFuncValue(func) {
    return func() * 2;
}

number = getDoubledFuncValue(function () {
    return 5;
});
console.log(number);

// arrow (lambda) function
number = getDoubledFuncValue(() => 5);

function getDoubledFuncValue2(func) {
    return func(5);
}

number = getDoubledFuncValue2(function (n) { return n * 2 });
console.log(number);

number = getDoubledFuncValue2(n => n * 2);
console.log(number);

number = getDoubledFuncValue2(n => {
    const random = Math.random();
    return random * 10;
});
console.log(number);

// don't do this
const arrowFunc = () => 5;
console.log(arrowFunc);
console.log(arrowFunc());

// Callbacks
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    callback(arr);

    console.log('Array was processed');
}

const arr = [1, null, {}, [], 5, 420, 'hello'];

processArray(arr, arr => {
    console.log(`Array with ${arr.length} elements was processed`);
});
