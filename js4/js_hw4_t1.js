//task 1.1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers){
    if (number % 2 === 0) {
        console.log(number **2); 
    }
    else {
        console.log(number **3);
    }
}

//task 1.2

const newMassive = [1, 2, 3, 4, 5];

newMassive.push(6);
newMassive.unshift(0);
newMassive.splice(newMassive.indexOf(1) + 1, 1);
newMassive.pop();
console.log (newMassive); 

//task 1.3

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

//task 1.4

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10]
const mergeArray = [...arr, ...arr2];
console.log (mergeArray);