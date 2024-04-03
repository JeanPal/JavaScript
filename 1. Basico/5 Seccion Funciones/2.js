function resultado(dato1, dato2) {

    return  (parseFloat(dato1) + parseFloat(dato2))/2;
    

}



do {
    dato1 = prompt(`Ingrese un primer nummero`);
    dato2 = prompt(`Ingrese un segundo nummero`);
} while (dato1.trim() === ''|| dato2.trim() === '' || isNaN(dato1) || isNaN(dato2) || dato1 < 0 || dato2 < 0);
console.log(resultado(dato1,dato2));