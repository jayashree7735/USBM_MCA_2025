// for(let i=1;i<=5;i++)
// {
//  console.log(i);
// }

for(let i = 5; i >= 1; i--){
    console.log(i);
}
//task-1
//Generate random numbers and add them upto 5 times.
   //hint:for loop

// const { log } = require("console");

  // ans:-
//    console.log(Math.floor(Math.random(5)));
//    let sum=0;
//    for(let i=0;i<=5;i++){
//     let random=Math.floor(Math.random()*10);
//     let result=sum+random;
//     console.log(`the random sum is ${result}`);
//    }

// for(let i=1; i<=5; i++){
//     for(let j=1; i<=2 ;j++){
//     console.log(j);
// }
// console.log(i);
// }

for(let i=1; i<=i; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
    pattern += "*";
    }
    console.log(pattern);
}