// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

let Fatorial = 1;
let numero = parseInt(prompt(`Digite um número: `));
console.log(`\nFatorial de ${numero}:\n`);


for (let i = 1; i <= numero; i++) {
   Fatorial *=i //é equivalente a fatorial = fatorial * i A cada repetição, o valor da variável fatorial vai sendo atualizado com o produto da multiplicação anterior com o novo valor de i
   

   
} console.log(`${numero}! = ${Fatorial}`)