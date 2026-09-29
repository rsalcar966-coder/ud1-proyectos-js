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

//Ejemplo 8: Mas bucles, solicita numero y muestra el acumulado de 10 en 10.
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

//Ejemplo 9: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. Da
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
    console.log("Ejercicio 8: " + suma_diez_v2(-7));
}

//ejemplo9();

//Ejemplo 10: Calculadora. Pide dos numeros y muestra un menu para que los
//sume, reste, multiplique o divida segun la opción marcada. Valida los datos.

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
                if (num2 == 0) {
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

    } while (!salir);

}

//calculadora();

//Ejemplo 11: ternario

function ejemplo11() {
    let precio = 150;
    console.log("Precio original: " + precio);

    let edad = parseInt(window.prompt("Introduce tu edad"));

    // if(edad >= 18){
    //     precio = precio*0.80;
    // }else{
    //     precio = precio*0.75;
    // }

    precio = (edad >= 18) ? precio * 0.80 : precio * 0.75;
    console.log("El precio tras el descuento es: " + precio);
}

//ejemplo11();

//Ejemplo 12: Pide el precio del producto por pantalla. Si es superior a 50 euros
//el envio sale gratis. Si no 5€. El sistema debe mostrar al ppio el precio original
//y al final el precio total
function ejemplo12() {
    let precio = parseInt(window.prompt("Introduce el precio: "));
    console.log("El precio original es: " + precio);

    precio = (precio > 50) ? precio : precio + 5;
    console.log("El precio final es: " + precio);
}

// ejemplo12();

//Ejemplo 13: Crea un programa que calcule un número aleatorio y pida al usuario 
// números hasta que lo acierte. Al finalizar, si el numero de intentos es superior
//a 10 pintará por pantalla ¡has perdido! y ¡has ganado! si es inferior.

function ejemplo13() {
    let num_aleat = Math.floor(Math.random() * 100 + 1);
    //Temporalmente pinto el resultado para ayudarme a testear la app
    console.log(num_aleat);
    let num_juego;
    let intentos = 0;

    do {
        num_juego = parseInt(window.prompt("Acierta el numero: "));
        intentos++;
    } while (num_juego != num_aleat);

    let texto_final = (intentos > 10) ? "¡has perdido!" : "¡has ganado!";
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
        console.log(`Menor: ${menor} Mayor: ${mayor} Media:${suma / contador}`);
    }
}

// ejemplo14();

//Ejemplo 15: Pide una nota numérica y muestra por pantalla si es Suspenso [0-5),
//Suficiente [5-6), Bien [6-7), Notable [7-9) o Sobresaliente [9-10].
function ejemplo15() {
    let nota = parseFloat(window.prompt("Introduce la nota: "));

    if (nota < 5) {
        console.log("Suspenso");

    } else if (nota < 6) {
        console.log("Suficiente");
    }

    else if (nota < 7) {
        console.log("Bien");
    }

    else if (nota < 9) {
        console.log("Notable");
    }

    else if (nota <= 10) {
        console.log("Sobresaliente");
    }
}

//ejemplo15();


//Ejemplo 16: Pide un número por pantalla y muestra el número de dígitos que tiene.
function ejemplo16() {
    let num = parseInt(window.prompt("Introduce un número: "));
    let cifras = 0;

    do {
        num = num / 10;
        cifras++
    } while (num > 1);

    console.log("El numero introducido tiene" + cifras + "cifras");
}

// ejemplo16();

//Ejemplo 17: Calcula el factorial de un número solicitado por pantalla siempre
//y cuando este número sea positivo y par.
function ejemplo17() {
    let num = parseInt(window.prompt("Introduce un numero: "));
    let fact = 1;

    if (num % 2 == 0 && num >= 0) {
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }

        console.log("El factorial es " + fact);
    }

}

// ejemplo17();

