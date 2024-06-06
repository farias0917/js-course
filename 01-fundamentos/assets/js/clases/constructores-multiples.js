class Persona {

    static potObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }


    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = "Juan",
      apellido1 = "Farias",
      pais1 = "Colombia"

const emi = {
    nombre: "Emanuel",
    apellido: "Farías",
    pais: "Colombia"
}

const Persona1 = new Persona(nombre1, apellido1, pais1)
const Persona2 = Persona.potObjeto(emi)

Persona1.getInfo()
Persona2.getInfo()