let quantidadeCarrinho = 0;


function addCarrinho() {
    quantidadeCarrinho++;

    document.getElementById("contador-carrinho").textContent = quantidadeCarrinho;
}

function mostrarTodos() {

    let produtos = document.querySelectorAll(".box"); //pega todos os itens do cardápio

    produtos.forEach(function(produto) {
        produto.style.display = "grid";
    }); //o forEache percorre todos os itens da classe 

}

function mostrarBolos() {

    let produtos = document.querySelectorAll(".box"); //pega todos os itens do cardápio
    let bolos = document.querySelectorAll(".bolo"); //pega todos os elementos com a classe bolo

    produtos.forEach(function(produto) {
        produto.style.display = "none";
    }); //o forEache percorre todos os itens da classe 

    bolos.forEach(function(bolo) {
        bolo.style.display = "grid";
    });

}

function mostrarDoces() {

    let produtos = document.querySelectorAll(".box"); //pega todos os itens do cardápio
    let doces = document.querySelectorAll(".brigadeiro");
    
    produtos.forEach(function(produto) {
        produto.style.display = "none";
    }); //o forEache percorre todos os itens da classe 

    doces.forEach(function(brigadeiro) {
        brigadeiro.style.display = "grid";
    });

}

function mostrarTortas() {

    let produtos = document.querySelectorAll(".box"); //pega todos os itens do cardápio
    let tortas = document.querySelectorAll(".torta");

    produtos.forEach(function(produto) {
        produto.style.display = "none";
    }); //o forEache percorre todos os itens da classe 


    tortas.forEach(function(torta) {
        torta.style.display = "grid";
    });
}