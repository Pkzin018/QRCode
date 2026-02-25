function mostrarFrases(index) {

    if (index >= frases.length) {

        setTimeout(() => {

            centro.innerHTML = "";
            final.innerHTML = "";

            const principal = document.createElement("div");
            principal.style.fontSize = "48px";
            principal.style.marginTop = "40px";
            principal.style.opacity = "0";
            principal.style.transition = "opacity 2s ease";
            principal.innerText = "Eu escolho você.";

            const pedido = document.createElement("div");
            pedido.style.fontSize = "26px";
            pedido.style.marginTop = "15px";
            pedido.style.opacity = "0";
            pedido.style.transition = "opacity 2s ease";
            pedido.innerText = "Me perdoa.";

            final.appendChild(principal);
            final.appendChild(pedido);

            setTimeout(() => {
                principal.style.opacity = "1";
                pedido.style.opacity = "1";
            }, 200);

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

        return; // <- agora está corretamente dentro da função
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
