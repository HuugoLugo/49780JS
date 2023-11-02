/*1-Bucle for, números pares hasta el 50, y la suma total.
Muestra números pares y la suma de estos*/
let evenSum = 0;
for (let i = 1; i <= 50; i++) {
    if ([i] % 2 !== 0) { continue; }
    evenSum += i;
    console.log(i + " " + evenSum);
}


/*2-Adivinar número secreto entre 1 y 10 con uso de while,
permite múltiples intentos hasta adivinar, brinda pistas. */
const SECRET_NUMBER = 7;
let tryings = 0;
let guessings = " ";

while (guessings !== SECRET_NUMBER) {
    guessings = parseInt(prompt("Adivina el número que te permite pasar (está entre 1 y 10)"));
    tryings++;
    if (guessings <= 5) {
        alert("je je, no es tan bajo, intenta otra vez.")
    }
    if (guessings > 7) {
        alert("No es tan alto, intenta otra vez.");
    }
}
alert("Felicidades, solo necesitaste" + " " + tryings + " " + "intento(s)");



/*3-Calculadora simple entre dos números, que permita suma,
resta, multiplicación y división, que permita hacer operaciones
hasta que decida salir, utiliza do while.*/
let keepTrying;

do {
    const FIRST_NUMBER = parseFloat(prompt("Ingrese el primer número"));
    const OPERATIONS = prompt("Ingrese la operación deseada: +, -, *, /");
    const SECOND_NUMBER = parseFloat(prompt("Ingrese el segundo número"));
    let result;

    switch (OPERATIONS) {
        case "+":
            result = FIRST_NUMBER + SECOND_NUMBER;
            break;
        case "-":
            result = FIRST_NUMBER - SECOND_NUMBER;
            break;
        case "*":
            result = FIRST_NUMBER * SECOND_NUMBER;
            break;
        case "/":
            result = FIRST_NUMBER / SECOND_NUMBER;
            break;
        default:
            alert("No se puede ejecutar, intente otra vez");
            result = "Indefinido";
    }

    alert("Resultado: " + result);
    keepTrying = prompt("¿Quiere hacer otra operación?, responda si o no").toLowerCase();
} while (keepTrying === "si");


/*4-Convertir una moneda a otra, usa switch para diferentes tipos, de pesos mexicanos 
a dolar E.U, peso argentino, real brasileño. 1 peso mx: .056 dolares, 19.68 pesos argentinos, .28 reales*/
const COIN_ARS = 19.68;
const COIN_BRL = .28;
const COIN_USD = .056;
const COIN_MXN = parseFloat(prompt("Ingrese la cantidad de pesos mexicanos a convertir"));
const COIN_SELECTION = prompt("¿Qué moneda desea obtener? ARS, BRL, USD").toUpperCase();
let convertion;

switch (COIN_SELECTION) {
    case "USD":
        convertion = "USD $" + (COIN_MXN * COIN_USD);
        break;
    case "ARS":
        convertion = "ARS $" + (COIN_MXN * COIN_ARS);
        break;
    case "BRL":
        convertion = "BRL R$" + (COIN_MXN * COIN_BRL);
        break;
    default:
        alert("No se puede ejecutar, intente otra vez");
        convertion = "Indefinido";
}
alert("MXN $" + COIN_MXN + " = " + convertion);
