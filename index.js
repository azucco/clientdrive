// caricaEventi();

const listEventi = document.getElementById("listEventi");

const formAccedi = document.getElementById("loginform");
const accediBtn = document.getElementById("accedi");
const username = document.getElementById("login-username");
const pwd = document.getElementById("login-password");




formAccedi.addEventListener("submit", evt => {

    evt.preventDefault();
    
    let user = username.value;
    let password = pwd.value;

    
    stampaToken(user, password);
        
    
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
            console.log(token);
            location.href = "upload.php";

        }
        
        
        
        
        
        

       
        
    })

}