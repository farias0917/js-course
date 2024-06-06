class Persona {
    static conteo = 0
    static get getConteo(){
        return Persona.conteo + " instancias"
    }

    static mensaje() {
        console.log(this.nombre)
        console.log("Hola, soy un método estático");
    }
    nombre = ""
    codigo = ""
    frase = ""
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


class Heroe extends Persona {
    clan = "Sin clan"
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase)
        this.clan = "Los avengers"
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy()
    }
}

const spiderman = new Heroe("Peter parker", "spiderman", "Un gran poder conyeva una gran responsabilidad")

spiderman.quienSoy()


