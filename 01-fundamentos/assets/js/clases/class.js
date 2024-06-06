class Persona {
    static conteo = 0
    static get getConteo(){
        return Persona.conteo + " instancias"
    }

    static mensaje() {
        console.log(this.nombre)
        console.log("Hola, soy un método estático");
    }
    nombre
    codigo
    frase
    comida = ""
    constructor(nombre = "Sin nombre", codigo = 0, frase = "Sin frase"){
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
        Persona.conteo++
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase()
    }

    get getComidaFavorita(){
        return this.comida
    }



    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy()
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona("Peter parker", "spiderman", "Un gran poder conyeva una gran responsabilidad")
const ironMan = new Persona("tony stark", "ironman", "Yo soy iron man")
console.log(spiderman);
console.log(ironMan);

ironMan.setComidaFavorita = "Mango"
// console.log(ironMan.getComidaFavorita);
// console.log(ironMan );

// Persona.conteo = 2

console.log("Conteo estático", Persona.conteo);
console.log(Persona.getConteo);
Persona.mensaje()

Persona.propiedadExterna = "Hola mundo"

console.log(Persona.propiedadExterna);

