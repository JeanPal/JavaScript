
function suma(dato1,dato2) {
    return  (parseFloat(dato1) + parseFloat(dato2));
}

function restar(dato1,dato2) {
    return  (parseFloat(dato1) - parseFloat(dato2));
}

function multiplicacion(dato1,dato2) {
    return  (parseFloat(dato1) * parseFloat(dato2));
}

function dividir(dato1,dato2) {
    return  (parseFloat(dato1) / parseFloat(dato2));
    
}


do {
    dato3 = prompt(`Menu:\n Elija una opción:\n1. Sumas\n2. Restart \n3. Multiplicar \n4. Dividir`);
    dato1 = prompt(`Ingrese una primer numero`);
    dato2 = prompt(`Ingrese una segundo numero`);
} while (dato3.trim() === '' || dato1.trim() === '' || dato2.trim() === '' );
if (dato3 == 1){
    console.log(`la suma es ${suma(dato1,dato2)}`);
} else if (dato3 == 2){
    console.log(`la resta es ${restar(dato1,dato2)}`);
} else if (dato3 == 3){
    console.log(`la multiplicacion es ${multiplicacion(dato1,dato2)}`);
} if (dato2 != 0){
if (dato3 == 4){
    console.log(`la dividicion es ${dividir(dato1,dato2)}`);}
} else {
    console.log("Ingrese un numero valido");
}