const minAge = 18;
const maxAge = 60;
//let age = "10"; //Вывело You don't have access cause your age is 10 It's less then 18
let age = "ten"; //Вывело This is not a number. Enter age as a number
if(isNaN(age)) {
    console.log("This is not a number. Enter age as a number");  
} else {
   age = +age;  
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