let dato1= +prompt("Ingrese un numero");

if (!isNaN(dato1)) {

    if (dato1 % 2 === 0) {
        console.log("El numero es Par");
    }  else {
        console.log("El numero es ImPar");
    }

} else {
    console.log("Por favor, ingrese solo números válidos.");
}

