let nomeVinho = prompt("Digite o nome do vinho a ser cadastrado:")
let tipoVinho = prompt("Qual o tipo do vinho?")
let safraVinho = prompt("De que ano ele é?")
let quantEstoque = prompt("Quantos vinhos há em estoque?")

if (nomeVinho == "") {
    nomeVinho = prompt('Digite o nome do vinho a ser cadastrado: ');
}
if (tipoVinho == "") {
    tipoVinho = prompt('"Qual o tipo do vinho?"');
}
if (safraVinho == "") {
    safraVinho = prompt("De que ano ele é?");
}
if (quantEstoque == "") {
    quantEstoque = prompt("Quantos vinhos há em estoque?");
}

if (quantEstoque <= 5) {
    alert('VISUALIZE O CONSOLE!');
    console.log('QUANTIDADE BAIXA NO ESTOQUE!');
}
