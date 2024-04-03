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

function recursionV(dato1) {
    if (dato1 > 1) {
        recursionP(dato1);
    }
     recursionN(dato1);
}


function recursionP(dato1) {
    if (dato1 < 0) {
        return;
    }
    console.log(dato1);

    recursionP(dato1 - 1);
}

function recursionN(dato1) {
    if (dato1 > 0) {
        return;
    }
    console.log(dato1);

    recursionN(dato1 + 1);
}


dato1 = pedirYValidarDato(`Digite primer numero`);
recursionV(dato1);