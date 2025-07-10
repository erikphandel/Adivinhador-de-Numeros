// Gerar Número Secreto
const numeroSecreto = gerarNumero(1,100)
function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min) ) + 1;
};
console.log(numeroSecreto);
const tentativas = 3;
// Funções utilitárias
const obterElemento = (id)  => document.getElementById(id);
obterElemento ('tentativas').textContent = tentativas

// Obter valor inputado
function obterNumero () {
    const numeroInputado = parseInt(obterElemento('numero').value);
    console.log("Número inputado: ", numeroInputado)
    return numeroInputado
};

// Comparar valor inputado com número secreto
function compararNumero () {
    if (numeroSecreto = obterNumero) {
        document.getElementById("mensagens")
    }
}



// PASSOS
// 1. Gerar numero secreto - CONCLUIDO
// 2. Obter número inputado pelo usuário - CONCLUÍDO
// 3. Comparar número inputado com número secreto
// 4. Se número inputado for número secreto, emitir mensagem de vitória
// 5. Se número inputado não for número secreto, emitir mensagem de erro
// 5.1 Diminuir número de tentativas.
// 6. Caso o número de tentativas acabe, emitir mensagem de derrota e revelar número secreto.