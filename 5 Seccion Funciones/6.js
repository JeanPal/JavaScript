//Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, 
//el número se pedirá en el programa principal. Usar procedimiento.


function DatosEntrantes(dato) {
    if (dato.trim() === '') {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
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

function multiplicacion(numero, indice) {
    if (indice > 20) {
        return;
    }
    console.log(numero+" x "+indice + " = " +(numero * indice));
    multiplicacion(numero, indice + 1);
}

dato1 = pedirYValidarDato(`Digite un numero`);
multiplicacion(parseInt(dato1), 1);
