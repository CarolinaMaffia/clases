(De mayor a menor)

var arr = [8, 3, 10, 2, 5];

Pivot marca la mitad del array.En este caso 10.
    //Para encontrar la mitad del array se puede hacer length / 2
    /*entonces*/
var p = [2];
var swap;
for (i = 0; i < p; i++) {
    if (arr[i] > arr[p]) { // Si la posicion en la que estoy del array es mayor a la posicion del pivote:
        swap = arr[p];
        arr[p] = arr[i];
        arr[i] = swap;
    }
}
//swap: variable temporaria y ahi alojar el 10. (arr [p]) 
//pivot siempre es el indice.


//PIVOT AL FINAL

var arr = [8, 32, 5, 10, 1, 22, 7] //PIVOT 7

var swap;
//Nó sé que poronga es esta:
