function DatosEntrantesLetras(dato) {
    if (!dato.trim()) {
        alert('No puedes dejar espacios vacíos');
    } else if (!/^[a-zA-Z\s]+$/.test(dato.trim())) {
        alert('Solo debes ingresar Letras no numeros'); 
    } else {
        return true;
    }
}

function pedirYValidarDatoLetras(mensaje) {
    let datoValido = false;
    let dato;

    do {
        dato = prompt(mensaje);
        datoValido = DatosEntrantesLetras(dato); 
    } while (!datoValido);

    return dato.trim();
}


let nombre = pedirYValidarDatoLetras("Introduce nombre y apellidos");

var minusculas = nombre.toLowerCase();
console.log(minusculas);

var mayusculas = nombre.toUpperCase();
console.log(mayusculas);

let espcaciosv = nombre.split(" ");
for (var i = 0; i < espcaciosv.length; i++) {

    espcaciosv[i] = espcaciosv[i].charAt(0).toUpperCase() + espcaciosv[i].slice(1).toLowerCase();
  }
  let nombresM = espcaciosv.join(" ");
console.log(nombresM);





