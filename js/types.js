let a = 5;
//console.log(a);
a = 5.5;
//console.log(a);
a = "Hello world";
//console.log(a);

// не юзаем
var b = 5;
//console.log(b);
b = 5.5;
//console.log(b);
b = "Hello world";
//console.log(b);

const c = 5;
//c = 5.5; // error

function getSomeValue() {
    var b = 4;
    console.log(b);
}

function getSomeValue2() {
    let a = 4;
    console.log(a);
}

getSomeValue();
getSomeValue2();

const obj = {
    kek: 1,
    mda: 'heh'
};

// const влияет только на переменную
// obj = 1; // error
obj.kek = { sasi: '111' } // not error

console.log(typeof obj); // 'object'

const arr = [
    1,
    "Hello",
    null,
    obj
];

console.log(typeof arr); // 'object'

// is object array:
console.log(Array.isArray(obj));
console.log(Array.isArray(arr));

// undefined
let variable;
console.log(typeof variable); // 'undefined'
console.log(variable === undefined);
console.log(variable); // undefined
const obj2 = {};
console.log(typeof obj.key); // 'undefined'
console.log(obj.key); // undefined

// null
let variable2 = null;
console.log(typeof variable2); // 'object'
console.log(variable2); // null

// primitive types & objects
let object = { obj: true };
let object2 = object;

object.obj = false;
console.log(object2);

let primitive = 10;
let primitive2 = primitive;

primitive = 100;
console.log(primitive);
console.log(primitive2);