var notas = ["do", "mi", "fa", "sol"];

//Metodos push y pop

var notasPush = notas.push("la", "si");
console.log(notasPush);
console.log(notasPush == notas.length);
//NOTAS POP. (Pop va sin parametros porque siempre elimina el ultimo elemento)

var notaEliminada = notas.pop();
console.log(notas);
console.log(notaEliminada);

// indexOf

var notas = ["do","re","mi","fa","sol"];

console.log(notas.indexOf("re"));

var reIndice = notas.indexOf("re");
var reMuestro = notas[reIndice];
console.log(reMuestro);


//Stock
//Cuando no encuentra retorna -1
if(notas.indexOf("crema") > -1){
	console.log("Tenemos Stock");
}else {
	console.log("No tenemos, vuelva prontos");
}
