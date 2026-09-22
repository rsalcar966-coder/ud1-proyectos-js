//Ejemplo 1
console.log("Hola mundo");

//Ejemplo 2
var nombre1 = "Ruben";
console.log("Hola " + nombre1);

//Ejemplo 3
var nombre2 = window.prompt("Introduce tu nombre: ");
console.log("Hola " + nombre2);

//Ejemplo 4
var edad = window.prompt("Introduce tu edad: ");
if (edad >= 18) {
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

//Ejemplo 5: Definicon de variables segun su ambito

//Definicion de variables: let var const 
//let: ambito de bloque
//var: ambito de funcion
//const: constante (su valor no puede cambiar) (se utiliza siempre que se pueda)

//Definicion de funcion
function cacularEdad(){
    const edad = window.prompt("Introduce tu edad: ");  
if (edad >= 18) {
    var mensaje = "Eres mayor de edad";
}else{
    var mensaje = "Eres menor de edad";
} 
console.log(mensaje);
} 

//Llamada a la funcion
cacularEdad();
 
//Ejemplo 6
let auxiliar;
auxiliar = 10;
console.log(auxiliar);

auxiliar = "Mi casa es roja";
console.log(auxiliar);

auxiliar = true;
console.log(auxiliar);

auxiliar = 1432.12;
console.log(auxiliar);


//Ejemplo 7 Primer bucle
function potencia(base, exponente){
    let resultado = 1;  
}