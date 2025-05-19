const prompt = require('prompt-sync')();

let soma = 0
let contador = 0 
let numero = 0

console.log("Digite números decimais (digite 0 para encerrar):");

do {
    numero = parseFloat(prompt("Digite um número: "))
    if (numero !==0){
        soma += numero // Acumula a soma dos números
        
        contador++ // Incrementa a quantidade de números válidos
        
    }
} while(numero!==0);

if (contador > 0){
    let media = soma/contador
    console.log(`\nForam digitados ${contador} números.`);
    console.log(`A média aritmética é: ${media.toFixed(2)}`);
} else {
    console.log("\nNenhum número válido foi digitado para cálculo da média.");
}
