// Singleton es una instancia única de la clase

class Singleton {
    static instancia
    nombre = ""

    constructor(nombre = "") {


        if (!!Singleton.instancia) {
            return Singleton.instancia
        }

        Singleton.instancia = this
        this.nombre = nombre

        // return this 
    }
}

const instancia1 = new Singleton("Superman")
const instancia2 = new Singleton("Superman")
const instancia3 = new Singleton("batman")
console.log(instancia1.nombre);
console.log(instancia2.nombre);
console.log(instancia3.nombre);