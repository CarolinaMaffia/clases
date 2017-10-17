// bubble sort

var numeros = [6, 5, 3, 1, 8, 7, 2, 4];
var numTemp;
var swap = true;

console.log("Array original", numeros);

for (var i = 0; i < numeros.length && swap; i++) {
   swap = false;

    for (var j = 0; j < numeros.length - i; j++) {
        //Si el núm es mayor a su sig => intercambio.
        if (numeros[j] > numeros[j + 1]) {
            numTemp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = numTemp;
             swap = true;
        }
    }

}
console.log("Bubble sort", numeros);