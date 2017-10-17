var prom = 0;
var suma = 0;
var n = 50;

for (var i = 1; i <= 50; i++) {
    suma = suma + i;
}
prom = suma / n;
console.log(prom);

//PROM CON WHILE


var i= 1;
var total=0;
var prom=0;

while(i<=50){
	total = total+i;
	i++;
}
console.log ("el total es " +total);
prom = total/50;
console.log("El promedio es "+ prom);