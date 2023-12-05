/*Aquí se colocan clases para ¨seccionar¨ productos, así como los códigos de descuento 
que se vayan a utilizar. Además se coloca un método que muestra cierta información del objeto.  ` ` backticks*/
class Cakes {
    constructor(id, nombre, precio, tamaño) {
        this.id = id;
        this.cake = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
        this.quantity = 1; //esto hace que cada que se cree un producto nazca con valor 1 (aun no se usa)
    }
    elementalInfo() {
        console.log(`Producto: ${this.cake}  Precio: $${this.price}`)
    }
}

class Breads {
    constructor(id, nombre, precio, tamaño) {
        this.id = id;
        this.bread = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
        this.quantity = 1;
    }
    elementalInfo() {
        console.log(`Producto: ${this.bread}  Precio: $${this.price}`)
    }
}

class Discounts {
    constructor(id, nombre, cantidad, cuando) {
        this.id = id;
        this.code = nombre;
        this.percentage = parseFloat(cantidad);
        this.season = cuando;
    }
    elementalInfo() {
        console.log(`Código: ${this.code}  Descuento: ${this.percentage}%`);
    }
}

/*Aquí se colocan los datos de las clases, los objetos. Se crean arrays utilizando push para ingresar los objetos.  */
const GRIDDLE_CAKE1 = new Cakes(1, "Pastel 1/4 de plancha", 250, "chico");
const GRIDDLE_CAKE2 = new Cakes(2, "Pastel 1/2 de plancha", 400, "mediano");
const GRIDDLE_CAKE3 = new Cakes(3, "Pastel de plancha completa", 600, "grande");
const ROUND_CAKE1 = new Cakes(4, "Pastel redondo 1 piso", 300, "un piso");
const ROUND_CAKE2 = new Cakes(5, "Pastel redondo 2 pisos", 450, "dos pisos");

const CAKES_ARRAY = [];
CAKES_ARRAY.push(GRIDDLE_CAKE1, GRIDDLE_CAKE2, GRIDDLE_CAKE3, ROUND_CAKE1, ROUND_CAKE2);

const SHELL_BREAD = new Breads(1, "Concha", 10, "normal");
const DONUT_BREAD = new Breads(2, "Dona", 8, "normal");
const SHELL_BREAD_G = new Breads(3, "Conchota", 30, "gigante");
const DONUT_BREAD_G = new Breads(4, "Donota", 25, "gigante");

const BREADS_ARRAY = [];
BREADS_ARRAY.push(SHELL_BREAD, DONUT_BREAD, SHELL_BREAD_G, DONUT_BREAD_G);

const DISCOUNT_YEAR1 = new Discounts(1, "MIAPAESELDUEÑO", 85, "todo el año");
const DISCOUNT_YEAR2 = new Discounts(2, "AYUDITA", 10, "todo el año");
const DISCOUNT_NOV1 = new Discounts(3, "BUENFINECITO", 33, "buen fin");
const DISCOUNT_DEC1 = new Discounts(4, "TENIALANARIZROJA", 20, "navidad");
const DISCOUNT_FEB1 = new Discounts(5, "PARAMICRUSH", 14, "san valentín");

const DISCOUNTS_ARRAY = [];
DISCOUNTS_ARRAY.push(DISCOUNT_YEAR1, DISCOUNT_YEAR2, DISCOUNT_NOV1, DISCOUNT_DEC1, DISCOUNT_FEB1);

let totalAmount = 0;
let amount;
let continueDoing;
let discountAmount;


do {
    const PRODUCTS = prompt("¿Qué tipo de producto desea comprar? (pan o pastel)").toLowerCase();

    switch (PRODUCTS) {
        case "pan": const WHAT_BREAD = prompt("¿Qué pan desea comprar? (concha, conchota, dona, donota)").toLowerCase();
            switch (WHAT_BREAD) {
                case "concha": BREADS_ARRAY[0].elementalInfo(); amount = BREADS_ARRAY[0].price;
                    break;
                case "dona": BREADS_ARRAY[1].elementalInfo(); amount = BREADS_ARRAY[1].price;
                    break;
                case "conchota": BREADS_ARRAY[2].elementalInfo(); amount = BREADS_ARRAY[2].price;
                    break;
                case "donota": BREADS_ARRAY[3].elementalInfo(); amount = BREADS_ARRAY[3].price;
                    break;
                default: alert("Eso no lo manejamos, lo sentimos, se le cobrarán 3 pesos"); amount = 3;
            }
            break;

        case "pastel": const WHAT_CAKE = prompt("¿Qué pastel desea comprar? (Si es de plancha escriba chico, mediano o grande. Si es redondo escriba normal o torre)").toLowerCase();
            switch (WHAT_CAKE) {
                case "chico": CAKES_ARRAY[0].elementalInfo(); amount = CAKES_ARRAY[0].price;
                    break;
                case "mediano": CAKES_ARRAY[1].elementalInfo(); amount = CAKES_ARRAY[1].price;
                    break;
                case "grande": CAKES_ARRAY[2].elementalInfo(); amount = CAKES_ARRAY[2].price;
                    break;
                case "normal": CAKES_ARRAY[3].elementalInfo(); amount = CAKES_ARRAY[3].price;
                    break;
                case "torre": CAKES_ARRAY[4].elementalInfo(); amount = CAKES_ARRAY[4].price;
                    break;
                default: alert("Eso no lo manejamos, lo sentimos, se le cobrarán 3 pesos"); amount = 3;
            }
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
            case "MIAPAESELDUEÑO": DISCOUNTS_ARRAY[0].elementalInfo(); discountAmount = DISCOUNTS_ARRAY[0].percentage;
                break;
            case "AYUDITA": DISCOUNTS_ARRAY[1].elementalInfo(); discountAmount = DISCOUNTS_ARRAY[1].percentage;
                break;
            case "BUENFINECITO": DISCOUNTS_ARRAY[2].elementalInfo(); discountAmount = DISCOUNTS_ARRAY[2].percentage;
                break;
            case "TENIALANARIZROJA": DISCOUNTS_ARRAY[3].elementalInfo(); discountAmount = DISCOUNTS_ARRAY[3].percentage;
                break;
            case "PARAMICRUSH": DISCOUNTS_ARRAY[4].elementalInfo(); discountAmount = DISCOUNTS_ARRAY[4].percentage;
                break;
            default: alert("Ese código no es válido, su descuento es de $0"); discountAmount = 0;
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

