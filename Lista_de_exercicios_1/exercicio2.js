// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite uma idade
let idade = parseInt(prompt("Digite uma idade: "))

if (isNaN(idade)|| idade<0){
    console.log("Digite uma idade válida")
} else if (idade <= 11){
    console.log("Criança")
} else if (11 <= idade && idade <= 17){
    console.log("Adolescente")
}else if (18 <= idade && idade<= 59){
    console.log("Adulto")
}else {
    console.log("Idoso")
}