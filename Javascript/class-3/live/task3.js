//Taking input by user for Week
//question-1
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Day;
 r1.question("Enter a number for day between 0-6: ",(input)=>{
    // Day = parseInt(input);
    console.log(You entered:${input});
    r1.close();
     switch(Day){
       case 0:
         console.log("Today is Sunday");
         break;
         case 1:
           console.log("Today is Monday");
           break;
           case 2:
           console.log("Today is Tuesday");
           break;
           case 3:
           console.log("Today is Wednesday");
           break;
           case 4:
           console.log("Today is Thrusday");
           break;
           case 5:
           console.log("Today is Friday");
           break;
           case 6:
           console.log("Today is Saturday");
           break;
                    default:
                      console.log("INVALID:Please try again");
             }
           });
