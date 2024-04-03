let dato1 = +prompt("Cuantas es tu salario? (COP)");

if (!isNaN(dato1)) {
    const dato2= (dato1*0.25);
    const dato3= (dato1+dato2);
    
    console.log("tu salario anterior fue "+dato1 +" por lo cual tu nuevo salario aumentado 25% es " +dato3);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}