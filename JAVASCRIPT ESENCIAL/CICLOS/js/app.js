///******** CICLO FOR ******************
var producto=5;
for (let contador = 0; contador < producto; contador++) {
     console.log("Producto # " + contador);
  debugger;
}

//****** CICLO WHILE */

var productos=5;

while(productos>0){
  console.log("Producto vendido");
  productos--;
  debugger;
}

//*****CICLO DO..WHILE */
do{
  console.log("Producto vendido");
  productos--;
  debugger;
}while(productos>=1)

"use strict"


//************************* CONDICION IF-ELSE-IF************************** */
var datoA=32;
var datoB=53;
var resultado1="Sin datos";
if (datoA < datoB){
  resultado1="SI cumple condición";
}else if (datoA == datoB){
  resultado1="Segunda evaluacion verdadera";
}else if (datoA == datoB){
  resultado1="Tercera condicion verdadera";
}else {
  resultado1="NO cumple condicion";
}
console.log("El resultado de la evaluación if-else-if es: " + resultado1);


//*********** Estructura SWITCH******************* */
var edad=32;
var resul="";
switch (edad){
  case  12:
        resul="La edad es 12";
  break;
  case 32:
       resul="La edad es de 32";
  break;
  case 45:
       resul="La edad es de 45";
  break;
  default:
       resul="La edad no coincide";
  break;

}
console.log("El resultado de la evaluacion es: " + resul);

//Evaluacion con cadena de texto es sensitive con mayusculas y minusculas

var producto="TV";
var final="";

switch (producto) {
  case "TV":
       final="El producto es TV";
  
    break;
  case "Telefono":
    final="El producto es telefono";
  break;
  default:
    final="No es un producto"
    break;
}
console.log("El resultado final es: "+ final);