var userName = document.getElementById("userName");
var email = document.getElementById("email");
var mobileNumber = document.getElementById("mobileNumber");
var password = document.getElementById("password");

function register(){
  var userData = { 
    name: userName.value,
    email: email.value,
    mobile: mobileNumber.value,
    password: password.value,
  };
  localStorage.setItem(`${email.value}`,JSON.stringify(userData));
  location.href = "try.html"
}

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function login() {
   let user = JSON.parse(localStorage.getItem(`${loginEmail.value}`))
   if(user!= null){
    sessionStorage.setItem("email",loginEmail.value)
    sessionStorage.setItem("password",loginPassword.value)
    location.href = "try.html";
   }
   else{
    alert(" we cannot find that email address")
   }
}
 function logout(){
  sessionStorage.clear()
 }
