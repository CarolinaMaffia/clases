//Funciones
// Ejercicio 1

/*
function potencia(base, exponente) {
    var resultado = 1;

    for (i = 0; i <= exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
var operacion = potencia(2,5);
console.log(operacion);
*/

//Ejercicio 2 

function primo(numero) {
    if (numero <= 3) {
        return numero + " es primo";
    } else if (numero % 2 == 0) {
        return numero + " no es primo";
    } else {
        for (var i = 3; i < numero; i += 2) {
            if (numero % i == 0) {
                return numero + " no es primo";
            }
        }
    }
    return numero + " es primo";
}

console.log(primo(11));

//Otra forma de hacer el ejercicio 2

function primos(N) {
    for (var i = N - 1; i > i; i--) {
        var x = N % i;
        if (x == 0) {
            return false;
        }
    }
    return true;
}
console.log(primos(13));

//Con while
function primos(N) {
    var i = 2;
    while ((i > 1) && (i < N)) {
        var x = N % i;
        if (x == 0) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(primos(13));


//Do while

function primos(N) {
    var i = 2;
    do {
        var x = N % i;
        if (x == 0) {
            return false;
        }
        i++
    } while ((i > 1) && (i < N))
    return true;

}
console.log(primos(13));

