/*1-Dado un array de personas que contiene nombre y edad, escribe una
función que calcule y retorne el promedio de edades*/
const PERSONAS = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Caroline", edad: 28 }
]
function calcularPromedioEdades(arrayPersonas) {
    let sumaEdades = 0;
    for (let i = 0; i < arrayPersonas.length; i++) {
        sumaEdades += arrayPersonas[i].edad;
    }
    const PROMEDIO = sumaEdades / arrayPersonas.length;
    return PROMEDIO;
}

const PROMEDIO_EDADES = calcularPromedioEdades(PERSONAS);
console.log("El promedio de edades es: " + PROMEDIO_EDADES);


/*2-Dado un array de números, crea función que devuelva un array con
 solo números pares */
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function filtraNumerosPares(arrayNumeros) {
    const NUMEROS_PARES = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            NUMEROS_PARES.push(arrayNumeros[i]);
        }
    }
    return NUMEROS_PARES;
}
const NUMEROS_PARES = filtraNumerosPares(NUMEROS);
console.log("numeros pares: " + NUMEROS_PARES);


/*3-Dado un array de estudiantes con sus calificaciones, escribe una
función retorne un nuevo array con estudiantes calificación mayor a 70.*/
const ESTUDIANTES = [
    { nombre: "Pamela", calificación: 62 },
    { nombre: "Natalia", calificación: 74 },
    { nombre: "Eva", calificación: 77 },
    { nombre: "Emelly", calificación: 66 },
    { nombre: "Maritza", calificación: 90 },
    { nombre: "Caroline", calificación: 90 }
];
function estudiantesAprobados(arrayEstudiantes) {
    const ESTUDIANTES_APROBADOS = [];
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        if (arrayEstudiantes[i].calificación >= 70) {
            ESTUDIANTES_APROBADOS.push(arrayEstudiantes[i]);
        }
    }
    return console.log(ESTUDIANTES_APROBADOS);
}
estudiantesAprobados(ESTUDIANTES);

