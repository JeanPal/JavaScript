function DatosEntrantesNumeros(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
    } else if (dato.trim() <= 0) {
        alert('Debe ingresar un número, no letras o caracteres especiales'); 
    } else {
        return true;
    }
}

function pedirYValidarDatoNumeros(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesNumeros(dato); 
    } while (!datoValido);

    return dato.trim();
}

const numero = pedirYValidarDatoNumeros("Por favor, ingresa un numero");

const numeroInvertido = Number(numero.toString().split('').reverse().join(''));
    
if (numero == numeroInvertido) {
    alert(`${numero} es capicúa.`);
} else {
    alert(`${numero} no es capicúa.`);
}
