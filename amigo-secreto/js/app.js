let amigos = [];

function adicionar() {
    let amigo = document.getElementById('in-nome-amigo');
    let erro = document.querySelector('#out-erro')
    if (amigo.value == '' || amigo.value.match(/[0-9]/)) { // || amigo.value.match(/^[^\p{M}]+$/u)
        erro.innerText = "Informe um valor válido!";
        erro.style.display = 'block';
        erro.style.background = '#cf00f4' ;
        erro.style.border = '2px solid #00f4bf';
        amigo.value = '';
        setTimeout(() => {
            erro.style.display = 'none';
        }, 3000);
        return;
    }

    if (amigos.includes(amigo.value.toUpperCase())) {
        erro.innerText = 'Nome já adicionado!';
        erro.style.display = 'block';
        erro.style.background = '#1857e8' ;
        erro.style.border = '1px solid #00f4bf';
        amigo.value = '';
        setTimeout(() => {
            erro.style.display = 'none';
        }, 3000);
        
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
    let erro = document.querySelector('#out-erro')
    if (amigos.length < 4) {
        erro.innerText = 'Adicione pelo menos 4 amigos!';
        erro.style.display = 'block';
        erro.style.background = '#1857e8' ;
        erro.style.border = '2px solid #00f4bf';
        setTimeout(() => {
            erro.style.display = 'none';
        }, 3000);

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