"use strict"
//**** Creando mi primer arrelgo */

var primerArreglo=["Ceviche","tacos","pasta"];

var bebidas=new Array("jamaica","pozol","chicha morada");

console.log(Array.isArray(primerArreglo),bebidas);

//** Medir y acceder a un arreglo */

console.log("En el arreglo hay:"+primerArreglo.length + "productos");

var producto=primerArreglo.length-1; //Muestra la cantidad siempre contando desde 0
console.log(producto);

//****  Arreglos multidimensionales | Arreglo de Arreglos */

var primerArreglo=["Ceviche","tacos","pasta"];
                                                            //SEGUNDA DIMENSION
var bebidas=new Array("jamaica","pozol","chicha morada");

var menu=[primerArreglo,bebidas];  //PRIMERA DIMENSIÓN

console.log(menu[0][2]);


//** OPERACIONES BÁSICAS DE UN ARREGLO */

var bebidas=new Array("jamaica","pozol","chicha morada");
console.log("Antes", bebidas);

bebidas.push("daikiri"); //AGREGA PRODUCTOS AL FINAL DEL ARREGLO


bebidas.pop();  //Saca elemento de al final del arreglo
console.log("Despues",bebidas);

var cadena=bebidas.join(); //CONVIERTE A CADENA
console.log("CONVERTIDO A STRING", cadena);

//** gENERACION DE ARREGLOS split() from() y of() */

// split()
var bebida1="ceviche,tacos,pasta";
console.log(bebida1);
var res=bebida1.split(",");
console.log(res);
//--Array.from()

var platilloHTML=Array.from(document.querySelectorAll(".platillos p"));//Lo que hace es convertir a un
//arreglo formal
var platillosmep=platilloHTML.map(opplatillo=>opplatillo.textContent); // Creamos parámetro
//como referencia para traer lo que dice en el contenido del texto.
console.log(platillosmep); //Finalmente lo convierte en un arreglo formal

//Array.of()
var platillos=Array.of("ceviche","tacos","pasta");//lo convierte a arreglo formal
console.log(platillos);

//Ordenando un array

var platillo2=["ceviche","tacos","pastas"];
console.log(platillo2);
platillo2.sort() //ORDEN ALFABETICO
console.log("Ordenado: ", platillo2);
platillo2.reverse();   //ORDEN DEL FINAL AL PRIMERO
console.log("De final al primero: ", platillo2)

//DESTRUCTURACIÓN DE ARREGLOS

var platillos=["ceviche","tacos","pasta"];

var [platillo1,platillo2,platillo3]=platillos

console.log(platillo1,platillo2,platillo3);