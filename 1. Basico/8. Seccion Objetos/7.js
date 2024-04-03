//pedir datos
function datosUser(){
    const nombre = prompt("Ingrese el nombre");
    const telefono = prompt("Ingrese el telefono");
    const email = prompt("Ingrese el email");
    const nuevoContacto = {nombre: nombre, telefono: telefono, email: email};
    datosusers.push(nuevoContacto);
    alert("Contacto agregado correctamente");
    }

//Imprimir datos
function imprimirContactos() {
    const listaContactos = datosusers.map(contacto => `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`).join("\n");
    alert("Lista de contactos:\n" + listaContactos);
}

//Buscar usuario por telefono
function buscarconta() {
    const telefonoBuscado = prompt("Ingrese el numero del contacto a buscar:");
    const contactosEncontrados = datosusers.filter(contacto => contacto.telefono.toLowerCase() === telefonoBuscado.toLowerCase());
    if (contactosEncontrados.length > 0) {
        const listaContactos = contactosEncontrados.map(contacto => `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`).join("\n");
        alert("Contactos encontrados:\n" + listaContactos);
    } else {
        alert("No se encontraron contactos con ese nombre.");
    }
} 

//Editar usuario
function editarContacto() {
    const telefonoEditar = prompt("Ingrese el teléfono del contacto a editar:");
    const index = datosusers.findIndex(contacto => contacto.telefono === telefonoEditar);
    if (index !== -1) {
        const nombre = prompt("Ingrese el nuevo nombre");
        const telefono = prompt("Ingrese el nuevo teléfono");
        const email = prompt("Ingrese el nuevo email");
        datosusers[index] = new agenda(nombre, telefono, email);
        alert("Contacto editado correctamente");
    } else {
        alert("No se encontró ningún contacto con ese teléfono.");
    }
    }


class agenda {
    constructor(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

let datosusers = [
    {nombre: "Jesus", telefono: "21312312312", email: "jesus@gmail.com"},
    {nombre: "pepe", telefono: "312213123", email: "pepe@gmail.com"}
];

function menu () {

    userSleecion = +prompt("Por favor, elija una opción del menú:\n1. Añadir Contactos\n2. Lista de contactos\n3. Buscar contacto\n4. Editar contacto\n5. Cerrar agenda ");
    if (userSleecion === 1){
        datosUser();
    } else if (userSleecion === 2){
        imprimirContactos();   
    } else if (userSleecion === 3){
        buscarconta();
    } else if (userSleecion === 4){
        editarContacto();
    } else if (userSleecion === 5) {
        alert("Agenda cerrada");
        return; 
    }
    menu();
}

menu();
