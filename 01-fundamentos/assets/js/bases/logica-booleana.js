const regresaTrue = () =>{
    console.log("Regresa true");
    return true;
}


const regresaFalse = () =>{
    console.log("Regresa false");
    return false;
}

console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true 

console.log("==============");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log("========&&========");
// regresaTrue() && regresaFalse()
regresaFalse() && regresaTrue()
console.log("4 condiciones:", + true && true && true && false); // false

console.warn("OR");
console.log(true || false);
console.log(false || false);

console.log("==============");
console.log(regresaTrue() || regresaFalse()); // false
console.log("4 condiciones:", true || true || true || false); // true

// Lógica booleana con asignaciones
console.warn("Asiganaciones");

const soyUndefined = undefined
const soyNull = null
const soyFalse = false

const a1 = true && "Hola Mundo" && 150
const a2 = "Hola" && "Mundo" && soyFalse  && true
const a3 = soyFalse || "ya no soy falso"
const a4 = soyFalse || soyUndefined || soyNull || "ya no soy falso"

console.log(a3);


