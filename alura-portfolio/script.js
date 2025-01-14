document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded é disparado quando o navegador termina de carregar o HTML inicial da página
    const textos = {
        "titulo-um": "Sabrina Alves",
        "titulo-dois": "Minhas Habilidades",
        "titulo-tres": "Meus Projetos"
    };

    const elemento = document.querySelector("h1");
    const texto = textos[elemento?.id];

    let contadorDeLetras = 0;

    function escreverTexto() {
        if (contadorDeLetras < texto.length) {
            elemento.textContent += texto.charAt(contadorDeLetras);
            contadorDeLetras++;
            setTimeout(escreverTexto, 100);
        }
    }

    if (texto) 
    escreverTexto();
});