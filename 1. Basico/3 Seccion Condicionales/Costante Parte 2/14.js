let dato1= +prompt("Ingrese un numero");
let dato2= +prompt("Ingrese otro numero");

if (!isNaN(dato1) && !isNaN(dato2)) {

    if (dato1 === dato2) {
        alert("Los numeros son iguales");
    }  else if (dato1 > dato2) {
        alet("Es mayor el numero "+dato1);
    }
        else {
        alert("Es mayor el numero "+dato2);
    }

} else {
    alert("Por favor, ingrese solo números válidos.");
}