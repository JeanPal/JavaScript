//LETRAS
function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    }   
    else {
        return true;
    }
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
//vocales

function DatosEntrantesVocales(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    } else if (!/^[aeiouAEIOU]$/.test(dato.trim())) {
        alert('El dato ingresado no es una vocal');
    }  else {
        return true;
    }
}

function pedirYValidarDatoVocales(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesVocales(dato); 
    } while (!datoValido);

    return dato.trim();
}


let palabra = pedirYValidarDatoLetras("Introduce un palabra");
let vocal = pedirYValidarDatoVocales("Introduce un vocal");


let mayusculas = "";
for (var i = 0; i < palabra.length; i++) {

    if (palabra[i] === vocal) {
        mayusculas += vocal.toUpperCase();
    } else {
        mayusculas += palabra[i];
    }
}
console.log("Palabra con la vocal en mayúscula:", mayusculas); 