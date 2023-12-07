
let mainDiv = document.getElementById("mainDiv")
let numeroNumeri = 76

let numeriBingo = []
let numeriEstratti = []

for (let i = 1; i <= numeroNumeri; i++) {
    numeriBingo.push(i)
}

let giaEstratto = function (estratto) {
    for (let x = 0; x < numeriEstratti.length; x++) {
        if (estratto === numeriEstratti[x]) {
            return true
        }
    }
    return false
}

const estraiNumero = function () {

    let caso = Math.floor(Math.random() * numeriBingo.length);
    while (giaEstratto(caso)) {
        console.log("Uscito", caso, "doppione")
        caso = Math.floor(Math.random() * numeriBingo.length);
        console.log("Sostituito con ", caso)
    }
    const nonCancellarmi = numeriBingo.slice(caso + 1, numeriBingo.length)
    numeriEstratti.push(numeriBingo[caso])
    numeriBingo.splice(caso, 1).concat(nonCancellarmi)


    const divEstratto = document.getElementById("numero" + (caso + 1))
    divEstratto.style.backgroundColor = "red"
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

const inizializzaComandi = function () {
    const divComandi = document.createElement("div")
    divComandi.style.display = "flex"
    const pComandi = document.createElement("p")
    pComandi.style.width = "100%"
    pComandi.id = "pComandi"
    pComandi.innerText = "Premi sul pulsante per estrarre!"
    divComandi.style.borderRadius = "15px"
    divComandi.style.border = "1px solid black"
    const buttonComandi = document.createElement("button")
    buttonComandi.style.cursor = "pointer"
    buttonComandi.innerText = "Estrai"
    buttonComandi.addEventListener("click", function () {
        estraiNumero()
    })
    divComandi.appendChild(pComandi)
    divComandi.appendChild(buttonComandi)
    mainDiv.appendChild(divComandi)
}

const inizializzaGioco = function () {
    inizializzaComandi()
    const gameDiv = document.createElement("div")
    gameDiv.id = "gamediv"
    for (let i = 1; i <= numeriBingo.length; i++) {
        let blocco = costruttoreQuadratino(i)
        gameDiv.appendChild(blocco)
    }
    mainDiv.appendChild(gameDiv)
}
inizializzaGioco()


