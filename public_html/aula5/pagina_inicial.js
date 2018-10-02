    /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tagResultadot = document.getElementById("resultadot");

function calt()
{
    var b = parseFloat(document.getElementById("base").value);
    var a = parseFloat(document.getElementById("altura").value);
    tagResultadot.value = (b*a)/2;
     
}
var tagResultadoq = document.getElementById("resultadoq");
function calq()
{
    var q = parseFloat(document.getElementById("lado").value);
    tagResultadoq.value = q*q;
}

var tagResultadoc = document.getElementById("resultadoc");
function calr()
{
    var r = parseFloat(document.getElementById("raio").value);
    tagResultadoc.value = 3.14*(r*r);
}

var tagResultadotra = document.getElementById("resultadotra");
function caltra()
{
    var b1 = parseFloat(document.getElementById("basemaior").value);
    var b2 = parseFloat(document.getElementById("basemenor").value);
    var h1 = parseFloat(document.getElementById("alturat").value); 
    tagResultadotra.value = ((b1+b2)*h1)/2;
}

var tagResultadoR = document.getElementById("resultadoR");
function calret()
{
    var b2 = parseFloat(document.getElementById("baser").value);
    var a2 = parseFloat(document.getElementById("alturaR").value);
    tagResultadoR.value = b2*a2;
}
    
   