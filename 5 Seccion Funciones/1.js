const resultado = (dato1) => {
    if (dato1 % 2 === 0) {
        return `${dato1} Es par`;
    }else {
        return `${dato1} Es impar`;
    }
}
do {
    dato1 = prompt(`Ingrese un nummero`);

    if (dato1.trim() === '') {
        alert('No puedes dejar espacios vacios');
    } else if (isNaN(dato1.trim())) {
        alert('Debe ingresar un número no letra o caracteres especiales');
    } else if (+dato1.trim() <= 0) {
        alert('Debe ingresar un número mayor que cero');
    }

} while (dato1.trim() === '' || isNaN(dato1.trim()) || +dato1.trim() <= 0);
console.log(`El Numero ${resultado(+dato1)}`);