let dato1= prompt("Que marca de motocicleta va comprar?").toLowerCase();
let precio= +prompt("digite el precio");
const dato2 = "honda";
const dato3 = "yamaha";
const dato4 = "Suzuki";


if ((/^[A-Za-z\s]+$/.test(dato1) || !isNaN(precio))&& precio>1) {   
    
    if (dato1 === dato2){
        res1 = precio-precio*0.05
        alert("La marca es honda aplicando 5% de descuento el total es "+res1);
    } else if (dato1 == dato3) {
        res2 = precio-precio*0.08
        alert("La marca es yamaha aplicando 8% de descuento el total es "+res2);

    } else if (dato1 == dato4){
        res3 = precio-precio*0.1
        alert("La marca es Suzuki aplicando 5% de descuento el total es "+res3);
    }
    else {
        res4 = precio-precio*0.02
        alert("Para ninguna marca aplicando 2% de descuento el total es "+res4);
    }
    
} else {
    alert("Ponga Datos validos");
}