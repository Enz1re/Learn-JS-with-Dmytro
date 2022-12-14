const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise was completed');
    }, 1000);
});

// then - оброботчик асинхронного события
// это значит, что событие произойдет когда-то в будущем
successfulPromise.then(str =>{
    console.log(str);
});

const failedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise was failed');
    }, 1000);
});

failedPromise
    .then(str =>{ console.log(str); })
    .catch(str => { console.log('Error in promise: ' + str); }) // then и catch - желательны
    .finally(() => console.log('Finally')); // по желанию

const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
        resolve('SUCCESS!!!');
    } else {
        reject('ERROR!!!');
    }
});

randomPromise
    .then(str =>{ console.log(str); })
    .catch(str => { console.log('Error in promise: ' + str); });

// async/await
// ключевые слова, позволяющие писать асинхронный код как синхронный
// асинхронная функция ВСЕГДА возвращает Promise
async function getRandomPromiseResult() {

    // если вкратце:
    /*
    return new Promise((resolve, reject) => {
        randomPromise.then(result => resolve(result))
                     .catch(error => reject(error));
    });
*/
    try {
        return await randomPromise;
        // вместо .then я делаю await и жду, пока придет результат
        // в отличие от асинхронных обработчиков, эта конструкция гарантирует порядок выполнения
        // ключевое слово await применяется (не)только к промисам
    }
    catch (err) {
        return 'Default value';
    }
}

// в обычном коде async-функции вызываются так:
// await getRandomPromiseResult();
getRandomPromiseResult().then(str => console.log(str));

// при создании объекта промиса, его выполнение запускается
const randomPromiseWithTimer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            resolve('SUCCESS!!!');
        } else {
            reject('ERROR!!!');
        }
    }, 5000);
});

const timer = setInterval(() => {
    console.log(randomPromiseWithTimer);
    randomPromiseWithTimer.then(() => clearInterval(timer)).catch(() => clearInterval(timer));
}, 1000);

// в любой момент его можно заэвейтить
// await randomPromiseWithTimer

// HTTP-запросы
// XMLHttpRequest - объект, позволяющий делать запросы
function createXHR(requestType, url) {
    var xhr = new XMLHttpRequest();

    xhr.open(requestType, url, true);

    return xhr;
}

function asPromise(xhr) {
    return new Promise(function (resolve, reject) {
        xhr.onload = function () {
            if (this.status < 400) {
                resolve(this.response);
            } else {
                reject('ERROR');
            }
        }
        xhr.onerror = function () {
            reject('ERROR');
        }
    });
}

const xhr = createXHR('GET', 'https://jsonplaceholder.typicode.com/todos/1');
const requestPromise = asPromise(xhr);
xhr.send();

requestPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));