// Gerar Número Secreto
const numeroSecreto = gerarNumero(1,100)
function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min) ) + 1;
};
console.log("O número secreto é:", numeroSecreto);
let tentativas = 3;
// Funções utilitárias
const obterElemento = (id)  => document.getElementById(id);
let mensagem = obterElemento('mensagem');
obterElemento ('tentativas').textContent = tentativas
let jogoFinalizado = false

// Obter valor inputado
function obterNumero () {
    if (jogoFinalizado) return;

    const numeroInputado = parseInt(obterElemento('numero').value);
    if (numeroInputado === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você adivinhou o número secreto.";
        jogoFinalizado = true;
    } else if (tentativas === 0) {
        mensagem.textContent = "Você perdeu! O número secreto era ", numeroSecreto;
        jogoFinalizado = true;
    } else if (numeroInputado < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior do que isso!";
    } else {
        mensagem.textContent = "O número secreto é menor do que isso!";
    };

    tentativas--;
    obterElemento ('tentativas').textContent = tentativas;
};





// PASSOS
// 1. Gerar numero secreto - CONCLUIDO
// 2. Obter número inputado pelo usuário - CONCLUÍDO
// 3. Comparar número inputado com número secreto
// 4. Se número inputado for número secreto, emitir mensagem de vitória
// 5. Se número inputado não for número secreto, emitir mensagem de erro
// 5.1 Diminuir número de tentativas.
// 6. Caso o número de tentativas acabe, emitir mensagem de derrota e revelar número secreto.