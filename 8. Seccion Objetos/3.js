class cuenta {
    constructor (nombre, cantidad = 0){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }


    toString() {
        return `Titular: ${this.nombre}, Cantidad: ${this.cantidad}`;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad) {
        if (cantidad > 0) {
            if (this.cantidad - cantidad < 0) {
                console.log("No puedes retirar mas de lo que tienes en la cuenta")
            } else {
                this.cantidad -= cantidad;
            }
        }
    } 

    getTitular() {
        return this.nombre;
    }

    setTitular(nuevonombre) {
        this.nombre = nuevonombre;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    }

}
const bancario = new cuenta("Juan Pérez", 100);
console.log(bancario.toString());

bancario.ingresar(50);
console.log(bancario.toString()); 

bancario.retirar(30);
console.log(bancario.toString()); 

bancario.retirar(300);
console.log(bancario.toString()); 