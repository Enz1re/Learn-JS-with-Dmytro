// объект - ссылочный тип данных, имеющий свойства
// window - глобальный объект
// он содержит ВСЁ
console.log(window);
window.hello = 'Hello';

let obj = { name: 'Dima', age: 26 };
let obj2 = obj;
// для ссылочных типов сравнение происходит по ссылке
console.log(obj === obj2); // true

let obj3 = { name: 'Kostia', age: 26 }; // память: 0x0000001
let obj4 = { name: 'Kostia', age: 26 }; // память: 0x0000002
console.log(obj3 === obj4); // false

// КОПИРОВАНИЕ ОБЪЕКТОВ
const original = {
    name: 'Dima',
    age: 26,
    married: false,
    brothers: [
        {
            name: 'Vlad'
        },
        {
            name: 'Kostia'
        }
    ]
};

const copy1 = original; // не копия, объект тот же, разные ссылки
console.log(copy1 === original); // true, не копирование

const copy2 = Object.assign({}, original); // или spread syntax
console.log(copy2 === original); // false, shallow copy (поверхностное)
console.log(copy2.brothers === original.brothers); // true

// DEEP copy:
// 1. При помощи библиотек (underscore.js, lodash (cloneDeep)) // лучший способ в продакшене
// 2. Сериализация/десериализация (js object -> string) - для лабы пойдет
//    - JSON (JavaScript object notation)
const str = JSON.stringify(original); // сериализация
console.log(str);
const copy3 = JSON.parse(str); // десериализация
console.log(copy3); // то же самое, что и original
console.log(copy3 === original); // false
console.log(copy3.brothers === original.brothers); // false
// преимущества: просто, коротко
// недостатки: сравнительно долго, много памяти
// 3. Функция structuredClone(obj) - возвращает deep-копию объекта
// преимущества - тем же, чем и пункт 1.
// недостатки - ее поддерживают далеко не все браузеры

if (structuredClone) {
    console.log(structuredClone(original));
} else {
    // lodash.cloneDeep(original);
}
// 4. Написать самому
// преимущества - больше свободы и гибкость, когда пишешь сложный код, лучше познаешь язык
// недостатки - зачем изобретать велосипед, нам нужна рекурсия

// spread syntax
const spreaded = { name: 'Kostia', age: 26, married: false };
const spreaded2 = { ...spreaded };

// constructor function (функция-конструктор)
function Person(name, age) {  // class Person
    if (!new.target) {
        return new Person(name, age);
    }

    // this. обозначает, что свойство будет присутствовать в объекте, который будет создан этой функцией
    this.name = name;
    this.age = age;

    console.log(this);  // Person {name: 'NoName', age: 54}

    this.getName = function () {
        return this.name;
    }
}

// то же самое что

function getObject(name, age) {
    return { name, age, getName: function () {
        return this.name;
    } };
}

const kostia = new Person('Kostia', 26);
console.log(kostia);
console.log(typeof kostia);  // вернет 'object'
console.log(kostia instanceof Person); // true
console.log(getObject('Kostia', 26) instanceof Person); // false

// объекты, созданные функцией-конструктором, имеют четкий набор свойств
// позволяя более четко и близко к предметной области описывать те или иные объекты
// плюс у функций-конструкторов более удобный синтаксис
const dima = new Person('Dima', 26);
console.log(dima);
const vlad = Person('Vlad', 24);
console.log(vlad);
console.log(dima.getName());

// ключевое слово this
// в нормальных языках - ссылка на текущий объект
// например, C#:
// class Person { public void GetName() { return this.Name; } }
const person = new Person('NoName', 54);
/*
Внутри функции Person:
...
this.name = name;  // this - Person, const person
this.age = age;    // this - Person, const person
...
*/
const myObj = {
    name: 'Kostia',
    age: 26,
    getNameAndAge: function() {
        console.log(this);
        return this.name + this.age;
    }
};

myObj.getNameAndAge();

// this по дефолту это window
// при 'use strict' this не является window
// замыкание:
const a = 1;
const arrow = () => {
    console.log(a); // 1
    return this;
};

console.log(this === arrow()); // arrow-функции не имеют своего this
// соответственно, их нельзя использовать как конструкторы

/*
const timer = document.getElementById('timer');
timer.addEventListener('click', function (e) {
    console.log(e.target); // юзать вместо this
    console.log(this === e.target);
});
*/
// опциональная цепь (Null-coalescing operator)
let human = {
    name: 'NoName',
    family: [
        {
            brother: 'brat'
        }
    ]
};

let brother = human.family[0].brother;
console.log(brother);
human = null;
// brother = human.family[0].brother; // ошибка
brother = human?.family[0].brother;
console.log(brother);
human = {};
console.log(human.name);
console.log(human.family?.brother);
// этот оператор делают код более безопасным и защищает от ошибок
// не стоит использовать этот оператор везде, но и пренебрегать им тоже не стоит
console.log(human.name || 'Default name');
const name = human.name || 'Default name';
console.log(name);