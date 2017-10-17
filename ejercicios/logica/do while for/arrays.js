var semana = [50, 35, 105, 40, 25];
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var total = 0;


for (i = 0; i < semana.length; i++) {


    if (semana[i] > 50) {
        console.log(dias[i] + " " + semana[i]);
    }
    total += semana[i];
}
console.log(total);

var promedio = total / semana.length;
console.log(promedio);