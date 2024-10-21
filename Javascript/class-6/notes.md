## for loop
-It is use for iteration purpose.
-> syntax:
       for(initialization;condition;increment/decrement);{
       //code to be execution
       }

       ex:-
       Print the numbers between between 1 to 5;
       for(let i=0;i<=5;i++)
       {
        console.log(i);
       }


## nested loop
   - A loop inside the loop tht is called nested loop.
   
     syntax :-
         for(initialization;condition;increment/decrement);{
            //code to be execution
                for(initialization;condition;increment/decrement);{
                 //code to be execution
                }
           }

    ex:-
       for(let i=0;i<=5;i++){
              for(let j=1;i<=2;j++){
              console.log(j);
       }
       console.log(i);
       }


## pattern print
for(let i=1; i<=i;j++){
       let pattern ="";
       for(let j=1; j<=i;j++){
       pattern +="*";
       }
       console.log(pattern);
}