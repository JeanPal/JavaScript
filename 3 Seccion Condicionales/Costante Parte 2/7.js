let dato1 = +prompt("Ingres el precio del producto");

if (!isNaN(dato1)) {
    const dato2= (dato1*0.15);
    const dato3= (dato1-dato2)
    
    console.log("El precio con 15% descuento de "+dato1 +" es " +dato3);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}