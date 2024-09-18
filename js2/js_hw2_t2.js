const minAge = 18;
const maxAge = 60;
//let age = 10; //ВЫВЕЛО You don't have access cause your age is 10 It's less then 18
//let age = 17; // ВЫВЕЛО You don't have access cause your age is 10 It's less then 18
//let age = 18; // ВЫВЕЛО Welcome!
//let age = 19; //ВЫВЕЛО Welcome!
//let age = 59; //ВЫВЕЛО Welcome!
//let age = 60; // ВЫВЕЛО Technical work
//let age = 61; // ВЫВЕЛО Keep calm and look Culture channel
let age = "JUST_STRING"; //Вывело Incorrect data type
if(isNaN(age)) {
    console.log("Incorrect data type");  
} else {
    if (age < minAge) {
        console.log("You don't have access cause your age is " + age + " It's less then " + minAge);  
    } 
    else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    }
    else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
    console.log("Technical work");
    }
}