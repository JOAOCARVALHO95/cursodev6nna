/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tagResultado = document.getElementById("resultado");
function soma()
{
    var v1 = parseFloat(document.getElementById("valor1").value);
    var v2 = parseFloat(document.getElementById("valor2").value);
    tagResultado.innerHTML = "resultado:" + (v1 + v2);     
}
function diminuir()
{
    var v1 = parseFloat(document.getElementById("valor1").value);
    var v2 = parseFloat(document.getElementById("valor2").value);
    tagResultado.innerHTML = "resultado:" + (v1 - v2);     
}

function multiplicar()
{
    var v1 = parseFloat(document.getElementById("valor1").value);
    var v2 = parseFloat(document.getElementById("valor2").value);
    tagResultado.innerHTML = "resultado:" + (v1 * v2);     
}

function dividir()
{
    var v1 = parseFloat(document.getElementById("valor1").value);
    var v2 = parseFloat(document.getElementById("valor2").value);
    tagResultado.innerHTML = "resultado:" + (v1 / v2);     
}