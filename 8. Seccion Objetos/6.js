class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }


    LadoMayor() {
        if (this.lado1 >= this.lado2 && this.lado1 >= this.lado3) {
            console.log(`El mayor es el ${this.lado1}`);
        } else if (this.lado2 >= this.lado1 && this.lado2 >= this.lado3) {
            console.log(`El mayor es el ${this.lado2}`);
        } else {
            console.log(`El mayor es el ${this.lado3}`);
        }
    }

    TrianguloTipo() {
        if (this.lado1 === this.lado2 && this.lado1 === this.lado3) {
            console.log("El triángulo es equilátero.");
        } else if (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3) {
            console.log("El triángulo es isósceles.");
        } else {
            console.log("El triángulo es escaleno.");
        }
    }
}

function datoslados(){
const lado1 = parseFloat(prompt("Ingrese el Primer lado del triangulo"));
const lado2 = parseFloat(prompt("Ingrese el Segundo lado del triangulo"));
const lado3 = parseFloat(prompt("Ingrese el Tercer lado del triangulo"));

return new Triangulo(lado1, lado2, lado3);
}

const mitriangulo = datoslados();
mitriangulo.LadoMayor();
mitriangulo.TrianguloTipo();

