//Ejemplo 1: Hola mundo JS
function ejemplo1() {
    console.log("Hola mundo");
}

//ejemplo1();

//Ejemplo 2: Saluda nombre desde variable 
function ejemplo2() {
    const nombre1 = "Octavio";
    console.log(`Hola ${nombre1}`);
}

//ejemplo2();

//Ejemplo 3: Saluda nombre con entrada
function ejemplo3() {
    const nombre2 = window.prompt("Introduce tu nombre: ");
    console.log(`Hola ${nombre2}`);
}

//ejemplo3();

//Ejemplo 4: Primer if
function ejemplo4() {
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
function ejemplo6() {
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

    while (exponente > 0) {
        resultado *= base
        exponente--;
    }

    return resultado;
}

function ejemplo7() {
    let base = 2;
    let exponente = 3;
    console.log(`El resultado de ${base}^${exponente} es:${potencia(base, exponente)}`);
}

//ejemplo7();

//Ejercicio 8: Mas bucles, solicita numero y muestra el acumulado de 10 en 10.
function suma_diez(num_vueltas) {
    let result = 0;

    for (let i = 0; i < num_vueltas; i++) {
        result += 10; // result = result + 10;
    }

    return result;
}

function ejemplo8() {
    console.log("Ejercicio 8: " + suma_diez(50));
}

//ejemplo 8();

//Ejercicio 9: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. Da
// error si introduces un numero negativo
function suma_diez_v2(num_vueltas) {
    let result = 0;

    if (num_vueltas < 0) {
        console.error("El numero de vueltas debe ser positivo");
    } else {
        for (let i = 0; i < num_vueltas; i++) {
            result += 10; // result = result + 10;
        }
    }


    return result;
}

function ejemplo9() {
    console.log("Ejercicio 8: " + suma_diez(-7));
}

ejemplo9();

//Ejemplo 10: Calculadora. Pide dos numeros y muestra un menu para que los 
//sume, retse, multiplique o divida segun la opcion marcada. Valida los datos.

function calculadora() {
    let num1 = parseInt(window.prompt("Introduce el primer operando: "));
    let num2 = parseInt(window.prompt("Introduce el segundo operando: "));

    let salir = false;
    let resultado = 0;

    do {
        let opc = window.prompt("Elija una operación: \n" +
            "a. Suma \n" +
            "b. Resta \n" +
            "c. Multiplicación \n" +
            "d. División \n" +
            "e. Potencia \n" +
            "f. Salir");

        switch (opc) {
            case 'a':
                resultado = num1 + num2;
                break;
            case 'b':
                resultado = num1 - num2;
                break;
            case 'c':
                resultado = num1 * num2;
                break;
            case 'd':
                //Validar division por cero
                resultado = num1 / num2;
                break;
            case 'e':
                resultado = potencia(num1, num2);
                break;
            case 'f':
                salir = true;
                break;
        }

        console.log(resultado);

    } while (!salir);

}

calculadora();

//Ejemplo 12: Pide el precio del producto por pantalla. Si es superior a 50 euros
//el envio sale gratis. Si no 5€. El sistema debe mostrar al ppio el precio original
//y al final el precio total

function ejemplo12() {
    let precio = parseInt(window.prompt("Introduce el precio: "));
    console.log("Precio original: " + precio);
   
    precio = (precio > 50) ? precio : precio + 5;
    console.log("Precio total: " + precio);
}

ejemplo12();


//Ejemplo 13: Crea un programa que calcule un numero aleatorio y pida al usuario
// numeros hasta que lo acierte. Al finalizar, si el numero de intentos es superior
//a 10 pintará por pantalla ¡has perdido! y ¡has ganado! si es inferior.

function ejemplo13() {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let numero;

    while (numero !== aleatorio) {
        numero = parseInt(window.prompt("Adivina el número: "));
        intentos++;
    }

    console.log("Número de intentos: " + intentos);
    console.log(intentos > 10 ? "¡Has perdido!" : "¡Has ganado!");
}

ejemplo13();


