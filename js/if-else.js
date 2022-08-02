// Conditional expressions (условные выражения)
const condition = 5 > 10; // false

// if (<boolean>) {...}
if (condition) {
    console.log(condition);
}

// Write like this
if (condition) {
    console.log('Five is larger than ten');
} else {
    console.log('Five is NOT larger than ten');
}

// and not like this
if (condition)
    console.log('Five is larger than ten');
else
    console.log('Five is NOT larger than ten');

const username = 'Dima';

if (username === 'Dima') {
    console.log('User is Dima'); // code goes here and leaves the IF block
} else if (username === 'Vladik') {
    console.log('User is Vladik');
} else if (username === 'Kostia') {
    console.log('User is Kostia');
}

// conditional operators
// - logical operators
// - comparison operators

// logical operators:
const t = true && true; // returns true only when both of operands are true
const t2 = 10 > 5 && 11 > 6; // true
console.log(t2);

const t3 = t && t2; // true
console.log(t3);

const or = true || false; // returns true if at least one of operands is true
const or2 = 5 > 10 || 6 > 11; // false
console.log(or);
console.log(or2);

const not = !true; // false
const not2 = !false; // true
console.log(not);
console.log(not2);

const number = 1; // true (truthy)
const number2 = 0; // false (falsy), '', NaN, null, undefined, etc

const and = number && number2; // true && false
console.log(and); // false

if (number) {
    console.log('Number has a value');
} else if (number === 0) {
    console.log('Number is 0');
} else {
    console.log('Number has no value');
}

// switch-case
/*
if (username === 'Dima') {
    console.log('User is Dima'); // code goes here and leaves the IF block
} else if (username === 'Vladik') {
    console.log('User is Vladik');
} else if (username === 'Kostia') {
    console.log('User is Kostia');
}*/
switch (username) {
    case 'Dima':
        console.log('Known user is Dima');
        break;
    case 'Vladik':
        console.log('Known user is Vladik');
        break;
    case 'Kostia':
        console.log('Known user is Kostia');
        break;
    default:
        console.log('Unknown user');
}

switch (username) {
    case 'Dima':
    case 'Vladik':
    case 'Kostia':
        console.log('Known user');
        break;
    default:
        console.log('Unknown user');
}

// the same is:
if (username === 'Dima' || username === 'Vladik' || username === 'Kostia') {
    console.log('Known user');
} else {
    console.log('Unknown user');
}

function isKnownUser(login) {
    return login === 'Dima' || login === 'Vladik' || login === 'Kostia';
}

if (isKnownUser(username)) {
    console.log('Known user');
} else {
    console.log('Unknown user');
}

const age = 54;
const height = 200;

// if (<expression (выражение)>)
// (username === 'Dima' && age < 54 && height > 200) - expression
// <operand> <operator> <operand> (1 + 2), 1 - operand, + - operator, 2 - operand
// conditional operators - ==, !=, ===, !==, >, <, >=, <=

if (username === 'Dima' && age < 54 && height > 200) {
    console.log('Dima is younger than 54 and taller than 200');
} else if (username === 'Kostia' && age === 54) {
    console.log('Kostia is old');
} else if (username === 'Kostia' && age < 54) {
    // some code
}

// bitwise operators (work with bits)
// >> << & | ^
// 0 0 0 0 - 0
// 0 0 0 1 - 1
// 0 0 1 0 - 2
// 0 0 1 1 - 3
// 0 1 0 0 - 4
// 0 1 0 1 - 5
// 0 1 1 0 - 6
// 0 1 1 1 - 7
// 1 0 0 0 - 8
// 1 0 0 1 - 9 - const nine
const nine = 9;
const shifted = nine >> 1;
// 1 0 0 1 - 9
// 1->0 0->0 0->0 1->x (nine >> 1)
// 0 1 0 0 - 4
console.log(shifted);

const four = 4;
const shiftedFour = four << 1; // 8
console.log(shiftedFour);

const nineAndFour = nine & four;
console.log(nineAndFour);
const nineOrFour = nine | four;
console.log(nineOrFour);

// ternary operator
let text;
if (nine > four) {
    text = 'Nine is larger than four';
} else {
    text = 'Four is larger than nine';
}

// or

text = nine > four ? 'Nine is larger than four' : 'Four is larger than nine';