var cuenta= 2 + 3;

var cuentaNueva=20 + 45;

var totalFinal= cuenta + cuentaNueva;

console.log(totalFinal);

function suma(datoA, datoB){
  var resultado=datoA + datoB;
   return resultado;
}
suma(6,6);

var cuentaFinal=suma(suma(87,65), suma(20,45));

console.log(cuentaFinal);