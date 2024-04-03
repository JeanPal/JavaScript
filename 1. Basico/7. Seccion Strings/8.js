function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z,]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    }   
    else {
        return true;
    }
}

function pedirYValidarDatoLetras(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesLetras(dato); 
    } while (!datoValido);

    return dato.trim();
}

const productos = pedirYValidarDatoLetras("Por favor, ingresa el producto de su cesta separado por una coma ,");

const separados = productos.split(',');

console.log("Productos en la cesta de compra:");
separados.forEach(producto => {
    console.log(producto.trim()); 
});