/*Aquí se colocan clases para ¨seccionar¨ productos, así como los códigos de descuento 
que se vayan a utilizar. Además se coloca un método que muestra cierta información del objeto.  ` ` backticks*/
class Cakes {
    constructor(id, nombre, precio, tamaño) {
        this.id = id;
        this.cake = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
        this.quantity = 1; //esto hace que cada que se cree un producto nazca con valor 1
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

/*Aquí se colocan los datos de las clases, los objetos.  */
const GRIDDLE_CAKE1 = new Cakes(1, "Pastel 1/4 de plancha", 250, "chico");
const GRIDDLE_CAKE2 = new Cakes(2, "Pastel 1/2 de plancha", 400, "mediano");
const GRIDDLE_CAKE3 = new Cakes(3, "Pastel de plancha completa", 600, "grande");
const ROUND_CAKE1 = new Cakes(4, "Pastel redondo", 300, "un piso");
const ROUND_CAKE2 = new Cakes(5, "Pastel redondo", 450, "dos pisos");


const SHELL_BREAD = new Breads(1, "Concha", 10, "normal");
const DONUT_BREAD = new Breads(2, "Dona", 8, "normal");
const SHELL_BREAD_G = new Breads(3, "Conchota", 30, "gigante");
const DONUT_BREAD_G = new Breads(4, "Donota", 25, "gigante");


const DISCOUNT_YEAR1 = new Discounts(1, "MIAPAESELDUEÑO", 85, "todo el año");
const DISCOUNT_YEAR2 = new Discounts(2, "AYUDITA", 10, "todo el año");
const DISCOUNT_NOV1 = new Discounts(3, "BUENFINECITO", 33, "buen fin");
const DISCOUNT_DEC1 = new Discounts(4, "TENIALANARIZROJA", 20, "navidad");
const DISCOUNT_FEB1 = new Discounts(5, "PARAMICRUSH", 14, "san valentín");


let totalAmount = 0;
let amount;
let continueDoing;
let discountAmount;

do {
    const PRODUCTS = prompt("¿Qué tipo de producto desea comprar? (pan o pastel)").toLowerCase();

    switch (PRODUCTS) {
        case "pan": const WHAT_BREAD = prompt("¿Qué pan desea comprar? (concha, conchota, dona, donota)").toLowerCase();
            switch (WHAT_BREAD) {
                case "concha": SHELL_BREAD.elementalInfo(); amount = SHELL_BREAD.price;
                    break;
                case "dona": DONUT_BREAD.elementalInfo(); amount = DONUT_BREAD.price;
                    break;
                case "conchota": SHELL_BREAD_G.elementalInfo(); amount = SHELL_BREAD_G.price;
                    break;
                case "donota": DONUT_BREAD_G.elementalInfo(); amount = DONUT_BREAD_G.price;
                    break;
                default: alert("Eso no lo manejamos, lo sentimos, se le cobrarán 3 pesos"); amount = 3;
            }
            break;

        case "pastel": const WHAT_CAKE = prompt("¿Qué pastel desea comprar? (Si es de plancha escriba chico, mediano o grande. Si es redondo escriba normal o torre)").toLowerCase();
            switch (WHAT_CAKE) {
                case "chico": GRIDDLE_CAKE1.elementalInfo(); amount = GRIDDLE_CAKE1.price;
                    break;
                case "mediano": GRIDDLE_CAKE2.elementalInfo(); amount = GRIDDLE_CAKE2.price;
                    break;
                case "grande": GRIDDLE_CAKE3.elementalInfo(); amount = GRIDDLE_CAKE3.price;
                    break;
                case "normal": ROUND_CAKE1.elementalInfo(); amount = ROUND_CAKE1.price;
                    break;
                case "torre": ROUND_CAKE2.elementalInfo(); amount = ROUND_CAKE2.price;
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
            case "MIAPAESELDUEÑO": DISCOUNT_YEAR1.elementalInfo(); discountAmount = DISCOUNT_YEAR1.percentage;
                break;
            case "AYUDITA": DISCOUNT_YEAR2.elementalInfo(); discountAmount = DISCOUNT_YEAR2.percentage;
                break;
            case "BUENFINECITO": DISCOUNT_NOV1.elementalInfo(); discountAmount = DISCOUNT_NOV1.percentage;
                break;
            case "TENIALANARIZROJA": DISCOUNT_DEC1.elementalInfo(); discountAmount = DISCOUNT_DEC1.percentage;
                break;
            case "PARAMICRUSH": DISCOUNT_FEB1.elementalInfo(); discountAmount = DISCOUNT_FEB1.percentage;
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

