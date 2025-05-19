
// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número inteiro
let entrada = prompt("Digite um número inteiro: ")

// Converte a entrada (que é uma string) para número inteiro
let num = parseInt(entrada)

if(isNaN(num)){
    console.log("Valor inválido. Por favor, digite um número inteiro.")
} else if (num%2==0){
    console.log("O número é par")
} else{
    console.log ("O número é impar")
}

