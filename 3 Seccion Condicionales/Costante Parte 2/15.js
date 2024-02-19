let dato1= +prompt("Ingrese un numero");

if (!isNaN(dato1)) {

    if (dato1 === 0) {
        alert("No puedes hacer esto");
    } else if (dato1 > 0){
        alert("Su raiz es "+Math. sqrt(dato1));
    } else {
        alert("Su raiz es imaginaria");
    }

} else {
    alert("Por favor, ingrese solo números válidos.");
}