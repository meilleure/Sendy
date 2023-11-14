let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('Name');
let title = document.getElementById('title');
let Lost = document.getElementById('Lost');
    
    signinBtn.onclick = function() {
       nameField.style.display = "none";
        title.innerText = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
        Lost.style.visibility = "visible";

    };

    signupBtn.onclick = function() {
         nameField.style.display = "";
         title.innerText = "Sign Up";
         signupBtn.classList.remove("disable");
         signinBtn.classList.add("disable");
         Lost.style.visibility = "hidden";
     };



