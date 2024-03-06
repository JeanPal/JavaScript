function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z\s]+$/.test(dato.trim())) {
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


const oracion = pedirYValidarDatoLetras("Por favor, ingresa una oración:");


const palabras = oracion.split(" ");


const resultado = palabras.length;

console.log("La oración tiene " + resultado + " palabras.");
