class calculadora {
    constructor (dato1, dato2){
        this.dato1 = dato1;
        this.dato2 = dato2;
    }

    suma() {
        return this.dato1 + this.dato2;
    }

    resta() {
        return this.dato1 - this.dato2;
    }

    multiplicacion() {
        return this.dato1 * this.dato2;
    }

    division() {
        if (this.dato2 === 0) {
            return "No se puede dividir por cero";
        } else {
            return this.dato1 / this.dato2;
        }
    }
}

const valor1 = parseInt(prompt("Ingrese un numero:"));
const valor2 = parseInt(prompt("Ingrese un segundo numero:"));

const calculadoraresul = new calculadora(valor1, valor2);

console.log("Suma:", calculadoraresul.suma());
console.log("Resta:", calculadoraresul.resta());
console.log("Multiplicación:", calculadoraresul.multiplicacion());
console.log("División:", calculadoraresul.division());
