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

function Medir(dato1, dato2, dato3) {
    let mayor = Math.max(dato1, dato2, dato3);
    let menor = Math.min(dato1, dato2, dato3);
    let medio = (dato1 + dato2 + dato3) - menor - mayor;
    return { menor, medio, mayor };
}

dato1 = pedirYValidarDato(`Digite primer numero`);
dato2 = pedirYValidarDato(`Digite segundo numero`);
dato3 = pedirYValidarDato(`Digite tercero numero`);

let resultado = Medir(dato1, dato2, dato3);
alert(` Menor: ${resultado.menor}\n Medio: ${resultado.medio}\n Mayor: ${resultado.mayor}`);