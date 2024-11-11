let amigos = [];

function adicionar() {
    let amigo = document.getElementById('in-nome-amigo');
    if (amigo.value == '' || amigo.value.match(/[0-9]/)) { // || amigo.value.match(/^[^\p{M}]+$/u)
        alert('Informe um valor válido!');
        amigo.value = '';
        return;
    }
    if (amigos.includes(amigo.value.toUpperCase())) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('in-lista-amigos');
    amigos.push(amigo.value.toUpperCase());
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('out-lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) { //serve para misturar os nomes. para mais informação visitar: http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('in-lista-amigos').innerHTML = '';
    document.getElementById('out-lista-sorteio').innerHTML = '';
}