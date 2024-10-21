//task-1
//Generate random numbers and add them upto 5 times.
   //hint:for loop

// const { log } = require("console");

  // ans:-
  //  console.log(Math.floor(Math.random()*10));
  //  let sum=0;
  //  for(let i=0;i<=5;i++){
  //   let random= Math.floor(Math.random()*10);
  //   let result=sum+random;
  //   console.log(`the random sum is ${result}`);
  //  }

  // Q-1) Print this pattern
  // *
  // **
  // ***
  // ****
  // *****


  //ansswer:-1

// for(let i=1; i<=5; i++){
//     let pattern = "";
//     for(let j=1; j<=i; j++){
//     pattern += "*";
//     }
//     console.log(pattern);
// }

   
  //  Q2. print    *****
  //               ****
  //               ***
  //               **
  //               *

  //ans:-2
  // for(let i=5;i<=1;i++){
  //   let pattern = "";
  //   for(let j=1;j<=i;j++){
  //   pattern += "*";
  //   }
  //   console.log(pattern);
  //   }


  // Q-3)   *
  //       ***
  //      *****
  //     *******
  //    *********


  // ans:-
  // for (let i=1; i<= 5; i++) {
  //   let pattern = "";
  //   // for spaces
  //   for (let j=1; j<=5-i; j++) {
  //     pattern += " ";
  //   }
  //   // for stars
  //   for (let j=1; j<=(2*i-1); j++) {
  //     pattern += "*";
  //   }
  //   console.log(pattern);
  // }

  // Q-4)   
  //    *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

//ans:-
// for (let i=1; i<= 5; i++) {
//     let pattern = "";
//     // for above part spaces
//     for (let j=1; j<=5-i; j++) {
//       pattern += " ";
//     }
//   //for above part stars
//     for (let j=1; j<=(2*i-1); j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
//   //again for lower
// for (let i = 5-1; i>=1; i--) {
//   let pattern = "";
//   // Add spaces for the lower 
//   for (let j=1; j<=5-i; j++) {
//     pattern += " ";
//   }
//   // for the lower part,print *
//   for (let j=1; j<=(2 * i - 1); j++) {
//     pattern += "*";
//   }
//   // for the lower half part
//   console.log(pattern);
// }

//Q-5
   


//Q-6) Q6. Floyd's Triangle:
 // Print Floyd’s triangle using numbers:

//ans:-
    
// let num=1;
// for(let i=1;i<=5;i++){
//   for(let j=1;j<=i;j++){
//     process.stdout.write(num + " "); 
//     num++;
//   }
 
//   console.log()
// }



// part-2(Question - answer)
// - Q1. Write a program that calculates the sum of all digits of a given number using a loop.
//ans:-

// let num=9876;
// let sum=0;
// while(num>0){
//   let rem = num % 10;
//   sum += rem;
//   num =Math.floor(num / 10); 
// }
// console.log("The sum of the number is : " ,sum)



// - Q2. Print the Fibonacci series up to a given number of terms.
//ans:-

// let n=10;
// let a = 1;
// let b = 2;

// for (let i = 1; i <= n; i++) {
//   console.log(a); 

//   let nextTerm = a + b; 
//   a = b; 
//   b = nextTerm; 
// }


// - Q3. Write a program that prints the multiplication table of a number using a for loop.
//ans:-

let num=5;
for(let i=1 ; i<=num; i++);
{
  let result = i*num;
}
 console.log(`${num} x ${i} = ${result}`);