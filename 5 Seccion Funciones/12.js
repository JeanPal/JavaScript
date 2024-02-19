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

function invertir(dato1) {
    let invertido = 0;
    let resto = dato1;

    do {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
      } while ( resto > 0 )
      return invertido
}

dato1 = pedirYValidarDato(`Digite primer numero`);
alert(`El número ${dato1} invertido es: ${invertir(13)}`);

