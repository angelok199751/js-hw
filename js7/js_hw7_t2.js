
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];


// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)

function addCharacter(character = {}) {
    if ('name' in character && 'age' in character && typeof character['name'] === 'string' && typeof character['age'] === 'number') {
     return characters.push(character);
       } 
}
addCharacter({'name': 'Angel', 'age': 27});
console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(nameChar = ''){
    if (characters.map(element => Object.values(element)).flat().includes(nameChar)) {
    return characters.find(character => character.name === nameChar);
    } 
}
console.log(getCharacter('Fred'));


// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    return characters.filter(character => character.age >= minAge);
}
console.log(getCharactersByAge(40));


// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
    const changeChar = getCharacter(name);
    if (changeChar) {
        changeChar.name = newCharacter.name;
        changeChar.age = newCharacter.age;
    } 
}
updateCharacter('Angel', {name: 'Max', age: 25});
console.log(characters);

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
    if (getCharacter(name)) characters.splice(characters.findIndex(character => character.name === name),1);
}
removeCharacter('Max');
console.log(characters);