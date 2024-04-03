//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los 
//desaprobados e indique la cantidad de aprobados y desaprobados.

var notas = [10,20,5,20,15,18,10,8,9,3];


var Aprobado = [];
var NoAprobado = [];
var sumaAprobado = 0;
var sumaNoAprobado = 0;
for (var i = 0; i < notas.length; i++) {
    if (notas[i] >= 12) {
        Aprobado.push(i);
        sumaAprobado += notas[i]; 
    } else{
        NoAprobado.push(i); 
        sumaNoAprobado += notas[i];
    }
     var cantidadAprobado = Aprobado.length;
     var cantidadNoAprobado = NoAprobado.length;
     var promedioAprobado = sumaAprobado / cantidadAprobado;
     var promedioNoAprobado = sumaNoAprobado / cantidadNoAprobado;
}

console.log("El número de aprobados es", cantidadAprobado);
console.log("El promedio de aprobados es:", promedioAprobado.toFixed(2));
console.log("El número de NO aprobados es", cantidadNoAprobado);
console.log("El promedio de NO aprobados es:", promedioNoAprobado.toFixed(2));
