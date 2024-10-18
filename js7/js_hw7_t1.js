// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for. 
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())


const character = { 
    'name': 'Barney', 
    'age': 36, 
    'gender': 'male', 
    'isQa': true 
}

// t1

const objMassive = Object.keys(character);
const findKeys = objMassive.filter(objMassive => objMassive.length === 4);
console.log (findKeys);

// t2
const objValMassive = Object.values(character);
const findString = objValMassive.filter(objValMassive => typeof objValMassive === 'string');
console.log (findString);

// t3

const objEntMassive = Object.entries(character);
for (let i = 0; i < objEntMassive.length; i++) {
    const [key, value] = objEntMassive[i];
console.log (`key = ${key}, value = ${value}`);
}

// t4
// певый способ

if ('salary' in character) {
    console.log("Ключ 'salary' существует в объекте.");
} else {
    console.log("Ключ 'salary' не существует в объекте.");
}

// второй способ

if (Object.hasOwn(character, 'salary')) {
    console.log("Ключ 'salary' существует в объекте.");
} else {
    console.log("Ключ 'salary' не существует в объекте.");
}