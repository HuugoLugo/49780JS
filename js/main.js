//Inicia--Recuerda que const no puede modificarse, let si
const espacioBlanco = " ";
let textoParaNombre = "Increiblemente";
let textoUnion = "tiene";
let textoParaAños = "años sin bañarse";


/*Aquí vas a pedir nombre y años, para después concatenarlos con las variables anteriores
y mostrarlas con un alert y / o log*/
let ingresaNombre = prompt("Ingrese su nombre");
let ingresaAños = prompt("¿Cuántos años tiene?");

let sentenciaCompleta = textoParaNombre + espacioBlanco + ingresaNombre + espacioBlanco + textoUnion + espacioBlanco + ingresaAños + espacioBlanco + textoParaAños;
console.log(sentenciaCompleta);
alert(sentenciaCompleta);
