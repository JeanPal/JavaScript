temp = 0
for (var i = 0; i < 5; i++) {
    let dato1= +prompt("Porfavor Ingrese una nota");

    if (!isNaN(dato1)) {
    if (dato1 >= 3){
        temp += 1 
    } if(i==4){console.log(temp+" pasaron");}
    } 
    else {
    console.log("Por favor, ingrese solo números")
    break
    }
}