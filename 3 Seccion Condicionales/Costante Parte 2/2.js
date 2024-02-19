let dato1 = +prompt("Ingrese Grados Celsius");

if (!isNaN(dato1) ) {
    let resulta = ( dato1 * 9/5) + 32;
    
    console.log("Grados Fahrenheit: "+resulta);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}