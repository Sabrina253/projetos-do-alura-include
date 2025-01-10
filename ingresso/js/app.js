function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

    limparCampo(); 
}

function produtoEsgotado(qtd) {
    if (qtd <= 0) { 
        return 'ESGOTADO'; 
    } else {
        return qtd;  
    }
}

function limparCampo() {
    document.getElementById('qtd').value = '';  
    document.getElementById('qtd').focus();    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (document.getElementById('qtd-pista').textContent === 'ESGOTADO') {
        alert('Produto esgotado!');
        limparCampo(); 
        return; 
    }
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
        limparCampo(); 
    } else {
        qtdPista = qtdPista - qtd;  
        let qtdAtualizada = produtoEsgotado(qtdPista); 

        document.getElementById('qtd-pista').textContent = qtdAtualizada;
        if (qtdAtualizada === 'ESGOTADO') {
            alert('Produto esgotado!');
        } else {
            alert('Compra realizada com sucesso!');
        }
        limparCampo(); 
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (document.getElementById('qtd-superior').textContent === 'ESGOTADO') {
        alert('Produto esgotado!');
        limparCampo(); 
        return; 
    }
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
        limparCampo();  
    } else {
        qtdSuperior = qtdSuperior - qtd;
        let qtdAtualizada = produtoEsgotado(qtdSuperior); 

        document.getElementById('qtd-superior').textContent = qtdAtualizada;
        if (qtdAtualizada === 'ESGOTADO') {
            alert('Produto esgotado!');
        } else {
            alert('Compra realizada com sucesso!');
        }
        limparCampo();  
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (document.getElementById('qtd-inferior').textContent === 'ESGOTADO') {
        alert('Produto esgotado!');
        limparCampo();  
        return;  
    }
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
        limparCampo();  
    } else {
        qtdInferior = qtdInferior - qtd;
        let qtdAtualizada = produtoEsgotado(qtdInferior); 

        document.getElementById('qtd-inferior').textContent = qtdAtualizada;
        if (qtdAtualizada === 'ESGOTADO') {
            alert('Produto esgotado!');
        } else {
            alert('Compra realizada com sucesso!');
        }
        limparCampo();  
    }
}