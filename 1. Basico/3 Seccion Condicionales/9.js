let max = Number.NEGATIVE_INFINITY;
let men = Number.POSITIVE_INFINITY;


for (let i = 1; i <= 3; i++) {
    let n = +prompt("Ingrese el numero " + i);

    max = Math.max(max, n);
    men = Math.min(men, n);
}

console.log("El número mayor es:", max);
console.log("El número menor es:", men);


