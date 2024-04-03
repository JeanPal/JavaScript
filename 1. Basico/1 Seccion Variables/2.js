function DatosEntrantes(dato) {
    if (dato.trim() === '') {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
    } else if (+dato.trim() <= 0 ) {
        alert('Debe ingresar un número mayor que cero');
        return false;
    } else {
        return true;
    }
}

function pedirYValidarDato(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantes(dato); 
    } while (!datoValido);

    return +dato.trim();
}


precio = pedirYValidarDato("Digite un precio");
descuento = pedirYValidarDato("Digite el % del descuento");


let total= precio - (precio * (descuento / 100));
console.log("El precio total es " +  total);