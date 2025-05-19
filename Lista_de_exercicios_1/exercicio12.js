// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

let mult = 0;
let numero = parseFloat(prompt(`Digite um número: `));
console.log(`\nTabuada do número ${numero}:\n`);

// Estrutura de repetição para calcular e exibir a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
   mult = numero*i
    console.log(`${numero} x ${i} = ${mult}`)

   
}