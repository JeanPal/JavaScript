//Realizar un programa que pida tres números y 
//diga cuál es el mayor, cuál es el segundo mayor, y cuál es el menor. 
//(Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)

let max = Number.NEGATIVE_INFINITY;
let men = Number.POSITIVE_INFINITY;


for (let i = 1; i <= 3; i++) {
    let n = +prompt("Ingrese el numero " + i);

    max = Math.max(max, n);
    men = Math.min(men, n);
}

console.log("El número mayor es:", max);
console.log("El número menor es:", men);
