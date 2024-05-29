let personaje = {
    nombre: "Emanuel",
    codeName: "Manolo",
    vivo: true,
    edad: 18,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California"
    },
    "ultima pelicula": "Infinity War"
}

console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Trajes", personaje["trajes"]);
console.log("Edad", personaje.edad);
console.log("Coords", personaje.coords);
console.log("Latitud", personaje.coords.lat);
console.log("Número de trajes", personaje.trajes.length);
console.log("Último traje", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo"

console.log("Vivo", personaje[x]);
console.log("Última pelicula", personaje["ultima pelicula"]);


// MÁS DETALLES

delete personaje.edad ;
console.log(personaje);

personaje.casado = false

const entriesPares = Object.entries(personaje)
console.log(entriesPares);

Object.freeze(personaje)

personaje.dinero = 1000000000
personaje.casado = true
personaje.direccion.ubicacion = "Costa rica"
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)

console.log({propiedades, valores});
