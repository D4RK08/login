document.getElementById("Enter").onclick=function (){
    
    let requestURL = 'https://github.com/D4RK08/login/blob/main/utenti.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = "json";
    request.send();
        
    request.onload = function(){
        const utenti = request.response;
        
        let Username = document.getElementById("Username").value;
        let Password = document.getElementById("Password").value;
        
//         console.log(request.response)
        
        var pappa = utenti.utent
        
        var utente_corrente = Object.keys(pappa).length;
        let i = 0;
        while ( i < utente_corrente){
//             console.log(utenti.utent).length;
            if (utenti.utent[i].username === Username) {
                console.log("ce");
                var posizione=i;
                if (utenti.utent[posizione].password === Password){
                    console.log("password giusta") 
                    window.location = "https://github.com/D4RK08/login/blob/main/index.html";
                }
            }
            i++;
        } 
    } 
}
       
document.getElementById("New").onclick=function (){
    window.location = "https://github.com/D4RK08/login/blob/main/sigin.html";
}
