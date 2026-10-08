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

// ejemplo20();

//================================================================================================
//================================Boletín 01. Entrenamiento JS====================================
//================================================================================================


// 1. Datos personales: declara variables para almacenar tu nombre, 
// edad y ciudad; muestra por consola una frase con esos datos.
// Se declaran tres constantes con los datos personales y se muestra un mensaje
// concatenando las variables con el operador + dentro de un console.log.
function datosPersonales() {
    const nombre = "Ruben";
    const edad = 30;
    const ciudad = "Madrid";

    console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);
}

// datosPersonales();

// 2. Área de un rectángulo: declara las variables necesarias para 
// almacenar la base y la altura, y calcula su área.
// Se multiplica base por altura para obtener el área (fórmula: A = base × altura)
// y se muestra el resultado por consola.
function areaRectangulo() {
    const base = 10;
    const altura = 5;
    const area = base * altura;
    console.log("El área del rectángulo es: " + area);
}

// areaRectangulo();

// 3. Conversión de temperatura: convierte una temperatura en grados 
// Celsius a grados Fahrenheit y muestra el resultado.
// La fórmula de conversión es: F = (C × 9/5) + 32
// Se aplica directamente sobre la variable celsius y se muestra el resultado.
function convertirCelsiusAFahrenheit() {
    const celsius = 25;
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C son " + fahrenheit + "°F");
}

// convertirCelsiusAFahrenheit();

// 4. Precio de una compra: calcula el importe total a partir del precio de un producto y el número de unidades compradas.
// El total se obtiene multiplicando precioUnitario × unidades y se muestra por consola.
function calcularPrecioCompra() {
    const precioUnitario = 20;
    const unidades = 3;
    const total = precioUnitario * unidades;
    console.log("El importe total de la compra es: " + total);
}

// calcularPrecioCompra();

// 5. Nómina sencilla: calcula una retención del 15 % sobre un salario bruto y muestra el salario neto.
// Se calcula la retención multiplicando el salario por 0.15 y se resta al bruto
// para obtener el salario neto (neto = bruto - retención).
function calcularNomina() {
    const salarioBruto = 2000;
    const retencion = salarioBruto * 0.15;
    const salarioNeto = salarioBruto - retencion;
    console.log("El salario neto es: " + salarioNeto);
}

// calcularNomina();

