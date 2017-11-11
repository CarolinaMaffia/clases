/*
Objetivo: Ordenamiento Pivote 
Pautas: generar un array que contenga 15 elementos generados aleatoriamente (números enteros) y realizar los códigos correspondientes a ambos métodos de ordenamiento. 
Ambos métodos deben estar encapsulados en una función y devolver el array ordenado de mayor a menor. 
*/

var arr = []

while (arr.length < 15) {
    var random = Math.ceil(Math.random() * 100);
    if (arr.indexOf(random) > -1) continue;
    arr[arr.length] = random;
}
console.log(arr);

var swap;
var p;

for (p = arr.length - 1; p > 0; p--) {
    for (i = 0; i < p; i++) {
        if (arr[i] < arr[p]) {
            swap = arr[p];
            arr[p] = arr[i];
            arr[i] = swap;
        }
    }
}

console.log(arr);

