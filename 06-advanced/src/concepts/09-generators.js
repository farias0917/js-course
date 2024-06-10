/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsFuntionsComponent = (element) =>{

    // const myGenerator = myFirstGeneratorFunction()
    // console.log(myGenerator.next());

    const genId = idGenerator()

    const btn = document.createElement("button")
    btn.innerText = "Click me"

    element.append(btn)

    const renderBtn = () =>{
        const {value} = genId.next()
        btn.innerText = `Click ${value}`
    }

    btn.addEventListener("click", renderBtn  )
}


function* idGenerator() {
    let currentId = 0

    while (true) {
        yield ++ currentId
    }
}

function* myFirstGeneratorFunction(){

    yield "Primer valor"
    yield "segundo valor"
    yield "tercer valor"
    yield "cuarto valor"

    return "No hay valores"
}