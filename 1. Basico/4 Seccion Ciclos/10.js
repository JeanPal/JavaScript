temp = 0
for (var i = 1; i < 13; i++) {
    do {
        dato1 = prompt(`Ingrese el mes ${i} de ahorros:`);
    } while (dato1.trim() === '' || isNaN(dato1.trim()< 0) || +dato1.trim() < 0);
    dato1 = +dato1; 

    if (!isNaN(dato1)) {
        temp += dato1 
        console.log(`El ahorro del mes ${i} fue de ${dato1} y tiene actualmente ${temp}`);

    } 
    else {
    console.log("Por favor, ingrese solo números")
    break
    }
}
