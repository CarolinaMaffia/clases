/*var unaEscala;
var presupuesto;
var tiempo;

if (unaEscala <= presupuesto) {
	console.log("viaja a nueva zelanda y llega con el tiempo justo");
}else if (unaEscala > presupuesto){
	console.log ("viaja a nueva zelanda con dos escalas y se queda una semana en un hostel")
}
*/

var unaEscala;
var presupuesto;
var tiempo;


if (unaEscala <= presupuesto && Escala < tiempo){
	console.log ("viaja a nueva zelanda en dos escalas y se queda una semana en un hostel")
}else if (unaEscala > presupuesto && Escala > tiempo){
	console.log("viaja a nueva zelanda con el tiempo justo")
}



