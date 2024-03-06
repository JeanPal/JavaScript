//Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las
// posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (FindIndex)

function DatosEntrantes(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (isNaN(dato.trim())) {
        alert('Debe ingresar un número, no letras o caracteres especiales');
    } else if (dato.trim() < 0) {
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

var numeros = [3,2,10,4,10,6,7,8,9,3];
var posiciones = []



dato1 = pedirYValidarDato("Digite primer numero");

for (i=1; i < numeros.length; i++) {
    var resultado = numeros.findIndex( elemento => elemento == dato1);
    if (resultado==-1){}else {
    posiciones.push(resultado);
    numeros[resultado]=0;
}
}

if (posiciones.length > 0) {
    console.log("El número", dato1, "se encuentra en las posiciones:", posiciones);
} else {
    console.log("El número", dato1, "no se encuentra en el array.");
}




