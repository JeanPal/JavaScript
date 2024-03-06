function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z*]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    } else {
        return true;
    }
}

function DatosEntrantesNumeros(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
    } else if (dato.trim() <= 0) {
        alert('Debe ingresar un número, no letras o caracteres especiales'); 
    } else {
        return true;
    }
}

function pedirYValidarDatoNumeros(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesNumeros(dato); 
    } while (!datoValido);

    return dato.trim();
}

function pedirYValidarDatoLetras(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesLetras(dato); 
    } while (!datoValido);

    return dato.trim();
}
const nombres = [];
const edades = [];

for (;;) {
    let nombre = pedirYValidarDatoLetras("Ingrese un nombre o '*' para terminar:");
    nombres.push(nombre);

    if (nombre === "*") {
        break; 
    }
    let edad = pedirYValidarDatoNumeros("Ingrese la edad de " + nombre + ":");
    edades.push(parseInt(edad));
}
console.log("Nombres ingresados:", nombres);
console.log("Edades ingresados:", edades);

var contador = 0;
var nombresMayores = [];
for (var i = 0; i < edades.length; i++ ) {
    if (edades[i] >= 18) {
        contador++;
        nombresMayores.push(nombres[i]);
    }
}

console.log("Personas mayores o igual a 18 años:", contador);

let numeroMasGrande = edades[0];
let nombreMasGrande = nombres[0];

for (let i = 1; i < edades.length; i++) {
    if (edades[i] > numeroMasGrande) {
        numeroMasGrande = edades[i];
        nombreMasGrande = nombres[i];
    }
}

console.log("La persona con mas edad es", nombreMasGrande, "su edad es", numeroMasGrande, "años");
