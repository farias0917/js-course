// Patron de diseño patron Módulo

//Funciones anónimas autoinvocadas
(() => {
    "use strict"  // Evaluar el código de manera estricta
    let deck = []
    const tipos = ["C", "D", "H", "S"]
    const especiales = ["A", "J", "Q", "K"]

    let puntosJugador = 0, puntosComputadora = 0

    //Referencias 
    const btnNuevo = document.getElementById("btnNuevo")
    const btnPedir = document.getElementById("btnPedir")
    const divCartasJugador = document.getElementById("jugador-cartas")
    const divCartasComputadora = document.getElementById("computadora-cartas")
    const btnDetener = document.getElementById("btnDetener")
    const smalls = document.querySelectorAll("small")

    // Permite crear un deck
    const crearDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo)
            }
        }

        // console.log(deck);

        deck = _.shuffle(deck)
        return deck
    }

    crearDeck()


    // Permite tomar una carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw "No hay cartas en el deck"
        }
        let carta = deck.pop()
        return carta
    }

    const valorCarta = (carta) => {
        let valor = carta.substring(0, carta.length - 1)
        return isNaN(valor) ? valor === "A" ? valor = 11 : valor = 10 :
            parseInt(valor)
    }

    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta()
            puntosComputadora += valorCarta(carta)
            smalls[1].textContent = puntosComputadora
            const cartaImg = document.createElement("img")
            cartaImg.src = `../../assets/cartas/${carta}.png`
            cartaImg.classList.add("carta")
            divCartasComputadora.appendChild(cartaImg)

            if (puntosMinimos > 21) {
                break
            }
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Empate")
            } else if (puntosMinimos > 21) {
                alert("Computadora gana")
            } else if (puntosComputadora > 21) {
                alert("Has ganado")
            } else {
                alert("Computadora gana")
            }
        }, 10)
    }

    // Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta()
        puntosJugador += valorCarta(carta)
        smalls[0].textContent = puntosJugador
        const cartaImg = document.createElement("img")
        cartaImg.src = `assets/cartas/${carta}.png`
        cartaImg.classList.add("carta")
        divCartasJugador.appendChild(cartaImg)

        if (puntosJugador > 21) {
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador)
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador)
        }
    })

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
    })

    btnNuevo.addEventListener("click", () => {
        deck = []
        deck = crearDeck()

        puntosJugador = 0
        puntosComputadora = 0

        smalls[0].textContent = 0
        smalls[1].textContent = 0

        divCartasJugador.innerHTML = ""
        divCartasComputadora.innerHTML = ""

        btnPedir.disabled = false
        btnDetener.disabled = false
    })


})()

