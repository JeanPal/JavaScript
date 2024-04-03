
let numero = prompt("Ingrese el numero");
let espcaciosv = numero.split("-");
var sinGuiones = numero.replace(/-/g, "");
var sinPrefijo = sinGuiones.replace(espcaciosv[0], "");
console.log(sinPrefijo); 
