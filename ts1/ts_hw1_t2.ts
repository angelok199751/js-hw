// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

const validatePassword = (password: string): boolean => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\S).{8,}$/.test(password);

console.log(validatePassword('Aa9 aA9 '));
console.log(validatePassword('aa9 aa9 '));
console.log(validatePassword('aaa aaa '));
console.log(validatePassword('aaaaaaa'));
console.log(validatePassword('        '));
