let temp = 1;
let dato1 = +prompt("Por favor, ingrese un número positivo");

if (!isNaN(dato1) && dato1 >= 0) {
    for (let i = 1; i <= dato1; i++) {
        temp *= i;
        console.log(`Factorial de ${i} es: ${temp}`);
    }
} else {
    console.log("Por favor, ingrese solo números positivos");
}
