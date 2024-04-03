function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    } else {
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


let palabra = pedirYValidarDatoLetras("Introduce un palabra");
let palabraInvertida = palabra.split("").reverse().join("");
console.log(palabraInvertida); 
