const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

const newArray = [];
for (let i = 0; i < array.length; i++) {
  if (!newArray.includes(array[i])) {
    newArray.push(array[i]);
  }
}

console.log(newArray);