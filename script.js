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

const fraseFinalPrincipal = "Eu escolho você.";
const fraseFinalPedido = "Me perdoa.";

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
        mostrarFinal();
        return;
    }

    centro.innerHTML = "";

    escrever(frases[index], centro, 80, () => {

        const lateral = document.createElement("div");
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

function mostrarFinal() {

    centro.innerHTML = "";

    const principal = document.createElement("div");
    principal.style.fontSize = "48px";
    principal.style.marginTop = "40px";
    principal.style.opacity = "0";
    principal.style.transition = "opacity 2s ease";
    principal.innerText = fraseFinalPrincipal;

    const pedido = document.createElement("div");
    pedido.style.fontSize = "26px";
    pedido.style.marginTop = "15px";
    pedido.style.opacity = "0";
    pedido.style.transition = "opacity 2s ease";
    pedido.innerText = fraseFinalPedido;

    final.appendChild(principal);
    final.appendChild(pedido);

    setTimeout(() => {
        principal.style.opacity = "1";
        pedido.style.opacity = "1";
    }, 200);

    setTimeout(() => {

        const lateral = document.createElement("div");
        lateral.className = "frase-lateral";
        lateral.innerText = fraseFinalPrincipal + " " + fraseFinalPedido;
        historico.appendChild(lateral);

        final.innerHTML = "";

        setTimeout(() => {
            lateral.style.transform = "translateX(0)";
        }, 100);

    }, 5000);
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
