
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];


// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)

function addCharacter(character = {}) {
  if ('name' in character && 'age' in character && typeof character['name'] === 'string' && typeof character['age'] === 'number') 
     characters.push(character);
    } 

addCharacter({'name': 'Angel', 'age': 27});
console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(nameChar = ''){
    const character = characters.find(character => character.name === nameChar);
    if (!character) {
       console.log('Not found');
     } else {
         return character;
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
        if (newCharacter.name) {
            changeChar.name = newCharacter.name;
          }
          if (newCharacter.age) {
            changeChar.age = newCharacter.age;
          }
        } 
}
updateCharacter('Angel', {name: 'Max'});
console.log(characters);

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
    const idx = characters.findIndex(character => character.name === name);
    if (idx === -1) {
      throw new Error(`Character with name: "${name}" was not found`);
    } else {
      characters.splice(idx, 1);
    }
}
removeCharacter('Max');
console.log(characters);