let dato1 = +prompt("Ingrese la nota del estudiante");

if (!isNaN(dato1) && dato1<=10) {
    
    if (dato1 >= 6) {
        console.log("Aprobaste la materia");
    } else {
        console.log("Reprobaste la materia");
    }
} else {
    console.log("Por favor, ingrese solo números válidos o superan la nota maxima 10.");
}