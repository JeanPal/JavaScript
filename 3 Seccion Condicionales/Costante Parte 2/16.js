let dato1= prompt("nombre");
let dato2= prompt("Ingrese su signo").toLowerCase();


if (/^[A-Za-z\s]+$/.test(dato1) && /^[A-Za-z\s]+$/.test(dato2)) {

    if (dato2 === "aries") {
        alert("usted es Aries");

    } else {
        alert("usted NO es Aries");
    }
    
} else {
    alert("Digite un nombre, no numeros,simbolos");
}
