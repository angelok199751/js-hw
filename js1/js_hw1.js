let item_1 = 5;
console.log(item_1); //вывел 5
let item_2 = 3;
console.log(item_2); //вывел 3
let item_3 = item_1 + item_2;
console.log(item_3); //вывел 8
let item_4 = "hello world";
console.log(item_4); //вывел hello world
console.log(item_3+item_4); //вывел 8hello world
console.log(item_3*item_4); //вывел NaN
let item_5 = item_3;
let item_6 = 15;
const item_6_type = typeof item_6;
console.log("item 6 == ", item_6, ", item_6_type == ", item_6_type); //вывел item 6 ==  15 , item_6_type ==  number
let item_7 = String(item_6);
const item_7_type = typeof item_7;
console.log("item 7 == ", item_7, ", item_7_type == ", item_7_type); //вывел item 7 ==  15 , item_7_type ==  string