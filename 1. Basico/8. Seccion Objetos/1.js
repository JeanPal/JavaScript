class Cuenta {

    constructor(saldo = 0) {

        this.saldo = saldo;


    }

    ingreso(dinero) {
        if (dinero > 0 ){
            this.saldo += dinero
            return true;
        }
        return false;


    }

    reintegro(dinero) {
        if (dinero > 0 && dinero <= this.saldo ){
            this.saldo -= dinero;
            return true;
        }
        return false;


    }

    transferencia(dinero, otraCuenta) {
        if (this.reintegro(dinero)) {
            otraCuenta.ingreso(dinero);
            return true;
        }
        return false; 
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this.saldo = nuevoSaldo;
            return true;
        }
        return false; 
    }

     getdinero() {
        return this.dinero;
    }

    setdinero(nuevodinero) {
        if (nuevodinero >= 0) {
            this.dinero = nuevodinero;
            return true;
        }
        return false; 
    }
}

const cuenta1 = new Cuenta(1000); 
const cuenta2 = new Cuenta(500); 

console.log("Saldo inicial de cuenta1:", cuenta1.getSaldo()); // Salida: 1000
console.log("Saldo inicial de cuenta2:", cuenta2.getSaldo()); // Salida: 500

//console.log("Ingresar fondos cuenta 1")
//cuenta1.ingreso(300, cuenta1); 

console.log("Ingresar fondos cuenta 1")
cuenta1.reintegro(300, cuenta1); 

//console.log("Tranferir 300 cuenta1 a cuenta2");
//cuenta1.transferencia(300, cuenta2); 

console.log("Nuevo saldo de cuenta1:", cuenta1.getSaldo()); // Salida: 700
console.log("Nuevo saldo de cuenta2:", cuenta2.getSaldo()); // Salida: 800
