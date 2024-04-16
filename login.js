//Login Validation
function func(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if(email.length >= 8 && password.length >= 2){
        window.location.assign("home.html");
        alert("Login Successfull!");
    }
    else{
        alert("Invalid Information");
        return;
    }
    
}

