//Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y muestra por 
//pantalla, el día, el mes y el año. Adaptar el programa anterior para que también funcione 
//cuando el día o el mes se introduzcan con un solo carácter.

const fechaInput = prompt("Por favor, ingresa tu fecha de nacimiento en formato dd/mm/aaaa:");


const partesFecha = fechaInput.split('/');

let dia = partesFecha[0];
let mes = partesFecha[1];
let anio = partesFecha[2];

if (dia.length === 1) {
    dia = '0' + dia;
}
if (mes.length === 1) {
    mes = '0' + mes;
}

console.log("Día: " + dia);
console.log("Mes: " + mes);
console.log("Año: " + anio);

