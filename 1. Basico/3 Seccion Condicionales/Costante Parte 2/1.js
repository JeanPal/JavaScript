let dato1 = +prompt("Digite un primer número");
let dato2 = +prompt("Digite un segundo número");

if (!isNaN(dato1) && !isNaN(dato2)) {
    let resultadosuma = dato1 + dato2;
    let resultadoresta = dato1 - dato2;
    let resultadomulti = dato1 * dato2;
    
    if (dato2 != 0) {
        let resultadodivision = dato1 / dato2;
        console.log("División: " + resultadodivision);
    } else {
        console.log("No se puede dividir por cero.");
    }

    console.log("Suma: " + resultadosuma);
    console.log("Resta: " + resultadoresta);
    console.log("Multiplicación: " + resultadomulti);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}