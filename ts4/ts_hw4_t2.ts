// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue <T extends object, U> (obj: T, value: U): keyof T| undefined {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { 
             return Object.keys(obj).find(key => obj[key as keyof T] === value) as keyof T | undefined;      
            } 
        }
    return undefined;
}

const test = {
    key_a: 1,
    key_b: 2,
    key_c: 3,
}

console.log(getKeyByValue(test, 3))