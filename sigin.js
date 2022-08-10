document.getElementById("New_account").onclick=function (){
    
    console.log("nuovoaccount")
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    let requestURL = './utenti.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
        
    request.onload = function(){
        
        const utenti = request.response;
        
        if (utenti.utent.includes(Username)){
            
            alert("Username non disponibile")
            
        }
        
        else{
            
            var numeroutenti = Object.keys(utenti.utent).length;
        
            utenti.utent[numeroutenti+1].username = Username
            utenti.utent[numeroutenti+1].password = Password

            window.location = "index.html";

        }
    }
}
