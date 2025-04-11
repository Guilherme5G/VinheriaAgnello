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

// bloco onde o computador vai ler a idade da safra dos vinhos
if(safraVinho < 2015){
    alert("Visualize o console!");
    console.log("Vinho antigo");
} else if(safraVinho < 2019){
    alert("Visualize no console!");
    console.log("Vinho amadurecido");
} else{
    alert("Visualize o console!");
    console.log("Vinho jovem");
}

