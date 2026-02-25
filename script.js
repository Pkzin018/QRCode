if (index >= frases.length) {
    setTimeout(() => {

        centro.innerHTML = "";
        final.innerHTML = "";

        // Primeira frase final
        const principal = document.createElement("div");
        principal.style.fontSize = "48px";
        principal.style.marginTop = "40px";
        principal.style.opacity = "0";
        principal.innerText = "Eu escolho você.";

        // Segunda frase menor
        const pedido = document.createElement("div");
        pedido.style.fontSize = "26px";
        pedido.style.marginTop = "15px";
        pedido.style.opacity = "0.8";
        pedido.innerText = "Me perdoa.";

        final.appendChild(principal);
        final.appendChild(pedido);

        // Fade in
        setTimeout(() => {
            principal.style.transition = "opacity 2s ease";
            pedido.style.transition = "opacity 2s ease";
            principal.style.opacity = "1";
        }, 100);

        // Depois desliza para lateral
        setTimeout(() => {

            let lateral = document.createElement("div");
            lateral.className = "frase-lateral";
            lateral.innerText = "Eu escolho você. Me perdoa.";
            historico.appendChild(lateral);

            final.innerHTML = "";

            setTimeout(() => {
                lateral.style.transform = "translateX(0)";
            }, 100);

        }, 5000);

    }, 2000);
    return;
}
