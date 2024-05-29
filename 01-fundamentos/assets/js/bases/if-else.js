let a = 15;

if (a > 10) {
    console.log("A es mayor a 10");
}else{
    console.log("A es menor a 10");
}

// console.log("Fin del programa");


const hoy = new Date()
let dia = hoy.getDay()

console.log({dia});

if (dia === 0) {
    console.log("Es lunes");
}else if(dia === 1){
    console.log("Es lunes");
    // if (dia === 1) {
    //     console.log("Es lunes");
    // }else{
    //     console.log("No es lunes ni domingo");
    // }
}else if (dia === 2) {
    console.log("Es martes");
}else{
    console.log("No es lunes, martes o domingo...");
}

// Sin usar If Else o Switch, únicamente objetos
dia = 1 // 0: domingo, 1:lunes 

const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]

const diaSemana2 = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
}

// día de la semana

// console.log(diaSemana[dia]);
console.log(diaSemana2[dia]);
