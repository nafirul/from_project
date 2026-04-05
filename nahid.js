const form = document.querySelector("#form");



form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const password2 = document.querySelector("#password2").value;
    const nahid = document.querySelector("#nahid");
    const nahid1 = document.querySelector("#nahid1");
    const nahid2 = document.querySelector("#nahid2");
    const nahid3 = document.querySelector("#nahid3");
    


    nahid.textContent = " ";
    nahid1.textContent = " ";
    nahid2.textContent = " ";
    nahid3.textContent = " ";

    let isValid = true;

    if(username=== ""){
        nahid.textContent= "username is required";
        isValid= false;
    }
   
    if (email === "") {
    nahid1.textContent = "Email is required!";
    isValid = false;
  } else if (!email.includes("@")) {
    nahid1.textContent = "Enter a valid email!";
    isValid = false;
  }


  if (password === "") {
    nahid2.textContent = "Password is required!";
    isValid = false;
  } else if (password.length < 6) {
    nahid2.textContent = "Password must be at least 6 characters!";
    isValid = false;
  }

  if(password2===""){
    nahid3.textContent="confirm password is required!";
    isValid= false;
  }
  else if(password!==password2){
    nahid3.textContent="password do not match!"
  }

  if (isValid) {
     alert("sucssfully")
  }


});

const p = document.querySelector("#password2");
const t = document.querySelector("#togglePassword");

t.addEventListener("click", function(){
  if (p.type==="password"){
    p.type="type";
  }
  else{
    p.type="password";
  }

  t.classList.toggle("bi-eye");
});

const p1 = document.querySelector("#password");
const t1= document.querySelector("#toggle");

t1.addEventListener("click", function(){
  if(p1.type==="password")
  {
    p1.type="type";
  }
  else{
    p1.type="password";
  }

  t1.classList.toggle("bi-eye");
})