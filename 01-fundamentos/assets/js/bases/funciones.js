function saludar(nombre) {
    // console.log(arguments);
    // console.log("Hola " + nombre);
    return [1, 2, 3, 4, 5];
    console.log("Código despúes del return"); // Esto nunca se va a ejecutar
}


const saludar2 = function(nombre) {
    console.log("Hola " + nombre);
}

const saludarFlecha = () =>{
    console.log("Hola Flecha");
}

const saludarFlecha2 = (nombre) =>{
    console.log("Hola " + nombre);
}


const retornoDeSaludar = saludar("Emanuel", 18, "Bogotá");
// console.log(retornoDeSaludar);
// saludar2("Emanuel");

// saludarFlecha()
// saludarFlecha2("Juan")

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => a + b;

console.log(sumar(4, 2));

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());