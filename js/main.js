/*Inicia--Recuerda que const no puede modificarse, let si, aqui coloca la pregunta (parsea para que tome numero), 
y las respuestas que se le darán.*/
const EVALUA_SERVICIO = parseInt(prompt("Por favor evalúe nuestro servicio, ingrese un valor entre 0 y 10 (siendo 10 lo más alto). Si nuestro servicio es excelente escriba el valor 100 "));

let excelenteServicio = "Usted es sabio, y gracias a ello, se ha ganado un descuento de $1000.";
let buenServicio = "Le agradecemos su valoración, queremos seguir ayudandolo a conseguir sus objetivos.";
let malServicio = "Lamentamos esa valoración, esperamos mejorar en su servicio, escribanos a ayudita@noleayudo.com, para poder atenderlo mejor.";
let noLee = "Hola, lo invito a leer bien, eso no es lo que le pedimos, intente otra vez.";

/*Aquí vas a escribir las condiciones que se deben cumplir para entregar distintas respuestas
y mostrarlas con un alert y / o log*/
if (isNaN(EVALUA_SERVICIO)) { alert("Ese ni es un número, intente otra vez."); }
else {
    if (EVALUA_SERVICIO === 100) { alert(excelenteServicio); }
    else if (EVALUA_SERVICIO >= 6 && EVALUA_SERVICIO <= 10) { alert(buenServicio); }
    else if (EVALUA_SERVICIO <= 5) { alert(malServicio); }
    else { alert(noLee); }
}
