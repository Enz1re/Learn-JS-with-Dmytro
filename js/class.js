// старый вариант:
/*
function Person (name, age) {
    this.name = name;
    this.age = age;
}
*/

// нормальный вариант (классы):
class Person { // отдельно - объявление класса
    constructor (name, age) { // отдельно - объявление конструктора
        this._name = name;
        this._age = age;
        // return new Person(/* с уже присвоенными параметрами */); - это делается неявно, и нам не нужно это писать\
        // конструктор не может быть асинхронным
    }

    get name() {
        // тут некие манипуляции...
        return 'Name: ' + this._name;
    }

    // геттеры используются вместо такого вот:
    getName() {
        return this._name;
    }

    get age() {
        return 'Age: ' + this._age;
    }

    set name(value) {
        this._name = value;
    }
}

const dima = new Person('Dima', 25.999);
console.log(dima);
// const error = Person('NoName', 0); Uncaught TypeError: Cannot call a class as a function
console.log(dima.name);
console.log(dima.age);
dima.name = 'Dimy4';
console.log(dima.name);

// Prototype
const obj = {
    name: 'Kostia',
    age: 25.998
};

console.log(obj); // объект
console.log(obj.__proto__); // прототип объекта

// при помощи классов можно делать простое наследование
// наследование классов (современное наследование в JS)
class Student extends Person {
    constructor () {
        super('Default student', 18); // super() - конструктор базового класса
        this.group = '101';
    }
}
// под капотом классы тоже используют прототипы
// но они и не могут по-другому, так как экземпляры классов - тоже объекты,
// следовательно, они тоже имеют прототип

const student = new Student();
console.log(student);

// прототипичное наследование (старое наследование)
const person = {
    name: 'Kostia',
    age: 26
};

const studentOld = {
    group: 101,
    getStudentFullName: function() {
        return this.name + ', ' + this.age;
    }
}

studentOld.__proto__ = person;

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertyNames(studentOld));

console.log(studentOld);
console.log(studentOld.getStudentFullName());

const arr = [1,2,3];
arr.__proto__ = studentOld;
console.log(arr);
// прототип нужен для наследования объектов

// Descriptors
// объекты, предназначенные для описания свойств
// у каждого свойства объекта есть дескриптор
// дескриптор состоит из таких свойств:
const descriptor = {
    configurable: Boolean, // свойство можно удалять или менять программно
    writable: Boolean, // значение свойства можно менять
    value: Object, // значение свойства
    enumerable: Boolean // по значению свойства можно итерироваться (как по массиву)
};

const props = ['height', 'weight'];

for (let prop of props) {
    // person[prop] = 0; - мы не сможем регулировать свойство, которое мы создали
    Object.defineProperty(person, prop,
    {
        configurable: false,
        writable: true,
        value: 0,
        enumerable: false
    });
}

console.log(person);
person.height = 188;
person.weight = 93;
console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));
delete person.height;
delete person.weight;
console.log(person);
delete studentOld.group;
console.log(studentOld);
// дескрипторы используются для получения более подробной информации о свойствах
// или для создания свойства с контролируемыми характеристиками