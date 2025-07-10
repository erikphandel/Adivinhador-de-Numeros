// Gerar Número Secreto
const numeroSecreto = gerarNumero(1,100)// Variável contendo o Número Secreto, que é o objetivo do jogo.
function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}; // Math.random gera um número entre 0 e 1. A multiplicação gera um número entre 0 e 99,9999.... Math.floor arredonda o número gerado para baixo (0 a 99). + 1 garante que o número gerado é de 1 a 100.
console.log("O número secreto é:", numeroSecreto); // Para debug apenas

// Funções utilitárias
let tentativas = 3; // Variável com o número de tentativas restantes.
const obterElemento = (id)  => document.getElementById(id); // Funçao para abreviar a função getElementeById()
let mensagem = obterElemento('mensagem'); // Variável contendo a mensagem a ser escrita quando o usuário faz um chute
obterElemento ('tentativas').textContent = tentativas // Comando que faz com que o número de tentativas exibido no HTML possa ser atualizado
let jogoFinalizado = false // Variável que determina se o jogo acabou ou não. Quando o jogo acaba, o botão "Jogar Novamente" é exibido
function mostrarBotaoReinicio() {
    obterElemento('reiniciar').style.display = 'inline';
} // Função que mostra o botão de reinicar o jogo, que é carregado escondido na página inicial.
function reiniciarJogo() {
    window.location.reload();
} // Função que recarrega a página quando o botão "Jogar novamente" é clicado

function obterNumero () {// Essa função é chamada quando o botão "Chutar" é clicado.

    if (jogoFinalizado) return // Se jogoFinalizado for true, a função não roda.

    const numeroInputado = parseInt(obterElemento('numero').value); // A variável numeroInputado é obtida pelo número inputado pelo usuário
    if (numeroInputado < 1 || numeroInputado > 100 || isNaN(numeroInputado)) {
    mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
    return; // Se numeroInputado não for um número de 1 a 100, exibe uma mensagem de erro e a função não roda.
}

    // Esse if/else analisa se numeroInputado é igual, menor ou maior que numeroSecreto
    if (numeroInputado === numeroSecreto) {// Se o jogador adivinhar, termina o jogo, desabilitando o botão de chute.
        mensagem.textContent = "Parabéns! Você adivinhou o número secreto.";
        jogoFinalizado = true;
        obterElemento('numero').disabled = true;
        obterElemento('botao').disabled = true;
    } else if (numeroInputado < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior do que isso!";
    } else {
        mensagem.textContent = "O número secreto é menor do que isso!";
    };

    tentativas--;// Diminui tentativas em 1
    obterElemento ('tentativas').textContent = tentativas;// Atualiza o número de tentativas no HTML
    
    // Se o jogo chegar em 0 tentativas e não estiver finalizado, exibe mensagem de derrota e finaliza o jogo, desabilitando o botão de chute.
    if (tentativas === 0 && !jogoFinalizado) {
        mensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto;
        jogoFinalizado = true;
        obterElemento('numero').disabled = true;
        obterElemento('botao').disabled = true;
    }

    if (jogoFinalizado) mostrarBotaoReinicio ();// Se o jogo estiver finalizado, mostra o botão "Jogar novamente"
};