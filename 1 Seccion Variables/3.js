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


const euro = 1.33250;
dolares = pedirYValidarDato(`Digite Su dinero en dolares`);

let total = dolares / euro;
alert(`tus dolares actuales ${dolares}$ a euros es: ${total.toFixed(2)}€`);
