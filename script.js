let login=document.getElementById("login")
let email=document.getElementById("typeEmailX-2")
let pwd=document.getElementById("typePasswordX-2")
let phint=document.getElementById("passhint")




var check = (callback)=>{
    if(email.value == "admin",
    pwd.value == 12345){
        callback();
        phint.style.color = "green";
        phint.innerHTML = "Done!!";
        return true;
    }else{
        phint.style.color = "red";
        phint.innerHTML = "Invalid Username or Password";
        return false;
    }
}

function redirect(){
    login.action="content.html";
}
