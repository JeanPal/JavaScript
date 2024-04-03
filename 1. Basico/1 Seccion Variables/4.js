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

dato1 = pedirYValidarDato(`Ingrese un primer número`);
dato2 = pedirYValidarDato(`Ingrese un segundo número`);
dato3 = pedirYValidarDato(`Ingrese un tercer número`);
dato4 = pedirYValidarDato(`Ingrese un cuarto número`);

let media = ((dato1 + dato2 + dato3 + dato4) / 4);
alert("La media es " + media);






