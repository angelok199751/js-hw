//task 1.1

function mergeArrays(...arrays) {
    return arrays.flat();
      }
    const result = mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]);
    console.log(result);


// task 1.2

const sentence = 'I am super engineer'

function transform(words){
    words = words.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (!i){
            words[i] = words[i].toLowerCase()
        }
        else {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
        }
    }
    return words.join('_')
}

console.log(transform(sentence))

// Task 1.3

function fibanacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibanacci(n - 1) + fibanacci(n - 2);
    }
  }
  
  console.log(fibanacci(8));