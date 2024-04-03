let numero1, numero2;

do {
    numero1 = prompt("Ingrese el primer número:");
} while (numero1.trim() === '' ); 

do {
    numero2 = prompt("Ingrese el segundo número:");
} while (numero2.trim() === '' ); 

numero1 = +numero1; 
numero2 = +numero2; 

if (!isNaN(numero1) && !isNaN(numero2)) {
    console.log(`Números pares entre ${numero1} y ${numero2}:`);
    if (numero1 > numero2) {
        let temp = numero1;
        numero1 = numero2;
        numero2 = temp;
    }
    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, ingrese solo números válidos.");
}
