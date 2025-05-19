// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Escreva um numero inteiro:"))


// Verifica se o valor é realmente um número inteiro
if (isNaN(num)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Exibindo o número", num, "10 vezes:");

for (let i = 1; i <= 10; i++) {
    console.log(i , "-", num);
}
}