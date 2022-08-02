// Regexp (регулярные выражения)
// Механизм для поиска и вычленения данных из строки
const str = 'Hello Kostia';
const substr = str.substring(4, 8);
console.log(substr);
console.log(str.includes('Kostia'));
console.log(str.includes('Dima'));

const regex = new RegExp('Kostia');
const regex2 = /Kostia/g;
let match = str.match(regex);
console.log(match);

const str2 = 'Hello Kostia, Dima and Vlad! [!!!]';
const regex3 = /[abco]/g;

for (let value of str2.matchAll(regex3)) {
    console.log(value);
}

const regex4 = /[a-z]/g; // все буквы от a до z
for (let value of str2.matchAll(regex4)) {
    console.log(value);
}

const regex5 = /[^A-Z]/g; // все буквы, кроме больших А и Z
for (let value of str2.matchAll(regex5)) {
    console.log(value);
}

const regex6 = /[\[\]]/g;
for (let value of str2.matchAll(regex6)) {
    console.log(value);
}

const regex7 = /^Kostia/g;
const kostia = 'Hey Kostia';
console.log(kostia.match(regex7));

const groupRegex = /(Kostia)|(Dima)/g;
const str3 = 'Hello Kostia and Dima';
console.log(str3.match(groupRegex));