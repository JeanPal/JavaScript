function fahrenheit(dato2) {
    return  ((9*parseFloat(dato2))/5 + 32);
}

function kelvin(dato2) {
    return parseFloat(dato2) + 273.15;
}


do {
    dato1 = prompt(`Elija una opción:\n1. Convertir a Fahrenheit\n2. Convertir a Kelvin`);
    dato2= '';

    if (dato1.trim() === '') {
        alert('No puedes dejar espacios vacios');
        continue;
    } else if (isNaN(dato1.trim())) {
        alert('Debe ingresar un número no letra o caracteres especiales');
        continue;
    } else if (dato1.trim() >= 3) {
        alert('Debe ingresar solo numeros disponibles en la lista');
        continue;
    } else if (dato1.trim() <= 0 ) {
        alert('Debe ingresar solo numeros disponibles en la lista');
        continue;
    }

    dato2 = prompt(`Ingrese una temperatura en grados Celsius`);

    if (dato2.trim() === '') {
        alert('No puedes dejar espacios vacios');
    } else if (isNaN(dato2.trim())) {
        alert('Debe ingresar un número no letra o caracteres especiales');
    } 

} while (dato1.trim() === '' || isNaN(dato1.trim()) || dato2.trim() === '' || isNaN(dato2.trim()) );
if (dato1==1){
    let dato4 = fahrenheit(dato2);
    alert(`En Fahrenheit: ${dato4.toFixed(2)}`);
} else if (dato1==2){
    let dato4 = kelvin(dato2);
    alert(`En kelvin: ${dato4.toFixed(2)}`);

} 