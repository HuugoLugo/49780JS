//Inicia--Recuerda que const no puede modificarse, let si
const ESPACIO_BLANCO = " ";
let textoParaNombre = "Increiblemente";
let textoUnion = "tiene";
let textoParaAños = "años sin bañarse";


/*Aquí vas a pedir nombre y años, para después concatenarlos con las variables anteriores
y mostrarlas con un alert y / o log*/
let ingresaNombre = prompt("Ingrese su nombre");
let ingresaAños = prompt("¿Cuántos años tiene?");

let sentenciaCompleta = textoParaNombre + ESPACIO_BLANCO + ingresaNombre + ESPACIO_BLANCO + textoUnion + ESPACIO_BLANCO + ingresaAños + ESPACIO_BLANCO + textoParaAños;
console.log(sentenciaCompleta);
alert(sentenciaCompleta);
