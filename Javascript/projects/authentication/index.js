
const users = JSON.parse(localStorage.getItem("users")) || [];

//To manipulate html elements

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutbtn = document.getElementById("logoutbtn")


//addevent
signupBtn.addEventListener("click",signup);
loginBtn.addEventListener("click",login);
logoutbtn.addEventListener("click",logout)



//Display dashboard if the user is logged in
function showView(view){
 document.getElementById("signup").style.display= view ==="signup" ? "block" :"none";
 document.getElementById("login").style.display= view ==="login" ? "block" :"none";
 document.getElementById("dashboard").style.display= view ==="dashboard" ? "block" :"none";
 }

//Signup function

function signup(){
    const username = document.getElementById("username").value;
    const useremail = document.getElementById("email").value;
    const userpassword = document.getElementById("password").value;
    console.log(username ,useremail ,userpassword );

    const newUser = {
        name: username,
        email: useremail,
        password:userpassword,
    };

    //check if user alreaty exist
    const userExits = users.find((user) => user.name === username);
    if(userExits){
        alert("Username already exits.Please choose anathor name.")
        return;
    }


    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    alert("sign up successfull!!")
    showView("login");

}

//login function
function login(){
const useremail = document.getElementById("email").value;
const userpassword = document.getElementById("password").value;

const storeUsers = JSON.parse(localStorage.getItem("users")) || [];
const users = storeUsers.find((user)=> user.email === useremail && user.password === userpassword);
 if(users){
    const loogedUser = localStorage.setItem("looggedUser", JSON.stringify(users));
    alert("Login succesfull");
    showDashboard();
 }
    else {
       alert("Invalid credentials");
    }
}

//dashboard function
function showDashboard(){
    const user = JSON.parse(localStorage.getItem("looggedUser"));
    document.getElementById("usernameDisplay").innerText = `Hey ${user.name}, Welcome !!`;
    showView("dashboard")
}


//logout
// logout.addEventListener("click",logout);

function logout(){
    localStorage.removeItem("loggedUser");
    alert("You've successfully logged out!!");
    showView("signup");

}
