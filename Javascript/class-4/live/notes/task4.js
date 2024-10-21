// //Basics
// Q-1)What does Math.floor() do in java script?
// ans)It is a method in java script which returns the greatest integer lowest value of the given number or given number.
// ex:-console.log(Math.floor(45.54));
// then the output is 45

// Q-2)What was the purpose of Math.ceil()?Give an example.
// ans)Math.ceil()is the method of java script which return the round up value of up to the nearest integer of the given number.
// ex:-console.log(Math.ceil(45.54));
// then the output is 46

// Q-3)how would you generate the random number betwen 1 to 100?
// ans)we generate the random number by the method that is Math.random().But by this we can find any random number in between 0 to 1.
// so for others we can find the random number by appling a formula,
// i.e:console.log(Math.floor(Math.random() _ ( end - start + 1 ) + start));
// As per question to findout the random number between 1 to 100
// we can write,
// console.log(Math.floor(Math.random() _ ( 100 - 1 + 1 ) + 1));

// Q-4)Explain how Math.pow(2,3) works and what the output will be.
// ans)Math.pow() is a method in java script which return the power of the given number and the number are given by the parameter .The 1st parameter is the base and the 2nd parameter is the power the base(=1st parameter).
// so, as per question the output of Math.pow(2,3)is 8.

// Q-5)What is the value of Math.PI
// ans)3.14

//task of class-4
// Q-1)Generate a random number between 1 to 100.
// ans) 
     let start_num=1;
     let end_num=2;
     let totalNumber1 = end_num - start_num + 1;
     let random_number1 = Math.floor(Math.random() * totalNumber1 + start_num);
      console.log(random_number1);

// Q-2)Round the number 6.75 down to the nearest integer.
// ans)
console.log(Math.floor(6.75));
// output:6

// Q-3)Round the number 9.12 up to the nearest integer.
// ans)
 console.log(Math.ceil(6.75));
//  output:7

//  Q-4)Generate a random number between 5 and 27(inclusive).
//  ans)
     let start1=5;
     let end1=27;
     let totalNumber = end1 - start1 + 2;
     let random_number = Math.floor(Math.random() * totalNumber + start1);
      console.log(random_number);


// Q-5)Add 5 days to the current date.
// ans) 
   let currentDays= new Date();
   console.log(currentDays.getDay()); 
   console.log(currentDays.getDay()+5); 

// Q-6)CAlculate millisecond


// Q-7)Get the current hour.
//  ans)
 let cur_hour=new Date();
     console.log(cur_hour.getHours());

// Q-8)Create a date object for jan 1,2024
let date1= new Date(2024,0,1);
console.log(date1);

// Q-9)Get the current day of the week
let curDay = new Date();
console.log(curDay.getDay());

// Q-10)Get the current month
// ans)
 let curMonth =new Date();
 console.log(curMonth.getMonth());