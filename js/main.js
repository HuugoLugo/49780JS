/*Esto te muestra como hacer compras de productos, aplicando descuento de ser necesario
se hace uso de do while, switch, y una función para calcular el descuento*/
let totalAmount = 0;
let amount;
let continueDoing;
let discountAmount;

do {
    const PRODUCTS = prompt("Ingrese el producto a comprar (pan, pastel o galleta)").toLowerCase();

    switch (PRODUCTS) {
        case "pan": console.log(amount = 12);
            break;
        case "pastel": console.log(amount = 300);
            break;
        case "galleta": console.log(amount = 8);
            break;
        default: alert("Eso no lo manejamos, lo sentimos, se le cobrarán 3 pesos"); amount = 3;
    }
    totalAmount += amount;
    console.log("El total es de $" + totalAmount);
    alert("El total es de $" + totalAmount);

    const HAVE_DISCOUNT = prompt("¿Tiene un código de descuento? (si / no").toLowerCase();
    if (HAVE_DISCOUNT === "si") {
        let discountCode = prompt("Ingreselo").toUpperCase();
        switch (discountCode) {
            case "MIAPAESELDUEÑO": console.log(discountAmount = 85);
                break;
            case "AYUDITA": console.log(discountAmount = 15);
                break;
            default: alert("Ese código no es válido.");
        }

        function makeDiscount(total, discount) {
            let disc = (total * discount) / 100;
            let totalMinusDisc = total - disc;
            console.log("El total con descuento es de $" + totalMinusDisc);
            alert("El total con descuento es de $" + totalMinusDisc);
        }

        makeDiscount(totalAmount, discountAmount);

    } else { alert("Que pena, para la próxima quizás.") }

    continueDoing = prompt("¿Desea seguir comprando? (responda si / no)").toLowerCase();
} while (continueDoing === "si");
