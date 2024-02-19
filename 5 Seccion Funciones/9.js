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


const test = (dato1) => {
    let fibSeries = [1, 1];
    for (let i = 2; i <= dato1; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        
    }
    return fibSeries;
}

dato1 = pedirYValidarDato(`Digite primer numero`);
const serieFibonacci = test(dato1);
alert(`La serie Fibonacci con ${dato1} términos es: ${serieFibonacci.join(', ')}`);
