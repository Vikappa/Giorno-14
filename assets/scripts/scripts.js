let mainDiv = document.getElementById("mainDiv")
let numeroNumeri = 76

let numeriBingo = []
for (let i = 1; i <= numeroNumeri; i++) {
    numeriBingo.push(i)
}
console.log(numeriBingo)


const costruttoreQuadratino = function (num) {
    const div = document.createElement("div")
    div.classList.add("quadratinoNumero")
    const h1Numero = document.createElement("h1")
    h1Numero.innerText = (num)
    div.appendChild(h1Numero)
    return div
}

const inizializzaGioco = function () {
    const gameDiv = document.createElement("div")
    console.log(gameDiv)
    gameDiv.id = "gamediv"
    for (let i = 1; i <= numeriBingo.length; i++) {
        let blocco = costruttoreQuadratino(i)
        gameDiv.appendChild(blocco)
    }
    mainDiv.appendChild(gameDiv)
}

inizializzaGioco()


