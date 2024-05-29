let juegos = ["Zelda", "Mario", "Metroid", "Call of duty"]

console.log("Largo:", juegos.length);

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push("F-zero")
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift("Free Fire")
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos});

let pos = 1;

let juegoBorrados = juegos.splice(pos, 2)
console.log({juegoBorrados, juegos}); 

let callOfDutyIndex = juegos.indexOf("Call of duty")
console.log({callOfDutyIndex});