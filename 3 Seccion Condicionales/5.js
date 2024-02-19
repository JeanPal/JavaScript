const dato1 = +prompt("Ingrese la nota del 1 al 10");
if (dato1 < 0 || dato1 > 10) {
    console.log("La calificación ingresada no es válida.");
} else if (dato1 <= 5) {
    console.log("Insuficiente");
} else if (dato1 <= 7) {
    console.log("Suficiente");
} else if (dato1 <= 8) {
    console.log("Bien");
} else {
    console.log("Excelente");
}