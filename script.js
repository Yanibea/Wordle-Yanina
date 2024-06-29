let diccionario = ["PIEZA", "ASADO", "HUESO", "TEXTO", "CORAL", "DADOS", "GAFAS", "ANGEL", "ACTOR", "LIMON", "FUEGO"]
let jugadas = 6
const BUTTON = document.getElementById("guess-button")
BUTTON.addEventListener("click", intentar)
function obtenerPalabra() {
    let aleatorio = Math.floor(Math.random() * diccionario.length - 1)
    return diccionario[aleatorio]
}
let palabra = obtenerPalabra()
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        intentar();
    }
});
function intentar() {
    jugadas--;
        if (jugadas === 0) {
            terminar("¡¡¡OHHH,  SUERTE LA PROXIMA!!!");
        }
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    if (INTENTO.length === 5) {
        if (palabra === INTENTO) {
            terminar("¡¡¡FELICIDADES!!!");
            return
        }
        let fila = document.createElement("div")
        fila.className = "row"
        for (let i in INTENTO) {
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO[i]
            console.log(fila)
            if (INTENTO[i] == palabra[i]) {
                letra.style.background = "green"
            } else if (palabra.includes(INTENTO[i])) {
                letra.style.background = "yellow"
            } else {
                letra.style.background = "grey"
            }
            fila.appendChild(letra)
        }
        
        let grilla = document.getElementById("grid")
        grilla.appendChild(fila)
    } else {
        alert("completa palabras con 5 letras")
    }
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById("guesses")
    p.innerHTML = "<h1>" + mensaje +   "</h1>"
}