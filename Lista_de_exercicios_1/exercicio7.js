// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();


console.log("Preço das Maçãs");

// Solicita ao usuário que forneça os dados necessários
let qmaca = parseInt(prompt("Digite quantas maçãs você pegou:  ")) 
let maca;
let total;
if (qmaca < 12){
    maca = 0.30
} else{
    maca=0.25
}

total = qmaca * maca
console.log ("A quantidade maças compradas foi de ", qmaca)
console.log("O valor total é de:", total)