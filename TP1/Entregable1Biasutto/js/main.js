//Lista de palabras
const animales = ["perro", "gato", "elefante", "leon", "tigre", "caballo", "zebra", "cebra", "jirafa", "conejo"];
//selección de la palabra
let palabra = animales[Math.floor(Math.random() * animales.length)];
//oculta la palabra
let palabraOculta = Array(palabra.length).fill('_');
//inicializa la cantidad de oportunidades en 10 
let oportunidades = 10;


function actualizar() {
    document.getElementById("word").innerHTML = palabraOculta.join(' ');
    document.getElementById("hangman").innerHTML = `Intentos restantes: ${oportunidades}`;
}
function intento() {
    const letra = document.getElementById("guessInput").value.toLowerCase();
    document.getElementById("guessInput").value = '';
    if (letra && letra.length === 1) {
        let correcto = false;
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra && palabraOculta[i] === '_') {
                palabraOculta[i] = letra;
                correcto = true;
            }
        }
        if (!correcto) {
            oportunidades--;
        }
        if (oportunidades === 0) {
            alert(`¡Perdiste! La palabra era:  ${palabra}`);
            resetGame();
        } else if (palabraOculta.join('') === palabra) {
            alert(`¡Ganaste! ${palabra} era la palabra.`);
            resetGame();
        }
        actualizar();
    }
}
function resetGame() {
    palabra = animales[Math.floor(Math.random() * animales.length)];
    palabraOculta = Array(palabra.length).fill('_');
    oportunidades = 10;
    actualizar();
}
actualizar();