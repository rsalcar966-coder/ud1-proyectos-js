//Funciones del BOM

// Muestra una ventana de alerta.
window.alert("Hola");  

//Muestra un mensaje con botones Aceptar/Cancelar y devuelve true o false.
const respuesta = window.confirm("¿Continuar?"); 

//Solicita al usuario que introduzca un texto.
const nombre = window.prompt("¿Cómo te llamas?");

// Abre una nueva ventana o pestaña.
window.open("https://example.com");

//Cierra la ventana actual, cuando el navegador lo permite.
window.close();

//Ejecuta una función después de un tiempo determinado
window.setTimeout(() => console.log("Han pasado 2 segundos"), 2000);

//Ejecuta una función repetidamente cada cierto intervalo.
window.setInterval(() => {
    console.log("Hola");
}, 1000);

//Permite obtener o cambiar la url
console.log(window.location.href);
window.location.href = "https://example.com";

//Actualizar (F5)
window.location.reload();

//Vuelve a la pagina anterior o anteriores
window.history.back();
window.history.go(-2);

//Avanza o retrocede varias páginas.
window.history.forward();
window.history.go(2);

//Almacenamiento local
window.localStorage.setItem("nombre", "Carlos");
const item = window.localStorage.getItem("nombre");
window.localStorage.removeItem("nombre");
window.localStorage.clear();

//info navegador
console.log(window.navigator.userAgent);

//Tamaño de la ventana
console.log(window.innerWidth);
console.log(window.innerHeight);

//Modelo de objetos del documento
window.document
window.document.getElementById("titulo");


//Propiedades del BOM
window.innerWidth      // Ancho de la ventana
window.innerHeight     // Alto de la ventana
window.location        // URL actual
window.history         // Historial de navegación
window.navigator       // Información sobre el navegador
window.document        // Documento HTML (DOM)
window.localStorage    // Almacenamiento local
window.sessionStorage  // Almacenamiento de sesión