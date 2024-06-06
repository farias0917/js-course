const emanuel = {
    nombre: "emanuel",
    edad: 18,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const daniel = {
    nombre: "daniel",
    edad: 32,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const juan = {
    nombre: "juan",
    edad: 16,
     imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// emanuel.imprimir()
function Persona(nombre, edad) {
    console.log("Se ejecutó esta línea");
    this.nombre = nombre
    this.edad = edad
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

maria = new Persona("Maria", 30)
maria.imprimir()