var resultado = 0;
var resultado2 = 1;
var xd = 0;
const num = parseInt(prompt("Por favor ingrese un número positivo mayor a 0:"));

if (Number.isInteger(num) || num < 1 || !Number.isInteger(num)) {
    console.log("Ingrese un número válido.");
} else {
    console.log(resultado);
    if (num >= 2) {
        console.log(resultado2);
    }
    for (let i = 2; i < num; i++) {
        xd = resultado + resultado2;
        console.log(xd);
        resultado = resultado2;
        resultado2 = xd;
    }
}