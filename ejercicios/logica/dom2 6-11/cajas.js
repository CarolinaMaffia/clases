var cajas = document.getElementsByClassName("caja");

var primeraCaja = document.getElementById("primeraCaja");

primeraCaja.innerHTML = "<h1> Hola Mundo </h1>";


var caja = document.createElement ("div");
var contenido = document.createTextNode("Hola");
caja.appendChild(contenido);
caja.setAttribute("class","caja")
var contenedor = document.getElementById("contenedor");
contenedor.appendChild("caja");

// appendChild acepta un parametro que si o si en un nivel de jerarquia tiene que ser hijo del objeto. 