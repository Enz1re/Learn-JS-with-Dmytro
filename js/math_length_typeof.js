console.log(typeof Math);
console.log(Math.E);
console.log(Math.PI);

// receives radians and needs casting to gradus
console.log(Math.sin(45 * (Math.PI / 180)));
console.log(Math.cos(45 * (Math.PI / 180)));

console.log(Math.floor(2.9)); // 2
console.log(Math.ceil(2.1)); // 3
console.log(Math.max(4, 1, 3,5,7,100,5,-1)); // 100
console.log(Math.min(4, 1, 3,5,7,100,5,-1)); // -1
console.log(Math.random()); // ???

// Length:
const arr = [1,2,3,4,5,6,7];
console.log(arr.length);
const str = 'Hello World';
console.log(str.length);
const obj = {
    hello:1,
    hello2:2,
    hello3:3,
    func: function () {}
};

console.log(obj.length); // undefined
let keys = Object.keys(obj);
console.log(keys);
console.log(keys.length);
keys = Object.getOwnPropertyNames(obj);
console.log(keys);
console.log(keys.length);

// Typeof
console.log(typeof 1); // 'number'
console.log(typeof 1.5); // 'number'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
console.log(typeof null); // 'object'
console.log(typeof undefined); // 'undefined'
console.log(typeof NaN); // 'number'

if (typeof 1 === 'number') {
    console.log('1 is number');
}

// Instanceof