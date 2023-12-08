let footer = document.getElementById("footer")
let mainDiv = document.getElementById("mainDiv")
const input = document.createElement("input")
input.type = "number"
input.id = "numeroCaselleVolute"

let numeroNumeri = 10

let numeriBingo = []
let numeriEstratti = []

for (let i = 1; i <= numeroNumeri; i++) {
    numeriBingo.push(i)
}

const isSortYet = function (numToChek) {

    for (let i = 0; i < numeriEstratti.length; i++) {
        if (parseInt(numeriEstratti[i]) === parseInt(numeriBingo[numToChek])) {
            return true
        }
    }
    return false
}

const newNumero = function () {
    let ritorno
    ritorno = Math.floor(Math.random() * numeriBingo.length)
    while (isSortYet(ritorno)) {
        ritorno = Math.floor(Math.random() * numeriBingo.length)
    }
    return ritorno
}

const paintEstratti = function () {
    for (let i = 0; i < numeriEstratti.length; i++) {
        const cuboDaColorare = document.getElementById("numero" + numeriEstratti[i])
        if (cuboDaColorare) {
            cuboDaColorare.classList.add("estratti")
        }
    }
}

const estraiNumero = function () {
    let nuovoNumero = newNumero()
    const noncancellarmi = numeriBingo.slice(nuovoNumero + 1)
    numeriEstratti.push(numeriBingo.splice(nuovoNumero, 1)[0])
    numeriBingo.concat(noncancellarmi)
    if (numeriEstratti.length === numeroNumeri) {
        console.log("Sequenza endgame")
        cambiaNumeri()

    } else {
        paintEstratti()
    }
}

const costruttoreQuadratino = function (num) {
    const div = document.createElement("div")
    div.classList.add("quadratinoNumero")
    div.id = "numero" + num
    const h1Numero = document.createElement("h1")
    h1Numero.innerText = (num)
    div.appendChild(h1Numero)
    return div
}

let cambiaNumeri = function () {
    numeroNumeri = parseInt(input.value)
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
    while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
    }
    numeriBingo.splice(0, numeriBingo.length)
    numeriEstratti.splice(0, numeriEstratti.length)
    for (let i = 1; i <= numeroNumeri; i++) {
        numeriBingo.push(i)
    }
    inizializzaGioco()
}

const inizializzaComandi = function () {
    const divComandi = document.createElement("div")
    divComandi.style.display = "flex"
    const pComandi = document.createElement("p")
    pComandi.style.width = "100%"
    pComandi.id = "pComandi"
    pComandi.innerText = "Premi sul pulsante per estrarre!"
    divComandi.style.borderRadius = "15px"
    const buttonComandi = document.createElement("button")
    buttonComandi.style.cursor = "pointer"
    buttonComandi.innerText = "Estrai"
    buttonComandi.addEventListener("click", function () {
        estraiNumero()
    })
    divComandi.appendChild(pComandi)
    divComandi.appendChild(buttonComandi)
    mainDiv.appendChild(divComandi)

    const divSetNumeri = document.createElement("div")
    divSetNumeri.style.margin = "2%"

    input.placeholder = "Digita il numero di caselle volute"
    input.style.lineHeight = "2em"
    input.style.margin = "2%"
    input.max = 999
    input.addEventListener("keydown", function () {
        if (event.key === "Enter") {
            cambiaNumeri();
        }
    })
    const labelNumeriDesiderati = document.createElement("label")
    labelNumeriDesiderati.innerText = "Digita il numero di caselle che vuoi e premi invio"
    divSetNumeri.appendChild(labelNumeriDesiderati)
    divSetNumeri.appendChild(input)
    footer.appendChild(divSetNumeri)
}

const inizializzaGioco = function () {

    inizializzaComandi()
    const gameDiv = document.createElement("div")
    gameDiv.id = "gamediv"

    for (let i = 0; i < numeriBingo.length && i < 1000; i++) {
        let blocco = costruttoreQuadratino(i + 1)
        gameDiv.appendChild(blocco)
    }
    mainDiv.appendChild(gameDiv)
}


inizializzaGioco()

