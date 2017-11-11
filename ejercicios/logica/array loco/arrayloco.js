var numeros = [];

for (var i = 0; i <= 1000; i++) {
    numeros[i] = i + 1;
    console.log(numeros);
}

var sumaNumeros = 
    numeros.map(function(numero) {
        return numero + 10;
        
    });

    console.log("Array original: " + numeros);
    console.log("Array x 2: " + sumaNumeros);
