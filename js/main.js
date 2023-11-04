/*Esto te muestra como hacer una cancioncita de grupo, para que todos se vayan cantando, pasando de un nombre a otro
se hace uso de do while y switch*/
let continueDoing;
do {
    const SONG_NAME = prompt("¿De qué tema quiere su cancioncita de grupo? (escriba sardinas, mocos o vaca)").toLowerCase();
    let peopleName = prompt("Ingrese el nombre de una persona").toUpperCase();
    switch (SONG_NAME) {
        case "sardinas": alert("Una sardina, dos sardinas, tres sardinas, tres sardinas y un gato se apostaron la manera, la manera de meterse, de meterse a un zapato, de la chichichichihuahua de la huahuahuahuachichi que lo repita " + peopleName);
            break;
        case "mocos": alert(peopleName + " tiene un moco, lo saca poco a poco, lo redondea, lo mira con deseo, se lo come, y como fue muy poco, se saca otro moco.");
            break;
        case "vaca": alert("Caminando por el bosque una vaca me encontré. Como no tenia nombre " + peopleName + " le pondré con sus ojos bien grandotes y su boca que hace muu, si te jala de la ropa otro nombre dices tu.");
            break;
        default: alert("Esa no la tenemos, para la otra.")
    }
    continueDoing = prompt("¿Desea probar de nuevo? (responda si / no)");
} while (continueDoing === "si"); 
