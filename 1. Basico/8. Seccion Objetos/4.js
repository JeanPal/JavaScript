class Alumnos{
    constructor (nombre, nota = 0){
        this.nombre = nombre;
        this.nota = nota;
    }

    MuestraSi(){
    if (this.nota >= 60) {
        console.log(`${this.nombre} Aprobo con ${this.nota}`)
    } else {
        console.log(`${this.nombre} Reprobo con ${this.nota}`)
    }
}
}
const alu1 = new Alumnos("Pedro", 90);
alu1.MuestraSi(); // Imprimirá "Juan ha aprobado."

const alu2 = new Alumnos("Marcos", 55);
alu2.MuestraSi(); // Imprimirá "María no ha aprobado."