// 6. Conversión de segundos: convierte un número de segundos en horas, minutos y segundos.
// Las horas se obtienen dividiendo entre 3600 (Math.floor para entero),
// los minutos con el resto de dividir entre 3600 y luego entre 60,
// y los segundos son el módulo de dividir entre 60.
function convertirSegundos() {
    const totalSegundos = 3665;
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    console.log("El tiempo es: " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos");
}

// convertirSegundos();

// 7. Intercambio de valores: declara dos variables a y b, intercambia sus valores y muestra el resultado antes y después.
// Para intercambiar sin perder ningún valor se usa una variable auxiliar (temp):
// temp = a, a = b, b = temp.
function intercambiarValores() {
    let a = 5;
    let b = 10;
    console.log("Antes del intercambio: a = " + a + ", b = " + b);
    let temp = a;
    a = b;
    b = temp;
    console.log("Después del intercambio: a = " + a + ", b = " + b);
}

// intercambiarValores();

// 8. Mayor de edad: indica mediante un mensaje si una persona es mayor o menor de edad según su edad.
// Se usa un if/else comparando la edad con 18: si es >= 18 es mayor, si no es menor.
function verificarMayorEdad() {
    const edad = 20;
    if (edad >= 18) {
        console.log("La persona es mayor de edad.");
    } else {
        console.log("La persona es menor de edad.");
    }
}
// verificarMayorEdad();

// 9. Número positivo, negativo o cero: indica a cuál de estas categorías pertenece un número.
// Se usa un if/else if/else: si el número > 0 es positivo, si < 0 es negativo,
// y en caso contrario es cero.
function verificarNumero() {
    const numero = -5;
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}
// verificarNumero();

// 10. Número mayor: dados dos números, muestra cuál es mayor o indica si son iguales.
// Se comparan num1 y num2 con if/else if/else: mayor el primero, mayor el segundo,
// o iguales si ninguna condición se cumple.
function compararNumeros() {
    const num1 = 10;
    const num2 = 20;
    if (num1 > num2) {
        console.log("El primer número es mayor.");
    } else if (num2 > num1) {
        console.log("El segundo número es mayor.");
    } else {
        console.log("Los números son iguales.");
    }
}
// compararNumeros();

// 11. Calificación: dada una nota entre 0 y 10, indica si es suspenso, aprobado, notable o sobresaliente.
// Se encadenan varios else if para cubrir los rangos: <5 suspenso, <7 aprobado,
// <9 notable y el resto sobresaliente.
function calificarNota() {
    const nota = 8;
    if (nota < 5) {
        console.log("La nota es suspenso.");
    } else if (nota < 7) {
        console.log("La nota es aprobado.");
    } else if (nota < 9) {
        console.log("La nota es notable.");
    } else {
        console.log("La nota es sobresaliente.");
    }
}
// calificarNota();

// 12. Año bisiesto: determina si un año es bisiesto.
// Un año es bisiesto si es divisible entre 4 Y (no divisible entre 100 O divisible entre 400).
// Se comprueba con el operador módulo (%) y operadores lógicos && y ||.
function esBisiesto() {
    const anio = 2024;
    if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
        console.log("El año es bisiesto.");
    } else {
        console.log("El año no es bisiesto.");
    }
}
// esBisiesto();

// 13. Calculadora: dados dos números y un operador (+, -, * o /), realiza la operación con una estructura de selección.
// Se usa un switch sobre la variable operador para ejecutar la operación correcta.
// En la división se controla que el divisor no sea cero antes de operar.
function calculadoraBasica() {
    const num1 = 10;
    const num2 = 5;
    const operador = '+';
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("Error: División por cero.");
                return;
            }
            break;
        default:
            console.log("Error: Operador no válido.");
            return;
    }

    console.log("El resultado es:", resultado);
}
// calculadoraBasica();

// 14. Números del 1 al 10: muestra por consola los números del 1 al 10 utilizando una estructura de repetición.
// Se usa un bucle for que empieza en 1, termina en 10 (condición i <= 10)
// e imprime cada valor de i en cada iteración.
function mostrarNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// mostrarNumeros();

// 15. Números pares: muestra todos los números pares comprendidos entre 1 y 100.
// Se recorre del 1 al 100 con un for y dentro se comprueba si i % 2 === 0
// (resto de dividir entre 2 igual a cero significa que es par).
function mostrarNumerosPares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// mostrarNumerosPares();

