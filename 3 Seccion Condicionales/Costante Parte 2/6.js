let dato1 = +prompt("Ingres primer numero");
let dato2 = +prompt("Ingrese segundo numero");
let dato3 = +prompt("Ingrese tercer numero");

if (!isNaN(dato1) && !isNaN(dato2) && !isNaN(dato3)) {
    const media= ((dato1+dato2+dato3)/3);
    
    console.log("La media arimetica es "+media)
} else {
    console.log("Por favor, ingrese solo números válidos.");
}