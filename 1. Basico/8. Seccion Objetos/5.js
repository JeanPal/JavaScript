class Persona{
    constructor (nombre, edad = 0){
        this.nombre = nombre;
        this.edad = edad;
    }

    MuestraSi(){
    if (this.edad >= 18) {
        console.log(`${this.nombre} Es mayor de edad ${this.edad}`)
    } else {
        console.log(`${this.nombre} Es menor de edad ${this.edad}`)
    }
}
}
const alu1 = new Persona("Pedro", 40);
alu1.MuestraSi(); 

const alu2 = new Persona("Marcos", 15);
alu2.MuestraSi(); 