// 16. Tabla de multiplicar: dado un número, muestra su tabla de multiplicar del 1 al 10.
// Se usa un for del 1 al 10 y en cada iteración se muestra: numero x i = resultado,
// usando un template literal para formatear la salida.
function mostrarTablaMultiplicar() {
    const numero = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
// mostrarTablaMultiplicar();

// 17. Suma hasta N: calcula la suma de todos los números comprendidos entre 1 y N.
// Se inicializa suma a 0 y con un for se va acumulando cada valor de i
// desde 1 hasta N (suma += i en cada vuelta).
function sumaHastaN() {
    const N = 10;
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    console.log("La suma de los números del 1 al", N, "es:", suma);
}
// sumaHastaN();

// 18. Factorial: dado un número entero positivo, calcula y muestra su factorial.
// El factorial de N es el producto de todos los enteros del 1 al N (N! = 1×2×3×...×N).
// Se usa un for multiplicando la variable factorial por cada i (factorial *= i).
function calcularFactorial() {
    const numero = 5;
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log("El factorial de", numero, "es:", factorial);
}
// calcularFactorial();

// 19. Múltiplos de 3: dado un número N, muestra los múltiplos de 3 comprendidos entre 1 y N.
// Se recorre con un for del 1 al N y se comprueba si i % 3 === 0
// (divisible entre 3 sin resto) para imprimirlo.
function mostrarMultiplosDe3() {
    const N = 30;
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
// mostrarMultiplosDe3();

// 20. Función saludar: crea una función saludar(nombre) que reciba un nombre como parámetro y muestre un saludo personalizado.
// La función recibe el parámetro nombre y lo inserta en un template literal
// para formar el saludo personalizado con console.log.
function saludar(nombre) {
    console.log(`Hola ${nombre}, ¡bienvenido!`);
}
// saludar("Ruben");

// 21. Función para calcular un área: crea calcularArea(base, altura), que reciba la base y la altura de un rectángulo y devuelva su área.
// La función recibe dos parámetros y retorna directamente su producto (base * altura)
// usando la palabra clave return.
function calcularArea(base, altura) {
    return base * altura;
}
// console.log(calcularArea(5, 10));

// 22. Función para comprobar la mayoría de edad: crea esMayorDeEdad(edad), que devuelva true si la edad es igual o superior a 18 y false en caso contrario.
// La función usa return con una expresión booleana: edad >= 18 devuelve
// directamente true o false sin necesidad de un if.
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// 23. Función para obtener el mayor: crea una función que reciba dos números y devuelva el mayor.
// Se usa un if/else: si num1 > num2 se retorna num1, en caso contrario se retorna num2.
// También podría resolverse con el operador ternario: return num1 > num2 ? num1 : num2.
function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 24. Función de conversión: crea una función que reciba grados Celsius y devuelva su equivalente en Fahrenheit.
// Se aplica la fórmula F = (C × 9/5) + 32 directamente en el return,
// de forma que la función recibe Celsius y devuelve Fahrenheit.
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 25. Calculadora mediante funciones: crea sumar(), restar(), multiplicar() y dividir(); solicita dos números y una operación y utiliza la función correspondiente.
// Cada operación tiene su propia función que recibe dos parámetros y retorna el resultado.
// En dividir() se controla la división por cero devolviendo "Error" en ese caso.
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

// 26. Validador de notas: crea una función que reciba una nota y devuelva «Suspenso», «Aprobado», «Notable» o «Sobresaliente»; comprueba varias notas.
// Se encadenan if/else if para cubrir los rangos de notas y se usa return
// para devolver la cadena de texto con la calificación correspondiente.
function validarNota(nota) {
    if (nota < 5) {
        return "Suspenso";
    } else if (nota < 7) {
        return "Aprobado";
    } else if (nota < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

// 27. Número primo: crea esPrimo(numero), que determine si un número es primo y devuelva true o false.
// Un número primo solo es divisible entre 1 y él mismo.
// Se descarta el caso <= 1, luego se prueba si algún número entre 2 y numero-1
// lo divide exactamente (módulo 0). Si lo hace, no es primo.
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// 28. Adivina el número: genera un número aleatorio entre 1 y 10; pide intentos al usuario e indica si ha acertado o si el número introducido es mayor o menor.
// Math.floor(Math.random() * 10) + 1 genera el número aleatorio entre 1 y 10.
// Se compara el intento con el número aleatorio con un if/else if/else para dar pistas.
function adivinaNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const intento = parseInt(window.prompt("Adivina un número entre 1 y 10: "));

    if (intento === numeroAleatorio) {
        console.log("¡Has acertado!");
    } else if (intento < numeroAleatorio) {
        console.log("El número es mayor.");
    } else {
        console.log("El número es menor.");
    }
}

// 29. Menú de operaciones: crea un menú para sumar, restar, multiplicar, dividir o salir; utiliza funciones, selección y repetición.
// Se usa un do/while para repetir el menú hasta elegir salir (opción 5).
// Cada opción pide dos números al usuario y llama a la función correspondiente
// (sumar, restar, multiplicar, dividir) definidas en el ejercicio 25.
function menuOperaciones() {
    let opcion = "";

    do {
        opcion = window.prompt("1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

        if (opcion === "1") {
            const num1 = parseFloat(window.prompt("Introduce el primer número: "));
            const num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            console.log("La suma es: " + sumar(num1, num2));
        } else if (opcion === "2") {
            const num1 = parseFloat(window.prompt("Introduce el primer número: "));
            const num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            console.log("La resta es: " + restar(num1, num2));
        } else if (opcion === "3") {
            const num1 = parseFloat(window.prompt("Introduce el primer número: "));
            const num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            console.log("La multiplicación es: " + multiplicar(num1, num2));
        } else if (opcion === "4") {
            const num1 = parseFloat(window.prompt("Introduce el primer número: "));
            const num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            console.log("La división es: " + dividir(num1, num2));
        } else if (opcion === "5") {
            console.log("Adiós");
        } else {
            console.log("Opción no válida");
        }
    } while (opcion !== "5");
}

// 30. Calculadora avanzada: permite sumar, restar, multiplicar, dividir y calcular potencias; usa una función por operación, repite el menú hasta salir y controla la división entre cero.
// Se piden los dos números y el operador simbólico (+, -, *, /, ^) con un prompt.
// Un switch selecciona la función a ejecutar. Para ^ se usa la función potencia()
// que multiplica la base por sí misma tantas veces como indica el exponente.
function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
    }

    return resultado;
}

function calculadoraAvanzada() {
    let num1 = parseFloat(window.prompt("Introduce el primer número: "));
    let num2 = parseFloat(window.prompt("Introduce el segundo número: "));
    let operacion = window.prompt("Elige la operación (+, -, *, /, ^): ");

    switch (operacion) {
        case "+":
            console.log("Resultado: " + sumar(num1, num2));
            break;
        case "-":
            console.log("Resultado: " + restar(num1, num2));
            break;
        case "*":
            console.log("Resultado: " + multiplicar(num1, num2));
            break;
        case "/":
            if (num2 === 0) {
                console.log("No se puede dividir por cero");
            } else {
                console.log("Resultado: " + dividir(num1, num2));
            }
            break;
        case "^":
            console.log("Resultado: " + potencia(num1, num2));
            break;
        default:
            console.log("Operación no válida");
            break;
    }
}

// 31. Sistema de calificaciones: solicita cuántas notas se introducirán, recógelas con un bucle, valida que estén entre 0 y 10 y usa funciones para calcular la media y la calificación final.
// Las notas se guardan en un array usando push(). Un while interior valida que cada nota
// esté entre 0 y 10 antes de agregarla. La función mediaNotas() suma los elementos
// del array y divide entre su longitud. Luego se llama a validarNota() para la calificación.
function mediaNotas(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma / notas.length;
}

function sistemaCalificaciones() {
    const cantidad = parseInt(window.prompt("¿Cuántas notas quieres introducir? "));
    let notas = [];

    for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(window.prompt("Introduce la nota " + (i + 1) + ": "));

        while (nota < 0 || nota > 10) {
            console.log("La nota debe estar entre 0 y 10");
            nota = parseFloat(window.prompt("Introduce la nota " + (i + 1) + ": "));
        }

        notas.push(nota);
    }

    const resultado = mediaNotas(notas);
    console.log("La media es: " + resultado);
    console.log(validarNota(resultado));
}

// 32. Cajero automático: permite consultar el saldo, retirar, ingresar dinero o salir; usa funciones y un menú repetitivo, e impide retirar más del saldo o cantidades no positivas.
// El saldo inicial es 1000€. Un do/while repite el menú hasta elegir salir.
// Al ingresar se valida que la cantidad sea > 0; al retirar se comprueba además
// que no supere el saldo disponible para evitar números negativos.
function cajeroAutomatico() {
    let saldo = 1000;
    let opcion = "";

    do {
        opcion = window.prompt("1. Consultar saldo\n2. Ingresar dinero\n3. Retirar dinero\n4. Salir");

        if (opcion === "1") {
            console.log("Tu saldo es: " + saldo + "€");
        } else if (opcion === "2") {
            const cantidad = parseFloat(window.prompt("¿Cuánto quieres ingresar? "));
            if (cantidad > 0) {
                saldo += cantidad;
            } else {
                console.log("Cantidad incorrecta");
            }
        } else if (opcion === "3") {
            const cantidad = parseFloat(window.prompt("¿Cuánto quieres retirar? "));
            if (cantidad > 0 && cantidad <= saldo) {
                saldo -= cantidad;
            } else {
                console.log("No puedes retirar esa cantidad");
            }
        } else if (opcion === "4") {
            console.log("Gracias por usar el cajero");
        } else {
            console.log("Opción inválida");
        }
    } while (opcion !== "4");
}

// 33. Juego de adivinanza: genera un número aleatorio entre 1 y 100; indica si cada intento es mayor o menor, cuenta los intentos y termina al acertar. Organiza el programa con funciones.
// El número secreto se genera con Math.floor(Math.random() * 100) + 1.
// Un do/while pide intentos al usuario y muestra si el número es mayor o menor.
// El contador se incrementa en cada vuelta y se muestra al acertar.
function juegoAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intento = 0;
    let contador = 0;

    do {
        intento = parseInt(window.prompt("Adivina el número entre 1 y 100: "));
        contador++;

        if (intento < numeroSecreto) {
            console.log("Es mayor");
        } else if (intento > numeroSecreto) {
            console.log("Es menor");
        } else {
            console.log("¡Has acertado! En " + contador + " intentos");
        }
    } while (intento !== numeroSecreto);
}

