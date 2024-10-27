window.onload =() =>{
    const button =document.querySelector('#calculate');
    button.addEventListener('click',calculateBMI)
}

function calculateBMI(){
    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;
    const result = document.querySelector('#result');


if(!height || isNaN(height) || height <0)
{
    result.innertext="Please provide a valid height";
    return;
}
else if(!weight || isNaN(weight) || weight < 0)
{
    result.innertext="Please provide a valid weight";
    return;
}

const BMI = (weight/(height * height)/10000).toFixed(2);

if(BMI<18.5)
{
    result.innertext=`Under weight: ${BMI}`;
}
else if(BMI >= 18.5 && BMI < 24.99 )
{
    result.innertext=`normal weight: ${BMI}`;
}
else if(BMI >= 25 && BMI < 34.9 )
{
    result.innertext=`normal weight: ${BMI}`;
}
else if(BMI >= 35)
{
    result.innertext=`heavy weight: ${BMI}`;
}
}