//To manipulate html elements

// const username = document.getElementById("username").value;
// const useremail = document.getElementById("email").value;
// const userpassword = document.getElementById("password").value;
//Don't use these above as it is outside the function so it can't be function inside button


//To manipulate html elements
const users = JSON.parse(localStorage.getItem("users")) || [];
const signupbtn = document.getElementById("signup");

//Add events
signupbtn.addEventListener("click",auth);

function auth(){
const username = document.getElementById("username").value;
const useremail = document.getElementById("email").value;
const userpassword = document.getElementById("password").value;
    alert("It is working");
    console.log(username ,useremail ,userpassword );

    const newUser = {
        name: username,
        email: useremail,
        password:userpassword,
    };
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    console.log(newUser);

}

// console.log(username ,useremail ,userpassword );