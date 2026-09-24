//Ejemplo 1: Hola mundo JS
function ejemplo1(){
    console.log("Hola mundo");    
}

//ejemplo1();

//Ejemplo 2: Saluda nombre desde variable 
function ejemplo2(){
    const nombre1 = "Octavio";
    console.log(`Hola ${nombre1}`);
}

//ejemplo2();

//Ejemplo 3: Saluda nombre con entrada
function ejemplo3(){
    const nombre2 = window.prompt("Introduce tu nombre: ");
    console.log(`Hola ${nombre2}`);
}

//ejemplo3();

//Ejemplo 4: Primer if
function ejemplo4(){
    const edad = window.prompt("Introduce tu edad: ");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

//ejemplo4();

//Ejemplo 5: Defincion de variables segun su ámbito
//const: constante (su valor no varía)
//let: ambito de bloque
//var: ambio de funcion
function ejemplo5() {
    const edad2 = window.prompt("Introduce tu edad: ");
    if (edad2 >= 18) {
        var mensaje = "Eres mayor de edad";
    } else {
        mensaje = "Eres menor de edad";
    }
    console.log(mensaje);
}

//ejemplo5();

//Ejemplo 6: Valores de cualquier tipo para una variable
function ejemplo6(){
    let auxiliar;
    auxiliar = 10;
    console.log(auxiliar);

    auxiliar = "Mi casa es roja";
    console.log(auxiliar);

    auxiliar = true;
    console.log(auxiliar);

    auxiliar = 1432.12;
    console.log(auxiliar);
}

//ejemplo6();

//Ejemplo 7: Primer bucle
function potencia(base, exponente) {

    let resultado = 1;

    while(exponente > 0){
        resultado *= base
        exponente --;
    }

    return resultado;
}

function ejemplo7(){
    let base = 2;
    let exponente = 3;
    console.log(`El resultado de ${base}^${exponente} es:${potencia(base, exponente)}`);
}

//ejemplo7();

//Ejemplo 8: Mas bucles, solicita numero y muestra el acumulado de 10 en 10.
function suma_diez(num_vueltas){
    let result = 0;

    for(let i = 0; i < num_vueltas; i++){
        result += 10; // result = result + 10;
    }

    return result;
}

function ejemplo8(){
    console.log("Ejercicio 8: " + suma_diez(50));
}

//ejemplo 8();

//Ejemplo 9: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. Da
// error si introduces un numero negativo
function suma_diez_v2(num_vueltas){
    let result = 0;

    if(num_vueltas < 0){
        console.error("El numero de vueltas debe ser positivo");
    }else{
        for(let i = 0; i < num_vueltas; i++){
            result += 10; // result = result + 10;
        }
    }
    

    return result;
}

function ejemplo9(){
    console.log("Ejercicio 8: " + suma_diez_v2(-7));
}

//ejemplo9();

//Ejemplo 10: Calculadora. Pide dos numeros y muestra un menu para que los
//sume, reste, multiplique o divida segun la opción marcada. Valida los datos.

function calculadora(){
    let num1 = parseInt(window.prompt("Introduce el primer operando: "));
    let num2 = parseInt(window.prompt("Introduce el segundo operando: "));

    let salir = false;
    let resultado = 0;

    do{
        let opc = window.prompt("Elija una operación: \n" +
                    "a. Suma \n" + 
                    "b. Resta \n" + 
                    "c. Multiplicación \n" + 
                    "d. División \n" + 
                    "e. Potencia \n" +
                    "f. Salir");

        switch(opc){
            case 'a':
                resultado = num1 + num2;
                console.log(resultado);
                break;
            case 'b':
                resultado = num1 - num2;
                console.log(resultado);
                break;
            case 'c':
                resultado = num1 * num2;
                console.log(resultado);
                break;
            case 'd':
                if(num2 == 0){
                    console.error("No se puede divir por cero");
                } else {
                    resultado = num1 / num2;
                    console.log(resultado);
                }
                break;
            case 'e':
                resultado = potencia(num1, num2);
                console.log(resultado);
                break;
            case 'f':
                salir = true;
                break;
            default:
                console.error("Introduzca un valor correcto");
                break;
        }

    }while(!salir);

}

//calculadora();

//Ejemplo 11: ternario

function ejemplo11(){
    let precio = 150;
    console.log("Precio original: " + precio);

    let edad = parseInt(window.prompt("Introduce tu edad"));

    // if(edad >= 18){
    //     precio = precio*0.80;
    // }else{
    //     precio = precio*0.75;
    // }

    precio = (edad >= 18) ? precio*0.80 : precio*0.75;
    console.log("El precio tras el descuento es: " + precio);
}

//ejemplo11();

//Ejemplo 12: Pide el precio del producto por pantalla. Si es superior a 50 euros
//el envio sale gratis. Si no 5€. El sistema debe mostrar al ppio el precio original
//y al final el precio total
function ejemplo12(){
    let precio = parseInt(window.prompt("Introduce el precio: "));
    console.log("El precio original es: " + precio);

    precio = (precio > 50)? precio: precio+5;
    console.log("El precio final es: " + precio);
}

// ejemplo12();

//Ejemplo 13: Crea un programa que calcule un número aleatorio y pida al usuario 
// números hasta que lo acierte. Al finalizar, si el numero de intentos es superior
//a 10 pintará por pantalla ¡has perdido! y ¡has ganado! si es inferior.

function ejemplo13(){
    let num_aleat = Math.floor(Math.random()*100 + 1); 
    //Temporalmente pinto el resultado para ayudarme a testear la app
    console.log(num_aleat);
    let num_juego;
    let intentos = 0;

    do{
        num_juego = parseInt(window.prompt("Acierta el numero: "));
        intentos++;
    }while(num_juego != num_aleat);

    let texto_final = (intentos>10)? "¡has perdido!": "¡has ganado!";
    console.log(texto_final + " con " + intentos + " intentos");
}

// ejemplo13();

//Ejemplo 14: Pide números hasta introducir el 0 y pinta por pantalla el menor,
//el mayor y la media.
function ejemplo14() {
    let num = parseInt(window.prompt("Numero (0 para salir): "));
    let menor = num;
    let mayor = num;
    let suma = 0;
    let contador = 0;

    while (num != 0) {
        menor = (num < menor) ? num : menor;
        mayor = (num > mayor) ? num : mayor;
        suma += num;
        contador++;
        num = parseInt(window.prompt("Numero (0 para salir): "));
    }

    if (contador > 0) {
        console.log(`Menor: ${menor} \nMayor: ${mayor} \nMedia:${suma/contador}`);
    }
}

ejemplo14();

//Ejemplo 15: Pide una nota numérica y muestra por pantalla si es Suspenso [0-5),
//Suficiente [5-6), Bien [6-7), Notable [7-9) o Sobresaliente [9-10].


//Ejemplo 16: Pide un número por pantalla y muestra el número de dígitos que tiene.


//Ejemplo 17: Calcula el factorial de un número solicitado por pantalla siempre
//y cuando este número sea positivo y par.


//Ejemplo 18: Pide un número por pantalla e imprime el invertido.


//Ejemplo 19: Muestra todos los divisores de un número solicitado por pantalla.


//Ejemplo 20: Número perfecto. Pide un número y determina si es perfecto. Un
//número es perfecto cuando la suma de sus divisores propios sea igual al propio número.



