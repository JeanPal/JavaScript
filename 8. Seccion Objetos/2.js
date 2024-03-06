class contar {
    constructor(contador = 0) {
        this.contador = contador;
    }

 incrementar() {
    this.contador++;
}

decrementar() {
    this.contador--;
}

    getcontador() {
        return this.contador;
    }

    setcontador(nuevocontador) {
        this.contador = nuevocontador;
    }
}
const miContador = new contar();
console.log(miContador.getcontador()); // Output: 0

miContador.incrementar();
console.log(miContador.getcontador()); // Output: 1

miContador.decrementar();
console.log(miContador.getcontador()); // Output: 0

miContador.setcontador(5);
console.log(miContador.getcontador()); // Output: 5
