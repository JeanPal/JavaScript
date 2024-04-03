const dato1 = +prompt("Ingrese la numero 1");
const dato2 = +prompt("Ingrese la numero 2");
const dato3 = +prompt("Ingrese la numero 3");

let resultadodato1 = determinar(dato1);
let resultadodato2 = determinar(dato2);
let resultadodato3 = determinar(dato3);

function determinar(dato) {
if (dato % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log("El primer número", dato1, "es", resultadodato1);
console.log("El segundo número", dato2, "es", resultadodato2);
console.log("El tercer número", dato3, "es", resultadodato3);