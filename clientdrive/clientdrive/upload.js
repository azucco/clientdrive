const listFiles = document.getElementById("listFiles");
const listCondivisi = document.getElementById("listCondivisi");

var i = 0;

user = localStorage.getItem("user");

caricaFiles(user);



caricaCondivisi(user);








const formCarica = document.getElementById("formCarica");
const caricaBtn = document.getElementById("caricaBtn");
const file = document.getElementById("file");

const nick = document.getElementById("nick");
nick.innerHTML = `${user}`;


formCarica.addEventListener("submit", evt => {

    evt.preventDefault();
    
    caricaFile(user);  

    
    
})


const userToShare = document.getElementById("uts");
uts = userToShare.value;

function caricaFiles(user){

    

    fetch("http://localhost/slimdrive/public/index.php/api/files/" + user, {method: "GET", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonFiles => {
        console.log(jsonFiles);
       

        jsonFiles.forEach(file => {
            let a = document.createElement(`a`);
            a.setAttribute("id", `${file.id_file}`);
            a.classList.add(`list-group-item`);           
            a.innerHTML = `<i class="glyphicon glyphicon-file"></i> ${file.filename}`;
            //a.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);
           
            
            
            let button = document.createElement(`a`);
            button.classList.add(`btn`);
            //button.classList.add(`btn-sm`);
            button.classList.add(`btn-secondary`);
            button.classList.add(`pull-right`);
            button.classList.add(`marginBtn`);
            button.setAttribute("title", "Scarica");
            button.setAttribute("id", "scarica");
            button.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);

            let i = document.createElement(`i`);
            i.classList.add(`glyphicon`);
            i.classList.add(`glyphicon-cloud-download`);

            let buttonx = document.createElement(`a`);
            buttonx.classList.add(`btn`);
            //buttonx.classList.add(`btn-sm`);
            buttonx.classList.add(`btn-secondary`);
            buttonx.classList.add(`pull-right`);
            buttonx.classList.add(`marginBtn`);
            buttonx.setAttribute("title", "Elimina");
            buttonx.setAttribute("id", "elimina");
            buttonx.setAttribute("onclick", `eliminaFile(${file.id_file})`);

            let ix= document.createElement(`i`);
            ix.classList.add(`glyphicon`);
            ix.classList.add(`glyphicon-trash`);

            let buttons = document.createElement(`a`);
            buttons.classList.add(`btn`);
            //buttonx.classList.add(`btn-sm`);
            buttons.classList.add(`btn-secondary`);
            buttons.classList.add(`pull-right`);
            buttons.classList.add(`marginBtn`);
            buttons.setAttribute("title", "Condividi");
            buttons.setAttribute("id", "condividi");
            buttons.setAttribute("onclick", `condividiFile(${file.id_file})`);

            let is= document.createElement(`i`);
            is.classList.add(`glyphicon`);
            is.classList.add(`glyphicon-user`);
                
            

            listFiles.appendChild(a);
            a.appendChild(buttonx);
            buttonx.appendChild(ix); 
            a.appendChild(buttons);
            buttons.appendChild(is);             
            a.appendChild(button);
            button.appendChild(i);
            //a.appendChild(span);

            
            
            
        });

        caricaSharedWith(user);

    })
    

}

function caricaFile(user){

    
    
    const fileInput = document.getElementById('file');
    const formData = new FormData();
    formData.append('newfile', fileInput.files[0]);

    console.log(formData);
    const options = {
    method: 'POST',
    body: formData,
    };
    
    fetch('http://localhost/slimdrive/public/index.php/api/upload/' + user, options)
    .then(response => {
        console.log(response);
        console.log(response.text());  
        listFiles.innerHTML = ""; 
        caricaFiles(user); 
        
    })

    
    
}

function eliminaFile(id){
    console.log(id);
    
    fetch("http://localhost/slimdrive/public/index.php/api/delete/" + id , {method: "GET"})
    .then(response => {
        console.log(response);
        listFiles.innerHTML = ""; 
        caricaFiles(user); 
        
        
    })
    
}

function condividiFile(id_file){

    const userToShare = document.getElementById("uts");
    uts = userToShare.value;

    if(uts == ""){
        alert("Per condividere devi inserire un username registrato nell'apposita sezione.");
        return;
    }
    if(uts == user){
        alert("Non puoi condividere i file con te stesso.");
        return;
    }
    
    spanSharedWith = document.getElementById(`${id_file}`);


    for (i; i < 10; i++){
        if(spanSharedWith.getElementsByTagName("span")[i] != null){
            thisSpan = spanSharedWith.getElementsByTagName("span")[i].getAttribute("name");
            
            if(thisSpan == uts){
                alert("Hai già condiviso questo file con questo utente.");
                return;   
            }
        }
        
    }
    if(spanSharedWith.getElementsByTagName("span")[0] != null){
        thisSpan = spanSharedWith.getElementsByTagName("span")[0].getAttribute("name");
        

        if(thisSpan == uts){
            alert("Hai già condiviso questo file con questo utente.");
            return;
        }
    }
    
    

    console.log(id_file);
    console.log(uts);

    
    fetch("http://localhost/slimdrive/public/index.php/api/files/share/" + id_file + "/" + uts , {method: "GET"})
    .then(response => {
        console.log(response);
        listFiles.innerHTML = ""; 
        caricaFiles(user); 
        
        
    })
    
}

