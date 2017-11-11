var ul = document.getElementById('ahre');
var lista = ['Holo', 'holo2', 'Holo3', 'Holo4', 'Holo5'];


function myFunction() {

    for (i = 0; i < lista.length; i++) {
        var elemento = document.createElement('li');
        elemento.textContent = lista[i];
        ul.appendChild(elemento);
    }
}


function remove() {
    for j = 0; j < lista.length; j++){
      elemento.removeChild(li[0]);
    }
}

