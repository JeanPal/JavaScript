function numerosletras(numero) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
    alert(unidades[numero]);
}

do {
    numero = prompt(`Ingrese una numero del 1 al 10`);

    let stringConTrim = numero.trim();

    if (stringConTrim) {
        alert('No puedes dejar espacios vacios');
    } else if (isNaN(stringConTrim)) {
        alert('Debe ingresar un número no letra o caracteres especiales');
    } else if (stringConTrim <= 0) {
        alert('Debe ingresar un número mayor que cero');
    }
} while (numero.trim() === '' || isNaN(numero.trim()) || +numero.trim() <= 0 );
{numerosletras(numero)}
