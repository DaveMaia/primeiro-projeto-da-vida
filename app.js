let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}

exibirTextoNaTela('h1', 'Jogo do Nº Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length
    
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push()
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


/* 
//Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIndideMassaCorporal(alturaMetros, pesoKilos){
    let IMC = pesoKilos / (alturaMetros ** 2);
    return IMC;
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculaFatorial(valor) {
    let resultado = 1;
    while (valor > 1) {
        resultado *= valor;
        valor--;
    }
    return resultado;
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.Para isso, considere a cotação do dólar igual a R$4, 80.
function converteDolar(valor) {
    let cotação = 4,80;
    return valor * cotação;
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function mostraAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    exibirTextoNaTela('p', `Área: ${area}m² e ${perimetro}`;

}
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.Considere Pi = 3, 14.
function mostraAreaPerimetroCircular(raio) {
    let area = 3,14 * (raio ** 2);
    let perimetro = 2 * 3,14 * raio;
    exibirTextoNaTela('p', `Área: ${area}m² ${perimetro}`;      
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostraTabuada(numero) {
    let tabuada = numero;
    let resultado = 1;
    for (let i = 0; i <= 10; i++) {
        exibirTextoNaTela ('p', `${tabuada} x ${i} = ${resultado}`)
    }
}
    // Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostraTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        const resultado = numero * i;
        exibirTextoNaTela('p', `${numero} x ${i} = ${resultado}`);
    }
}

/* Crie uma lista vazia, com o nome listaGenerica.
    listaGenerica = [];
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
    linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
    linguagensDeProgramacao.push('Java', 'Ruby', 'Golang');
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
    linguagensDeProgramacao = ['Java', 'Ruby', 'Golang'];
    console.log(linguagensDeProgramacao[0])
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
    linguagensDeProgramacao = ['Java', 'Ruby', 'Golang'];
    console.log(linguagensDeProgramacao[1])
Crie uma lista com 3 nomes e exiba no console apenas o último elemento. */
/*  linguagensDeProgramacao = ['Java', 'Ruby', 'Golang'];
    console.log(linguagensDeProgramacao[2]) */ */