// 34. Conversor de unidades: permite convertir kilómetros a millas, Celsius a Fahrenheit, kilogramos a libras o euros a dólares; usa una función por conversión y repite hasta salir.
// Cada conversión tiene su propia función con la fórmula correspondiente.
// Un do/while presenta el menú y llama a la función adecuada según la opción elegida.
// El bucle se repite hasta que el usuario elige salir (opción 5).
function kmAMillas(km) {
    return km * 0.621;
}

function celsiusAFahrenheit2(celsius) {
    return (celsius * 9 / 5) + 32;
}

function kgALibras(kg) {
    return kg * 2.204;
}

function eurosADolares(euros) {
    return euros * 1.08;
}

function conversorUnidades() {
    let opcion = "";

    do {
        opcion = window.prompt("1. Km a millas\n2. C° a F°\n3. Kg a libras\n4. € a $\n5. Salir");

        if (opcion === "1") {
            const km = parseFloat(window.prompt("Introduce los kilómetros: "));
            console.log(km + " km son " + kmAMillas(km) + " millas");
        } else if (opcion === "2") {
            const c = parseFloat(window.prompt("Introduce la temperatura en grados Celsius: "));
            console.log(c + "°C son " + celsiusAFahrenheit2(c) + "°F");
        } else if (opcion === "3") {
            const kg = parseFloat(window.prompt("Introduce los kilogramos: "));
            console.log(kg + " kg son " + kgALibras(kg) + " libras");
        } else if (opcion === "4") {
            const euros = parseFloat(window.prompt("Introduce los euros: "));
            console.log(euros + "€ son " + eurosADolares(euros) + "$");
        } else if (opcion === "5") {
            console.log("Fin del conversor");
        } else {
            console.log("Opción no válida");
        }
    } while (opcion !== "5");
}

