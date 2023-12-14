/*Aquí se colocan clases para ¨seccionar¨ productos, así como los códigos de descuento 
que se vayan a utilizar. Además se coloca un método que muestra cierta información del objeto.  `` backticks*/
class Cakes {
    constructor(id, nombre, precio, tamaño, imagen) {
        this.id = id;
        this.name = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
        this.image = imagen;
        this.quantity = 1; //esto hace que cada que se cree un producto nazca con valor 1
    }
    elementalInfo() {
        console.log(`Producto: ${this.name}  Precio: $${this.price}`)
    }
}

class Breads {
    constructor(id, nombre, precio, tamaño, imagen) {
        this.id = id;
        this.name = nombre;
        this.price = parseFloat(precio);
        this.size = tamaño;
        this.image = imagen;
        this.quantity = 1;
    }
    elementalInfo() {
        console.log(`Producto: ${this.name}  Precio: $${this.price}`)
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
const GRIDDLE_CAKE1 = new Cakes(1, "Pastel 1/4 de plancha", 250, "chico", "./assets/pastelPlancha.webp");
const GRIDDLE_CAKE2 = new Cakes(2, "Pastel 1/2 de plancha", 400, "mediano", "./assets/pastelPlancha.webp");
const GRIDDLE_CAKE3 = new Cakes(3, "Pastel de plancha completa", 600, "grande", "./assets/pastelPlancha.webp");
const ROUND_CAKE1 = new Cakes(4, "Pastel redondo", 300, "un piso", "./assets/pastelRedondo.webp");
const ROUND_CAKE2 = new Cakes(5, "Pastel redondo de 2 pisos", 450, "dos pisos", "./assets/pastelRedondo2pisos.webp");

const CAKES_ARRAY = [];
CAKES_ARRAY.push(GRIDDLE_CAKE1, GRIDDLE_CAKE2, GRIDDLE_CAKE3, ROUND_CAKE1, ROUND_CAKE2);


const SHELL_BREAD = new Breads(50, "Concha", 10, "normal", "./assets/concha.webp");
const DONUT_BREAD = new Breads(51, "Dona", 8, "normal", "./assets/dona.webp");
const SHELL_BREAD_G = new Breads(52, "Conchota", 30, "gigante", "./assets/conchota.webp");
const DONUT_BREAD_G = new Breads(53, "Donota", 25, "gigante", "./assets/donota.webp");

const BREADS_ARRAY = [];
BREADS_ARRAY.push(SHELL_BREAD, DONUT_BREAD, SHELL_BREAD_G, DONUT_BREAD_G);


const DISCOUNT_YEAR1 = new Discounts(1, "MIAPAESELDUEÑO", 85, "todo el año");
const DISCOUNT_YEAR2 = new Discounts(2, "AYUDITA", 10, "todo el año");
const DISCOUNT_NOV1 = new Discounts(3, "BUENFINECITO", 33, "buen fin");
const DISCOUNT_DEC1 = new Discounts(4, "TENIALANARIZROJA", 20, "navidad");
const DISCOUNT_FEB1 = new Discounts(5, "PARAMICRUSH", 14, "san valentín");

const DISCOUNTS_ARRAY = [];
DISCOUNTS_ARRAY.push(DISCOUNT_YEAR1, DISCOUNT_YEAR2, DISCOUNT_NOV1, DISCOUNT_DEC1, DISCOUNT_FEB1);


/*Crea los divs que muestran los productos de las clases y botón para agregar al carrito*/
const CAKES_CONTAINER = document.getElementById("cakesSection");
const SHOW_CAKES = () => {
    CAKES_ARRAY.forEach(product => {
        const CAKES_CARD = document.createElement("div");
        CAKES_CARD.innerHTML =
            `
        <div class="imageProductCont">
                <img src="${product.image}" alt="${product.name}" title="${product.name}" class="imageProduct"/>
                <h4>${product.name}</h4>
                <p>$${product.price}   <button id="boton${product.id}">🛒</button></p>
            </div>
        `
        CAKES_CONTAINER.appendChild(CAKES_CARD);

        const BOTON = document.getElementById(`boton${product.id}`);
        BOTON.addEventListener("click", () => {
            ADD_CAKE_TO_CART(product.id);
        })
    })
}
SHOW_CAKES();


const BREADS_CONTAINER = document.getElementById("breadsSection");
const SHOW_BREADS = () => {
    BREADS_ARRAY.forEach(product => {
        const BREADS_CARD = document.createElement("div");
        BREADS_CARD.innerHTML =
            `
        <div class="imageProductCont">
                <img src="${product.image}" alt="${product.name}" title="${product.name}" class="imageProduct">
                <h4>${product.name}</h4>
                <p>$${product.price}   <button id="boton${product.id}">🛒</button></p>
            </div>
        `
        BREADS_CONTAINER.appendChild(BREADS_CARD);

        const BOTON = document.getElementById(`boton${product.id}`);
        BOTON.addEventListener("click", () => {
            ADD_BREAD_TO_CART(product.id);
        })
    })
}
SHOW_BREADS();

/*Vamos a construir el carrito */
let cartProducts = [];

/*Función para agregar los pasteles y los panes al carrito */
const ADD_CAKE_TO_CART = (id) => {
    const PRODUCT_IN_CART = cartProducts.find(product => product.id === id);
    if (PRODUCT_IN_CART) {
        PRODUCT_IN_CART.quantity++;
    } else {
        const cakeProduct = CAKES_ARRAY.find(product => product.id === id);
        cartProducts.push(cakeProduct);
    }
    console.log(cartProducts);
}

const ADD_BREAD_TO_CART = (id) => {
    const PRODUCT_IN_CART = cartProducts.find(product => product.id === id);
    if (PRODUCT_IN_CART) {
        PRODUCT_IN_CART.quantity++;
    } else {
        const breadProduct = BREADS_ARRAY.find(product => product.id === id);
        cartProducts.push(breadProduct);
    }
    console.log(cartProducts);
}


const CART_CONTAINER = document.getElementById("cartSection");

/*Botones para ver - vaciar carrito */
const ERASE_CART = document.getElementById("eraseCart");
ERASE_CART.addEventListener("click", () => {
    cartProducts.splice(0, cartProducts.length);
    showCart();
})

const SEE_CART = document.getElementById("seeCart");
SEE_CART.addEventListener("click", () => {
    showCart();
})

/*Función que despliega la lista de productos que se han añadido al carrito, botón para eliminar un producto, y botón
para aplicar código de descuento que es alojado en localStorage*/
function showCart() {
    const CART_TOTAL = document.getElementById("cartTotal");
    const CART_LIST = document.getElementById("cartList");
    let totalAmount = 0;
    
    CART_LIST.innerHTML = ``
    cartProducts.forEach(product => {
        const LIST_PRODUCT = document.createElement("li");
        LIST_PRODUCT.innerHTML = `
    <span>${product.name}</span>
    <span>${product.quantity}</span>
    <span>$${product.price}</span>
    <button id="erase${product.id}">Eliminar producto</button>
    `
        CART_LIST.appendChild(LIST_PRODUCT);

        /*Botón que elimina producto del carrito*/
        const BTN_ERASE_PRODUCT = document.getElementById(`erase${product.id}`);
        BTN_ERASE_PRODUCT.addEventListener("click", () => {
            ERASE_FROM_CART(product.id);
        })

        totalAmount += product.price * product.quantity;

        /*Botón que aplica códigos de descuento */
        const BTN_DISCOUNT = document.getElementById("applyCode");
        BTN_DISCOUNT.addEventListener("click", (applyDiscount));
        /*Función que aplica códigos de descuento */
        function applyDiscount() {
            const CODE_DISCOUNT_INPUT = document.getElementById("codeDiscountInput");
            let discountCode = CODE_DISCOUNT_INPUT.value.toUpperCase();
            const CODE_DISCOUNT_JSON = JSON.stringify(discountCode);
            localStorage.setItem("codigo", CODE_DISCOUNT_JSON);
            const CODE_DISCOUNT_FROM_STORAGE = localStorage.getItem("codigo");
            const CODE_DISCOUNT_TO_USE = JSON.parse(CODE_DISCOUNT_FROM_STORAGE);

            const CODE_DISCOUNT_MATCH = DISCOUNTS_ARRAY.find(discount => discount.code === CODE_DISCOUNT_TO_USE);
            if (CODE_DISCOUNT_MATCH) {
                discountAmount = CODE_DISCOUNT_MATCH.percentage;
                CODE_DISCOUNT_MATCH.elementalInfo();
                makeDiscount(totalAmount, discountAmount);
            } 
            CODE_DISCOUNT_INPUT.value = "";
        }

        /*Función que hace el descuento */
        function makeDiscount(total, discount) {
            let disc = (total * discount) / 100;
            let totalMinusDisc = total - disc;
            console.log(`El total con descuento es $${totalMinusDisc}`);
            CART_TOTAL.textContent = `$${totalMinusDisc}`;
        }

    });
    console.log(totalAmount)
    CART_TOTAL.textContent = `$${totalAmount}`;
};

showCart();

/*Función que elimina producto del carrito */
const ERASE_FROM_CART = (id) => {
    const PRODUCT_TO_ERASE = cartProducts.find(product => product.id === id);
    const PRODUCT_INDEX = cartProducts.indexOf(PRODUCT_TO_ERASE);
    cartProducts.splice(PRODUCT_INDEX, 1);
    showCart();
}
