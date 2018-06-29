caricaFiles();

const listFiles = document.getElementById("listFiles");

const formCarica = document.getElementById("formCarica");
const caricaBtn = document.getElementById("caricaBtn");
const file = document.getElementById("file");


const eliminaBtn = document.getElementById("elimina");


formCarica.addEventListener("submit", evt => {

    evt.preventDefault();
    
   
    caricaFile();
   
        
    
})



function caricaFiles(){
    fetch("http://localhost/slimdrive/public/index.php/api/files", {method: "GET", headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonFiles => {
        console.log(jsonFiles);
       

        jsonFiles.forEach(file => {
            let a = document.createElement(`a`);
            a.classList.add(`list-group-item`);           
            a.innerHTML = `${file.filename}`;
            a.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);
            
            
            
            
            let button = document.createElement(`button`);
            button.classList.add(`btn`);
            button.classList.add(`btn-sm`);
            button.classList.add(`btn-secondary`);
            button.classList.add(`pull-right`);
            button.classList.add(`marginBtn`);
            button.setAttribute("title", "Scarica");
            button.setAttribute("id", "scarica");
            button.setAttribute("href", `/slimdrive/src/uploads/${file.path}`);

            let i = document.createElement(`i`);
            i.classList.add(`glyphicon`);
            i.classList.add(`glyphicon-cloud-download`);

            let buttonx = document.createElement(`button`);
            buttonx.classList.add(`btn`);
            buttonx.classList.add(`btn-sm`);
            buttonx.classList.add(`btn-secondary`);
            buttonx.classList.add(`pull-right`);
            buttonx.classList.add(`marginBtn`);
            buttonx.setAttribute("title", "Elimina");
            buttonx.setAttribute("id", "elimina");

            let ix= document.createElement(`i`);
            ix.classList.add(`glyphicon`);
            ix.classList.add(`glyphicon-remove`);
                

            listFiles.appendChild(a);
            a.appendChild(buttonx);
            buttonx.appendChild(ix);       
            a.appendChild(button);
            button.appendChild(i);
            
        });

    })
    

}

function caricaFile(){
    const fileInput = document.getElementById('file');
    const formData = new FormData();
    formData.append('newfile', fileInput.files[0]);

    console.log(formData);
    const options = {
    method: 'POST',
    body: formData,
    };
    
    fetch('http://localhost/slimdrive/public/index.php/api/upload', options)
    .then(response => {
        console.log(response);
        console.log(response.text());    
    })
}
/*
function scaricaFile(id){
    console.log(id);
    
    fetch("http://localhost/slimdrive/public/index.php/api/download/" + id , {method: "GET"})
    .then(response => {
        console.log(response);
        
    })
    
}
*/