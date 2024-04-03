function DatosEntrantes(dato) {
    if (dato.trim() === '') {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
    }
        else {
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

function binario(dato1) {
    if (dato1 === 0) {
        return '0';
    }
    if (dato1=== 1) {
        return '1';
    }
    return binario(Math.floor(dato1 / 2)) + (dato1 % 2);
 

}
dato1 = pedirYValidarDato(`Digite primer numero`);
alert(`El número ${dato1} en binario es: ${binario(dato1)}`);