//Ejemplo 18: Pide un número por pantalla e imprime el invertido.
function ejemplo18() {
    let num = parseInt(window.prompt("Introduce un numero: "));

}

// ejemplo18();

//Ejemplo 19: Muestra todos los divisores de un número solicitado por pantalla.
function ejemplo19() {
    let num = parseInt(window.prompt("Introduce un numero: "));

    for(let i = 0; i < num; i++){
        if(num % i == 0){
            console.log(i);
        }
    }
}

// ejemplo19();

//Ejemplo 20: Número perfecto. Pide un número y determina si es perfecto. Un
//número es perfecto cuando la suma de sus divisores propios sea igual al propio número.
function ejemplo20() {
    let num = parseInt(window.prompt("Introduce un numero: "));
    let suma = 0;

    for(let i = 1; i < num; i++){
        if(num % i == 0){
            suma += i;
        }
    }

    if(suma == num){
        console.log("El numero es perfecto");
    } else {
        console.log("El numero no es perfecto");
    }
}

ejemplo20();

//================================================================================================
//================================Boletín 01. Entrenamiento JS====================================
//================================================================================================


// 1. Datos personales: declara variables para almacenar tu nombre, 
// edad y ciudad; muestra por consola una frase con esos datos.
function datosPersonales() {
    const nombre = "Ruben";
    const edad = 30;
    const ciudad = "Madrid";

    console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);
}

datosPersonales();

// 2. Área de un rectángulo: declara las variables necesarias para 
// almacenar la base y la altura, y calcula su área.
function areaRectangulo() {
    const base = 10;
    const altura = 5;
    const area = base * altura;
    console.log("El área del rectángulo es: " + area);
}

areaRectangulo();

// 3. Conversión de temperatura: convierte una temperatura en grados 
// Celsius a grados Fahrenheit y muestra el resultado.
function convertirCelsiusAFahrenheit() {
    const celsius = 25;
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C son " + fahrenheit + "°F");
}

convertirCelsiusAFahrenheit();

// 4. Precio de una compra: calcula el importe total a partir del precio de un producto y el número de unidades compradas.
function calcularPrecioCompra() {
    const precioUnitario = 20;
    const unidades = 3;
    const total = precioUnitario * unidades;
    console.log("El importe total de la compra es: " + total);
}

calcularPrecioCompra();

// 5. Nómina sencilla: calcula una retención del 15 % sobre un salario bruto y muestra el salario neto.
function calcularNomina() {
    const salarioBruto = 2000;
    const retencion = salarioBruto * 0.15;
    const salarioNeto = salarioBruto - retencion;
    console.log("El salario neto es: " + salarioNeto);
}

calcularNomina();

