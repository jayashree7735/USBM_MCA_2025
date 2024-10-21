// //math in java script

const { log } = require("console");

// const { log } = require("console");

// //Math is an in-built function
// let num1=25;
// let num2=55.05;

// let addition=num1+num2;
// console.log(addition);//80.05
// //Round
// console.log(Math.round(addition));//80
// console.log(Math.PI);//3.14)

// //Square root
// console.log(num1**2);//625(pow)
// console.log(Math.pow(35,2));//1225
// console.log(Math.pow(5,3));//25
// console.log(Math.sqrt(16));//square root

//ceil
//console.log(Math.floor(98.75));//98
// console.log(Math.ceil(325.49));
// console.log(Math.floor(325.49));
// console.log(Math.floor(325.25));
// console.log(Math.ceil(325.25));
// console.log(Math.floor(325.01));
// console.log(Math.ceil(325.01));

// console.log(Math.round(325.49));
// console.log(Math.round(325.85));
// console.log(Math.round(325.8));

// //Max
// console.log(Math.max(10,20,25,40,48));
// //Min
// console.log(Math.min(10,28,49,37));

//Absolute
// console.log(Math.abs(-19));//19
// console.log(Math.abs(-0.00005));//0.00005

//Random
// console.log(Math.random());//0.0861:-i.e any randaom number
// console.log(Math.random());
// console.log(Math.random());

//Write a program to print the random number between 5 to 27
// console.log(Math.random(5,27));//1st attempt
// console.log(Math.floor(Math.random()*(27-5+1)+5));//copied by bikash

// //answer 
// let start=5;
// let end=27;
// //((end-start)+1) ->To find out the numbers
// let totalNumber = end - start + 1;
// //console.log(Math.random()*totalNumber);//it also print a random number/not correct
// let random_number = Math.floor(Math.random() * totalNumber + start);
// console.log(random_number);

//Dates
//to create date object

let date = new Date();
console.log(date);//2024-10-15to5:42:08.732z/UTC/ISO
console.log(date.toISOString());//2024-10-15to5:42
console.log(date.getFullYear());//2024
console.log(date.getMonth());//9(it's should be 10)
console.log(date.getMonth()+1);
console.log(date.getDate());//15
console.log(date.getHours());//11
console.log(date.getMinutes());//20
console.log(date.getSeconds());//49
console.log(date.getDay());







