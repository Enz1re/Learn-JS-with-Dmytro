const number = 1;
const str = 'Hello';
const arr = [1,2,3];
const obj = {};

console.log(number - str);
console.log(number + str);
console.log(arr + obj + arr);

console.log(1 + '1'); // '11'
console.log('1' + 1); // '11'
console.log('1' + obj); // '1[object Object]'
console.log('a' - 1); // NaN (it cannot cast 'a' to number)
console.log(1 - 'a'); // NaN (it cannot cast 'a' to number)
console.log('' - 1); // -1
console.log(1 - ''); // 1
console.log('1' - ''); // 1

// boolean
// 1
const number2 = 0;
let bool = new Boolean(number);
let bool2 = new Boolean(number2);
console.log(bool);
console.log(bool2);
console.log(bool === bool2);
const str2 = '';
console.log(new Boolean(str));
console.log(new Boolean(str2));
// 2
bool = !!number;
bool2 = !!number2;
console.log(bool);
console.log(bool2);

if (number) {
    console.log("It's true value");
}
if (!number2) {
    console.log("It's false value");
}

let n = new Number(10);
console.log(n);
const strNum = '100';
const numFromStr = '100' - 0;
console.log(numFromStr);

// functions (parseInt,...)
n = parseInt(strNum);
console.log(n);
const strNumFloat = '242.454';
console.log(parseFloat(strNumFloat));
console.log(NaN + 1); // NaN
console.log(NaN / 2); // NaN
console.log(NaN ** 0); // 1

const nan = parseInt('hello');

// won't work
if (nan === NaN) {
    console.log('NaN!!');
}
// will work
if (Number.isNaN(nan)) {
    console.log('NaN!!');
}