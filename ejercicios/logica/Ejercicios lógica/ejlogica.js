// Ejercicio 1 
var num = prompt("Par o impar")

if (num % 2 == 0) {
    alert('par');

} else {
    alert('impar');
}


// Ejercicio 2
var diaSemana = prompt('ingresar número')

if (diaSemana == 1) {
    alert("Lunes");
} else if (diaSemana == 2) {
    alert("Martes");
} else if (diaSemana == 3) {
    alert("Miercoles");
} else if (diaSemana == 4) {
    alert("Jueves");
} else if (diaSemana == 5) {
    alert("Viernes");
} else if (diaSemana == 6) {
    alert("Sabado");
} else if (diaSemana == 7) {
    alert("Domingo")
} else {
    alert("No es un día de la semana")
}

//Ejercicio 3

var mes = prompt("Ingresar mes")


if (mes == "enero") {
    alert("31 días");
} else if (mes == "febrero") {
    alert("28 días");
} else if (mes == "marzo") {
    alert("31 días");
} else if (mes == "abril") {
    alert("30 días");
} else if (mes == "mayo") {
    alert("31 días");
} else if (mes == "junio") {
    alert("30 días");
} else if (mes == "julio") {
    alert("31 días");
} else if (mes == "agosto") {
    alert("31 días");
} else if (mes == "septiembre") {
    alert("30 días");
} else if (mes == "octubre") {
    alert("31 días");
} else if (mes == "noviembre") {
    alert("30 días");
} else if (mes == "diciembre") {
    alert("31 días");
} else {
    alert("No es un mes");
}

// Ejercicio 3 con Switch

var mes = prompt("Ingresar nombre de mes")

switch (mes) {
    case "enero":
        alert("31 días");
        break;
    case "febrero":
        alert("28 días");
        break;
    case "marzo":
        alert("31 días");
        break;
    case "abril":
        alert("30 días");
        break;
    case "mayo":
        alert("31 días");
        break;
    case "junio":
        alert("30 días");
        break;
    case "julio":
        alert("31 días");
        break;
    case "agosto":
        alert("31 días");
        break;
    case "septiembre":
        alert("30 días");
        break;
    case "octubre":
        alert("31 días");
        break;
    case "noviembre":
        alert("30 días");
        break;
    case "diciembre":
        alert("31 días");
        break;
    default:
        alert("No es valido");
        break;
}

// Ejercicio Mes 
var mes = parseInt(prompt("Ingresar número de mes"));

switch (mes) {
    case 1:
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
        break;
    case 9:
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
        alert("Noviembre");
        break;
    case 12:
        alert("Diciembre");
        break;
    default:
        alert("No es valido");
        break;
}





//Ejercicio 5

var letra = prompt("Ingresar letra")

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    alert("Vocal")
} else {
    alert("No es una vocal");
}


//Ejercicio 5 Switch

var letra = prompt("Ingresar letra switch");

switch (letra) {
    case "A":
    case "a":
        alert("Es vocal");
        break;
    case "E":
    case "e":
        alert("Es vocal");
        break;
    case "I":
    case "i":
        alert("Es vocal");
        break;
    case "O":
    case "o":
        alert("Es vocal");
        break;
    case "U":
    case "u":
        alert("Es vocal");
        break;
    default:
        alert("No es una vocal");
        break;
}


//Ejercicio 6 

var x, y, z, total;

if (x > y) {
    total = x - z;
    if (total > y) {
        total = (x + z) * y
    }

    //Ejercicio 6 otra manera de plantearlo

    if (!(total > y)) {
        total = (x + z) * y;
    }

    //Ejercicio 7 

    var sueldo = 40000;
    var empleado;

    if (empleado > 10) {
        var aumento = (sueldo * 10) / 100;
        var neto = sueldo + aumento;
        alert('Su sueldo es de: ' + neto);
    } else if (empleado <= 10 && empleado > 5) {
        aumento = (sueldo * 7) / 100;
        var neto = sueldo + aumento;
        alert('Su sueldo es de: ' + neto);
    } else if (empleado <= 5 && empleado > 3) {
        aumento = (sueldo * 5) / 100;
        var neto = sueldo + aumento;
        alert('Su sueldo es de: ' + neto);
    } else {
        aumento = (sueldo * 3) / 100;
        var neto = sueldo + aumento;
        alert('Su sueldo es de: ' + neto);
    }


    //Ejercicios de lógica pt 2 //

    //Ejercicio 1


    var puntos = 500;
    var producto;
    var canje = 1000;
    var categoria = true;
    var pesos;

    if (puntos >= productos){
        console.log("puede realizar el canje");
    } else if (puntos >= canje * 0.5 && categoria == false){
        pesos = (canje - puntos)/3;
        console.log("Usted podrá completar su canje ocn $" + pesos + ".-");
    } else if (puntos >= canje * 0.5 && premium == true){
        pesos = (canje - puntos)/5;
        console.log("Usted podrá completar su canje &" + pesos + ".-");

    } else {
        console.log("Sus puntos no le alcanzan, usted es pobre");
    }


    //Ejercicio 1 (Otra manera)

    if (puntos >= canje) {
        console.log("Se lleva su producto");
    }