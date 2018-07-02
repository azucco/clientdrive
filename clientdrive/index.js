// caricaEventi();

localStorage.clear();

const listEventi = document.getElementById("listEventi");

const formAccedi = document.getElementById("loginform");
const username = document.getElementById("login-username");
const pwd = document.getElementById("login-password");


formAccedi.addEventListener("submit", evt => {

    evt.preventDefault();
    
    let user = username.value;
    let password = pwd.value;

    
    stampaToken(user, password);
        
})

const formRegistrati = document.getElementById("signupform");
const newUser = document.getElementById("newuser");
const newPwd = document.getElementById("newpassword");

formRegistrati.addEventListener("submit", evt => {

    evt.preventDefault();
    
    let newuser = newUser.value;
    let newpwd = newPwd.value;

    
    registraUtente(newuser, newpwd);

    location.href = "index.php";
    alert("Utente registrato correttamente! Ora puoi effettuare il login.")
    
        
})


function stampaToken(user, password){


    fetch("http://localhost/slimdrive/public/index.php/api/login/" + user + "/" + password , {method: "GET", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then(response => {
        console.log(response);
        return response.text();
        
    })
    .then(token => {
        localStorage.clear();
        if(token == ""){
            alert("User o Password non corrette!");
        }else{
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            console.log(token);
            location.href = "upload.php";

        }
             
    })

}

function registraUtente(newuser, newpwd){
    
    console.log(newuser);
    console.log(newpwd);
    fetch("http://localhost/slimdrive/public/index.php/api/users/add/" + newuser + "/" + newpwd, {method: "GET", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then(response => {
        console.log(response);
        return response.json();
    })
}