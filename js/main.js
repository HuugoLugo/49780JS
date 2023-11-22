/*1-Función que toma como argumento un número, debe devolver si es
un número par o un número impar*/
function esParImpar (numerin) {
    if (numerin % 2 === 0){
        console.log(numerin + " Es un número par");
    } else {
        console.log(numerin + " Es un número impar");
    }
    }
    
    esParImpar(10)
    
    
    /*2-Función que toma tres argumentos: forma, base y altura. Que devuelva
    el área de un triángulo o de un rectángulo. */
    function calcularArea (forma, base, altura) {
        if (forma === "triangulo"){
            console.log("El área del triángulo es " + (base * altura) / 2);
        } else if (forma === "rectangulo"){
            console.log("El área del rectángulo es " + base * altura);
        } else {
            console.log("Esa forma no la podemos calcular");
        }
    }
    
    calcularArea ("rectangulo", 5, 6)
    
    
    /*3-Función que toma una contraseña como argumento y verifique si cumple
    con al menos 8 caracteres, y que contenga el símbolo @ para ser ´valida.
    Si cumple devuelve "contraseña válida", si no, "contraseña no cumple requisitos"*/
    const SYMBOL_VALIDATE = "@";
    function esContraValida (contra) {
        if (contra.length >=8 && contra.includes(SYMBOL_VALIDATE)){
            console.log("Contraseña válida");
        alert("Contraseña válida, bienvenido");}
            else{
                console.log("Contraseña no cumple requisitos");
                alert("Contraseña no cumple requisitos");
            }
    }
    let ingresaContra = prompt("Ingrese su contraseña  (al menos 8 caracteres, y contar con el símbolo @)");
    esContraValida(ingresaContra)
    
    
    /*4-Escriba función que toma dos argumentos: cantidad y precioUnitario.
    La función debe tomar en cuenta la cantidad comprada.Si la cantidad 
    es igual o mayor a 10 de debe aplicar un descuento. Devuelve el precio total.*/
    let descuento = .25;
    function calculaTotal(cantidad, precioUnitario) {
        let precioTotal = cantidad * precioUnitario;
        if (cantidad >=10){
            console.log("Debido a la cantidad comprada, su precio con descuento es de $" + precioTotal * (1-descuento));
        } else{
            console.log("El precio es de $" + precioTotal);
        }
    }
    calculaTotal (10,350)
    