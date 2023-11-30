/*Aquí se colocan clases para ¨seccionar¨ productos, así como los códigos de descuento 
que se vayan a utilizar. */
class Cakes {
    constructor(nombre, precio, tamaño) {
        this.cake = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
    }
}

/*No alcancé a usar clase breads ni discounts, pero las dejo para mostrar cierta idea / avance*/
class Breads {
    constructor(nombre, precio, tamaño) {
        this.bread = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
    }
}

class Discounts {
    constructor(nombre, cantidad, cuando) {
        this.code = nombre;
        this.percentage = cantidad;
        this.season = cuando;
    }
}

/*Aquí se colocan los datos de las clases y se crean arrays para ellos */
const GRIDDLE_CAKE1 = new Cakes("Pastel 1/4 de plancha", 250, "chico");
const GRIDDLE_CAKE2 = new Cakes("Pastel 1/2 de plancha", 400, "mediano");
const GRIDDLE_CAKE3 = new Cakes("Pastel de plancha completa", 600, "grande");
const ROUND_CAKE1 = new Cakes("Pastel redondo", 300, "un piso");
const ROUND_CAKE2 = new Cakes("Pastel redondo", 450, "dos pisos");
console.log(GRIDDLE_CAKE1.obtainData());

const CAKES_ARRAY = [GRIDDLE_CAKE1, GRIDDLE_CAKE2, GRIDDLE_CAKE3, ROUND_CAKE1, ROUND_CAKE2];

const BREAD1 = new Breads("Concha", 10, "normal");
const BREAD2 = new Breads("Dona", 8, "normal");
const BREAD1_G = new Breads("Conchota", 30, "gigante");
const BREAD2_G = new Breads("Donota", 25, "gigante");

const BREADS_ARRAY = [BREAD1, BREAD1_G, BREAD2, BREAD2_G];

const DISCOUNT1 = new Discounts("MIAPAESELDUEÑO", 85, "todo el año");
const DISCOUNT2 = new Discounts("AYUDITA", 10, "todo el año");
const DISCOUNT3 = new Discounts("BUENFINECITO", 33, "buen fin");
const DISCOUNT4 = new Discounts("TENIALANARIZROJA", 20, "navidad");
const DISCOUNT5 = new Discounts("PARAMICRUSH", 14, "san valentín");

const DISCOUNTS_ARRAY = [DISCOUNT1, DISCOUNT2, DISCOUNT3, DISCOUNT4, DISCOUNT5];

/*recuerda que puedes añadir al array con push, usa la coma si agregas varios en un solo push*/
console.log(DISCOUNTS_ARRAY);
const DISCOUNT6 = new Discounts("ELPATRONSEVOLVIOLOCO", 70, "aniversario");
DISCOUNTS_ARRAY.push(DISCOUNT6);


let howMuchSpending = parseFloat(prompt("¿Cuánto quiere gastar en un pastel?"));
if (isNaN(howMuchSpending)) {
    alert("Por favor ingrese números");
} else {
    let filterPrice = CAKES_ARRAY.filter(function (cakePrice) {
        return cakePrice.price <= howMuchSpending;
    });
    console.log(filterPrice);
}

/*Esto te muestra como hacer compras de productos, aplicando descuento de ser necesario
se hace uso de do while, switch, y una función para calcular el descuento*/
let totalAmount = 0;
let amount;
let continueDoing;
let discountAmount;

do {
    const PRODUCTS = prompt("Si desea comprar un pastel de plancha escriba (chico, mediano o grande). Si desea un pastel redondo escriba (normal o torre)").toLowerCase();

    switch (PRODUCTS) {
        case "chico": console.log(amount = CAKES_ARRAY[0].price);
            break;
        case "mediano": console.log(amount = CAKES_ARRAY[1].price);
            break;
        case "grande": console.log(amount = CAKES_ARRAY[2].price);
            break;
        case "normal": console.log(amount = CAKES_ARRAY[3].price);
            break;
        case "torre": console.log(amount = CAKES_ARRAY[4].price);
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
            default: alert("Ese código no es válido."); discountAmount = 0;
        }

        function makeDiscount(total, discount) {
            let disc = (total * discount) / 100;
            let totalMinusDisc = total - disc;
            console.log("El total con descuento es de $" + totalMinusDisc);
            alert("El total con descuento es de $" + totalMinusDisc);
        }

        makeDiscount(totalAmount, discountAmount);

    } else { alert("Que pena, para la próxima quizás."); }

    continueDoing = prompt("¿Desea seguir comprando? (responda si / no)").toLowerCase();
} while (continueDoing === "si");