function caricaSharedWith(user){
    fetch("http://localhost/slimdrive/public/index.php/api/files/sharedwith/" + user , {method: "GET"})
    .then(response => {
        console.log(response);
        return response.json();  
    })
    .then(jsonSharedWith => {
        console.log(jsonSharedWith);
        

        jsonSharedWith.forEach(share => {
            
            /*
            countShared++;
            jsonCountShared = {
                "count" : countShared,
                "id_file": share.id_file
            }
            */
            
            let span = document.createElement(`span`);
            span.classList.add(`badge`);
            span.setAttribute("id", `${share.id_file}`);
            span.setAttribute("title", `${share.id_file}`);
            span.setAttribute("name", `${share.user}`);
            span.innerHTML = `condiviso con ${share.user} `;
            
            //document.getElementById(`${share.id_file}`).innerHTML = `condiviso con ${share.user} `;
            
            //document.getElementById(`${share.id_file}`).setAttribute("title", `${share.user}`);

            let i = document.createElement(`i`);
            i.classList.add(`glyphicon`);
            i.classList.add(`glyphicon-remove`);
            i.classList.add(`hoverHand`);
            i.setAttribute("title", `Rimuovi condivisione`);
            i.setAttribute("onclick", `rimuoviCondivisione(${share.id_file}, '${share.user}')`);

            

            let a = document.getElementById(`${share.id_file}`);
            span.appendChild(i);
            a.appendChild(span);

            


        })
    })
}


function caricaCondivisi(user){

    

    fetch("http://localhost/slimdrive/public/index.php/api/files/condivisi/" + user, {method: "GET", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonFiles => {
        console.log(jsonFiles);
       

        jsonFiles.forEach(file => {
            let a = document.createElement(`a`);
            a.classList.add(`list-group-item`);           
            a.innerHTML = `<i class="glyphicon glyphicon-file"></i> ${file.filename}`;
            //a.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);
            
            let span = document.createElement(`span`);
            span.classList.add(`badge`);
            //span.setAttribute("id", `${file.id_file}`);
            span.innerHTML = `owner: ${file.owner}`;
            
            
            let button = document.createElement(`a`);
            button.classList.add(`btn`);
            //button.classList.add(`btn-sm`);
            button.classList.add(`btn-secondary`);
            button.classList.add(`pull-right`);
            button.classList.add(`marginBtn`);
            button.setAttribute("title", "Scarica");
            button.setAttribute("id", "scarica");
            button.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);

            let i = document.createElement(`i`);
            i.classList.add(`glyphicon`);
            i.classList.add(`glyphicon-cloud-download`);

            let buttonx = document.createElement(`a`);
            buttonx.classList.add(`btn`);
            //buttonx.classList.add(`btn-sm`);
            buttonx.classList.add(`btn-secondary`);
            buttonx.classList.add(`pull-right`);
            buttonx.classList.add(`marginBtn`);
            buttonx.setAttribute("title", "Rimuovi condivisione");
            buttonx.setAttribute("id", "elimina");
            buttonx.setAttribute("onclick", `rimuoviCondivisione(${file.id_file}, '${user}')`);

            let ix= document.createElement(`i`);
            ix.classList.add(`glyphicon`);
            ix.classList.add(`glyphicon-remove`);

            let buttons = document.createElement(`a`);
            buttons.classList.add(`btn`);
            //buttonx.classList.add(`btn-sm`);
            buttons.classList.add(`btn-secondary`);
            buttons.classList.add(`disabled`);
            buttons.classList.add(`pull-right`);
            buttons.classList.add(`marginBtn`);
            buttons.setAttribute("title", "Condividi");
            buttons.setAttribute("id", "condividi");
            buttons.setAttribute("onclick", `condividiFile(${file.id_file})`);

            let is= document.createElement(`i`);
            is.classList.add(`glyphicon`);
            is.classList.add(`glyphicon-user`);
                
            

            listCondivisi.appendChild(a);
            a.appendChild(buttonx);
            buttonx.appendChild(ix); 
            a.appendChild(buttons);
            buttons.appendChild(is);             
            a.appendChild(button);
            button.appendChild(i);
            a.appendChild(span);
            
        });

    })
    

}

function rimuoviCondivisione(id_file, userSharedWith){
    console.log(id_file);
    console.log(userSharedWith);
    
    fetch("http://localhost/slimdrive/public/index.php/api/delete/share/" + id_file + "/" + userSharedWith, {method: "GET"})
    .then(response => {
        console.log(response);
        listFiles.innerHTML = ""; 
        caricaFiles(user);
        listCondivisi.innerHTML = "";  
        caricaCondivisi(user)
        
    })
    
    
}