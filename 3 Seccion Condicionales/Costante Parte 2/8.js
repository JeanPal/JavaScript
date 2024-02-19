let dato1 = +prompt("Cuantas horas trabajaste hoy? (COP)");

if (!isNaN(dato1)) {
    const hora = 5531;
    const dato2= (dato1*hora);
    
    console.log("Trabajaste "+dato1 +" por lo cual tu salario de hoy fue " +dato2);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}