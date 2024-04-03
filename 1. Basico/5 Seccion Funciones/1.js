const resultado = (dato1) => {
    if (!(dato1 % 2)) {
        return `${dato1} Es par`;
    }else {
        return `${dato1} Es impar`;
    }
}


do {
    dato1 = prompt(`Ingrese un nummero`);

    let stringConTrim = dato1.trim()

    if (!stringConTrim) {
        alert('No puedes dejar espacios vacios');
    } else if (isNaN(stringConTrim)) {
        alert('Debe ingresar un número no letra o caracteres especiales');
    } else if (+stringConTrim <= 0) {
        alert('Debe ingresar un número mayor que cero');
    }

} while (dato1.trim() === '' || isNaN(dato1.trim()) || +dato1.trim() <= 0);
console.log(`El Numero ${resultado(+dato1)}`);
