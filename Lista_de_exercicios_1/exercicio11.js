// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

let soma = 0; // Variável que armazenará a soma total

console.log("Digite 5 números:");

// Estrutura de repetição para solicitar 5 números
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número: `));

    // Verifica se o valor digitado é um número válido
    if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número válido.");
        i--; // Decrementa o índice para repetir a entrada inválida
    } else {
        soma += numero; // Acumula o valor na variável soma
    }
}

console.log("A soma total dos 5 números é:", soma);
