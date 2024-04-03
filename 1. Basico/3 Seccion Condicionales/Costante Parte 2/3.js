let dato1 = +prompt("Ingrese cateto adyacente");
let dato2 = +prompt("Ingrese cateto opuesto");

if (!isNaN(dato1) && !isNaN(dato2)) {
    let resulta = Math. sqrt((dato1*dato1) + (dato2*dato2));
    
    console.log("la Hipotenusa es: "+resulta);
} else {
    console.log("Por favor, ingrese solo números válidos.");
}