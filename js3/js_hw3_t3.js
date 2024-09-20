const word = "Apple"; 
const vowels = "aeiouy";
const consonants = "bcdfghjklmnpqrstvwxyz"

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < word.length; i++) {
    const lowerCaseText = word[i].toLowerCase();
    if (vowels.indexOf(lowerCaseText) !== -1) {
            vowelsCount++;
    } else if (consonants.indexOf(lowerCaseText) !== -1) {
        consonantsCount++;
        }
}

console.log(`${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`);

