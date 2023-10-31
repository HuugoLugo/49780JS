/*1-Dos condiciones: el usuario debe estar registrado y debe ser mayor de edad. 
Si se cumplen se muestra un mensaje de bienvenida, si no se cumple niega el acceso.*/
let registrado = true;
let mayorEdad = 16;
if (registrado == true && mayorEdad >= 18) { console.log("Bienvenido"); }
else { console.log("No puedes acceder aquí"); }

/*2-Debe cumplirse una de dos condiciones: etiqueta "en stock", o etiqueta "descuento"
Si se cumple alguna, mensaje de "producto disponible", si no mensaje de "producto agotado"*/
let productoStock = false;
let productoDescuento = false;
if (productoStock == true || productoDescuento == true) { console.log("producto disponible"); }
else { console.log("producto agotado"); }

/*3-Una condición: el usuario inicia sesión. Si ya inició sesión, de mensaje de bienvenida
si no ha iniciado sesión, recuerdale hacerlo.*/
let iniciaSesion = false;
if (iniciaSesion == true) { console.log("Bienvenido de vuelta"); }
else { console.log("Debe iniciar sesión"); }

/*4-Solicita nombre usuario y contraseña. Permite acceso 
si es el usuario y contraseña correcta, si no niega el acceso*/
const USER_NAME = prompt("Ingrese el nombre de usuario que le proporcionó su organización");
const PASSWORD = prompt("Ingrese su contraseña");
if (USER_NAME === "admin" && (PASSWORD === "secreta" || PASSWORD === "123456")) {
    alert("Bienvenido");
} else { alert("Datos inválidos"); }