// 6. Conversión de segundos: convierte un número de segundos en horas, minutos y segundos.
function convertirSegundos() {
    const totalSegundos = 3665;
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    console.log("El tiempo es: " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos");
}

convertirSegundos();

// 7. Intercambio de valores: declara dos variables a y b, intercambia sus valores y muestra el resultado antes y después.


// 8. Mayor de edad: indica mediante un mensaje si una persona es mayor o menor de edad según su edad.


// 9. Número positivo, negativo o cero: indica a cuál de estas categorías pertenece un número.


// 10. Número mayor: dados dos números, muestra cuál es mayor o indica si son iguales.


// 11. Calificación: dada una nota entre 0 y 10, indica si es suspenso, aprobado, notable o sobresaliente.


// 12. Año bisiesto: determina si un año es bisiesto.


// 13. Calculadora: dados dos números y un operador (+, -, * o /), realiza la operación con una estructura de selección.


// 14. Números del 1 al 10: muestra por consola los números del 1 al 10 utilizando una estructura de repetición.


// 15. Números pares: muestra todos los números pares comprendidos entre 1 y 100.


// 16. Tabla de multiplicar: dado un número, muestra su tabla de multiplicar del 1 al 10.


// 17. Suma hasta N: calcula la suma de todos los números comprendidos entre 1 y N.


// 18. Factorial: dado un número entero positivo, calcula y muestra su factorial.


// 19. Múltiplos de 3: dado un número N, muestra los múltiplos de 3 comprendidos entre 1 y N.


// 20. Función saludar: crea una función saludar(nombre) que reciba un nombre como parámetro y muestre un saludo personalizado.


// 21. Función para calcular un área: crea calcularArea(base, altura), que reciba la base y la altura de un rectángulo y devuelva su área.


// 22. Función para comprobar la mayoría de edad: crea esMayorDeEdad(edad), que devuelva true si la edad es igual o superior a 18 y false en caso contrario.


// 23. Función para obtener el mayor: crea una función que reciba dos números y devuelva el mayor.


// 24. Función de conversión: crea una función que reciba grados Celsius y devuelva su equivalente en Fahrenheit.


// 25. Calculadora mediante funciones: crea sumar(), restar(), multiplicar() y dividir(); solicita dos números y una operación y utiliza la función correspondiente.


// 26. Validador de notas: crea una función que reciba una nota y devuelva «Suspenso», «Aprobado», «Notable» o «Sobresaliente»; comprueba varias notas.


// 27. Número primo: crea esPrimo(numero), que determine si un número es primo y devuelva true o false.


// 28. Adivina el número: genera un número aleatorio entre 1 y 10; pide intentos al usuario e indica si ha acertado o si el número introducido es mayor o menor.


// 29. Menú de operaciones: crea un menú para sumar, restar, multiplicar, dividir o salir; utiliza funciones, selección y repetición.


// 30. Calculadora avanzada: permite sumar, restar, multiplicar, dividir y calcular potencias; usa una función por operación, repite el menú hasta salir y controla la división entre cero.


// 31. Sistema de calificaciones: solicita cuántas notas se introducirán, recógelas con un bucle, valida que estén entre 0 y 10 y usa funciones para calcular la media y la calificación final.


// 32. Cajero automático: permite consultar el saldo, retirar, ingresar dinero o salir; usa funciones y un menú repetitivo, e impide retirar más del saldo o cantidades no positivas.


// 33. Juego de adivinanza: genera un número aleatorio entre 1 y 100; indica si cada intento es mayor o menor, cuenta los intentos y termina al acertar. Organiza el programa con funciones.


// 34. Conversor de unidades: permite convertir kilómetros a millas, Celsius a Fahrenheit, kilogramos a libras o euros a dólares; usa una función por conversión y repite hasta salir.


// 35. Control de acceso: almacena un usuario y una contraseña, permite un máximo de tres intentos y bloquea el acceso al agotarlos. 
// Crea funciones para comprobar credenciales y mostrar el resultado.


// 36. Facturación de un producto: calcula el importe a partir del precio y la cantidad; aplica 0 % si es menos de 50 €, 5 % entre 50 € y 100 €, 10 % entre 100 € y 200 € y 15 % si supera 200 €, 
// y después calcula el IVA del 21 %. Separa los cálculos en funciones.


// 37. Menú de gestión de una cuenta: permite consultar saldo, ingresar dinero, retirar, comprobar si hay saldo suficiente o salir; 
// implementa cada operación con una función y controla las operaciones no válidas.


// 38. Estadísticas de números: procesa con un bucle una cantidad determinada de números y calcula el mayor, el menor, la suma y la media. No uses arrays; organiza el código con funciones.


// 39. Programa integrador, gestión de notas: permite introducir el nombre del alumno y varias notas, calcular la media, 
// determinar la calificación y mostrar si ha aprobado. Incluye un menú hasta salir y controla entradas incorrectas.


// 40. Reto final, simulador de tienda: permite consultar opciones, introducir precio y cantidad, calcular el subtotal, 
// aplicar descuentos según el importe y calcular el IVA. Incluye un menú hasta finalizar la compra.




