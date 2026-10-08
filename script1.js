// //1. Definiciones clásicas
// //------------------------
// function suma_clasica(a, b){
//     return a + b;
// }

// function producto_clasico(a, b){
//     return a*b;
// }

// //En result se almacena el RESULTADO de la funcion
// let result = suma_clasica(10,50);
// console.log(result);

// //DEFINICION de la funcion
// console.log(suma_clasica);


// //2. Definiciónes funcionales
// //----------------------------
// const suma_flecha = (a, b) => a + b;
// const producto_flecha = (a, b) => a * b;

// //En result se almacena el RESULTADO de la funcion
// let result2 = suma_flecha(10,50);
// console.log(result2);

// //DEFINICION de la funcion
// console.log(suma_flecha);

// //(8*5) + 10 (Sin callback. Ejecutando el resultados de las funciones en orden natural)
// console.log(suma_clasica(producto_clasico(8,5), 10));
// console.log(suma_flecha(producto_flecha(8,5),10));

// //3. Definimos operacion con un parametro callback (Para alterar el orden ejecución)
// // ------------------------------------------------

// function operacion(callback, a,b,c){
//     //Sabemos que al resultado de calback se le suma c.
//     //Pero aún no sabemos que hace.
//     return callback(a,b) + c;
// }

// //(8+5) + 10 (Llamando a la definición porque ya existe la suma)
// console.log("Operacion (8+5) + 10: " + operacion(suma_flecha, 8,5,10));

// //(20/10)+9 (Definiendolo directamente en la llamada porque no existe la division)
// console.log("Operacion (8+5) + 10: " + operacion((a,b)=>a/b,20,10,9));

// //4. Funciones callback predefinidas:

// //Tiemout (Ejecuta alguna definición pasado N segundos)
// window.setTimeout(()=>console.log("HOLA"),2000);

// //Set Interval (Ejecuta alguna defiicion cada N segundos)
// setInterval(()=>{
//     const horas = new Date().getHours();
//     const minutos = new Date().getMinutes();
//     const segundos = new Date().getSeconds();

//     window.document.body.textContent= `${horas}:${minutos}:${segundos}`;
// }, 1000);

// //Filter (Filtra un array dado una definición e función que devuelve true/false)
// let nuevo = ["Paco", "Luis","Sara"].filter((persona)=>persona.charAt(0)=='P');
// console.log(nuevo);


// -------------------------------------------------------


//Ejercicio 5

//Introduce por teclado un numero de segundos.
//Introduce un mensaje.
//Dicho mensaje debe aparecer por alert transcurrido esos segundos.

function ejercicio5(){
    const segundos = parseInt(window.prompt("Introduce el numero de segundos: "));
    const mensaje = window.prompt("Introduce un mensaje");
    setTimeout(()=>window.alert(mensaje), segundos*1000);
}

// ejercicio5();

//Ejercicio 6
//Modifica el ejercicio anterior para que mientras muestra el
//mensaje se muestre por consola la cuenta atrás antes de
//pintarse el mensaje.
//setInterval() + clearInterval().

function ejercicio6(){
    let segundos = parseInt(window.prompt("Introduce el numero de segundos: "));
    const mensaje = window.prompt("Introduce un mensaje");

    const intervalo = setInterval(()=>{
        if(segundos>0){
            console.log(segundos);
            segundos--;
        }
        else{
            window.alert(mensaje);
            clearInterval(intervalo);
        }
    
    }, 1000)
}

// ejercicio6();

// Ejerecicio 3
// Pide por promt una URL y redirige la página a la misma.
function ejercicio3(){
    const url = window.prompt("Introduce una URL");
    window.location.href = url;
}

// ejercicio3();


//Ejercicio 4
//Muestra un menú con varias opciones.
//a. Ir atrás 
//b. Ir hacia delante
//c. Ir a una dirección (entonces la solicitará)
//d. Mostrar la dirección actual
//e. Actualizar página
//f. No hacer nada. Salir
function ejercicio4(){
    let opcion = window.prompt("Menu de opciones:\n a. Ir atrás \n b. Ir hacia delante \n c. Ir a una dirección \n d. Mostrar la dirección actual \n e. Actualizar página \n f. No hacer nada. Salir");
}

// ejercicio4();


//Ejercicio 5 
//Al cargar la pagina consulta el nombre de usuario (username)
//almacenando en el localStorage. Si existe saluda, si no lo pide.
function ejercicio5(){
    let username = localStorage.getItem("username");

    if (username) {
        alert("Hola, " + username);
    } else {
        username = prompt("Introduce nombre de usuario:");
        localStorage.setItem("username", username);
    }
}

ejercicio5();

//Ejercicio 6
//Contador de recargas. Cada vez que el usuario abra la página, 
//acceda o actualice debe incrementar el numero de visitas.
function ejercicio6(){
    
}

ejercicio6();