let totalGeral;
limparTela();

function adicionarProduto() {
    let produto = document.getElementById('in-produto').value;
    let erro = document.querySelector('#out-erro');
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('in-quantidade').value;
    let preco = quantidade * valorUnitario;

    if (quantidade == ''){
        alert('Informe um valor válido!');
        return;
    }

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('in-quantidade').value = '';
    document.getElementById('in-quantidade').focus();
}

function limparTela() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '';
}