var planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno", "Plutón"];

/* METODOS DE ARRAYS 
Matriz: Conjunto de arrays
console.log(planetas.push("aslkdsk")); --> Te devuelve un valor númerico (I) Devuelve cantidad de elementos, nyuevo tamaño del array
planetas pop ("sadkñlskd")  Para eliminar el último elemento de un array. No recibe parametros
*/

console.log(planetas.push(["ofiuco", "luna"])); //--> Un array solo va a ocupar un solo espacio de los indices. 
console.log (planetas[9][1]); //--> Muestra la ubicación de la LUNA en los indices de los ANGLE_instanced_arrays. 9 [i de el segundo array] 1[indice de Luna];
/* Para destruir ela rray:  
var arrayDestroyed = planetas.pop();
console.log(planetas);
console.log(arrayDestroyed); */

var lunaDestroyed = planetas[9].pop();
console.log("Saco Luna: ",lunaDestroyed);

// COMO CORTAR UN FOR DE FORMA FEA (?)  
for (var i = 0; i < planetas.length; i++){
    if (planetas[i] === "tierra"){
        break;
    }
    console.log(planetas[i]);
}


//FOR EACH   --> Recorre todo el array y recibe como parametro una funcion SIEMPRE FUNCION


planetas.forEach(function (planeta) {  // SE CREA UNA VARIABLE LOCAL (PLANETA) EN LA FUNCION 
    console.log("USo el for Each"); // ESA VARIABLE LOCAL HACE QUE SE MUESTRE POR LA CANTIDAD DE INDICES DEL ARRAY EL CONSOLE.LOG
});


planetas.forEach(function (planeta,indice)) {  //En la función, planeta devuelve los del array y el segundo parametro de una funcion siempre te devuelve el indice.
    console.log("El Planeta es " + planeta, "y es ubicado en " + indice);

});


EcmaEscript



