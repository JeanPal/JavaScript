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



var array = pedirYValidarDatoNumeros("Digite el tamaño del array");
var funcion = pedirYValidarDatoNumeros("Digite el funcion del contenido del array");
const matriz = Array.from({ length: array }, (_,index) => (index+1)*funcion);

console.table(matriz);