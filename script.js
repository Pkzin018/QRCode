const frases = [
"Eu sei que falhei.",
"Sei que às vezes não fui o homem que você merecia.",
"Mas todos os dias eu acordo querendo ser melhor por nós.",
"Eu vou te pedir perdão quantas vezes for preciso.",
"Vou provar com atitudes, não só palavras.",
"Porque eu te amo de verdade.",
"Eu prometo te amar com mais cuidado.",
"Te proteger com mais presença.",
"E ser, todos os dias, o seu melhor amigo."
];

const fraseFinal = "Eu escolho você. Hoje. Amanhã. E todos os dias da minha vida.";

const centro = document.getElementById("centro");
const historico = document.getElementById("historico");
const final = document.getElementById("final");
const playButton = document.getElementById("playButton");
const video = document.getElementById("bgVideo");

playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
    mostrarFrases(0);
});

function mostrarFrases(index) {
    if (index >= frases.length) {
        setTimeout(() => {
            historico.style.opacity = "0";
            video.style.filter = "brightness(25%)";
            final.innerText = fraseFinal;
            final.classList.add("show");
        }, 2000);
        return;
    }

    centro.innerHTML = "";
    escrever(frases[index], centro, 80, () => {

        let lateral = document.createElement("div");
        lateral.className = "frase-lateral";
        lateral.innerText = frases[index];
        historico.appendChild(lateral);

        setTimeout(() => {
            lateral.style.transform = "translateX(0)";
        }, 100);

        setTimeout(() => {
            mostrarFrases(index + 1);
        }, 2000);

    });
}

function escrever(texto, elemento, velocidade, callback) {
    let i = 0;
    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else {
            callback();
        }
    }
    digitar();
}