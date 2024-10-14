// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]
//   4. find - найдите элемент, равный своему индексу //2
//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
//   6. reduce - получите сумму всех чисел массива //466
//   7. some - проверьте, есть ли в массиве элементы больше 90 //true
//   8. every - проверьте, что все элементы массива двухзначные //false

const arr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// task 1.1
arr.forEach(arr => {
  if (arr % 3 === 0) {
    console.log(arr);
  }
});

// task 1.2
const newArray = arr.map(numbers => numbers - arr.length);
console.log(newArray);

// task 1.3
const filteredArray = arr.filter((el, index, array) => el > array[index -1]);
console.log(filteredArray);

//task 1.4
const findElement = arr.find((element) => element === 2);
console.log(findElement);

// task 1.5
const sortElement = [...arr].sort((a,b) => a - b);
console.log(sortElement);

// task 1.6
const reduseSum = arr.reduce((accumulator, value) => accumulator + value, 0);
console.log(reduseSum);
    
// task 1.7
const someElement = arr.some((value) => value > 90);
console.log(someElement);

// task 1.8
const everyDoubleDigit = arr.every((value) => value >= 10 && value <= 99);
console.log(everyDoubleDigit);