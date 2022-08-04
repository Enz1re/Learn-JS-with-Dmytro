// setTimeout
// функция, которая выполняет некий код спустя некое время
const timer = setTimeout(() => {
    console.log('Прошло 5 секунд!');
}, 5000); // 5000 милисекунд (5 секунд), по дефолту - 1000 милисекунд (1 секунда)

clearTimeout(timer); // досрочное завершение функции (очистка памяти)

// таймер-функции работают асинхронно
// порядок объявления и начала работы функций не гарантирует порядка завершения
setTimeout(() => { console.log(0) }, 0);
console.log(1);
setTimeout(() => { console.log(2) }, 0);
console.log(3);

// setInterval
// функция, которая выполняет некий код каждые n милисекунд
let i = 1;
const timer2 = setInterval(() => {
    console.log(`Прошло ${i} секунд!`);
    i++;
    if (i === 6) {
        console.log('Всё!');
        clearInterval(timer2);
    }
}, 1000);

const timerDiv = document.getElementById('timer');
setInterval(() => {
    const date = new Date();
    timerDiv.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}, 1);