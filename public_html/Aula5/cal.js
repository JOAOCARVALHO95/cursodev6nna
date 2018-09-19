var tagResultado = document.getElementById("resultado");
function soma()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
     var resultado = valor1 + valor2;
    tagResultado.innerText = resultado; 
}

function diminuir()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
     var resultado = valor1 - valor2;
    tagResultado.innerText = resultado; 
}

function multiplicar()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
     var resultado = valor1 * valor2;
    tagResultado.innerText = resultado; 
}

function dividir()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
     var resultado = valor1 / valor2;
    tagResultado.innerText = resultado; 
}