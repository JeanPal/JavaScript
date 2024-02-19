let dato1= prompt("nombre")
let dato2= +prompt("edad");
let dato3= prompt("sexo").toLowerCase();

if (/^[A-Za-z\s]+$/.test(dato1) && /^[A-Za-z\s]+$/.test(dato3)) {   
    
    if (!isNaN(dato2)) {
        if (dato2 < 0){
            alert("Digite una edad positiva");
        }
        else if (dato2 >= 18 && dato3 === "hombre"){
            alert("El nombre es "+dato1);
        } else {
            alert("No lo es");
        }
    } else {
        alert("Digite un numero para la edad");
    }
    
} else {
    alert("Digite un nombre, y sexo (No use numeros)");
}
