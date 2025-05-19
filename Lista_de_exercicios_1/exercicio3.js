// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite a nota
let nota = parseFloat(prompt("Digite a nota: ")) // parseFloat pois notas podem ter valores decimais

if (isNaN(nota)|| nota < 0 || nota >10){
    console.log("Digite um número válido")
} else if (nota >= 7){
    console.log("Aluno Aprovado")
} else if(nota >=5){
    console.log("Aluno de Recuperação")
}else {
    console.log("Aluno Reprovado")
}