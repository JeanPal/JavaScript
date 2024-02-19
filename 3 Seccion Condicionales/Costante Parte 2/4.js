let radio = +prompt("Ingrese un radio");
const PI = Math.PI;

if (!isNaN(radio)) {
    const longitud = 2 * PI * radio;
    
    console.log("La longitud "+longitud)
} else {
    console.log("Por favor, ingrese solo números válidos.");
}