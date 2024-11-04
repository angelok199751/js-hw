// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch




// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, 
// которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
    setTimeout(callback, 2000); 
}
delayTwoSeconds(() => {
    console.log("Коллбек выполнен через 2 секунды");
});

// 2. Создайте переменную, в которую присвоите новый промис. 
// Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль
const promiseOne = new Promise((resolve, reject) => {
    resolve(1);
});

promiseOne.then(result => {
    console.log("Промис резолвится с 1:", result);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const promiseTwo = new Promise((resolve, reject) => {
    reject("Promise failed");
});

promiseTwo.catch(error => {
    console.error("Ошибка:", error);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
    return new Promise((resolve, reject) => {
        resolve(number); 
    });
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => {
        results.forEach((result, index) => {
            console.log(`Результат промиса ${index + 1}:`, result);
        });
    });

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => {
        results.forEach((result, index) => {
            console.log(`Статус промиса ${index + 1}: ${result.status}, Результат: ${result.value}`);
        });
    });

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function executePromises() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result, index) => {
            console.log(`Результат асинхронного промиса ${index + 1}:`, result);
        });
    } catch (error) {
        console.error("Ошибка при резолве промисов:", error);
    }

    try {
        const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        settledResults.forEach((result, index) => {
            console.log(`Статус асинхронного промиса ${index + 1}: ${result.status}, Результат: ${result.value}`);
        });
    } catch (error) {
        console.error("Ошибка при обработке промисов:", error);
    }
}

executePromises();