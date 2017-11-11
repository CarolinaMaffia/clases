var ul = document.getElementById('dlist');
var lista = ['Holo', 'holo2', 'Holo3', 'Holo4', 'Holo5'];
var elemento;


function myFunction() {

    for (i = 0; i < lista.length; i++) {
        elemento = document.createElement('li');
        elemento.textContent = lista[i];
        ul.appendChild(elemento);
    }

}

var save = document.getElementsByTagName('li');

function remove() {
    for (j = 0; j < lista.length; j++){
        ul.removeChild(save[0]);
    }
}


var botonListar = document.getElementById("listar");
botonListar.addEventListener('click', myFunction);
 //primer parametro "EVENTO, 2do A LO QUE QUIERO LLAMAR (EJ LISTA ANTERIOR)

 var botonLimpiar = document.getElementById("limpiar");
 botonLimpiar.addEventListener('click', remove);