// 35. Control de acceso: almacena un usuario y una contraseña, permite un máximo de tres intentos y bloquea el acceso al agotarlos.
// Crea funciones para comprobar credenciales y mostrar el resultado.
// Se usa un while con un contador de intentos (máximo 3). Si las credenciales coinciden
// se muestra acceso permitido y se sale con break. Si se agotan los 3 intentos
// se muestra que la cuenta está bloqueada.
function controlAcceso() {
    const usuarioValido = "admin";
    const passwordValido = "1234";
    let intentos = 0;

    while (intentos < 3) {
        const usuario = window.prompt("Introduce tu usuario: ");
        const password = window.prompt("Introduce tu contraseña: ");

        if (usuario === usuarioValido && password === passwordValido) {
            console.log("Acceso permitido");
            break;
        } else {
            console.log("Acceso denegado");
            intentos++;
        }
    }

    if (intentos === 3) {
        console.log("Cuenta bloqueada");
    }
}

// 36. Facturación de un producto: calcula el importe a partir del precio y la cantidad; aplica 0 % si es menos de 50 €, 5 % entre 50 € y 100 €, 10 % entre 100 € y 200 € y 15 % si supera 200 €, 
// y después calcula el IVA del 21 %. Separa los cálculos en funciones.
// calcularDescuento() devuelve el porcentaje de descuento según el subtotal.
// facturacionProducto() pide precio y cantidad, calcula el subtotal, aplica el descuento
// y finalmente añade el IVA del 21% al total con descuento.
function calcularDescuento(total) {
    if (total < 50) {
        return 0;
    } else if (total <= 100) {
        return 5;
    } else if (total <= 200) {
        return 10;
    } else {
        return 15;
    }
}

