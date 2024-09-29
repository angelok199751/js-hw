// task 2.1

function palindrom (pal) {
    const words = pal.toLowerCase();
    const reverseWord = words.split('').reverse('').join('');
    return words === reverseWord;
}
console.log (palindrom("Bob"));
console.log (palindrom("Дед"));
console.log (palindrom("Дом"));


// task 2.2

function wordsInASentence (words) {

    const sentence = words.split(' ');
    const maxLength = Math.max(...sentence.map(sentence => sentence.length));
    const longestWords = sentence.filter(sentence => sentence.length === maxLength);
   
    return longestWords;

   }
   console.log(wordsInASentence('Тестовое Предложение предложение'));
   console.log(wordsInASentence('Другое предложение с разными и очень предлинными словами'));