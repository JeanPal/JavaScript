let gasto= +prompt("Ingrese su gasto");


if (!isNaN(gasto)) {
    if (gasto < 1000) {
        console.log("Para un gasto de " + gasto + " Kwxh, la tarifa es: 1.2");
    } else if (gasto >= 1000 && gasto <= 1850) {
        console.log("Para un gasto de " + gasto + " Kwxh, la tarifa es: 1.0");
    } else {
        console.log("Para un gasto de " + gasto + " Kwxh, la tarifa es: 0.9");
    }
} else {
    console.log("Por favor, ingrese solo números");
}
