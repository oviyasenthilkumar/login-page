let signUpForm = document.getElementById("signup");
signUpForm.addEventListener("submit", signUpRegistration);

let signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click",function commit(){
    signUpForm.classList.remove("hidden")
    loginForm.classList.add("hidden")
});
let accBtn = document.getElementById("accBtn");
accBtn.addEventListener("click",function changes(){
    loginForm.classList.remove("hidden")
    signUpForm.classList.add("hidden")
});
function signUpRegistration(event){
event.preventDefault();
let username = document.querySelector("#createUsername").value;
let password = document.querySelector("#createPassword").value;
console.log(username, password);
if(password > 8 && password < 15){  
    if((password > a && password < z)&&(password > A && password < Z)){
        return alert("your password successfully created");
    }
    // get data from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    //check duplicate data
    let existingUser = users.find((user)=> user.username === username);
    console.log(existingUser);
    if(existingUser){
        alert("User already exists. please create a new one");
    }else{
        psw(password);
        users.push({username:username, password:password})
    //update username and password

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration updated successfully")
    }
}else{
    alert("reset ur password with one uppercase,one lowercase and password must contain 8 - 15 characters");
}
}

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", loginRegistration);

function loginRegistration(event) {
    event.preventDefault();
    const loginUsername = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let authenticatedUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

if(authenticatedUser){
    alert("login successful");
}else{
    alert("Invalid username or password");
}
}