function facturacionProducto() {
    const precio = parseFloat(window.prompt("Precio del producto: "));
    const cantidad = parseInt(window.prompt("Cantidad: "));
    const subtotal = precio * cantidad;
    const descuento = calcularDescuento(subtotal);
    const totalConDescuento = subtotal - (subtotal * descuento / 100);
    const totalFinal = totalConDescuento + (totalConDescuento * 0.21);

    console.log("Subtotal: " + subtotal + "€");
    console.log("Descuento: " + descuento + "%");
    console.log("Total final: " + totalFinal.toFixed(2) + "€");
}

// 37. Menú de gestión de una cuenta: permite consultar saldo, ingresar dinero, retirar, comprobar si hay saldo suficiente o salir; 
// implementa cada operación con una función y controla las operaciones no válidas.
// Similar al cajero (ej. 32) pero con una opción extra: comprobar si hay saldo
// suficiente para una cantidad dada. El do/while mantiene el menú activo hasta salir.
function menuCuenta() {
    let saldo = 500;
    let opcion = "";

    do {
        opcion = window.prompt("1. Consultar saldo\n2. Ingresar\n3. Retirar\n4. Comprobar saldo\n5. Salir");

        if (opcion === "1") {
            console.log("Tu saldo es: " + saldo + "€");
        } else if (opcion === "2") {
            const cantidad = parseFloat(window.prompt("¿Cuánto quieres ingresar? "));
            if (cantidad > 0) {
                saldo += cantidad;
            } else {
                console.log("Cantidad incorrecta");
            }
        } else if (opcion === "3") {
            const cantidad = parseFloat(window.prompt("¿Cuánto quieres retirar? "));
            if (cantidad > 0 && cantidad <= saldo) {
                saldo -= cantidad;
            } else {
                console.log("No tienes suficiente saldo");
            }
        } else if (opcion === "4") {
            const cantidad = parseFloat(window.prompt("Introduce la cantidad a comprobar: "));
            if (cantidad <= saldo) {
                console.log("Hay saldo suficiente");
            } else {
                console.log("No hay saldo suficiente");
            }
        } else if (opcion === "5") {
            console.log("Hasta luego");
        } else {
            console.log("Opción inválida");
        }
    } while (opcion !== "5");
}

