let dato1 = +prompt("Ingrese un numero posito o negativo");


if (!isNaN(dato1)) {
    if (dato1 < 0) {
        console.log("El numero es negativo "+dato1);
    } else {
        console.log("el numero es positivo "+dato1);
    }
} else {
    console.log("Por favor, ingrese solo números positivos o negativos");
}