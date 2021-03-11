function persona(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;

}
var persona=new persona("Sergio","Britos");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);