// 38. Estadísticas de números: procesa con un bucle una cantidad determinada de números y calcula el mayor, el menor, la suma y la media. No uses arrays; organiza el código con funciones.
// Se usan variables mayor, menor y suma (sin arrays). En la primera iteración (i === 0)
// se inicializan mayor y menor con el primer número. En las siguientes se comparan
// con el número actual para actualizarlos si corresponde. La media = suma / cantidad.
function estadisticasNumeros() {
    const cantidad = parseInt(window.prompt("¿Cuántos números quieres introducir? "));
    let mayor = 0;
    let menor = 0;
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        const numero = parseFloat(window.prompt("Introduce el número " + (i + 1) + ": "));

        if (i === 0) {
            mayor = numero;
            menor = numero;
        }

        if (numero > mayor) {
            mayor = numero;
        }

        if (numero < menor) {
            menor = numero;
        }

        suma += numero;
    }

    const media = suma / cantidad;
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
    console.log("Suma: " + suma);
    console.log("Media: " + media);
}

// 39. Programa integrador, gestión de notas: permite introducir el nombre del alumno y varias notas, calcular la media, 
// determinar la calificación y mostrar si ha aprobado. Incluye un menú hasta salir y controla entradas incorrectas.
// Un do/while presenta el menú. Al elegir la opción 1 se pide el nombre y la cantidad de notas.
// Un while interior valida que cada nota esté entre 0 y 10. Tras recoger todas,
// se calcula la media, se llama a validarNota() y se indica si ha aprobado (media >= 5).
function gestionNotas() {
    let opcion = "";

    do {
        opcion = window.prompt("1. Introducir notas\n2. Salir");

        if (opcion === "1") {
            const nombre = window.prompt("Introduce el nombre del alumno: ");
            const cantidad = parseInt(window.prompt("¿Cuántas notas quieres introducir? "));
            let suma = 0;

            for (let i = 0; i < cantidad; i++) {
                let nota = parseFloat(window.prompt("Introduce la nota " + (i + 1) + ": "));

                while (nota < 0 || nota > 10) {
                    console.log("La nota debe estar entre 0 y 10");
                    nota = parseFloat(window.prompt("Introduce la nota " + (i + 1) + ": "));
                }

                suma += nota;
            }

            const media = suma / cantidad;
            console.log("Alumno: " + nombre);
            console.log("Media: " + media);
            console.log(validarNota(media));

            if (media >= 5) {
                console.log("Ha aprobado");
            } else {
                console.log("No ha aprobado");
            }
        } else if (opcion !== "2") {
            console.log("Opción no válida");
        }
    } while (opcion !== "2");
}

// 40. Reto final, simulador de tienda: permite consultar opciones, introducir precio y cantidad, calcular el subtotal, 
// aplicar descuentos según el importe y calcular el IVA. Incluye un menú hasta finalizar la compra.
// Se acumulan los subtotales de varios productos en subtotalGeneral.
// Al finalizar la compra (opción 2) se llama a calcularDescuento() para el porcentaje
// de descuento, se aplica y luego se añade el IVA del 21% para obtener el total final.
function simuladorTienda() {
    let subtotalGeneral = 0;
    let opcion = "";

    do {
        opcion = window.prompt("1. Añadir producto\n2. Finalizar compra");

        if (opcion === "1") {
            const precio = parseFloat(window.prompt("Precio del producto: "));
            const cantidad = parseInt(window.prompt("Cantidad: "));
            const subtotalProducto = precio * cantidad;
            subtotalGeneral += subtotalProducto;
            console.log("Subtotal actual: " + subtotalGeneral + "€");
        } else if (opcion === "2") {
            const descuento = calcularDescuento(subtotalGeneral);
            const totalConDescuento = subtotalGeneral - (subtotalGeneral * descuento / 100);
            const totalFinal = totalConDescuento + (totalConDescuento * 0.21);

            console.log("Subtotal: " + subtotalGeneral + "€");
            console.log("Descuento: " + descuento + "%");
            console.log("Total final: " + totalFinal.toFixed(2) + "€");
        } else {
            console.log("Opción no válida");
        }
    } while (opcion !== "2");
}