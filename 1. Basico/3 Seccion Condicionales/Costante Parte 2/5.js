let dato1 = +prompt("Ingres la base menor");
let dato2 = +prompt("Ingrese la base mayor");
let dato3 = +prompt("Ingrese la altura");

if (!isNaN(dato1) && !isNaN(dato2) && !isNaN(dato3)) {
    const area= (((dato1 + dato2)/2) * dato3);
    
    console.log("El area es "+area);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}