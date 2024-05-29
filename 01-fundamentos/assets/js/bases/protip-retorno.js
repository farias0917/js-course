// function crearPersona(nombre, apellido) {
//     return {nombre,apellido}
// }

 const crearPersona = (nombre, apellido) => ({nombre,apellido})
 



const persona = crearPersona("Emanuel", "Farias")
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) =>{
    return args
}

const [edad, ciudad, genero] = imprimeArgumentos2("Emanuel", 18, "Bogota", "Masculino")
console.log({edad, ciudad, genero});

const {nombre, apellido: nuevoApellido} = crearPersona("Emanuel", "Farias")
console.log(nuevoApellido);


let emanuel = {
    nombre: "Emanuel",
    codeName: "Manolo",
    vivo: true,
    edad: 18,
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
}

// const imprimePropiedades = (personaje) =>{
//     console.log("nombre:",personaje.nombre);
//     console.log("codeName:",personaje.codeName);
//     console.log("vivo:",personaje.vivo);
//     console.log("edad:",personaje.edad);
//     console.log("trajes:",personaje.trajes);
// }

const imprimePropiedades = ({nombre = "sin nombre", codeName = "sin codeName", vivo = "ni idea de su existencia", edad = 0, trajes = []}) =>{
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}


imprimePropiedades(emanuel)

