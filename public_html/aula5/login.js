function logar(){
    var usu = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    
    if(usu === "admin" && senha === "web123"){
        
      window.location.href = "pagina_inicial.html" ; 
    }
    else{
        alert("Usuário ou senha incorretos!");
    }
}