"use strict"

//*** Iterando arreglos con for..in */

var platillos=["ceviche","tacos","pasta"];

for (let i in platillos){
    console.log(platillos[i]);
}

//** FOR EACH ITERANDO ARREGLOS */

var platillos=["ceviche","tacos","pasta"];

platillos.forEach(platillo=>console.log(platillo))
//EL ARREGLO A RECORRER,EL PARAMETRO, EL INDICE, FUNCIÓN ARROW, SE IMPRIME EL INDICE CON EL PARAMETRO.
platillos.forEach((platillo, i)=>console.log(i,"-",platillo))

//** BUSQUEDA EN UN ARREGLO */

var platillos=["ceviche","tacos","pasta"];

var pElegido=platillos.find(platillo=>platillo=="tacos");

console.log(pElegido);

var menu=[
    {nombre:"ceviche",precio: 20, pais:"Noruega"},
    {nombre:"tacos", precio: 45, pais:"Mexico"},
    {nombre:"pasta", precio:78, pais:"Alemania" }
];
//find recorre el arreglo en busca del valor y lo arroja en pantalla
var pElegido=menu.find(platillo=>platillo.nombre=="ceviche"); 
console.log(pElegido);

//** Busqueda de indices de elementos */

var platillos=["ceviche","tacos","pasta"];
var menu=[{nombre:"Ceviche",precio:32, pais:"Peru"}, {nombre:"Tacos",precio:25, pais:"México"},
{nombre:"Pasta",precio:56,pais:"Bulgaria"}]

//findIndex recupera el indice en donde se encuentra el valor
 var numPlatillos=platillos.findIndex(indice=>indice=="tacos");
 console.log("Plantilla número:",numPlatillos);
 var numPlatillos1=menu.findIndex(indice=>indice.nombre=="Ceviche");
 console.log("Plantilla número:",numPlatillos1);

 //** FILTRAR ARREGLOS */

 //filter: Busca más de una concidencia, alternativa a find
 var menu=[{nombre:"Ceviche",precio:32, pais:"Peru"}, {nombre:"Tacos",precio:25, pais:"México"},
{nombre:"Pasta",precio:56,pais:"Peru"}];
var resultado1=null;
var resultado1=menu.find(platillo=>platillo.pais=="Peru");
console.log(resultado1);
var resultado1=menu.filter(platillo=>platillo.pais=="Peru");
console.log(resultado1);
