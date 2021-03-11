"use strict"

var edad=32;
var cantidad="130";

//Convertir String a dato numerico
var nuevaCantidad=Number(cantidad);
parseInt() //Convierte a número
parseFloat()//Convierte a  coma flotante

//Es lo mismo escribir
var bebida="agua";
var comida='ceviche';

var instruccion="El plato es 'ceviche'";

var edad=32;
//Convertir número  a cadena de texto
var edadtxt=String(edad);

//Dato booleano
var activo=true;
var estado=Boolean(39<3);

//Manejo de fechas
var fecha=new Date(); //tenemos la fecha actual
//fecha.getDay() regresa el número del dia de la semana
//fecha.getDate() regresa el número del dia del mes actual.

//simbolo te permite elegir si alguien está actualmente trabajando en un ambiente de desarrollo
//web o en un ambiente de desarrollo productivo
var simbolo1=Symbol();
var ambiente=Symbol("dev");

//JSON --> jAVASCRIPT OBJECT NOTATION
//Convierte dato a un string en una sola linea, muy parecido al toString de java
//y viceversa pero con el JSON.parse();
var persona=[
  {nombre:"Hugo", twitter:"hugo" },
  {nombre:"Carlos",twitter:"carlos"},
  {nombre: "Garcia",twitter:"garcia"},
  persona
]
var personaJSON=JSON.stringify(persona);
var nuevaPersonaJSON=JSON.parse(personaJSON);

//OPERACIONES ARITMÉTICAS

//suma
var dato1=32;
var dato2=30;

var suma=dato1+dato2;
console.log("RESULTADO DE LA SUMA DE:"+ dato1 + " + " + dato2 + " es: ",suma);
//resta
var resta=dato1-dato2;
console.log("Resultado de la resta de:"+ dato1 +"- " + dato2 + "es:" ,resta);
//multiplicación
var multiplicacion=dato1 * dato2;
console.log("Resultado de la multiplicacion de:" + dato1 + " * " + dato2 + "es:", multiplicacion);
//división
var division=dato1 / dato2;
console.log("Resultado de la división de:"+ dato1 + "/ "+ dato2 + "es:", division);
var modulo=dato1 % dato2;
console.log("Resultado del modulo entre:" +dato1 + "%" +dato2+ "es",modulo );
//Incremento
var incremento=dato1;
incremento++;
console.log("Resultado del incremento es:",incremento);
//Decremento
var decremento=dato1;
decremento--;
console.log("Resultado del decremento es:", decremento);

//OPERACIONES RELACIONALES

var datoA=32;
var datoB=23;

//Menor QUE
var menorQue=datoA < datoB;
console.log("Es " + datoA + "menor que " + datoB + ": " + menorQue);
//Mayor QUE
var mayorQue=datoA > datoB;
console.log("Es " + datoA + "mayor que " + datoB + ": "+ mayorQue);
//MenOR O IGUAL QUE
var menorIgual=datoA <= datoB;
console.log("Es " + datoA + "menor o igual que  " + datoB + ": "+ menorIgual);
//MAYOR O IGUAL QUE
var mayorIgual=datoA >= datoB;
console.log("Es " + datoA + "mayor o igual que " + datoB + ": "+ mayorIgual);
//IGUAL QUE
var igualQue=datoA == datoB;
console.log("Es " + datoA + "igual que " + datoB + ": "+ igualQue);
//NO ES IGUAL O ES DIFERENTE DE
var diferenteDe= datoA != datoB;
console.log("Es " + datoA + "diferente de " + datoB + ": "+ diferenteDe)  ;

//OPERADORES LÓGICOS

var and=(datoA>10 && datoB>20)
console.log("El resultado de la evaluación AND es: " + and);
var or=(datoA >10 || datoB>20)
console.log("El resultado de la evaluación OR es: "+ or);
var negacion=!(datoA>10)
console.log("El resultado de la evaluación NOT es: "+ negacion);

//Restar y asignar
var menosIgual=10;
menosIgual-=datoA;
console.log("El resultado de la asignación -= es: " + menosIgual);
//Multiplicar y asignar
var porIgual=10;
porIgual*=datoA;
console.log("El resultado de la asignación *= es: " + porIgual);
//Division y asignar
var dividirIgual=10;
dividirIgual /= datoA;
console.log("El resultado de dividir /= es: " + dividirIgual);

//OPERADOR NEGATIVO
var datoA=10;
var negar=-datoA;   
console.log("El número: " + datoA + "en negativo es: "+ negar);

var nombre="Angela";
var apellido="Torres";
//Concatenación de números
var concatNumeros=datoA + datoB;
console.log("Los números "+ datoA + " y " + datoB + " su suma da resultado: ",concatNumeros);
//Concatenación de cadena de texto
var concatTexto=nombre + " " + apellido;
console.log("Los números "+ nombre + " y " + apellido + " su union da resultado: ",concatTexto);
//Concatenación de números como texto
var concatNumText="2" + "8";
console.log("Los números en formato caracter  su union da resultado: ",concatNumText);
//Concatenación texto y números
var concatTextoNum=datoA  + "5";
console.log("El número "+ datoA +  " su union da resultado: ",concatTextoNum);

//OPERADOR TERNARIO O CONDICIONAL

var datoA=43;
var datoB=24;

//Condición ? TRUE : FALSE
var resultadoTernario= datoA > datoB ? "Si es mayor":"No es mayor";
console.log("El resultado de la condición ternaria es:"+ resultadoTernario);

//operador de tipo de datos typeof
var num=35;
var nom="Miguel";
var activ=true;
var persona1={
   edad:32,
   deporte:"Correr"
}//Objeto

console.log(typeof num);
console.log(typeof nom);
console.log(typeof activ);
console.log(typeof persona1);
console.log(typeof persona1.edad);
console.log(typeof persona1.deporte);