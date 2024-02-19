const nota1 = +prompt("Ingrese la nota 1");
const nota2 = +prompt("Ingrese la nota 2");
const nota3 = +prompt("Ingrese la nota 3");
const nota4 = +prompt("Ingrese la nota 4");

let promedio =  (nota1 + nota2 + nota3 + nota4)/4;
const notasup = Math.max(nota1,nota2,nota3,nota4);
const notainf = Math.min(nota1,nota2,nota3,nota4);
console.log("Promedio: " + promedio +" Nota Maxima: "+ notasup + " Nota Minima: "+ notainf);