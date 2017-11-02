// Ejercicio 1
/*
var numero = prompt("Ingrese un número");
var auto = [];

for (var i = 0; i < numero; i++) {
	auto[i] = i;
	console.log(auto);
}
 

// Ejercicio 2
var numero = prompt("Ingrese un número");
var auto = [];

for (i = 0; i < numero; i++) {
    auto = i;
    if (i % 2 == 0) {
        auto = 0;
    } else {
        auto = i;
    }
    console.log(auto);
}


// Ejercicio 3

var x = [10, 24, 36, 7, 98, 11, 14, 20];
var mayor;

for (var i = 0; i < x.length - 1; i++) {
    if (x[i] > x[i + 1]) {
        mayor = x[i];
    }
}
console.log(mayor);
*/
/*
//La mejor forma de hacer el ejercicio 3
var x = [10, 24, 36, 7, 98, 11, 14, 20];
var mayor = x[0];
var pos = 0
for (var i = 0; i < x.length; i++) {
    if (x[i] > = mayor) {
        mayor = x[i];
        pos = i;
    }
}
console.log(mayor);

// Ejercicio 5
*/
/*
var x = [10, 24, 36, 7, 98, 11, 98, 20, 98];
var numBig = x[0];
var time = 0;

for (var i = 0; i <= x.length; i++) {
    if (x[i] >= numBig) {
        if (numBig == x[i]) {
            time = time + 1;
        } else {
            time = 1;
        }
        numBig = x[i];
    }
}
console.log("el valor " + numBig + " es el valor maximo del array y se repite: " + time + " veces");
*/
//Ejercicio 6

var x = ["a", "l", "f", "a"];
var y = ["a", "l", "f", "a", "o", "r"];
var distinto = false;
var xL = x.length;
var yL = y.length;
var N;
var M;
var cont = 0;

if (xL == yL) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            distinto = true;
        }
    }
} else {
    if (xL > yL) {
        console.log("x es más largo");
        N = yL;
        M = xL
    } else {
        N = xL;
        M = yL;
        console.log("y es el más largo")
    }

}


for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
        if (x[i] == y[j]) {
            cont++;
        }
    }
    console.log(cont)
}
/*
var k = 0;
var match = [];
var isFound = false;
var little = y;
var big=x;
for (i = 0; i < little.length; i++) {
    isFound = false;
    for (j = 0; j < big.length; j++) {
        if (little[i] == big[i]) {
            valSame = little[i];
            for (var k = 0; k < match.length; k++) {
                if (valSame == match[k]) {
                    isFound = true;
                }
            }
            if (isFound == false) {
                match[match.length] = valSame;
            }
        }
    }
}
*/

var cont = 0;
var comun = [];
for(var i=0;)

//Ejercicio 7 typeof = devuelve el tipo de dato. Con === comparo el tipo de dato. 

var datos1 = ["Fido", "Gomez", 26, 15000.78, true];
var datos2 = ["Gervasio", "Fernandez", 31, 28.550, false];
var i;

for (i = 0; i < datos1.length; i++) {

    if ((Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])) && (datos1[i] > datos2[i])) {
        console.log("fido es mayor");
    } else {
        console.log("Fido es menor");
    }
    if (typeof(datos1[i]) == "boolean" && typeof(datos2[i]) == "boolean") {
        if (datos1[i]) {
            console.log("Casado")
        } else {
            console.log("no casado ahre");
        }
    }
}



/* Operador de negación

var verdadero = true;
var falso = !verdadero;

console.log (falso) // false ahre
*/